
// https://www.codewars.com/kata/515e188a311df01cba000003

function getPlanetName(id){
      if (id === 1) {
        return "Mercury"; 
      } 
      if (id === 2) {
        return "Venus"; 
      } 
      if (id === 3) {
          return "Earth"; 
        } 
      if (id === 4) {
          return "Mars"; 
        } 
      if (id === 5) {
          return "Jupiter";
      } 
      if (id === 6) {
        return "Saturn"; 
      }
      if (id === 7) {
        return "Uranus";
       }
        if (id === 8) {
            return "Neptune";
        }
    return name;
  }

  console.log(getPlanetName(2))//, 'Venus');
  console.log(getPlanetName(5))//, 'Jupiter');
  console.log(getPlanetName(3)) //, 'Earth');

  function getPlanetName(id){
    return {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune'
    }[id]
  }


  function getPlanetName(id){
    var name = {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune',
    };
    
    return name[id];
  }

  const getPlanetName1 = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];


  function getPlanetName(id){
    var name;
   if(id === 1) name = 'Mercury';
   if(id === 2) name = 'Venus';
   if(id === 3) name = 'Earth';
   if(id === 4) name = 'Mars';
   if(id === 5) name = 'Jupiter';
   if(id === 6) name = 'Saturn';
   if(id === 7) name = 'Uranus';
   if(id === 8) name = 'Neptune';
    return name;
  }






























































































