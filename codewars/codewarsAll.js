

// Jums pateikiami du vektoriai, pradedant nuo pradžios (x=0, y=0) su koordinatėmis (x1,y1) ir (x2,y2). Jūsų užduotis yra išsiaiškinti, ar šie vektoriai yra kolineariniai. Kolineariniai vektoriai yra vektoriai, esantys toje pačioje tiesėje. Jie gali būti nukreipti ta pačia arba priešinga kryptimis. Vieną vektorių galima gauti iš kito, padauginus jį iš tam tikro skaičiaus. Kalbant apie koordinates, vektoriai (x1, y1) ir (x2, y2) yra kolinearūs, jei (x1, y1) = (k*x2, k*y2) , kur k yra bet koks skaičius, veikiantis kaip koeficientas.

function collinearity(x1, y1, x2, y2) {
    // Jei vienas is vektoriu yra (x1, y1) arba (x2,y2) lygus (0,0) – tada jie kolineariniai
    if (x1 === 0 && y1 === 0 && x2 === 0 && y2 === 0) {
      return true;
    }
      // Kryžminė sandauga
    return x1 * y2 === x2 * y1;
  }
    console.log(collinearity(1, 0, 1, 4)); // false
    console.log(collinearity(1, 0, 0, 0)); // true
    
 
console.log('------------------');



function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  }
  
  console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
  
  
  console.log('------------------');

//Sukurkite funkciją, kuri visada grąžina True/true kiekvienam nurodyto sąrašo elementui.
//Tačiau, jei elementas yra žodis „flick“, perjunkite taip, kad visada būtų grąžinama priešinga loginė reikšmė False/False.

function flickSwitch(arr){
  let swith = true;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      swith = !swith;
    }
    result[i] =swith;
  }
  return result;
};

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));

console.log('------------------');

// Atsižvelgiant į dvi eilutes, sudarytas iš + ir -, grąžinkite naują eilutę, kuri parodo, kaip šios dvi eilutės sąveikauja tokiu būdu:

//Kai teigiami ir teigiami dalykai sąveikauja, jie išlieka teigiami.
//Kai negatyvai ir negatyvai sąveikauja, jie išlieka neigiami.
//Tačiau kai neigiami ir teigiami dalykai sąveikauja, jie tampa neutralūs ir rodomi kaip skaičius 0.
/*

("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.


PVZ:

("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"

*/
function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === "+" && s2[i] === "+") {
      result += "+";
    } else if (s1[i] === "-" && s2[i] === "-") {
      result += "-";
    } else {
      result += "0";
    }
  }
  return result;
};


console.log(neutralise("--++--", "++--++")); // "000000"
console.log(neutralise("+-", "-+")); // "00"
console.log(neutralise("-++-", "-+-+")); // "-+00"

console.log('------------------');

// Jums pateikiamas masyvas (kuris bus mažiausiai 3 ilgio, bet gali būti labai didelis), kuriame yra sveikieji skaičiai. Masyvą sudaro arba visiškai nelyginiai sveikieji skaičiai, arba visiškai lyginiai sveikieji skaičiai, išskyrus vieną sveikąjį skaičių N. Parašykite metodą, kuris masyvą priima kaip argumentą ir grąžina šį „išskirtinį“ N.

// PVZ

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (vienintelis nelyginis skaičius) 
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (vienintelis lyginis skaičius)



// jeigu masyve visi visiškai nelyginiai sveikieji skaičiai +N;
// jeigu masyve visi visiškai lyginiai sveikieji skaičiai +N;
 
function rastiIsskirti(masyvas) {
  let lyginiuKiekis = 0;
  let nelyginiuKiekis = 0;
  let paskutinisLyginis = 0;
  let paskutinisNelyginis = 0;

  for (let i = 0; i < masyvas.length; i++) {
      if (masyvas[i] % 2 === 0) {
          lyginiuKiekis++;
          paskutinisLyginis = masyvas[i];
      } else {
          nelyginiuKiekis++;
          paskutinisNelyginis = masyvas[i];
      }
  }

  if (lyginiuKiekis === 1) {
      return paskutinisLyginis;
  } else {
      return paskutinisNelyginis;
  }
}

