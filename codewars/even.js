
//https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript


function testEven(n) {
    return n%2 ===0;
}




function testEven(n) {
    return !(n % 2);
}
// n=7              n=4
// !(7%2);          !(4%2);
// !(1);            !(0);
// !1;              !0
// !true;           !false
// false;           true
//  const testEven = n => !(n % 2); tas pats tik rodikline funkcija





function testEven(n) {
    if ( n % 2 === 0 ){
      return true;
    }
    else return false;
 }





 
 
 function testEven(n) {
    if (!Number.isInteger(n)) {
      return false;
    }
  
    if (Number.isInteger(n / 2)) {
      return true;
    } else {
      return false;
    }
  }





console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");






































