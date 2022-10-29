
/* Brief: check if number of 'x' and 'o' in a string are equal

function:
==========
name: countXO

parameter str: string
returns boolean

psuedo code:
================

declare XCounter for x set to 0
declare oCounter for o set to 0
for each item in str:
    if(item as a lowercase is an x ):
        add one to xCounter
    else if(item as lowercase):
        add one to oCounter
    endif
if(xCounter is equal to oCounter):
    return true
else:
    return false
*/

import { count } from "console";

/** return true if number of X's and O's are equal
 * @param string - string containing xs and os
 * @returns boolean
 */

function countXO(string: string): boolean{
    let xCounter = 0;
    let oCounter = 0;
    for(const character of string){
        if(character.toLowerCase() === 'x'){
            xCounter++;
        }else if(character.toLowerCase()=== 'o'){
            oCounter++;
        }
    }
    return xCounter===oCounter ? true : false
}

export default countXO;