console.log(rastiIsskirti([0, 1, 2]));     // ---> 1
console.log(rastiIsskirti([1, 2, 3]));     // ---> 2
console.log(rastiIsskirti([2,6,8,10,3]));  // ---> 3
console.log(rastiIsskirti([0,0,3,0,0]));   // ---> 3
console.log(rastiIsskirti([1,1,0,1,1]));   // ---> 0

console.log('------------------');

//Tau bus pateiktas masyvas a ir reikšmė x. Viskas, ką reikia padaryti – patikrinti, ar pateiktame masyve a yra reikšmė x.(a gali būti sudarytas iš skaičių arba tekstų (stringų).x taip pat gali būti arba skaičius, arba tekstas.)

/* Grąžinti true, jeigu masyve yra ta reikšmė,
 false, jeigu jos nėra. */


function check(a, x) {
for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
    }
    return false;
  }

console.log(check([66, 101], 66)); //true);
console.log(check([101, 45, 75, 105, 99, 107], 107)); //true);
console.log(check(['t', 'e', 's', 't'], 'e')); //true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); //false);

console.log('------------------');


/*
Jei surašytume visus natūralius skaičius, mažesnius nei 10, kurie yra dalūs iš 3 arba 5, gautume: 3, 5, 6 ir 9. Šių skaičių suma yra 23.
Baik sprendimą taip, kad jis grąžintų visų daugiklių iš 3 arba 5, kurie yra mažesni už pateiktą skaičių, sumą.
Papildomai:
Jei pateiktas skaičius yra neigiamas, grąžink 0.
Pastaba:
Jei skaičius dalijasi tiek iš 3, tiek iš 5, jį reikia suskaičiuoti tik vieną kartą.
*/


function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(solution(10)); // 23

console.log('------------------');


// Ši kata yra apie tam tikro skaičiaus padauginimą iš aštuonių, jei jis yra lyginis, ir iš devynių kitu atveju.

function simpleMultiplication(number) {
if (number % 2 === 0) {
    return number * 8;
  }else {
    return number * 9;
  }
}

console.log(simpleMultiplication(2));  

console.log('------------------');

console.clear();

let v1 = 50,
v2 = 100,
v3 = 150,
v4 = 200,
v5 = 2,
v6 = 250;

function equal1(a,b){
  return a + b;
}
console.log(equal1(v1,v1))


function equal2(a,b){
  return a - b;
}
console.log(equal2(v3,v1))


function equal3(a,b){
  return a * b;
}
console.log(equal3(v5,v1))


function equal4(a,b){
  return a / b;
}
console.log(equal4(v4,v5))


function equal5(a,b){
  return a % b;
}console.log(equal5(v6,v3))


console.log('------------------');
console.clear();

/*Troliai puola tavo komentarų skiltį!
Įprastas būdas išspręsti šią situaciją yra pašalinti visas balses iš trolių komentarų, neutralizuojant grėsmę.
Jūsų užduotis yra parašyti funkciją, kuri paima eilutę, ir grąžinti naują eilutę su pašalintomis balsėmis.
Pavyzdžiui, eilutė "Ši svetainė skirta nevykėliams LOL!" taptų "Ths wbst s fr lsrs LL!".
Pastaba: šiai kata y nelaikoma balsiu.*/

