import { Order } from "./schemas/orders";

export type { Order };

/**
 * Field types and their valid operators.
 * Hover over each property to see which operators work with each field type.
 */
export const FIELD_TYPE_OPERATORS = {
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

export const OrderFilterSchema = {
  "schemaName": "OrderSchema",
  "generatedAt": "2025-11-10T19:48:30.566Z",
  "totalFields": 34,
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