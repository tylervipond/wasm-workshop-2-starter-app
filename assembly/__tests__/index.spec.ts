import { add, double } from "../";

describe("index.ts", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      expect<f32>(add(1, 2)).toBe(3);
    });
  });
  describe("double", () => {
    it("should double a given number", () => {
      expect<f32>(double(2)).toBe(4);
    });
  });
});