function disemvowel(str) {
  let vowels =['a','o','e','i','u']
  let newText = '';
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      newText += '';}
      else {
        newText+=str[i];
      }
    }
    
    
    return newText;
  }
  
  console.log(disemvowel("This website is for losers LOL!")) //"Ths wbst s fr lsrs LL!")
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) //"N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
  console.log(disemvowel("What are you, a communist?")) // "Wht r y,  cmmnst?")
  
  console.log('------------------');
  console.clear();
  
  /* Jums bus suteiktas masyvas a ir reikšmė x. Viskas, ką jums reikia padaryti, tai patikrinti, ar pateiktame masyve yra reikšmė.
  a gali būti skaičių arba eilučių. x gali būti bet kuris.
  Grąžina true jei masyve yra reikšmė, false jei nera.*/
  
   function check(a, x) { 
     if (a.includes(x)) {
       return true}
        else {
          return false;
        }
      }
      
      
      console.log(check([66, 101],66))                        // true);
      console.log(check([101, 45, 75, 105, 99, 107],107))      // true);
      console.log(check(['t', 'e', 's', 't'],'e'))             // true);
      console.log(check(['what', 'a', 'great', 'kata'],'kat')) //  false);
      
      console.log('------------------');
      console.clear();
      
      /*   Jūsų darbas
      Raskite visų žemiau m esančių n kartotinių sumą
      
      Turėkite omenyje
      n ir m yra natūralūs skaičiai (teigiami sveikieji skaičiai)
      m yra išbrauktas iš sumos
      Pavyzdžiai
      sumaMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
      sumaMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
      sumaMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
      sumMul(4, -7) ==> "INVALID"   */
      
      function sumMul(n,m){
        if (n<=0 || m<=0 || !Number.isInteger(n) || !Number.isInteger(m)){
          return "INVALID";
  }
  let sum = 0;
  for (let i = 1; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMul(0,0))   //"INVALID");
console.log(sumMul(2,9))  //20);
console.log(sumMul(4,-7)) //"INVALID");

console.log('------------------');
console.clear();

/*
Vaikai geria toddy.
Paaugliai geria kokakolą.
Jauni suaugusieji geria alų.
Suaugusieji geria viskį.
Sukurkite funkciją, kuri gautų amžių, ir grąžinkite tai, ką jie geria.

Taisyklės:

Vaikai iki 14 metų.
Paaugliai iki 18 metų.
Jaunas iki 21 m.
Suaugusieji turi 21 ar daugiau.
Pavyzdžiai: (įvestis --> išvestis)

13 --> "gerti toddy"
17 --> "gerti kokakolą"
18 --> "gerti alų"
20 --> "gerti alų"
30 --> "gerti viskį"
*/

function peopleWithAgeDrink(old) {
  if (old<14) {
    return 'drink toddy'
  }
  else if (old<18){
    return 'drink coke'
  }
  else if (old<21){
    return 'drink beer'
  }
  else{
    return  'drink whisky'
  }
}

console.log((peopleWithAgeDrink(22)))   //'drink whisky'  

console.log('------------------');
console.clear();


/*
Duotas skaičius n. Grąžink teigiamų nelyginių skaičių, mažesnių už n, kiekį.

Pavyzdžiai (Įvestis -> Išvestis):

7 -> 3 (nes nelyginiai skaičiai mažesni už 7 yra [1, 3, 5])
15 -> 7 (nes nelyginiai skaičiai mažesni už 15 yra [1, 3, 5, 7, 9, 11, 13])
Taip pat nurodyta, kad tikimasi didelių įvesties skaičių, todėl reikėtų parašyti efektyvų sprendimą.
*/
function oddCount(n){
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i%2===1){
      count++
    }
  }
  return count
}


console.log(oddCount(15))    // 7, "Oops! Wrong.");
console.log(oddCount(15023)) // 7511, "Oops! Wrong.");

console.log('------------------');
console.clear();

/*  Laikrodis rodo h valandas, m minutes ir s sekundes po vidurnakčio.

Jūsų užduotis yra parašyti funkciją, kuri grąžina laiką nuo vidurnakčio milisekundėmis.

Pavyzdys:
h = 0
m = 1
s = 1

result = 61000
Įvesties apribojimai:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59      */

function past(h, m, s){
  return(((h*3600)+(m*60)+s)*1000)
}



console.log(past(0,1,1)) //,61000
console.log(past(1,1,1)) //,3661000
console.log(past(0,0,0)) //,0
console.log(past(1,0,1)) //,3601000
console.log(past(1,0,0)) //,3600000


console.log('------------------');
console.clear();

