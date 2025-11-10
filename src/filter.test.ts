import { describe, it, expect } from "vitest";
import { evaluateFilter } from "./filter";
import { basicOrder } from "./test-data";

describe(evaluateFilter.name, () => {
  it("filler test", () => {
    expect(evaluateFilter(basicOrder, {})).toBe(true);
  });
});
