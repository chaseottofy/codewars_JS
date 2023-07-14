/* 8 kyu
Opposites Attract} */
function lovefunc(f1,f2){
  return (f2 - f1) % 2 !== 0
}

/* 8 kyu
DNA to RNA Conversion} */
function DNAtoRNA(dna) {
  let m = {'T':'U', 'U':'T'};
  return [...dna].map(v => m[v] ? m[v] : v).join('');
}

/* 8 kyu
Did she say hallo?} */
function validateHello(greetings) {
  greetings = greetings.toLowerCase().replace(/[^a-z]/g, ' ').split(" ");
  let c = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  for (let i = 0; i < greetings.length; i++) {
    if (c.includes(greetings[i])) {
      return true;
    }
  }
  return false;
}

/* 8 kyu
Arguments to Binary addition} */
function arr2bin(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (isNaN(e) && e !== e) return 'NaN';
    if (!e || typeof e !== 'number') continue;
    res += +e;
  }
  return res.toString(2);
}


/* 8 kyu
Multiple of index} */
function multipleOfIndex(a) {
  return a.filter((n, i) => n%i == 0 || !n);
}

/* 8 kyu
Find the first non-consecutive number} */
function firstNonConsecutive (a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i + 1] !== undefined && Math.abs(a[i+1] - a[i]) > 1) return a[i + 1];
  }
  return null;
}

/* 8 kyu
Merge two sorted arrays into one} */
function mergeArrays(a,b) {
return [...new Set([...a, ...b])].sort((a, b) => a - b);
}

/* 8 kyu
Lario and Muigi Pipe Problem} */
function pipeFix(numbers) {
  let arr = [];
  for ( let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}

/* 8 kyu
Return Negative} */
function makeNegative(num) {
  return num < 0 ? num : -num;
}

/* 8 kyu
Triple Trouble} */
function tripleTrouble(one, two, three){
  let res = '';
  for (let i = 0; i < one.length; i++) {
    res += one[i] + two[i] + three[i];
  }
  return res;
}

/* 8 kyu
Find the position!} */
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}


/* 8 kyu
Name Shuffler} */
function nameShuffler(str) {
  return str.split(' ').reverse().join(' ')
}

/* 8 kyu
Add Length} */
function addLength(str) {
  return str.split(' ').map(w => w + ' ' + w.length);
}


/* 8 kyu
Blood-Alcohol Content} */
function bloodAlcoholContent(drinks, weight, sex, time){
  return +((((drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ? .73 : .66))) - .015 * time).toFixed(4))
}

/* 8 kyu
Will there be enough space?} */
function enough(cap, on, wait) {
  return Math.abs(Math.min(cap - on - wait, 0));
}

/* 8 kyu
get character from ASCII Value} */
function getChar(c){
  return String.fromCharCode(c)
}

/* 8 kyu
Double Char} */
function doubleChar(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    res += str[i].repeat(2);
  }
  return res;
}


/* 8 kyu
Playing with cubes II} */
class Cube {
  constructor(side) {
    this.side = side ? Math.abs(side) : 0;
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

/* 8 kyu
Broken Counter} */
class Counter{
  constructor() {
    this.value=0;
  }
  increase() {this.value++}
  getValue() {return this.value}
  reset() {this.value = 0}
}

/* 8 kyu
L1: Set Alarm} */
function setAlarm(e,v){
  return e && !v
}

/* 8 kyu
CSV representation of array} */
function toCsvText(array) {
  return array.map(r => r.join(',') + '\n').join``.slice(0,-1)
}

/* 8 kyu
How good are you really?} */
function betterThanAverage(cls,me) {
  return (cls.reduce((a,c) => a+c, 0) / cls.length) < me
}


/* 8 kyu
Count Odd Numbers below n} */
function oddCount(n){
  return n % 2 === 0 ? Math.ceil(n/2) : Math.floor(n/2);
}

/* 8 kyu
Beginner Series #1 School Paperwork} */
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}


/* 8 kyu
5 without numbers !!} */
function unusualFive() {
  return 'suppp'.length
}

/* 8 kyu
No zeros for heros} */
function noBoringZeros(n) {
  if (n === 0) return n;

  n = "" + n;
  if (n[n.length - 1] !== '0') return +n;

  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === '0') {
      n = n.substring(0, i);
    } else {
      break;
    }
  }
  
  return +n;
}

/* 8 kyu
Be Concise III - Sum Squares} */
function sumSquares(array) {
  return array.reduce((a,c) => a + (c ** 2), 0);
}

/* 8 kyu
Be Concise II - I Need Squares} */
function squaresOnly(array) {
  return array.filter(v => Math.sqrt(v) % 1 === 0);
}