/*
Dezoksiribonukleino rūgštis (DNR) yra cheminė medžiaga, randama ląstelių branduolyje ir nešanti gyvų organizmų vystymosi ir funkcionavimo „instrukcijas“.
DNR eilutėse simboliai „A“ ir „T“ yra vienas kito papildymai, kaip „C“ ir „G“. Jūsų funkcija gauna vieną DNR pusę (eilutę, išskyrus Haskell); reikia grąžinti kitą papildomą pusę. DNR grandinė niekada nebūna tuščia arba jos visai nėra (vėlgi, išskyrus Haskell).

Pavyzdys: ( įvestis --> išvestis )

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function dnaStrand(dna){
  let result = '';
  for(let i=0;i<dna.length;i++){
    if(dna[i] === 'A'){
      result +='T';
    }
    if (dna[i] === 'T'){
      result += 'A';
    }
    if (dna[i] === 'C'){
      result += 'G';
    }
    if (dna[i] === 'G'){
      result += 'C';
   }
  }
  return result ;
}

console.log(dnaStrand("AAAA")) //,"TTTT","String AAAA is")
console.log(dnaStrand("ATTGC")) //,"TAACG","String ATTGC is")
console.log(dnaStrand("GTAT"))//,"CATA","String GTAT is")

console.log('------------------');
console.clear();

function main (verb, noun){
  return verb + noun
}


console.log(main('take ', 'item'))//, 'take item')
console.log(main('use ', 'sword'))//, 'use sword')



function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

console.log(buildString('Cheese','Milk','Chocolate'))//, 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
console.log(buildString('Cheese','Milk'))//, 'I like Cheese, Milk!', 'Return the correct String');
console.log(buildString('Chocolate'))//, 'I like Chocolate!', 'Return the correct String');


console.log('------------------');
console.clear();

function booleanToString(b){
  return  b.toString();
}

console.log(booleanToString(true))//, "true", 'When we pass in true, we want the string "true" as output');
console.log(booleanToString(false))//, "false", 'When we pass in false, we want the string "false" as output');

console.log('------------------');
console.clear();

function cookie(x){
  if(typeof x === 'string'){
    return "Who ate the last cookie? It was Zach!";
  }; if (typeof x === 'number'){
    return "Who ate the last cookie? It was Monica!";
  }; 
  return  "Who ate the last cookie? It was the dog!";
}

console.log(cookie("Ryan"))//, "Who ate the last cookie? It was Zach!");
console.log(cookie(26))//, "Who ate the last cookie? It was Monica!");
console.log(cookie(2.3))//, "Who ate the last cookie? It was Monica!");
console.log(cookie(true))//, "Who ate the last cookie? It was the dog!");

console.log('------------------');
console.clear();


function myFirstKata(a, b) {
  if (typeof a === "number" && typeof(b) === "number") {
    return a % b + b % a;;
  } else {
    return false;
  }
}

console.log(myFirstKata(3,5))//,(3 % 5 + 5 % 3));
console.log(myFirstKata("hello",3))//,false);
console.log(myFirstKata(67,"bye"))//,false);
console.log(myFirstKata(true,true))//,false);
console.log(myFirstKata(314,107))//,(107 % 314 + 314 % 107));
console.log(myFirstKata(19483,9))//,(9 % 19483 + 19483 % 9));



console.log('------------------');
console.clear();

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  return `Hello, ${name}!`;
  
}
console.log(greet("Johnny"))//, 
console.log(greet("Jim"))//, ;


console.log('------------------');
console.clear();

function areYouPlayingBanjo(name) {
  if (name[0]==='R'||name[0]==='r'){
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("Adam"))//, "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"))//, "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"))//, "Ringo plays banjo");
 console.log(areYouPlayingBanjo("bravo"))//, "bravo does not play banjo");
 console.log(areYouPlayingBanjo("rolf"))//, "rolf plays banjo");
 
 console.log('------------------');
 console.clear();
 
 /*Duotas masyvas, grąžinkite kiekvieno iš jų atvirkštinę sumą. Kiekvienas teigiamas tampa neigiamu, o neigiamas – teigiamais.
 
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

Galite manyti, kad visos reikšmės yra sveikieji skaičiai. Nemutuokite įvesties masyvo.*/

function invert(array) {
  for( let i=0; i<array.length; i++){
    array[i] = -array[i];
  if (array[i] === 0) {
    array[i] = 0;}}
if (array.length === 0) {
  return array;}
  else {
    return array;}
  } 
  
  
console.log(invert([1,2,3,4,5])) 
console.log(invert([1,-2,3,-4,5]))  
console.log(invert([])) 
console.log(invert([0])) 
  
console.log('------------------');
console.clear();
  
function maps(x){
let result = [];
for (let i = 0; i < x.length; i++) {
result.push(x[i] * 2);
}
return result;
}
  
/* labai geras sprendimas su map() funkcija
function maps(x){
return x.map(n => n * 2);
}                              
  */
   
   
