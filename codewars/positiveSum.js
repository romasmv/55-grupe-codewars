
//https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.filter(n => n >=0).reduce((total,n) => total + n, 0)
}


console.log(positiveSum([1,2,3,4,5]))//,15);
console.log(positiveSum([1,-2,3,4,5]))//,13);
console.log(positiveSum([]))//,0);
console.log(positiveSum([-1,-2,-3,-4,-5]))//,0);
console.log(positiveSum([-1,2,3,4,-5]))//,9);



function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }


  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }


 function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }


  function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
        }
    }
    return sum;
  }



























