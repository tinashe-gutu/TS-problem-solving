/**
 * function prints key value pairs
 * @param obj 
 * 
 * function printAllKeyValuePairs(obj: {}){
    for(const [key, value] of Object.entries(obj)){
        console.log(key +' ' + value)
    }
}
 */

function printAllKeyValuePairs(obj: any){
    for(const key in obj){
        console.log(`${key}`, obj[key])
    }
}

const characters = {
    Bruce: "Hulk",
    Peter: "Spiderman",
    Ororo: "Storm"
  };
printAllKeyValuePairs(characters)