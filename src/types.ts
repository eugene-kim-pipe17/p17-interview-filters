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
