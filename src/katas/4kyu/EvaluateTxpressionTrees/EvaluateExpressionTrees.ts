const { Interface } = require("readline");

const tree1 = [7];

const level1 = ["*"];

const level2 = [3, 4];

const tree2 = [level1, level2];

const tree3 = ["*", ["+", 1, 3], ["-", 7, ["-", 20, 18]]];

type operation = "*" | "-" | "+" | "/";

type Expression =
  | {
      op: operation;
      left: Expression;
      right: Expression;
    }
  | number;

const tree4: Expression = {
  op: "*",
  left: { op: "+", left: 1, right: 3 },
  right: { op: "-", left: 7, right: { op: "-", left: 20, right: 18 } },
};

export function evaluate(tree: Expression): number {
  if (typeof tree !== "number") {
    if (typeof tree.left === "number" && typeof tree.right === "number") {
      if (tree.op === "*") {
        return tree.left * tree.right;
      } else if (tree.op === "+") {
        return tree.left + tree.right;
      } else if (tree.op === "-") {
        return tree.left - tree.right;
      } else if (tree.op === "/") {
        return tree.left / tree.right;
      }
    } else {
      return 1
    }
  } else {
    return tree;
  }
}


//If left is not a number call the expression
//if right is not a number call the expression
//lest [op] right