console.log(maps([1, 2, 3]))//, [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]))//, [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]))//, [4, 4, 4, 4, 4, 4]); 
   
   
console.log('------------------');
console.clear();
   
/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
   
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */
   
function grow(x){
let result = 0;
for (let i = 0; i < x.length; i++) {
result = x.reduce((a, b) => a * b);
}
return result;
}
console.log(grow([1, 2, 3]))//, 6);
console.log(grow([4, 1, 1, 1, 4]))//, 16); 
console.log(grow([2, 2, 2, 2, 2, 2]))//, 64);
    
    
console.log('------------------');
console.clear();
    
    
function makeNegative(num) {
       
if (num > 0) {
return -num;
} else if (num < 0) {
return num;
} else {
return 0;
}
} 

console.log(makeNegative(9))//, -1);
console.log(makeNegative(64))//, -1);
console.log(makeNegative(12))//, -1);
console.log(makeNegative(-1))//, -1);
console.log(makeNegative(9))//, -1);
      
console.log('------------------');
console.clear();
/*
Įvadas
Pirmasis šimtmetis apima nuo 1 metų iki 100 metų imtinai , antrasis amžius - nuo 101 metų iki 200 metų imtinai ir kt.
      
Užduotis
Suteikę metus, grąžinkite šimtmetį, kuriame jie yra.
      
      Pavyzdžiai
      1705 --> 18
      1900 --> 19
      1601 --> 17
      2000 --> 20
      2742 --> 28

Pastaba: šioje katoje naudojama griežta konstrukcija, kaip parodyta aprašyme ir pavyzdžiuose, daugiau apie tai galite paskaityti čia
      */
     
     
function century(year) {
return Math.ceil(year/100)
}
      
console.log(century(1705))//, 18, 'Testing for year 1705');
console.log(century(1900))//, 19, 'Testing for year 1900');
console.log(century(1601))//, 17, 'Testing for year 1601');
console.log(century(2000))//, 20, 'Testing for year 2000');
console.log(century(89))//, 1, 'Testing for year 89');
      
      
console.log('------------------');
console.clear();

// Daugybos lentele kai duotasd skaicius   
function multiTable(number) {
let result = '';
for (let i = 1;i<=10;i++){
result += `${i} * ${number} = ${i*number}` ;
if (i<10) {result += `\n`;}
}
return result
}

console.log(multiTable(5));

console.log('------------------');
console.clear();




/*
Jūs ir draugas nusprendėte žaisti žaidimą, kad išsiaiškintumėte savo statistines intuicijas. Žaidimas veikia taip:

Turite krūvą raudonų ir mėlynų rutuliukų. Norėdami pradėti žaidimą, paimkite saują kiekvienos spalvos rutuliukų ir įdėkite juos į maišelį, stebėdami, kiek kiekvienos spalvos pateks į juos. Pakaitomis prieiate ranką į maišelį, atspėjate spalvą ir ištraukiate vieną rutuliuką. Jei atspėjote teisingai, gausite tašką. Apgaulė ta, kad jūs turite tik tris sekundes spėti, todėl turite greitai galvoti.

Nusprendėte parašyti funkciją, guessBlue()kuri padėtų automatiškai apskaičiuoti, ar atspėti „mėlyna“ ar „raudona“. Funkcija turi turėti keturis argumentus:

mėlynų rutuliukų, kuriuos įdėjote į krepšį, skaičius
raudonų rutuliukų, kuriuos įdėjote į krepšį, skaičius
iki šiol ištrauktų mėlynų rutuliukų skaičius (visada mažesnis nei pradinis mėlynų rutuliukų skaičius)
iki šiol ištrauktų raudonų rutuliukų skaičius (visada mažesnis nei pradinis raudonųjų rutuliukų skaičius)
guessBlue()turėtų grąžinti mėlyno marmuro nubrėžimo tikimybę, išreikštą plūde. Pavyzdžiui, guessBlue(5, 5, 2, 3)turėtų grįžti 0.6.
*/


function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return ((blueStart-bluePulled)/((blueStart+redStart)-(bluePulled+redPulled)))
}



const guessBlue1 = (blueStart, redStart, bluePulled, redPulled) => {
  return (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));
}

// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  //   let blueIn = (blueStart - bluePulled),
  //       redIn = (redStart - redPulled);
  //   return blueIn / (blueIn + redIn);
  // }
  
  // or ES6 and one liner
  const guessBlue2 = (bs, rs, bp, rp) => (bs-bp)/(bs-bp + rs - rp);
  
  
  
  console.log(guessBlue(5, 5, 2, 3), 0.6);
  console.log(guessBlue(5, 7, 4, 3), 0.2);
  console.log(guessBlue(12, 18, 4, 6), 0.4);
  
  
console.log('------------------');
console.clear();

/*
Sumavimas
Parašykite programą, kuri surastų kiekvieno skaičiaus nuo 1 iki skaičiaus (abu imtinai) sumavimą. Skaičius visada bus teigiamas sveikasis skaičius, didesnis nei 0. Jūsų funkcijai tereikia grąžinti rezultatą. Toliau pateiktame pavyzdyje tarp skliaustų parodyta, kaip jūs pasiekiate tą rezultatą ir jis nėra jo dalis, žr. pavyzdinius testus.

Pavyzdžiui (įvestis -> išvestis) :

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)           */

var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (num > 0){
      result += i;
    }
    
  }
 return result
}



//var summation = function (num) {
  //  return num * (num+1) / 2;
  //}
  
  
console.log(summation(1),  1);
console.log(summation(2),  3);
console.log(summation(8), 36);
  
  
console.log('------------------');
console.clear();


/*
Jums pateikiamas 4 pusių daugiakampis  length ir  width  Daugiakampis gali būti stačiakampis arba kvadratas.
Jei tai kvadratas, grąžinkite jo plotą. Jei tai stačiakampis, grąžinkite jo perimetrą.

Pavyzdys (1 įvestis, 2 įvestis --> išvestis):

6, 10 --> 32
3, 3 --> 9
Pastaba: šios katos tikslais manysite, kad tai yra kvadratas, jei jo length  ir width  yra lygūs, kitu atveju tai yra stačiakampis.
*/

const areaOrPerimeter = function(l , w) {
  if (l===w) {
    return l*w;
  }
  else {
    return 2*(l+w)
  }
};


//uzrasymo alternativa(zymiai graziu skaitosi)
const areaOrPerimeter1 = function(l , w) {
  return l == w ? l*w : 2*(l + w)
};



console.log(areaOrPerimeter(3,  3),  9);
console.log(areaOrPerimeter(6, 10), 32);


console.log('------------------');
console.clear();


/*
Istorija:
Bobas dirba autobuso vairuotoju. Tačiau jis tapo itin populiarus tarp miesto gyventojų. Kadangi tiek daug keleivių nori įsėsti į jo autobusą, jam kartais tenka susidurti su problema, kad autobuse trūksta vietos! Jis nori, kad parašytumėte paprastą programą, nurodydami, ar jis galės sutalpinti visus keleivius.

Užduočių apžvalga:
Turite parašyti funkciją, kuri priima tris parametrus:

capyra žmonių skaičius, kurį autobusas gali priimti, neįskaitant vairuotojo.
onyra žmonių skaičius autobuse, neįskaitant vairuotojo.
waityra žmonių, laukiančių įlipimo į autobusą, skaičius, neįskaitant vairuotojo.
Jei yra pakankamai vietos, grąžinkite 0, o jei nėra, grąžinkite keleivių skaičių, kurio jis negali priimti.

Naudojimo pavyzdžiai:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

function enough(cap, on, wait) {
  if (cap-on-wait<0){
    return (cap-on-wait)*-1;
  }
  else if (cap-on-wait===0){
    return 0;
  }
  else {
    return 0
  }
}


// alternatyva

function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);


console.log('------------------');
console.clear();

/*
Šioje katoje turite parašyti funkciją, kuri nustato apkabų skaičių, kurį kiekvienas karys turi turėti savo krepšyje.

Jūs gausite ginklą ir gatvių, kurias jie turi kirsti, skaičių. Atsižvelgiant į tai, kad kiekvienoje gatvėje kareivis šaudo 3 kartus. Žemiau yra ginklų santykis:

PT92 – 17 kulkų
M4A1 – 30 kulkų
M16A2 – 30 kulkų
PSG1 – 5 kulkos

Pavyzdys:

["PT92", 6] => 2 (6 gatvės po 3 kulkas)
["M4A1", 6] => 1

Grąža visada bus sveikasis skaičius, kaip ir parametrai.
*/