/* 8 kyu
Fun with ES6 Classes #1 - People, people, people} */
class Person {
  constructor (firstName, lastName, age, gender) {
    this.firstName = firstName ? firstName : "John";
    this.lastName = lastName ? lastName : "Doe";
    this.age = age ? age : 0;
    this.gender = gender ? gender : "Male";
  }

  sayFullName() { return `${this.firstName} ${this.lastName}`; }
  static greetExtraTerrestrials(nm) {
    return `Welcome to Planet Earth ${nm}`;
  }
}

/* 8 kyu
Training JS #16: Methods of String object--slice(), substring() and substr()} */
function cutIt(arr){
  return arr.map(x => x.slice(0, arr.reduce((a, b) => a.length <= b.length ? a : b).length));
}
  

/* 8 kyu
Calculate average} */
function findAverage(arr) {
  return arr.length ? arr.reduce((a, c) => a + c, 0) / arr.length : 0;
} 

/* 8 kyu
MakeUpperCase} */
function makeUpperCase(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    res += (ascii >= 97 && ascii <= 122) ? String.fromCharCode(ascii & 223) : s[i];
  }
  return res;
}

/* 8 kyu
Thinkful - Logic Drills: Traffic light} */
function updateLight(c) {
  return c=='green'?'yellow':c=='yellow'?'red':'green';
}

/* 8 kyu
Array plus array} */
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(...arr2).reduce((a, c) => a + c, 0)
}

/* 8 kyu
Remove the time} */
function shortenToDate(d) {
  return d.split(',')[0];
}

/* 8 kyu
Find the Integral} */
function integrate(c, e) {
  e += 1;
  return `${c / e}x^${e}`;
}

/* 8 kyu
Be Concise IV - Index of an element in an array} */
let find=(a,e)=>a.indexOf(e)<0?'Not found':a.indexOf(e)

/* 8 kyu
Be Concise I - The Ternary Operator} */
describeAge=(a,s="You're a(n) ")=>s+=a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'

/* 8 kyu
Is the string uppercase?} */
String.prototype.isUpperCase = function () {
  return this.split("").every(l => l.toUpperCase() === l);
};

/* 8 kyu
String repeat} */
function repeatStr(n, str) {
  let i = 0
  let newStr = []
  while (i < n) {
    newStr += str;
    i++;
  }
  return newStr;
}

/* 8 kyu
Get number from string} */
function getNumberFromString(s) {
  return +s.match(/\d/g).join("");
}

/* 8 kyu
Regex count lowercase letters} */
function lowercaseCount(str){
  const rgx = str.match(/[a-z]/g);
  if (!str || !rgx) return 0;
  return rgx.length;
}

/* 8 kyu
Count the number of cubes with paint on} */
function countSquares(cuts) {
  return (6 * (cuts ** 2)) + (!cuts ? 1 : 2);
}

/* 8 kyu
Is your period late?} */
function periodIsLate(last, today, cycleLength) {
  return ((today.getTime() - last.getTime()) / 86400000) > cycleLength;
}

/* 8 kyu
ASCII Total} */
function uniTotal(string) {
  return [...string].reduce((a, c) => a + c.charCodeAt(0), 0)
}

/* 8 kyu
All Star Code Challenge #18} */
function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

/* 8 kyu
Exclusive "or" (xor) Logical Operator} */
function xor(a, b) {
  return !!(a ^ b);
}

/* 8 kyu
To square(root) or not to square(root)} */
function squareOrSquareRoot(arr) {
  return arr.map(x => {
    let n = Math.sqrt(x)
    return n % 1 === 0 ? n : x ** 2
  })
}

/* 8 kyu
Century From Year} */
function century(year) {
  return Math.ceil(year / 100)
}

/* 8 kyu
Is n divisible by x and y?} */
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

/* 8 kyu
Is the date today} */
function isToday(date) {
  const today = new Date()
  return today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate()
}

/* 8 kyu
Convert boolean values to strings 'Yes' or 'No'.} */
function boolToWord(bool) {
  return bool ? "Yes" : "No"
}

/* 8 kyu
Expressions Matter} */
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a + (b * c), a * (b + c),
    a * b * c, (a * b) + c, (a + b) * c);
}

/* 8 kyu
Gravity Flip} */
const flip=(d, a)=>{
  return d == 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
}

/* 8 kyu
Bin to Decimal} */
function binToDec(bin){
  return parseInt(bin, 2)
}

/* 8 kyu
SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes} */
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, `Labrador`, `Large`, master, true);
  }
}

/* 8 kyu
Improving Math.round(x)} */
Math.roundTo = function (n, precision) {
  return +n.toFixed(precision)
} 

/* 8 kyu
OOP: Object Oriented Piracy} */
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    return this.draft - (this.crew * 1.5) > 20
    
  }
}

