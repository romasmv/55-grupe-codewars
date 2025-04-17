
//https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript



function tripleTrouble(one, two, three){
    let ats = '';
for (let i = 0; i < one.length; i++) {
    ats += one[i] + two[i] + three[i]
    
}

return ats

}




function tripleTrouble(one, two, three){
    let x = ''
      for(i = 0; i<one.length; i++) {
        x +=  one[i] + two[i] + three[i]
      }
    return x
   }



const tripleTrouble1 = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");








console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");












