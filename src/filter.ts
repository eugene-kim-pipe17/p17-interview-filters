import { Order } from "./types";

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
