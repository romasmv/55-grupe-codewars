
//https://www.codewars.com/kata/57ab2d6072292dbf7c000039




function correctPolishLetters (string) {
    return string
    .replaceAll('ą','a')
    .replaceAll('ć','c')
    .replaceAll('ę','e')
    .replaceAll('ł','l')
    .replaceAll('ń','n')
    .replaceAll('ó','o')
    .replaceAll('ś','s')
    .replaceAll('ź','z')
    .replaceAll('ż','z')
  }

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");



var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters1 (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}


const correctPolishLetters2 = (string)  => {
    return string
    .split("")
    .map(function (el) {
      if (el === "ą") {
        return "a";
      } else if (el === "ć") {
        return "c";
      } else if (el === "ę") {
        return "e";
      } else if (el === "ł") {
        return "l";
      } else if (el === "ń") {
        return "n";
      } else if (el === "ó") {
        return "o";
      } else if (el === "ś") {
        return "s";
      } else if (el === "ź" || el === "ż") {
        return "z";
      } 
      return el
    })
    .join("")
    }

    function correctPolishLetters (str) {
        // your code
        let quo = "";
        const char = {
      ą: "a",
      
      ć: "c",
      
      ę: "e",
      
      ł: "l",
      
      ń: "n",
      
      ó: "o",
      
      ś: "s",
      
      ź: "z",
      
      ż: "z" };
        
        for(const lett of str){
          quo += (char[lett] ? char[lett] : lett);
        }
          
        return quo;
      }




















