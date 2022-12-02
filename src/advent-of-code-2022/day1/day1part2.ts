import fs from "fs/promises";

async function calories() {
  const input = await fs.readFile("src/advent-of-code-2022/week1/input.txt", {
    encoding: "utf8",
  });
  const elfCalories = input.split("\n");
  let counter = 0;
  const totalCals: number[] = [];
  for (const item of elfCalories) {
    if (item === "") {
      totalCals.push(counter);
      counter = 0;
    } else {
      counter += parseInt(item);
    }
  }
  const sortedTotalCals = totalCals.sort((a, b) => b - a);
  console.log(sortedTotalCals[0]+ sortedTotalCals[1]+ sortedTotalCals[2]);
}

calories();
