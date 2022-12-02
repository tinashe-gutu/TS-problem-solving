import fs from "fs/promises";

interface IScore {
  [keys: string]: number;
}
interface IStates {
  [keys: string]: string;
}
async function rockPaperSci() {
  const input = await fs.readFile("src/advent-of-code-2022/inputs/input2.txt", {
    encoding: "utf8",
  });
  const games = input.split("\n");
  const winState: IStates = {
    A: "B",
    B: "C",
    C: "A",
  };
  const looseState: IStates = {
    A: "C",
    B: "A",
    C: "B",
  };
  const score: IScore = {
    A: 1,
    B: 2,
    C: 3,
  };

  let points = 0;
  for (const game of games) {
    if (game[2] === "Z") {
      points += 6 + score[winState[game[0]]];
    } else if (game[2] === "X") {
      points += score[looseState[game[0]]];
    } else {
      points += 3 + score[game[0]];
    }
  }
  console.log(points);
}

rockPaperSci();

