  // src/introspection.ts
  /**
   * INTERNAL TOOLING - You can ignore this file.
   * This is used to generate the order-schema-filters.json file.
   */
import { z } from "zod";

export type FilterOperator =
  // String operators
  | "equals"
  | "not_equals"
  | "contains"
  | "not_contains"
  | "starts_with"
  | "ends_with"
  | "is_empty"
  | "is_not_empty"
  // Enum operators
  | "is_one_of"
  | "is_not_one_of"
  // Number operators
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  // DateTime operators
  | "before"
  | "after"
  | "in_last"
  | "older_than"
  // Array operators
  | "length_equals"
  | "length_gt"
  | "length_lt"
  | "array_contains"
  | "array_is_empty";

export type FieldType =
  | "string"
  | "email"
  | "uuid"
  | "url"
  | "datetime"
  | "number"
  | "enum"
  | "native_enum"
  | "array"
  | "boolean";

export interface FieldMetadata {
  path: string;
  type: FieldType;
  operators: FilterOperator[];
  enumValues?: string[];
  arrayItemType?: FieldType;
  isOptional: boolean;
  description?: string;
}

function getOperatorsForType(type: FieldType): FilterOperator[] {
  switch (type) {
    case "string":
    case "email":
    case "url":
      return [
        "equals",
        "not_equals",
        "contains",
        "not_contains",
        "starts_with",
        "ends_with",
        "is_empty",
        "is_not_empty",
      ];
    case "uuid":
      return ["equals", "not_equals", "is_empty", "is_not_empty"];
    case "datetime":
      return [
        "equals",
        "not_equals",
        "before",
        "after",
        "in_last",
        "older_than",
      ];
    case "number":
      return ["equals", "not_equals", "gt", "gte", "lt", "lte"];
    case "enum":
    case "native_enum":
      return ["equals", "not_equals", "is_one_of", "is_not_one_of"];
    case "array":
      return [
        "length_equals",
        "length_gt",
        "length_lt",
        "array_contains",
        "array_is_empty",
      ];
    case "boolean":
      return ["equals"];
    default:
      return ["equals", "not_equals"];
  }
}

function detectStringSubtype(schema: z.ZodString): FieldType {
  const def = schema._def as any;
  const checks = def.checks || [];

  // Check for Zod v4 format checks
  for (const check of checks) {
    // Zod v4 stores format in check.def.format
    const format = check.def?.format || check.format || check.kind;
    if (format === "email") return "email";
    if (format === "uuid") return "uuid";
    if (format === "url") return "url";
    if (format === "datetime") return "datetime";
  }

  return "string";
}

function introspectZodType(
  schema: z.ZodTypeAny,
  path: string,
  isOptional: boolean = false,
): FieldMetadata[] {
  const def = schema._def as any;
  const type = def.type || def.typeName;

  // Handle optional/nullable/default wrappers
  if (
    type === "optional" ||
    type === "nullable" ||
    type === "ZodOptional" ||
    type === "ZodNullable"
  ) {
    return introspectZodType(def.innerType, path, true);
  }

  if (type === "default" || type === "ZodDefault") {
    return introspectZodType(def.innerType, path, isOptional);
  }

  // Handle effects (refinements, transforms, etc.)
  if (type === "effects" || type === "ZodEffects") {
    return introspectZodType(def.schema, path, isOptional);
  }

  // Base types
  if (type === "string" || type === "ZodString") {
    const subtype = detectStringSubtype(schema as z.ZodString);
    return [
      {
        path,
        type: subtype,
        operators: getOperatorsForType(subtype),
        isOptional,
      },
    ];
  }

  if (type === "number" || type === "ZodNumber") {
    return [
      {
        path,
        type: "number",
        operators: getOperatorsForType("number"),
        isOptional,
      },
    ];
  }

  if (type === "boolean" || type === "ZodBoolean") {
    return [
      {
        path,
        type: "boolean",
        operators: getOperatorsForType("boolean"),
        isOptional,
      },
    ];
  }

  if (type === "enum" || type === "ZodEnum") {
    // Zod v4 uses def.entries, older versions use def.values
    const entries = def.entries || def.values;
    const enumValues = Array.isArray(entries)
      ? entries
      : Object.values(entries as Record<string, string>);

    return [
      {
        path,
        type: "enum",
        operators: getOperatorsForType("enum"),
        enumValues: enumValues as string[],
        isOptional,
      },
    ];
  }

  if (type === "nativeEnum" || type === "ZodNativeEnum") {
    const values = def.entries || def.values;
    const enumValues = Object.values(values).filter(
      (v) => typeof v === "string",
    ) as string[];
    return [
      {
        path,
        type: "native_enum",
        operators: getOperatorsForType("native_enum"),
        enumValues,
        isOptional,
      },
    ];
  }

  if (type === "array" || type === "ZodArray") {
    // In Zod v4, array items are stored in def.item
    const itemSchema = def.item;
    let arrayItemType: FieldType = "string";

    if (itemSchema && itemSchema._def) {
      const itemFields = introspectZodType(
        itemSchema as z.ZodTypeAny,
        "",
        false,
      );
      arrayItemType = itemFields.length > 0 ? itemFields[0].type : "string";
    }

    return [
      {
        path,
        type: "array",
        operators: getOperatorsForType("array"),
        arrayItemType,
        isOptional,
      },
    ];
  }

  if (type === "object" || type === "ZodObject") {
    const shape = typeof def.shape === "function" ? def.shape() : def.shape;
    const fields: FieldMetadata[] = [];

    for (const [key, fieldSchema] of Object.entries(
      shape as Record<string, z.ZodTypeAny>,
    )) {
      const fieldPath = path ? `${path}.${key}` : key;
      const fieldMetadata = introspectZodType(fieldSchema, fieldPath, false);
      fields.push(...fieldMetadata);
    }

    return fields;
  }

  // Fallback for unsupported types
  return [
    {
      path,
      type: "string",
      operators: ["equals", "not_equals"],
      isOptional,
    },
  ];
}

export function introspectSchema(schema: z.ZodTypeAny): FieldMetadata[] {
  return introspectZodType(schema, "", false);
}
