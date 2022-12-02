import { count } from "console";
import fs from "fs/promises";

async function calories() {
  const input = await fs.readFile("src/advent-of-code-2022/week1/input.txt", {
    encoding: "utf8",
  });
  const elfCalories = input.split("\n");
  let counter = 0;
  let maxCal = 0;
  for (const item of elfCalories) {
    if (item === "") {
      if (counter > maxCal) maxCal = counter;
      counter = 0;
    } else {
      counter += parseInt(item);
    }
  }
  console.log(maxCal);
}

console.log(calories());
