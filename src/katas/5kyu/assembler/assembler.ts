/*Brief:
    mov x y - copies y (either a constant value or the content of a register) into register x
    inc x - increases the content of the register x by one
    dec x - decreases the content of the register x by one
    jnz x y - jumps to an instruction y steps away 
    (positive means forward, negative means backward
    
        
    function: 
        name: assemble
        params:INSTRUCTIONS - string array
        returns: object
    ====================
    psueo-code:
        declare an empty object OBJ
        loop through each ELEMENT of INSTRUCTIONS
            split each ELEMENT into seperate strings set to INSTRUCTION
            if the first term of INSTRUCTION is 'mov':
                add a key value of the second and third of INSTRUCTION into OBJ
            if the first term of INSTRUCTION is 'inc':
                increase the value of the OBJ key  equal to the second term by 1
            if the first term of INSTRUCTION is 'dec'
                decrease the value of the OBJ key  equal to the second term by 1
            if the first term of INSTRUCTIONis 'jnz' and the second term  is not 0
                set the current ELEMENT being looped to be the third term of INSTRUCTION
 */

export function assemble(instructions: string[]): object {
  let obj: Record<string, any> = {};
  for (let i = 0; i < instructions.length; ){
    let instruction = instructions[i].split(" ");
    let content = instruction[1];
    if (instruction[0] === "mov"){
      if (isNaN(parseInt(instruction[2]))) {
        let value = instruction[2];
        obj[content] = obj[value];
        i++;
      } else {
        obj[content] = parseInt(instruction[2]);
        i++;
      }
    } else if (instruction[0] === "inc") {
      obj[content]++;
      i++;
    } else if (instruction[0] === "dec") {
      obj[content]--;
      i++;
    } else if (instruction[0] === "jnz") {
      if (parseInt(obj[content]) === 0) {
        i++;
      } else {
        i += parseInt(instruction[2]);
        console.log(i);
      }
    }
  }
  return obj;
}
