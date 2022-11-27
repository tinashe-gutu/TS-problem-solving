interface Place<T>{
  [key: string | number]: T;
}
function printAllValues<Type>(obj: Place<Type>){
  const resultArr: Type[] = [];
  for (const key in obj){
    resultArr.push(obj[key]);
  }
  sortArr(resultArr)
  for (const value of resultArr) {
    console.log(value);
  }
}



function sortArr<O>(arr:O[]):O[]{
        arr.sort((a, b): number => {
        if (typeof a === "string" && typeof b === "string"){
          return a.localeCompare(b);
        }
        return 0;
      });
      return arr
}
function printAllValue(obj: ) {
  const values:  = Object.values(obj);
  values.sort((a, b) => a.localeCompare(b));
  for (const value of values) {
    console.log(value);
  }
}

const capitals = {
  Afghanistan: "Kabul",
  Angola: "Luanda",
  Brazil: "Brasília",
  Canada: "Ottawa",
  China: "Beijing",
  Cuba: "Havana",
  Denmark: "Copenhagen",
  Iceland: "Reykjavík",
  Japan: "Tokyo",
  Kazakhstan: "Astana",
  Mexico: "Mexico City",
  Nigeria: "Abuja",
  Philippines: ['hello'],
  Ukraine: "Kiev",
};
printAllValues(capitals);