function magNumber(info){
  let result = 0;
  if(info[0]==='PT92'){
    result = Math.ceil(info[1]*3/17);
  } 
  if(info[0]==='M4A1'){
    result = Math.ceil(info[1]*3/30);
  } 
  if(info[0]==='M16A2'){
    result = Math.ceil(info[1]*3/30);
  } 
  if(info[0]==='PSG1'){
    result = Math.ceil(info[1]*3/5);
  } 
  return result
}


console.log(magNumber(["PT92", 6]), 2)
console.log(magNumber(["M4A1", 8]), 1)
console.log(magNumber(["M16A2", 19]), 2)
console.log(magNumber(["PSG1", 31]), 19)
console.log(magNumber(["PT92", 19]), 4)


console.log('------------------');
console.clear();

/*
Grąžina naują masyvą, sudarytą iš elementų, kurių įvesties masyve yra daug jų pačių indekso (ilgis > 1).

Kai kurie atvejai:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/


function multipleOfIndex(array) {
  let newArray = [];
  if (array[0]===0){
    newArray.push(array[0]) 
  }
  for (let i=1;i<=array.length; i++){
    if (array[i]%i===0){
      newArray.push(array[i]) 
   }
  }
  return newArray
}


console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))//, [-6, 32, 25])
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))//, [-1, 10])
console.log(multipleOfIndex([11, -11]))//, [-11])
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))//, [-85, 72, 0, 68])
console.log(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]))//, [38, -44, -99])
console.log(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]))//, [-49, 8, -60, 35])
console.log(multipleOfIndex([0, 2, 3, 6, 9]))//, [0, 2, 6])


console.log('------------------');
console.clear();

/*
Prieš išvykdamas atostogauti jūsų bendradarbis turėjo parašyti paprastą pagalbinę funkciją, kad eilutę (kurią sudaro vienas žodis) didžiosiomis raidėmis.

Deja, dabar jie išėjo ir kodas, kurį jums suteikė, neveikia. Pataisykite pagalbinę funkciją, kurią jie parašė, kad ji veiktų taip, kaip numatyta (ty pirmasis simbolis turi būti parašytas didžiosiomis raidėmis).

Eilutė visada prasidės raide ir niekada nebus tuščia.

Pavyzdžiai:

"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"                                                            */






function capitalizeWord(word) {
  return word[0].toUpperCase()+ word.slice(1);
  
}
const capitalizeWord1 = word => word[0].toUpperCase()+word.slice(1);

console.log(capitalizeWord('word'), 'Word');
console.log(capitalizeWord('i'), 'I');
console.log(capitalizeWord('glasswear'), 'Glasswear');


console.log('------------------');
console.clear();

/*
AI užkrėtė tekstą simboliu!!

Šis tekstas dabar visiškai pakeistas šiam simboliui.

Pradėdami nuo originalaus teksto ir suteikę simbolią, grąžinkite tekstą, kai jis buvo pakeistas taip, kad visi originalaus teksto simboliai būtų pakeisti simboliu.

Jei tekstas arba simbolis yra tuščias, grąžinkite tuščią eilutę.
Niekada nebus taip, kad abu tušti, nes niekas nevyksta!!

Pastaba: simbolis yra 1 ilgio eilutė arba tuščia eilutė.

Pavyzdys
text before = "abc"
character   = "z"
text after  = "zzz"            */


function contamination(text, char){
  
  if(text ===''||text === " "|| char ===''){
    return ''
  }
  let newChar = '';
  for (let i = 0; i < text.length; i++) {
    newChar += char;
  }
  return newChar
}


//alternatyva
function contamination(text, char){
  return char.repeat(text.length)
}



const contamination1 = (text, char) => char.repeat(text.length);

console.log(contamination("abc","z"), "zzz")
console.log(contamination("","z"), "")
console.log(contamination("abc",""), "")
console.log(contamination("_3ebzgh4","&"), "&&&&&&&&")
console.log(contamination("//case"," "), "      ")


console.log('------------------');
console.clear();

/*
Kai pateikiama raidė, grąžinkite jos vietą abėcėlėje.

Įvestis :: "a"

Išvestis :: "Abėcėlės padėtis: 1"

Pastaba: Tikrinamos tik mažosios angliškos raidės    */

