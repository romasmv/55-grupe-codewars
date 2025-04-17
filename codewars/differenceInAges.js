

//https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    const diff = max - min;
    
    
    return [min,max, diff];
  }




function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    return [min, max, max-min];
  }


  function differenceInAges(ages){
    let x = ages.sort((a,b) => a - b)[0]
    let y = ages.sort((a,b) => a - b)[ages.length - 1]
    return [x, y, y - x]
  }


  function differenceInAges(ages){

    ages = ages.sort((a,b) => a -b);
    
    let youngest = ages[0];
    let oldest = ages.pop();
    
    
    return new Array(youngest, oldest, (oldest-youngest));
    }

    


  console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
  console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);





































