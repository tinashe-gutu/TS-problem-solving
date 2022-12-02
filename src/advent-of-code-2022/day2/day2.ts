import fs from "fs/promises";

interface IScore {
  [keys: string]: number;
}
async function rockPaperSci() {
  const input = await fs.readFile("src/advent-of-code-2022/inputs/input2.txt", {
    encoding: "utf8",
  });
  const games = input.split("\n");
  const score: IScore = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
  };
  let points = 0;
  console.log(games);
  for (const game of games) {
    console.log(game[0], game[2]);
    console.log(score[game[0]], score[game[2]]);
    if (
      (score[game[2]] > score[game[0]] &&
        score[game[2]] - score[game[0]] !== 2) ||
      score[game[0]] - score[game[2]] === 2
    ) {
      points += 6 + score[game[2]];
    } else if (score[game[2]] === score[game[0]]) {
      points += 3 + score[game[2]];
    } else {
      points += score[game[2]];
    }
  }
  console.log(points);
}

rockPaperSci();

//13223

//13964
//14531
//15173
