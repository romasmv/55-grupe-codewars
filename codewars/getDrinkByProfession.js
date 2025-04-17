
//https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

function getDrinkByProfession(param){
 const pro = param.toLowerCase();

 if (pro === 'jabroni'){
   return 'Patron Tequila'
 }
 if (pro === 'school counselor'){
   return 'Anything with Alcohol'
 }
 if (pro === 'programmer'){
   return 'Hipster Craft Beer'
 }
 if (pro === 'bike gang member'){
   return 'Moonshine'
 }
 if (pro === 'politician'){
   return 'Your tax dollars'
 }
 if (pro === 'rapper'){
   return 'Cristal'
 }

return 'Beer'
}







function getDrinkByProfession(param){
    let map = new Map([
            ["jabroni", "Patron Tequila"],
            ["school counselor", "Anything with Alcohol"],
            ["programmer", "Hipster Craft Beer"],
            ["bike gang member", "Moonshine"],
            ["politician", "Your tax dollars"],
            ["rapper", "Cristal"]
            ]);
        
     let normal = param.toLowerCase();
     return map.has(normal) ? map.get(normal) : "Beer";
}




function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
      case 'jabroni':
        return 'Patron Tequila';
      case 'school counselor':
        return 'Anything with Alcohol';
      case 'programmer':
        return 'Hipster Craft Beer';
      case 'bike gang member':
        return 'Moonshine';
      case 'politician':
        return 'Your tax dollars';
      case 'rapper':
        return 'Cristal';
      default:
        return 'Beer';
    }
  }







  function getDrinkByProfession(param){
    switch(param.toLowerCase()){
      case 'jabroni':
        return 'Patron Tequila'
        break;
      case 'school counselor':
        return 'Anything with Alcohol'
        break;
     case 'programmer':
       return 'Hipster Craft Beer'
       break;
     case 'bike gang member':
       return 'Moonshine'
       break;
     case 'politician':
       return 'Your tax dollars'
       break;
     case 'rapper':
       return 'Cristal'
       break;
     default:
       return 'Beer'
    }
  
  }



console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("scHOOl counselor"));
console.log(getDrinkByProfession("prOgramMer"));
console.log(getDrinkByProfession("bike ganG member"));
console.log(getDrinkByProfession("poLiTiCian"));
console.log(getDrinkByProfession("rapper"));
console.log(getDrinkByProfession("pundit"));
console.log(getDrinkByProfession("Pug"));







