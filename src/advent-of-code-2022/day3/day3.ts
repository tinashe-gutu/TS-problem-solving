import fs from "fs/promises";

async function priorityLetters() {
  const input = await fs.readFile("src/advent-of-code-2022/inputs/input3.txt", {
    encoding: "utf8",
  });
  let count = 0;
  const inputArr: string[] = input.split("\n");
  inputArr.forEach((el, i) => {
    const firstSection = el.slice(0, el.length / 2);
    const secondSection = el.slice(el.length / 2, el.length);
    //console.log(firstSection, secondSection, inputArr, el);
    for (let i = 0; i < firstSection.length; i++) {
      if (secondSection.includes(firstSection[i])) {
        if (firstSection.charCodeAt(i) < 91) {
          console.log(
            firstSection,
            secondSection,
            firstSection[i],
            firstSection.charCodeAt(i) - 38,
            count
          );
          count += firstSection.charCodeAt(i) - 38;
          i = firstSection.length;
        } else {
          count += firstSection.charCodeAt(i) - 96;
          i = firstSection.length;
          console.log(
            firstSection,
            secondSection,
            firstSection[i],
            firstSection.charCodeAt(i) - 96,
            count
          );
        }
      }
    }
  });
  console.log(count);
}

priorityLetters();
