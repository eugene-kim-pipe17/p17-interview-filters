import { Order } from "./types";

export type Filter = {
  // TODO: Define this type to match the complete "Advanced Filter" from the screenshot
  // Value types don't need to depend on the path type
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
