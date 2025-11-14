import { describe, it, expect } from "vitest";
import { evaluateFilter } from "./filter";
import { basicOrder } from "./exampleOrders";

describe(evaluateFilter.name, () => {
  it("filler test", () => {
    expect(evaluateFilter(basicOrder, {})).toBe(true);
  });
});
