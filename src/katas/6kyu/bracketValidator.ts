/*
 Program: 
    function name: bracketValidator
    params: string - brackets
    return: boolean
==================================
declare openersArr to be an empty array
declare openers = '{' or '(' or '['
declare closers = "}" or ")" or "]"
declare a data structure(object) matching openers to closers
for each bracket of brackets:
    if bracket is opener:
        add bracket to openersArr
    else if bracket is closers and closes last item in openersArr:
        remove last item of openersArr
    emd ifelse
endfor
if openersArr is empty return true
 */

interface Matches {
  [key: string]: string;
}
export function bracketValidator(brackets: string): boolean {
  const openersArr: string[] = [];
  const matches: Matches = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (const bracket of brackets) {
    const lastbracket = openersArr[openersArr.length - 1];
    if (matches[bracket]) {
      openersArr.push(bracket);
    } else if (matches[lastbracket] === bracket) {
      openersArr.pop();
    }
  }
  console.log(openersArr);
  return openersArr.length ? false : true;
}

const res1 = bracketValidator("{ [ ] ( ) }");
const res2 = bracketValidator("{ [ ( ] ) }");
const res3 = bracketValidator("{ [ }");

console.log(res1);
console.log(res2);
console.log(res3);
