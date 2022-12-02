import fs from "fs/promises";

async function calories() {
  const input = await fs.readFile('input.txt', { encoding: "utf8" });
  console.log(input);
}

calories();
