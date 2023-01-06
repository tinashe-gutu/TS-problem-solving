import { evaluate } from "./EvaluateExpressionTrees";

test("evaluate returns a evaluated number given an expression tree", () => {
  expect(evaluate(7)).toBe(7);
  expect({
    op: "*",
    left: { op: "+", left: 1, right: 3 },
    right: 2,
  }).toBe(8);
  expect({ op: "-", left: 7, right: { op: "-", left: 20, right: 18 } }).toBe(5);
});