/* 8 kyu
Even or Odd} */
function even_or_odd(number) {
  if (number % 2 === 0) {return 'Even';}
    {return 'Odd';}
}

/* 8 kyu
Total amount of points} */
function points(games) {
  let i = 0;
  let points = 0;
  for (i = 0; i < games.length; i++) {
    let each = games[i].split(":");
    if (each[0] > each[1]) {
      points += 3;
    } else if (each[0] == each[1]) {
      points += 1;
    } else {
      points += 0;
    }
  }
  return points;
}

/* 8 kyu
isReallyNaN} */
const isReallyNaN = (val) => {
  return isNaN(val) && typeof val === "number"
};

/* 8 kyu
Vowel remover} */
function shortcut (string) {
  return string.replace(/[aeiou]/gi, "")
}

/* 8 kyu
Capitalization and Mutability} */
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1)
}

/* 8 kyu
Remove String Spaces} */
function noSpace(x){
  return x.replace(/\s+/gi, '');
}

/* 8 kyu
Training JS #7: if..else and ternary operator} */
function saleHotdogs(n){
  return n<5?n*=100:n>=5&&n<10?n*=95:n*=90
}

/* 8 kyu
simple calculator} */
function calculator(a,b,sign){
  const valid = ['+','-','*','/'].indexOf(sign) > -1
  return valid ? Function('return ' + `${a}${sign}${b}`)() : "unknown value"
}

/* 8 kyu
Sum Arrays} */
// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((a, c) => a + c, 0)
    
};

/* 8 kyu
Are You Playing Banjo?} */
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`;
}

/* 8 kyu
A Needle in the Haystack} */
function findNeedle(haystack) {
  let i = haystack.indexOf("needle")
  return i > -1 ?  `found the needle at position ${i}` : "Your function didn't return anything"
}

/* 8 kyu
Beginner - Lost Without a Map} */
function maps(x){
  return x.map((xx) => xx * 2)
}

/* 8 kyu
Convert a Boolean to a String} */
function booleanToString(b){
  return b === true ? "true" : "false"
}

/* 8 kyu
Counting sheep...} */
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((x) => x === true).length
}

/* 8 kyu
Is there a vowel in there?} */
function isVow(a){
  let cc = new Map([[97,'a'],[101,'e'],[105,'i'],[111,'o'],[117,'u']])
  return a.map((n) => cc.has(n) ? cc.get(n) : n)
}

/* 8 kyu
Quarter of the year} */
const quarterOf = (m) => {
  return m<=3 ? 1 : m<=6 ? 2 : m<=9 ? 3 : m<=12 ? 4 : null
}

/* 8 kyu
Reverse List Order} */
function reverseList(list) {
  return list.map(list.pop,[...list])
}

/* 8 kyu
Grasshopper - Personalized Message} */
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest"
}

/* 8 kyu
"this" is a problem} */
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${first} ${last}`;
}

/* 8 kyu
Sentence Smash} */
function smash (words) {
  const join = (arr, separator = " ") => {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
      if (res) {
        res += separator
      }
      res += arr[i]
    }
    return res
  }
  return join(words)
};

/* 8 kyu
Sentence Smash} */
function smash (words) {
  const join = (arr, separator = " ") => {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
      if (res) {
        res += separator
      }
      res += arr[i]
    }
    return res
  }
  return join(words)
};

/* 8 kyu
Grasshopper - Summation} */
var summation = function (num) {
  return (num * (num + 1)) / 2;
}

/* 8 kyu
Beginner Series #4 Cockroach} */
function cockroachSpeed(s) {
  return Math.floor((30/1.08) * s)
}

/* 8 kyu
Is he gonna survive?} */
function hero(a, b) {
  return (a / 2) >= b
}

/* 8 kyu
Remove exclamation marks} */
function removeExclamationMarks(s) {
  return s.split("").filter(x => x != "!").join("")
}

/* 8 kyu
Will you make it?} */
const zeroFuel = (a,b,c) => {
  return c >= a / b == true
};

/* 8 kyu
Count of positives / sum of negatives} */
function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  let pos = input.filter((x) => x > 0).length;
  let neg = input.filter((x) => x < 0).reduce((a, c) => a + c, 0);
  if (pos == 0 && neg == 0) return [];
  return [pos, neg];
}

/* 8 kyu
Square(n) Sum} */
function squareSum(numbers) {
  return numbers.reduce((a, c) => {
    return a + (c * c)
  }, 0)
}

/* 8 kyu
Removing Elements} */
function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

/* 8 kyu
If you can't sleep, just count sheep!!} */
var countSheep = function (num){
  
  let val = '';
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;

}

/* 8 kyu
Convert a string to an array} */
function stringToArray(string){

  return string.split(" ")

}

