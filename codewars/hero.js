
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript



function hero(bullets, dragons){
    return bullets >= dragons*2;
    }




hero = (bullets, dragons) =>{
    if (bullets/2 >= dragons) {
        return true;
    }
    else {
        return false;
    }
    }


 
 
const hero1 = (bullets, dragons) => dragons * 2 <= bullets;



hero=(b,d)=>b>=d*2





console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);