function position(letter){
  function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0)-96}`
  }
}





function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}




console.log(position("a"),"Position: 1");
console.log(position("z"),"Position: 26");
console.log(position("e"),"Position: 5");


console.log('------------------');
console.clear();

/*
Ar galite rasti adatą šieno kupetoje?

Parašykite funkciją findNeedle(), kuri turi arraypilną šiukšlių, bet turi vieną"needle"

Kai jūsų funkcija suranda adatą, ji turėtų grąžinti pranešimą (kaip eilutę), kuriame sakoma:

"found the needle at position "plius indexji rado adatą, taigi:

Pavyzdys (įvestis --> išvestis)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Pastaba: COBOL jis turėtų grįžti "found the needle at position 6"
*/


function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if(haystack[i] === 'needle'){
      return `found the needle at position ${[i]}`
    }
    
  }
}

let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
let haystack_4 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];


console.log(findNeedle(haystack_1), '/ 3');
console.log(findNeedle(haystack_2), '/ 5');
console.log(findNeedle(haystack_3), '/ 30');
console.log(findNeedle(haystack_4), '/ 5');

console.log('------------------');
console.clear();


/*
Parašykite funkciją pavadinimu setAlarm/ set_alarm/ set-alarm/ setalarm(priklausomai nuo kalbos), kuri gauna du parametrus. Pirmasis parametras employedyra teisingas, kai dirbate, o antrasis parametras vacationyra teisingas, kai atostogaujate.

Funkcija turėtų grįžti į teisingą, jei dirbate, o ne atostogaujate (nes tokiomis aplinkybėmis reikia nustatyti žadintuvą). Priešingu atveju jis turėtų būti klaidingas. Pavyzdžiai:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/

function setAlarm(employed, vacation){
  if (employed === false ){
    return false
  }
  if (employed == true && employed === vacation) {
    return false
  }
  else {
    return true
  }
}





function setAlarm(employed, vacation){
  return employed && !vacation;
}




const setAlarm1 = (employed, vacation) => employed && !vacation;


console.log(setAlarm(true, true)),//  false,"Should be false.");
console.log(setAlarm(false,true)),//  false, "Should be false.");
console.log(setAlarm(true, false))// true,"Should be true.");


console.log('------------------');
console.clear();


/*
Duotos 2 eilutės air b, grąžinkite eilutę formos trumpas+ilgas+trumpas, su trumpesne eilute išorėje ir ilgesne – viduje. Stygos nebus vienodo ilgio, bet gali būti tuščios ( zeroilgis ).

Patarimas R vartotojams:

Eilutės ilgis ne visada sutampa su simbolių skaičiumi
Pavyzdžiui: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/

function solution(a, b){
   a = String(a)
   b = String(b)
  return a.length < b.length ? a+b+a : b+a+b;
}


console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');

console.log('------------------');
console.clear();
/*
Šalia kelio stovi stulpai. Atstumas tarp stulpų yra vienodas, o stulpų plotis yra vienodas. Jūsų funkcija priima tris argumentus:

1) stulpų skaičius (≥ 1);
2)atstumas tarp stulpų (10 - 30 metrų);
3)stulpo plotis (10 - 50 centimetrų).

Apskaičiuokite atstumą tarp pirmo ir paskutinio stulpo centimetrais (be pirmo ir paskutinio stulpo pločio).
*/


function pillars(numPill, dist, width) {
  if (numPill<=1) {
    return 0
  }
  else {
    return (dist*100)*(numPill-1)+(width*(numPill-2))
}
 
}

//alternatyva
function pillars(num_pill, dist, width) {
  return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
}


  console.log(pillars(1, 10, 10) , 0);  
  console.log(pillars(2, 20, 25) , 2000);
  console.log(pillars(11, 15, 30) , 15270);
  
  console.log('------------------');
  console.clear();


  /*
Yra masyvas su kai kuriais skaičiais. Visi skaičiai yra lygūs, išskyrus vieną. Pabandykite jį rasti!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
Garantuojama, kad masyve yra bent 3 skaičiai.

Testuose yra keletas labai didelių masyvų, todėl pagalvokite apie našumą.
  */

function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  } 
}




function findUniq(arr) {
  return Math.max(...arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x)));
}
  
  
console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);



































