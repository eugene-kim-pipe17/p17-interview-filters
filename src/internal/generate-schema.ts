import * as fs from "fs";
import * as path from "path";
import { OrderSchema } from "./orders";
import { introspectSchema, FieldMetadata } from "./introspection";

console.log("=".repeat(80));
console.log("ORDER SCHEMA INTROSPECTION RESULTS");
console.log("=".repeat(80));
console.log();

const fields = introspectSchema(OrderSchema);

// Group by top-level field for better readability
const grouped = fields.reduce(
  (acc, field) => {
    const topLevel = field.path.split(".")[0];
    if (!acc[topLevel]) {
      acc[topLevel] = [];
    }
    acc[topLevel].push(field);
    return acc;
  },
  {} as Record<string, FieldMetadata[]>,
);

for (const [group, groupFields] of Object.entries(grouped)) {
  console.log(`\n📦 ${group.toUpperCase()}`);
  console.log("-".repeat(80));

  for (const field of groupFields) {
    console.log(`\n  Path: ${field.path}`);
    console.log(`  Type: ${field.type}`);
    console.log(`  Optional: ${field.isOptional}`);

    if (field.enumValues) {
      console.log(`  Enum Values: [${field.enumValues.join(", ")}]`);
    }

    if (field.arrayItemType) {
      console.log(`  Array Item Type: ${field.arrayItemType}`);
    }
  }
}

console.log("\n" + "=".repeat(80));
console.log(`Total filterable fields: ${fields.length}`);
console.log("=".repeat(80));

// ============================================================================
// Export to JSON (without operators - candidates should use FIELD_TYPE_OPERATORS)
// ============================================================================

const fieldsWithoutOperators = fields.map(({ operators, ...field }) => field);

const outputPath = path.join(__dirname, "..", "order-schema-filters.json");
const outputData = {
  schemaName: "OrderSchema",
  generatedAt: new Date().toISOString(),
  totalFields: fieldsWithoutOperators.length,
  fields: fieldsWithoutOperators,
};

fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), "utf-8");
console.log("\n✅ Schema exported to:", outputPath);
console.log(
  `   File size: ${(JSON.stringify(outputData).length / 1024).toFixed(2)} KB`,
);