/* 8 kyu
Classy Classes} */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

/* 8 kyu
Classy Extentions} */
class Cat extends Animal {
  speak() {
    return this.name + " meows.";
  }
}

/* 8 kyu
Finish Guess the Number Game} */
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives < 1) throw 'already dead';
    return (this.number === n || !(this.lives--));
  }
}

/* 8 kyu
Regular Ball Super Ball} */
var Ball = function(ballType) {
  if (!ballType) {
    this.ballType = 'regular';
  } else {
    this.ballType = 'super';
  }
};

/* 8 kyu
Find the smallest integer in the array} */
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Number(args.sort((a, b) => a - b).slice(0, 1))
  }
}

/* 8 kyu
Keep Hydrated!} */
function litres(time) {
  if (time <= 1) {
    return 0;
  } else {
    return Math.floor(time * 0.5);
  }
}

/* 8 kyu
Convert a String to a Number!} */
var stringToNumber = function(str){
  return Number(str)
}

/* 8 kyu
Pirates!! Are the Cannons ready!??} */
const cannonsReady = (gunners) => {
  if (Object.values(gunners).includes("nay")) {
    return "Shiver me timbers!";
  } else {
    return "Fire!";
  }
}

/* 8 kyu
Hello, Name or World!} */
function hello(name) {
  if (name == '' || name == undefined) {
    return "Hello, World!";
  } else {
    return "Hello, " + name[0].toUpperCase() + name.toLowerCase().slice(1, name.length) + "!"
  }
}

/* 8 kyu
Area or Perimeter} */
const areaOrPerimeter = function(l , w) {
  if (l != w) { return 2*(l+w); }
  else { return l*w; }
};

/* 8 kyu
Sum of Multiples} */
function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  let ans = 0;
  for (let i = n; i < m; i+=n) {
    ans += i;
  }
  return ans;
}

/* 8 kyu
You only need one - Beginner} */
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a.includes(x)) return true;
      return false;
  }
}

/* 8 kyu
Multiply} */
function multiply (a, b) {
  return(a * b);
}

/* 8 kyu
Sum of positive} */
function positiveSum(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) x += arr[i];
  }
  return x
}

/* 8 kyu
Powers of 2} */
function powersOfTwo(n){
  let nums = [];
  for (let i = 0; i <= n; i++) {
    nums.push(2**i)
  }
  return nums;
}

/* 8 kyu
Count the Monkeys!} */
function monkeyCount(n) {
  let count = [];
  for (let i = 1; i <= n; i++) {
    count.push(i);
  }
  return count;
}


/* 8 kyu
Opposite number} */
function opposite(number) {
  return number - (number * 2)
}

/* 8 kyu
Convert number to reversed array of digits} */
function digitize(n) {
  return String(n).split("").reverse().map(Number)
}

/* 8 kyu
Reversed Strings} */
function solution(str) {
  return str.split("").reverse().join("");
}

/* 8 kyu
Job Matching #1} */
function match(candidate, job) {
  if (!job.maxSalary || !candidate.minSalary) throw "Error";
  return job.maxSalary >= (candidate.minSalary * .9);
}

/* 8 kyu
Welcome!} */
function greet(language) {
  let Greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  },
  defaultLanguage = 'english';
  return Greetings[language] || Greetings[defaultLanguage];

}

/* 8 kyu
Crash Override} */
function aliasGen(first, last) {
  let aFirst = first[0].toUpperCase();
  let aLast = last[0].toUpperCase();

  if (firstName[aFirst] && surname[aLast]) {
    return firstName[aFirst] + " " + surname[aLast]
  } else {
    return 'Your name must start with a letter from A - Z.'
  }
}

/* 8 kyu
Find the Remainder} */
function remainder(n, m) {
  if (n < m) {return m % n}
  else {
    return n % m
  }
}

/* 8 kyu
Reversed Words} */
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

/* 8 kyu
Find numbers which are divisible by given number} */
function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor === 0)

}

/* 8 kyu
Remove First and Last Character} */
const removeChar = (str) => {
  newStr = str.slice(1, str.length - 1);
  return newStr
}


/* 8 kyu
Well of Ideas - Easy Version} */
const well = (x) => {
  let g = 0;
  for (const idea of x) {
    idea === "good" ? g += 1 : g;
  }
  return g === 0 ? "Fail!" : g > 2 ? "I smell a series!" : "Publish!";
}

/* 8 kyu
Is it a palindrome?} */
function isPalindrome(x) {
  let reverseString = ""
  for ( let character of x ) {
    reverseString = character + reverseString;
  }
  if (reverseString.toLowerCase() === x.toLowerCase()) {
    return true
  } else {
    return false;
  }
}