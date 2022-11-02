import {assemble} from "./assembler";

test("assembler return object with mutated value", () => {
  expect(
    assemble(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"])
  ).toEqual({ a: 1 });
  expect(
    assemble(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"])
  ).toEqual({ a: 0, b: -20 });
  expect(
    assemble([
      "mov w 21",
      "mov x 0",
      "jnz x 5",
      "jnz w 5",
      "dec x",
      "dec w",
      "dec w",
      "dec x",
      "dec x",
      "dec w",
      "dec x",
    ])
  ).toEqual({ w: 20, x: -2 });
});
