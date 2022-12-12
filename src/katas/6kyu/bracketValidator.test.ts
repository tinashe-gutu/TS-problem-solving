import { bracketValidator } from "./bracketValidator";

test("bracketValidator returns true if opening braces are properly closed", () => {
  expect(bracketValidator("[]()")).toBe(true);
  expect(bracketValidator("{{()}}")).toBe(true);
  expect(bracketValidator("{[]()}")).toBe(true);
});
test("bracketValidator returns flase if opening braces are not properly closed", () => {
  expect(bracketValidator("{[(])}")).toBe(false);
  expect(bracketValidator("{[}")).toBe(false);
});
