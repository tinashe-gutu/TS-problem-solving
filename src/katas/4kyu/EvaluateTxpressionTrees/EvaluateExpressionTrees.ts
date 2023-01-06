const { Interface } = require("readline");

const treeEx1 = ["*", ["+", 1, 3], ["-", 7, ["-", 20, 18]]];

type operation = "*" | "-" | "+" | "/";
type Expression =
  | {
      op: operation;
      left: Expression;
      right: Expression;
    }
  | number;

const treeEx2: Expression = {
  op: "*",
  left: { op: "+", left: 1, right: 3 },
  right: { op: "-", left: 7, right: { op: "-", left: 20, right: 18 } },
};

export function evaluate(tree: Expression): number {
  // if the tree is a number from the start
  if (typeof tree === "number") {
    console.log("ln 23: ", tree);
    return tree;
  }
  // if the tree is not a number
  else {
    if (typeof tree.left !== "number") {
      tree.left = evaluate(tree.left);
      console.log("ln 30: ", tree.left);
    }
    if (typeof tree.right !== "number") {
      tree.right = evaluate(tree.right);
      console.log("ln 33: ", tree.right);
    }
    if (typeof tree.left === "number" && typeof tree.right === "number") {
      if (tree.op === "*") {
        console.log("ln 37: ", tree.left * tree.right);
        return tree.left * tree.right;
      } else if (tree.op === "+") {
        console.log("ln 40: ", tree.left + tree.right);
        return tree.left + tree.right;
      } else if (tree.op === "-") {
        console.log("ln 43: ", tree.left - tree.right);
        return tree.left - tree.right;
      } else {
        console.log("ln 46: ", tree.left / tree.right);
        return tree.left / tree.right;
      }
    } else {
      // final return; cause typescript
      console.log("final return LOOSER!");
      return 0;
    }
  }
}

console.log("\n");
evaluate({
  op: "*",
  left: { op: "+", left: 1, right: 3 },
  right: 2,
}); // 8 WORKS
console.log("\n");
evaluate({ op: "-", left: 7, right: { op: "-", left: 20, right: 18 } }); // 5 WORKS
console.log("\n");
evaluate({
  op: "*",
  left: { op: "+", left: 1, right: 3 },
  right: { op: "-", left: 7, right: { op: "-", left: 20, right: 18 } },
}); // 20 WORKS
console.log("\n");
evaluate({
  op: "*",
  left: { op: "+", left: 1, right: 3 },
  right: {
    op: "-",
    left: { op: "+", left: 1, right: 3 },
    right: { 
      op: "-",
      left: { op: "+", left: { op: "+", left: 1, right: 3 }, right: 3 },
      right: { op: "+", left: 1, right: 3 },
    },
  },
}); // 4 WORKS
