import { Order } from "./internal/orders";

export type Filter = {
  // TODO: Define this type/schema to represent the complete "Advanced Filter" from the screenshot
  //
  // Think of a "type" as defining the shape/structure of data:
  // - Like a Java interface or class definition
  // - Like a Python dataclass or TypedDict
  // - Like a Go struct
  // - Like a JSON schema
  //
  // This type should describe what fields the filter has and what type each field is.
  //
  // Not comfortable with TypeScript syntax? Write your design in pseudocode or the language
  // you're most familiar with, and we can use AI to translate it to TypeScript.
  //
  // Note: You can add some type safety, but don't spend time on multi-layered generic constraints - that's out of scope for this interview
};

/**
 * Evaluate whether an order matches a filter condition.
 *
 * @param order - The order to check
 * @param filter - The filter condition to evaluate
 * @returns true if the order matches the filter, false otherwise
 */
export function evaluateFilter(order: Order, filter: Filter): boolean {
  // TODO: Implement this
  throw new Error("Not implemented");
}

/**
 * Field types and their valid operators.
 * This mapping shows which operators work with each field type.
 * For example, "string" fields support operators like "equals", "contains", "starts_with", etc.
 *
 * Use this to understand what operators are available when designing your Filter type.
 */
const FIELD_TYPE_OPERATORS = {
  string: [
    "equals",
    "not_equals",
    "contains",
    "not_contains",
    "starts_with",
    "ends_with",
    "is_empty",
    "is_not_empty",
  ] as const,
  email: [
    "equals",
    "not_equals",
    "contains",
    "not_contains",
    "starts_with",
    "ends_with",
    "is_empty",
    "is_not_empty",
  ] as const,
  uuid: ["equals", "not_equals", "is_empty", "is_not_empty"] as const,
  url: [
    "equals",
    "not_equals",
    "contains",
    "not_contains",
    "starts_with",
    "ends_with",
    "is_empty",
    "is_not_empty",
  ] as const,
  number: [
    "equals",
    "not_equals",
    "gt",
    "gte",
    "lt",
    "lte",
    "between",
  ] as const,
  enum: ["equals", "not_equals", "is_one_of", "is_not_one_of"] as const,
  datetime: [
    "equals",
    "not_equals",
    "before",
    "after",
    "between",
    "in_last",
    "older_than",
  ] as const,
  array: [
    "length_equals",
    "length_gt",
    "length_lt",
    "array_contains",
    "array_is_empty",
  ] as const,
  boolean: ["equals"] as const,
};

/**
 * Represents a single field in the flattened order schema.
 */
type FlattenedField = {
  path: string;
  type: string;
  isOptional: boolean;
  enumValues?: string[];
  arrayItemType?: string;
};

/**
 * Flattened representation of the Order schema for filtering.
 *
 * The actual Order type (see src/exampleOrders.ts for examples) has nested objects like:
 *   order.billingAddress.addressLine1
 *
 * This schema flattens those paths into strings like "billingAddress.addressLine1"
 * so they can be easily selected in the UI dropdown.
 *
 * Each field shows:
 * - path: The flattened property path (e.g., "billingAddress.addressLine1")
 * - type: The field type (determines which operators are valid via FIELD_TYPE_OPERATORS)
 * - isOptional: Whether the field might be undefined
 * - enumValues: For enum types, the allowed values
 * - arrayItemType: For array types, the type of items in the array
 *
 * NOTE: Don't get overwhelmed by the number of fields (32+).
 * Focus on the different field types (string, enum, number, datetime, etc.) and their valid operators.
 * The specific field paths are just examples of those types.
 */
export const FlattenedOrderSchema: { fields: FlattenedField[] } = {
  "fields": [
    {
      "path": "id",
      "type": "uuid",
      "isOptional": false
    },
    {
      "path": "automationEngineUpdateStatus",
      "type": "enum",
      "enumValues": [
        "pending",
        "updated",
        "failed"
      ],
      "isOptional": false
    },
    {
      "path": "status",
      "type": "enum",
      "enumValues": [
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "refunded"
      ],
      "isOptional": false
    },
    {
      "path": "customer.id",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "customer.email",
      "type": "email",
      "isOptional": false
    },
    {
      "path": "items",
      "type": "array",
      "arrayItemType": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.firstName",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.lastName",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.addressLine1",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.city",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.state",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.postalCode",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.country",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "billingAddress.phone",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.firstName",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.lastName",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.addressLine1",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.city",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.state",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.postalCode",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.country",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shippingAddress.phone",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "payment.method",
      "type": "enum",
      "enumValues": [
        "credit_card",
        "debit_card",
        "paypal",
        "stripe",
        "apple_pay",
        "google_pay"
      ],
      "isOptional": false
    },
    {
      "path": "payment.status",
      "type": "enum",
      "enumValues": [
        "pending",
        "authorized",
        "captured",
        "failed",
        "refunded",
        "partially_refunded"
      ],
      "isOptional": false
    },
    {
      "path": "payment.amount",
      "type": "number",
      "isOptional": false
    },
    {
      "path": "shipping.method",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "shipping.trackingNumber",
      "type": "string",
      "isOptional": true
    },
    {
      "path": "shipping.trackingUrl",
      "type": "url",
      "isOptional": true
    },
    {
      "path": "shipping.shippingCost",
      "type": "number",
      "isOptional": false
    },
    {
      "path": "subtotal",
      "type": "number",
      "isOptional": false
    },
    {
      "path": "total",
      "type": "number",
      "isOptional": false
    },
    {
      "path": "currency",
      "type": "string",
      "isOptional": false
    },
    {
      "path": "createdAt",
      "type": "datetime",
      "isOptional": false
    },
    {
      "path": "updatedAt",
      "type": "datetime",
      "isOptional": false
    }
  ]
} as const;