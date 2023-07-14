/* 7 kyu
Create palindrome} */
function solve(s) {
  if (s.length <= 1) return true;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    const l2 = s[s.length - 1 - i];
    if (l === l2) continue;
    const ind = [l.charCodeAt() + 1, l2.charCodeAt() + 1];
    const ind2 = [l.charCodeAt() - 1, l2.charCodeAt() - 1];
    if (
      ind[0] === ind[1]
      || ind[0] === ind2[1]
      || ind[1] === ind2[0]
      || ind2[0] === ind2[1]
    ) continue;

    return false;
  }
  return true;
}

/* 7 kyu
Palindromes Here and There} */
function convertPalindromes(numbers) {
  const check = s => {
    s = s.toString();
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
  };
  return numbers.map(v => check(v) ? 1 : 0);
};

/* 7 kyu
Next Palindromic Number.} */
function nextPal(val) {
  let res = val + 1;
  const tst = (n) => {
    n = String(n);
    return n === [...n].reverse().join("");
  };

  while (true) {
    if (tst(res++)) {
      return res - 1;
    }
  }
}

/* 7 kyu
PatternCraft - Adapter} */
class MarioAdapter {
  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    target.health -= this.mario.jumpAttack();
  }
}


/* 7 kyu
Isn't that a letter too?} */
String.prototype.isLetter = function() {
  return this.length === 1 && this.toLowerCase() != this.toUpperCase();
}

/* 7 kyu
Numbers to Letters} */
function switcher(x) {
  let check = ['27', '28', '29'];
  let repl = ['!', '?', ' '];
  for (let i = 0; i < x.length; i++) {
    const l = x[i];
    const isCheck = check.includes(l);
    if (+l > 26 && !isCheck) continue;
    x[i] = isCheck ? repl[check.indexOf(l)] : String.fromCharCode(123 - +l);
  }
  return x.join("");
}

/* 7 kyu
Binary to string} */
function binaryToString(binary){
  return binary.split('0b').map(l => {
    if (l === '') return ''
    return String.fromCharCode(parseInt(l, 2))
  }).join('')
}

/* 7 kyu
Password Check - Binary to String} */
function decodePass( passArr, bin ){
  const bs = bin.split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("");
  return passArr.includes(bs) ? bs : false;
}

/* 7 kyu
noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"} */
function letterCheck(arr) {
  let m = {};
  for (let l of arr[0].toLowerCase()) { m[l] = (m[l] || 0) + 1; }
  for (let l of arr[1].toLowerCase()) {
    if (m[l] < 0 || !m[l]) return false;
    m[l]--;
  }
  return true;
}

/* 7 kyu
Over The Road} */
function overTheRoad(a, n) {
  return (n * 2) + 1 - a
}

/* 7 kyu
Gauß needs help! (Sums of a lot of numbers).} */
function f(n) {
  if (isNaN(n) || n <= 0 || parseInt(n) !== n) return false;
  return (n * (n + 1)) / 2;
};

/* 7 kyu
Multiples!} */
function multiple(x) {
  return x % 15 == 0 ? "BangBoom" : x % 3 == 0? "Bang" : x % 5 == 0 ? "Boom" : "Miss";
}

/* 7 kyu
Magic Three} */
function isMagicThree(arr) {
  if (arr[0] === 0) return true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          return true;
        }
      }
    }
  }
  return false;
}

/* 7 kyu
Minimum to multiple} */
function minimum(a, x) {
  const check = (n, dir) => {
    let count = 0;
    while (n % x !== 0) {
      if (dir === 'neg') {
        n--;
        if (n === x) {
          count++;
          break;
        }
      } else {
        n++;
      }
      count++;
    }
    return count;
  };

  return Math.min(check(a, 'neg'), check(a, 'pos'));
}

/* 7 kyu
Remove the minimum} */
function removeSmallest(numbers) {
  const min = Math.min(...numbers)
  let res = numbers.slice()
  res.splice(res.indexOf(min), 1)
  return res
}

/* 7 kyu
Coding 3min: Father and Son} */
function sc(s){
  return [...s].filter((v, _, a) => {
    return v === v.toUpperCase() ? a.includes(v.toLowerCase()) : a.includes(v.toUpperCase());
  }).join("");
}

/* 7 kyu
Coding 3min : Find the murderer} */
function sc(said, arr) {
  said = said.toLowerCase();
  const min = said.replace(/~/g, '').length;
  let scores = Array(arr.length).fill(0), res = [];
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i].toLowerCase()
    for (let l in said) {
      if (said[l] !== '~' && p[l] === said[l]) scores[i]++;
    }
  }
  for (let n in scores) {
    if (scores[n] && scores[n] >= min) res.push(arr[n]);
  }
  return res.join(',');
}

/* 7 kyu
Training JS #38: Regular Expression--"^","$", "." and test()} */
function findSimilarity(str, word) {
  let len = word.length - 2;
  let p = '.'.repeat(len);
  let rg1 = new RegExp(`^${word[0]}${p}${word.slice(-1)}$`);
  return str.split(" ").filter(v => v.match(rg1)).join(" ");
}

/* 7 kyu
Sliding Puzzle Verification} */
function isSolved(board) {
  let last = -Infinity;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] < last) {
        return false;
      }
      last = board[i][j];
    }
  }
  return true;
}

/* 7 kyu
Largest Elements} */
function largest(n, array) {
  if (!n) return []
  return array.sort((a, b) => a - b).slice(-n);
}

/* 7 kyu
A Rule of Divisibility by 7} */
function seven(m, count = 1) {
  if (!m) return [0, 0];
  const st = m.toString();
  const a = +st.slice(0, -1) - (+st.slice(-1) * 2);
  return a >= 100 ? seven(a, ++count) : [a, count];
}


/* 7 kyu
String Scramble} */
function scramble(str, arr) {
  let res = Array(str.length).fill('');
  for (let n in arr) {
    res[arr[n]] = str[n];
  }
  return res.join("");
};

/* 7 kyu
Encode data on CD (Compact Disc) surface} */
function encodeCD(n) {
  const bn = n.toString(2).padStart(8, '0');
  let r = 'P', f = true;
  for (let i = bn.length - 1; i >= 0; i--) {
    f = +bn[i];
    r += f ? r[r.length - 1] == 'L' ? 'P' : 'L' : r[r.length - 1];
  }
  return r;
}

/* 7 kyu
Thinking & Testing : Math of Middle school} */
function testit(a,b){
  return [a[0] * b[0] + a[1] * b[2], a[1] * b[3] + a[0] * b[1], a[2] * b[0] + a[3] * b[2], a[3] * b[3] + a[2] * b[1]]
}

/* 7 kyu
Thinking & Testing : Math of Primary School} */
function testit(arr) {
  const [a, b, c, d] = arr;
  return (b * c) + (a * d);
}

/* 7 kyu
Thinking & Testing : Uniq or not Uniq} */
function testit(a,b){
  return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}

/* 7 kyu
Thinking & Testing : Something capitalized} */
function testit(s) {
  return s.split(' ').map(w => w.slice(0, -1) + w.slice(-1).toUpperCase()).join(' ');
}

/* 7 kyu
Thinking & Testing : True or False} */
function testit(n){
  return [...n.toString(2)].filter(v => v === '1').length;
}

/* 7 kyu
Thinking & Testing: A and B?} */
function testit(a,b){
  return a | b
}

/* 7 kyu
One Line Task: Area Or Perimeter} */
areaOrPerimeter=(l,w)=>l-w?(l+w)*2:l*w

/* 7 kyu
Multiples and Digit Sums} */
function procedure(n) {
  let res = [];
  for (let i = n; i <= 100; i++) {
    if (i % n == 0) {
      res.push(i);
    }
  }

  return res.reduce((a, c) => {
    c = String(c);
    a += c.length > 1 ? +c[0] + +c[1] : +c[0];
    return a;
  }, 0);
}

/* 7 kyu
Merge two arrays} */
function mergeArrays(a, b) {
  let res = [];
  while (true) {
    if (a.length) res.push(a.shift())
    if (b.length) res.push(b.shift())
    if (!a.length && !b.length) break;
  }
  return res;
}

/* 7 kyu
Sum of all arguments} */
function sum() {
  if (arguments.length == 1) { return arguments[0]; }
  let nums = new Array(...arguments);
  return nums.reduce((a, c) => a + c, 0);
}

/* 7 kyu
Find the next perfect square!} */
function findNextSquare(sq) {
  const root = Math.sqrt(sq)
  return root % 1 === 0 ? (root + 1) * (root + 1) : -1
}

/* 7 kyu
Circle cipher} */
function encode(s) {
  let r = '', c = 0;
  while (r.length < s.length) {
    r += s[c++] + (r.length == s.length - 1 ? '' : s[s.length - c]);
  }
  return r;
}

function decode(s) {
  let e = '', o = '';
  for (let i = 0; i < s.length; i++) {
    i % 2 == 0 ? e += s[i] : o = s[i] + o;
  }
  return e + o;
}

/* 7 kyu
Password Hashes} */
const crypto = require('crypto');
function passHash(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

/* 7 kyu
Reduce My Fraction} */
function reduce(fraction) {
  const gcd = (a, b) => a === 0 ? b : gcd(b % a, a);
  let [x, y] = fraction;
  const gc = gcd(x, y);
  return [x / gc, y / gc];
}


/* 7 kyu
Decoding a message} */
function decode(m, n) {
  return [...m].map((x, i) => x === ' ' ? ' ' : String.fromCharCode((122 - x.charCodeAt()) + 97)).join('');
}

/* 7 kyu
Two Oldest Ages} */
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

/* 7 kyu
Extending JavaScript Objects: Simple Math Methods} */
Number.prototype.add = function (n) { return this + n; };
Number.prototype.sub = function (n) { return this - n; };
Number.prototype.mul = function (n) { return this * n; };
Number.prototype.div = function (n) { return this / n; };
Number.prototype.pow = function (n) { return this ** n; };
Number.prototype.sqr = function () { return Math.sqrt(this); };


/* 7 kyu
Extending JavaScript Objects: Get First & Last Array Element} */
Array.prototype.first = function() {return this[0]}
Array.prototype.last = function() {return this[this.length - 1]}

/* 7 kyu
Extending JavaScript Objects: Reverse String} */
String.prototype.reverse = function() { return [...this].reverse().join(""); }

/* 7 kyu
Extending JavaScript Objects: Contains Method} */
String.prototype.contains = function (str, checkCase) {
  return checkCase ? this.indexOf(str) >= 0 : this.toLowerCase().indexOf(str.toLowerCase()) >= 0;
};


/* 7 kyu
C.Wars} */
function initials(n) {
  n = n.split(" ");
  return n.map((l, i) => i < n.length - 1 ? l[0].toUpperCase() + '.' : l[0].toUpperCase() + l.slice(1).toLowerCase()).join('');
}

/* 7 kyu
SevenAte9} */
function sevenAte9(str) {
  let curr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '9' && str[i - 1] === '7' && str[i + 1] === '7'
    ) continue;
    curr += str[i];
  }
  return curr;
}

/* 7 kyu
EAN Validation} */
function validateEAN(c) {
  return [...c].reduce((a, v, i) => a + (i % 2 ? +v * 3 : +v), 0) % 10 === 0;
}

/* 7 kyu
Generating Markdowns} */
generateMarkdowns=(m,t,u)=>m[0]=='c'?`${'```'}${u}\n${t}\n${'```'}`:`${m[0]=='i'?'!':''}[${t}](${u})`;

/* 7 kyu
Valid Spacing} */
function validSpacing(s) {
  if (s[0] === ' ' || s[s.length - 1] === ' ') return false;
  return !s.match(/\  /g);
}

/* 7 kyu
A Promise is a Promise} */
function promiseHelloWorld() {
  return new Promise((resolve) => resolve('Hello World!'))
}

/* 7 kyu
Summing a number's digits} */
function sumDigits(number) {
  number = [..."" + number];
  if (number[0] === '-') number.shift();
  return number.reduce((a, c) => +a + +c, 0);
}

/* 7 kyu
Maximum Length Difference} */
function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1;
  let min = [Infinity, Infinity];
  let max = [-Infinity, -Infinity];
  for (let n of a1) {
    const curr = n.length;
    if (curr < min[0]) min[0] = curr;
    if (curr > max[0]) max[0] = curr;
  }
  for (let n of a2) {
    const curr = n.length;
    if (curr < min[1]) min[1] = curr;
    if (curr > max[1]) max[1] = curr;
  }
  return Math.max(Math.abs(max[1] - min[0]), Math.abs(max[0] - min[1]));
}

/* 7 kyu
Algorithm Fun: Find The Unknown Number - Part I} */
function findUnknowNumber(x, y, z) {
  let i = 1;
  while (true) {
    if (i % 3 === x && i % 5 === y && i % 7 === z) {
      break;
    }
    i++;
  }
  return i;
}

/* 7 kyu
Reversing Fun} */
function flipNumber(n) {
  if (n.length === 1) return n;
  let res = '';
  let temp = n.slice().split('');
  while (temp.length) {
    res += temp.reverse().shift();
  }
  return res;
}


/* 7 kyu
Character Counter} */
function validateWord(s){
  let m = {}
  for (let l of s.toLowerCase()){
    m[l] = (m[l] || 0) + 1
  }
  return new Set(Object.values(m)).size === 1;
}

/* 7 kyu
Odd-Even String Sort} */
function sortMyString(s) {
  let [e, o] = ['', ''];
  for (let i = 0; i < s.length; i++) {
    i % 2 === 0 ? e += s[i] : o += s[i];
  }
  return e + " " + o;
}

/* 7 kyu
Alphabetical Addition} */
function addLetters(...l) {
  const n = Math.abs(l.reduce((a, c) => a - c.charCodeAt(), l.length * 96) % 26);
  return String.fromCharCode(n === 0 ? 122 : n + 96);
}

/* 7 kyu
Making Copies} */
function copyList(l){
  return l.slice()
}


/* 7 kyu
Keystroking} */
function numKeyStrokes(text) {
  let res = 0;
  let two = '~!@#$%^&*()_+{}|:"<>?';
  let one = "1234567890-=[]\;',./'`";

  for (let i = 0; i < text.length; i++) {
    let curr = text[i];
    if (two.includes(curr)) {
      res += 2;
    } else if (one.includes(curr)) {
      res += 1;
    } else {
      res += (curr.toUpperCase() === curr && curr !== ' ') ? 2 : 1;
    }
  }
  return res;
}

/* 7 kyu
Changing letters} */
function swap (string) {
  let vow = ['a','e','i','o','u'];
  return string.split('').map(x => vow.includes(x) ? x.toUpperCase() : x).join('');
}

/* 7 kyu
Return a string's even characters.} */
function evenChars(s) {
  return (s.length > 1 && s.length <= 100)
    ? s.split('').reduce((a, c, i) => i % 2 !== 0 ? [...a, c] : a, []) : "invalid string";
}

/* 7 kyu
21 Sticks} */
function makeMove(sticks) {
  return sticks % 4 || 1;
}

/* 7 kyu
Use map() to double the values in an array} */
function double(array) {
  return array.map(v => +v*2)
}

/* 7 kyu
Are there doubles?} */
function doubleCheck(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

/* 7 kyu
Double value every next call} */
class Class {
  static count = 0
  static getNumber() { return 2 ** Class.count++ }
}

/* 7 kyu
Old Greg's Binary Fingers} */
function binaryFingers(b) {
  let res = [];
  if (!b) return res;

  const f = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinkie']
  const n = b.split('').reverse().join('');
  for (let i = 0; i < n.length; i++) {
    if (+n[i]) {
      res.push(f[i]);
    }
  }
  return res.reverse();
}

/* 7 kyu
Bus Timer} */
function busTimer(time) {
  let [h, m] = time.split(':').map(n => parseInt(n, 10));
  m = ((h * 60) + 5 + m) % 1440;
  if (m > 0 && m < 360) { return 360 - m; }
  return (15 - m % 15) % 15;
}

/* 7 kyu
L2: Triple X} */
function tripleX(str) {
  let idx = str.indexOf('x');
  return str.slice(idx, idx + 3) === 'xxx';
}


/* 7 kyu
Closure Counter} */
function counter() {
  let count = 0;
  return () => {
    return ++count;
  };
}

/* 7 kyu
Multiplication - Generators #2} */
function* generator(a) {
  let b = 1;
  while (true) {
    yield `${a} x ${b} = ${a * b}`;
    b++;
  }
}


/* 7 kyu
Binary scORe} */
function score(n) {
  return (n === 0 || n === 1) ? n : 2 ** (n >>> 0).toString(2).length - 1;
}

/* 7 kyu
Sequence generator} */
function sequence(n, pattern) {
  return Array.from({ length: n }, typeof pattern === 'function' ? pattern : () => pattern);
}

/* 7 kyu
Lost number in number sequence} */
function findDeletedNumber(arr, mixArr) {
  let mx = Math.max(...arr);
  while (mx >= 0) {
    if (!mixArr.includes(mx)) {
      return mx;
    }
    mx--;
  }
  return 0;
}


/* 7 kyu
Doubleton number} */
function doubleton(num){
  let n = num + 1
  while (true){
    if (new Set(String(n)).size === 2) return n
    n++
  }
} 

/* 7 kyu
Shifter words} */
const tst = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"];
function shifter(s) {
  return s.length ? [...new Set(s.split(' '))].filter(w => [...w].every(l => tst.includes(l))).length : 0;
}

/* 7 kyu
Round up to the next multiple of 5} */
function roundToNext5(n){
  if (n === 5 || n === 0) return n
  return Math.ceil(n / 5) * 5
}

/* 7 kyu
Count up the points for the 7 Wonders board game! Easy version} */
function solve(c, g, t) {
  return c**2 + g**2 + t**2 + (Math.min(c, g, t) * 7);
}

/* 7 kyu
They're good dogs.} */
function weRateDogs(s, r) {
  const d = s.search(/\//);
  return `${s.slice(0, d - 2).trim()} ${r}${s.slice(d)}`;
}

/* 7 kyu
Makes the Sentence} */
function makesTheSentence(arr,str) {
  str = str.replace(/\s/g, '')
  let h = {}
  for (let l of str) { h[l] = (h[l] || 0) + 1; }
  for (let l of arr) { h[l] = (h[l] || 0) - 1; }
  
  return Object.values(h).every(n => n == 0);
}

/* 7 kyu
Middle Me} */
middleMe = (N,X,Y) => N%2==0 ? `${Y.repeat(N/2)}${X}${Y.repeat(N/2)}` : X

/* 7 kyu
Consecutive Differences} */
function differences(a) {
  if (a.length === 1) return a[0];
  for (let i = 0; i < a.length - 1; i++) {
    a[i] = Math.abs(a[i] - a[i + 1]) || 0;
  }
  a.pop();
  return differences(a);
}

/* 7 kyu
What dominates your array?} */
function dominator(arr) {
  let h = {};
  for (let n of arr) { h[n] = (h[n] || 0) + 1; }

  let m = Math.max(...Object.values(h));
  if ((m / arr.length) <= .5) return -1;


  const ents = Object.entries(h);
  let res = 0;
  for (let i = 0; i < ents.length; i++) {
    if (+ents[i][1] === m) {
      res = +ents[i][0];
      break;
    }
  }
  return res;
}

/* 7 kyu
Unpacking Arguments} */
function spread(func, args) {
  return func(...args)
}

/* 7 kyu
Duplicate sandwich} */
function duplicateSandwich(a) {
  let map = [];
  let indices = [];
  for (let l of a) { map[l] = (map[l] || 0) + 1; }

  for (let i = 0; i < a.length; i++) {
    if (map[a[i]] >= 2) {
      indices.push(i + 1, a.lastIndexOf(a[i]));
      break;
    }
  }
  return a.slice(...indices);
}

/* 7 kyu
Find The Duplicated Number in a Consecutive Unsorted List} */
function findDup(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) > i) {
      res = arr[i];
      break;
    }
  }
  return res;
}


/* 7 kyu
Check your arguments} */
function objectType(obj) {
  return Object.prototype.toString.call(!arguments.length ? null : obj);
}

/* 7 kyu
For the sake of argument} */
const numbers = (...args) => args.every((e) => typeof e === 'number');

/* 7 kyu
List Filtering} */
function filter_list(l) {
  return l.filter(v => typeof v === 'number')
}

/* 7 kyu
Sum of Minimums!} */
function sumOfMinimums(arr) {
  return arr.reduce((a, c) => a + Math.min(...c), 0)
}

/* 7 kyu
COFFEE!} */
function coffee(str) {
  return str.replace(/coffee/ig, 'COFFEE');
}

/* 7 kyu
Check three and two} */
function checkThreeAndTwo(a) {
  let h = {}
  for (let l of a) {
    if (h[l]) h[l]++
      else h[l] = 1
  }
  const ent = Object.entries(h);
  if (ent.length !== 2) return false;
  
  return Math.abs(ent[0][1] - ent[1][1]) === 1;
}

/* 7 kyu
Most valuable character} */
function solve(st) {
  if (st.length === 1) return st;

  let h = {};
  for (let i = 0; i < st.length; i++) {
    const diff = st.lastIndexOf(st[i]) - i;
    h[st[i]] = h[st[i]] ? Math.max(h[st[i]], diff) : diff;
  }

  let ents = Object.entries(h);
  return ents.sort((a, b) => a[1] === b[1] ? b[0].localeCompare(a[0]) : a[1] - b[1])[ents.length - 1][0];
}

/* 7 kyu
Roasting Chicken} */
function cookingTime(w) {
  if (!w) return "There is no chicken!";
  
  let div = Math.ceil(((4 * w) / 0.45) + 4) * 5;

  let res = '';
  let [h, m] = [(div / 60) >> 0, div % 60];
  
  if (h) {
    h = (h == 1) ? h + " hr" : h + " hrs";
    res += h;
  }

  if (m) {
    m = h ? " " + m + " mins" : m + " mins";
    res += m;
  }

  return res;
}


/* 7 kyu
Harry and the Mathematician's Chicken} */
function chickenOptions(n) {
  let res = [0];
  if (!n || typeof n !== 'number' || n <= 2) return res;

  for (let i = 2; i <= Math.min(n, 18); i++) {
    if (i % 10 % 6 === 0 || i % 10 % 3 === 0 || i % 6 % 3 === 0) {
      res.push(i);
    }
  }

  return n <= 18 ? res : res.concat(Array.from({ length: n - 18 }, (_, i) => i + 19));
}

/* 7 kyu
After(?) Midnight} */
function dayAndTime(n) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const cm = v => ((n % v) + v) % v;
  const d = days[(cm(10080) / 1440) >> 0];
  const m = String(cm(1440) / 60 >> 0).padStart(2, '0');
  return `${d} ${m}:${String(cm(60) >> 0).padStart(2, '0')}`;
}

/* 7 kyu
Alphabetically ordered} */
function alphabetic(s) {
  if (!s.length || s.length < 2) return true;

  let isalph = true;
  for (let i = 0; i < s.length; i++) {
    let [curr, prev] = [s.charCodeAt(i), s.charCodeAt(i - 1)];
    if (i > 0 && (curr < prev)) {
      isalph = false;
      break;
    }
  }
  return isalph;
}

/* 7 kyu
Invisible cubes} */
function notVisibleCubes(n) {
  return n - 2 > 0 ? Math.pow(n - 2, 3) : 0;
}

/* 7 kyu
Months, Weeks, Days, Hours and Minutes} */
function displayValue(value) {
  let times = { month: 40320, week: 10080, day: 1440, hour: 60, minute: 1 };

  let res = '';
  for (let k in times) {
    if (value >= times[k]) {
      let val = Math.floor(value / times[k]);
      if (res) res += ' ';
      res += val += val > 1 ? ' ' + k + 's' : ' ' + k;
      value = value % times[k];
    }
  }
  return res;
}

/* 7 kyu
Decipher the Message} */
function decipher(msg) {
  let res = '';
  for (let i = 0; i < msg.length; i++) {
    let curr = msg[i].charCodeAt(0);
    if (curr < 123 && curr > 96) {
      curr += 7
      if (curr > 122) {
        curr = 97 + (curr % 123);
      }
      res += String.fromCharCode(curr);
    } else if (curr > 64 && curr < 91){
      curr += 7
      if (curr > 90) {
        curr = 65 + (curr % 91);
      }
      res += String.fromCharCode(curr);
    } else {
      res += msg[i];
    }
  }
  return res;
}

/* 7 kyu
Can Santa save Christmas?} */
function determineTime(d) {
  return d.reduce((a, c) => {
    const [h, m, s] = c.split(':');
    return a - ((+h * 3600) + (+m * 60) + +s);
  }, 86400) >= 0;
}

/* 7 kyu
SpeedCode #4 × Factory Functions #3 - Artefacts} */
function artefact(name, age, location, status) {
  const obj = {
    name: name,
    age: age,
    location: location,
    status: status,
  }
  return Object.freeze(obj);
}

/* 7 kyu
Factory Functions #2 - Inheritance and Object Composition} */
function constructionWorker(firstName, lastName, age, gender, married, boss) {
  const dude = person(firstName, lastName, age, gender, true, 'construction worker', married);
  dude.boss = boss;
  dude.sayBossName = function () {
    return `My boss is called ${this.boss} and is a very nice person!`;
  };
  return dude;
}

/* 7 kyu
Fun with ES6 Classes #2 - Animals and Inheritance} */
class Shark extends Animal {
  constructor (name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor (name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor (name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}


/* 7 kyu
Fun with ES6 Classes #4 - Cubes and Setters} */
class Cube {
  constructor(length) {
    this._length = length;
  }
  
  get surfaceArea() {
    return this._length * this._length * 6;
  }
  
  get volume() {
    return this._length * this._length * this._length;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  set surfaceArea(surfaceArea) {
    this._surfaceArea = surfaceArea;
    this._length = Math.sqrt(surfaceArea / 6);
  }

  set volume(volume) {
    this._volume = volume;
    this._length = Math.cbrt(volume);
  }
}


/* 7 kyu
Count consonants} */
function consonantCount(str) {
  return str.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '').length;
}

/* 7 kyu
Compare Strings by Sum of Chars} */
function compare(s1, s2) {
  if (!s1 && !s2) return true;

  const getsum = str => {
    if (!str) return 0;
    let ns = str.replace(/[^A-Za-z]/g, '');
    if (ns.length !== str.length) return 0;
    return str.split('').reduce((a, c) => a + c.toUpperCase().charCodeAt(0), 0);
  };
  return getsum(s1) === getsum(s2);
}

/* 7 kyu
Cats and shelves} */
function solution(s, f) {
  if (s === f || f < s || !f || !s) return 0;
  
  let jumps = Math.floor((f - s) / 3);
  
  if ((f - s) % 3 === 1) {
    jumps += 1;
  }
  
  if ((f - s) % 3 === 2) {
    jumps += 2;
  }

  return jumps;
}

/* 7 kyu
Substring fun} */
function nthChar(words) {
  let res = '';
  for (let i = 0; i < words.length; i++) {
    res += words[i][i] || '';
  }
  return res;
}

/* 7 kyu
Running out of space} */
const spacey = arr => arr.map((_, i, a) => a.slice(0, i + 1).join(''));


/* 7 kyu
Run your String} */
function runYourString(arg, obj) {
  return new Function(obj.param, obj.func)(arg);
}

/* 7 kyu
Tabs to spaces} */
function tabToSpaces(t) {
  let res = '';
  let curr = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '\n') {
      res += '\n';
      curr = 0;
    } else if (t[i] === '\t') {
      res += ' '.repeat(4 - (curr % 4));
      curr += 4 - (curr % 4);
    } else {
      curr++;
      res += t[i];
    }
  }
  return res;
}

/* 7 kyu
Latin Squares} */
function makeLatinSquare(n) {
  return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i + j) % n + 1));
}

/* 7 kyu
Factorial} */
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n === 0 ? 1 : n * factorial(n - 1);
}

/* 7 kyu
Factorial division} */
function factorialDivision(n, d) {
  let res = 1n;
  for (let i = n; i > d; i--) {
    res *= i;
  }
  return res;
}

/* 7 kyu
Factorial} */
function factorial(n){
  return n === 0 ? 1 : n * factorial(n - 1);
}

/* 7 kyu
Sum Factorial} */
function sumFactorial(arr) {
  const fact = n => n === 0 ? 1 : n * fact(n - 1);
  return arr.reduce((a, c) => a + fact(c), 0);
}

/* 7 kyu
Color to Grayscale} */
function rgbToGrayscale(c) {
  return `#${Math.round(
    0.299 * parseInt(c.slice(1, 3), 16) +
    0.587 * parseInt(c.slice(3, 5), 16) +
    0.114 * parseInt(c.slice(5, 7), 16)
  ).toString(16).padStart(2, '0').repeat(3)}`;
}

/* 7 kyu
Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe} */
function countDevelopers(list) {
  return list.filter((person) => person.continent === 'Europe' && person.language === 'JavaScript').length;
}

/* 7 kyu
Coding Meetup #2 - Higher-Order Functions Series - Greet developers} */
function greetDevelopers(list) {
  for (let [k, v] of Object.entries(list)) {
    v.greeting = `Hi ${v.firstName}, what do you like the most about ${v.language}?`;
  }
  return list;
}

/* 7 kyu
Check the exam} */
function checkExam(a1, a2) {
  a1 = a1.reduce((a, c, i) => c === a2[i] ? a + 4 : a2[i] === "" ? a : a - 1, 0);
  return a1 < 0 ? 0 : a1;
}


/* 7 kyu
Alternate capitalization} */
function capitalize(s) {
  return s.split('').reduce((a, c, i) => {
    a[0] += i % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
    a[1] += i % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
    return a;
  }, ['', '']);
};

/* 7 kyu
Complete The Pattern #1} */
function pattern(n) {
  if (n < 1) return "";
  let res = '1';
  for (let i = 2; i <= n; i++) {
    res += `\n${("" + i).repeat(i)}`;
  }
  return res;
}

/* 7 kyu
Number-Star ladder} */
function pattern(n) {
  let res = '1';
  if (n <= 1) return res;
  for (let i = 2; i <= n; i++) {
    res += `\n1${'*'.repeat(i - 1)}${i}`;
  }
  return res;
}


/* 7 kyu
draw me a chessboard} */
function chessBoard(r, c) {
  let res = [];
  let arr = Array.from({ length: c }, (_, i) => i % 2 === 0 ? 'O' : 'X');
  for (let i = 0; i < r; i++) {
    res.push(i % 2 === 0 ? arr : [...arr.slice(1), ...arr.slice(0, 1)]);
  }
  return res;
}


/* 7 kyu
Excel sheet column numbers} */
function titleToNumber(title) {
  return title.split('').reduce((a, c) => 26 * a + c.charCodeAt(0) - 64, 0)
}

/* 7 kyu
Insert dashes} */
function insertDash(num) {
  let res = '';
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      if (num[i - 1] % 2 !== 0 && i > 0) {
        res += '-';
      }
    }
    res += num[i];
  }
  return res;
}


/* 7 kyu
How many consecutive numbers are needed?} */
function consecutive(arr) {
  arr = arr.sort((a, b) => a - b);
  let set = new Set(arr);
  for (let i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
    set.add(i);
  }
  return set.size - arr.length;
}

/* 7 kyu
Most Likely} */
function mostLikely(prob1,prob2){
  let [a1,c1] = prob1.split(':');
  let [a2,c2] = prob2.split(':');
  return (+a1/+c1) > (+a2/+c2);
}

/* 7 kyu
Likes Vs Dislikes} */
// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  if (!buttons.length) return 'Nothing';
  let res = [buttons[0]];
  for (let i = 1; i < buttons.length; i++) {
    if (!res.includes(buttons[i])) { res = []; }
    res.push(buttons[i]);
  }
  return res.length % 2 === 0 ? 'Nothing' : res[0];
}

/* 7 kyu
Sort array by string length} */
function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)
};

/* 7 kyu
Adding values of arrays in a shifted way} */
function addingShifted(arr, shift) {
  let res = [...arr[0], ...Array(shift * (arr.length - 1)).fill(0)];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      res[j + (shift * i)] += arr[i][j];
    }
  }
  return res;
}

/* 7 kyu
Consecutive letters} */
function solve(s) {
  let sorted = [...new Set(s)].map(x => x.charCodeAt(0)).sort((a, b) => a - b);
  return s.length === sorted.length && sorted[sorted.length - 1] - sorted[0] === s.length - 1
}

/* 7 kyu
Split In Parts} */
var splitInParts = function (s, len) {
  let res = '';
  for (let i = 0; i < s.length; i += len) {
    res += s.substring(i, i + len);
    if (i + len < s.length)
      res += " ";
  }
  return res;
};

/* 7 kyu
Creating a Bitset, Part 1} */
function byteToSet(byte) {
  let set = new Set();
  if (!byte) return set;
  byte = byte.toString(2);

  for (let i = 0, j = 8 - byte.length; i < byte.length; i++, j++) {
    if (+byte[i]) {
      set.add(j);
    }
  }
  return set;
}

/* 7 kyu
The dropWhile Function} */
function dropWhile(arr, pred) {
  let i = 0;
  while (pred(arr[i])) {
    i++;
    if (i === arr.length) return [];
  }
  return arr.slice(i);
}

/* 7 kyu
The Span Function} */
function span(arr, fn) {
  if (!arr.length || !arr) return [[], []];
  let res = [[], []];
  let i = 0;
  while (fn(arr[i])) {
    res[0].push(arr[i]);
    i++;
    if (i === arr.length) break;
  }
  res[1] = arr.slice(i);
  return res;
}

/* 7 kyu
Equalize the array!} */
function equalize(a) {
  return a.map((x) => x >= a[0] ? `+${x - a[0]}` : `${x - a[0]}`);
}

/* 7 kyu
Calculate Julie's Age} */
function age(x, y) {
  return x > 0 ? (x - y) * y : (Math.abs(x) * y) / (1 - y);
}

/* 7 kyu
Calculate Two People's Individual Ages} */
function getAges(sum, difference) {
  if (difference <= 0) return null;
  let a = (sum - difference) / 2;
  let b = a + difference;
  if (a < 0 || b < 0) return null;
  return [b, a];
};

/* 7 kyu
Age in days} */
function ageInDays(y, m, d) {
  return `You are ${~~((new Date() - new Date(y, m - 1, d)) / (1000 * 60 * 60 * 24))} days old`;
}

/* 7 kyu
Movie Showtimes} */
function movie_times(o, c, l) {
  c = o > c ? (c + 24) * 60 : c * 60;
  o *= 60;
  let res = [];
  while (o <= c - l) {
    res.push([~~(o / 60) % 24, o % 60]);
    o += l + 15;
  }
  return res;
}


/* 7 kyu
Decimal Time Conversion} */
function toIndustrial(time) {
  const toDec = (time) => +String((time / 60).toFixed(2));
  if (typeof time === 'string') {
    const [m, s] = time.split(":");
    return toDec((+m * 60) + +s);
  }
  return toDec(time);
}

function toNormal(time) {
  const m = Math.floor(time);
  const s = String(Math.round(time * 60 % 60));
  return `${m}:${s.length < 2 ? "0" + s : s}`;
}

/* 7 kyu
You Got Change?} */
function giveChange(amount) {
  let m = { 1: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0 };
  const keys = Object.keys(m);

  for (let i = keys.length - 1; i >= 0; i--) {
    let tempamount = amount % keys[i];
    if (tempamount !== amount) {
      m[keys[i]] += (amount - tempamount) / keys[i];
      amount = tempamount;
    }
  }
  return Object.values(m);
}

/* 7 kyu
Sum of integers in string} */
function sumOfIntegersInString(s) {
  s = s.match(/\d+/g);
  if (!s) return 0;
  return s.reduce((a, c) => +a + +c, 0);
}


/* 7 kyu
Check digit} */
function checkDigit(n, idx1, idx2, dig) {
  return n
    .toString()
    .split('')
    .map((x) => +x)
    .slice(Math.min(idx1, idx2), Math.max(idx1, idx2) + 1)
    .includes(dig);
}

/* 7 kyu
Is every value in the array an array?} */
const arrCheck = (v) => v.every((e) => Array.isArray(e));


/* 7 kyu
Adding Arrays} */
function arrAdder(arr) {
  let r = [];
  arr.forEach((row, i) => {
    row.forEach((col, i) => {
      if (r[i] == undefined) {
        r[i] = '';
      }
      r[i] += col;
    });
  });
  return r.join(' ');
}


/* 7 kyu
Adding useful functional functionality to JavaScript arrays} */
Array.range = function (start, count) {
  return Array.from({ length: count }, (_, i) => i + start);
};

Array.prototype.sum = function () {
  return this.reduce((a, c) => a + c, 0);
};

/* 7 kyu
Find your caterer} */
function findCaterer(b, p) {
  const c = [15, 20, 30].map((v, i) => {
    v *= (p > 60 && i === 2) ? (p * .8) : p;
    return (v <= b && v > 0) ? i + 1 : null;
  });
  return Math.max(...c) || -1;
}

/* 7 kyu
SpeedCode #1 - Getters and Setters in Object Literals} */
const person = {
  firstName: "Jane",
  lastName: "Doe",
  get fullName() { return `${this.firstName} ${this.lastName}`; },
  set fullName(v) {
    v = v.split(' ')
    this.firstName = v[0]
    this.lastName = v[1]
  }
};

/* 7 kyu
Trimming a string} */
function trim(str, size) {
  if (str.length <= size) return str;
  str = str.slice(0, size)
  return str.length > 3 ? str.slice(0, -3) + "..." : str + "..."
}

/* 7 kyu
Implementing a Queue} */
class Queue {
  constructor() {
    this.list = [];
  }
  enqueue(item) {
    this.list.unshift(item);
  }
  dequeue() {
    return this.list.pop();
  }
  size() {
    return this.list.length;
  }
}

/* 7 kyu
Binary Tree Search (not BST)} */
function search(n, root) {
  if (root === null) return false;
  if (root.value === n) return true;
  return search(n, root.left) || search(n, root.right);
}

/* 7 kyu
Set Reducer} */
function setReducer(input) {
  if (input.length === 1) return input[0];
  let res = [];
  let count = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      res.push(count);
      count = 1;
    }
  }
  return setReducer(res);
}

/* 7 kyu
Boxlines} */
function f(x, y, z) {
  const sum = (a, b, c) => a * (b + 1) * (c + 1);
  return sum(x, y, z) + sum(y, z, x) + sum(z, x, y);
}

/* 7 kyu
Fac Recursion (Pest control - find the bugs and fix them)} */
function facRecursion(value) {
  if (value < 0) {
    return 0;
  } else if (value === 1 || value === 0) {
    return 1;
  } else {
    return value *= facRecursion(value - 1);
  }
}


/* 7 kyu
Smallest value of an array} */
function min(a, r) {
  return r === "index" ? a.indexOf(Math.min(...a)) : Math.min(...a);
}

/* 7 kyu
Convert a linked list to a string} */
function stringify(list) {
  if (list === null) return "null";
  else return `${list.data} -> ${stringify(list.next)}`;
}

/* 7 kyu
The real size of a multi-dimensional array} */
function realSize(arrays) {
  let size = 0;
  if (!arrays.length) return 0;
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      size += realSize(arrays[i]);
    } else if (typeof arrays[i] === "number") {
      size += 1;
    }
  }
  return size;
}

/* 7 kyu
Sum squares of numbers in list that may contain more lists} */
function SumSquares(l) {
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    if (Array.isArray(l[i])) {
      sum += SumSquares(l[i]);
    } else if (typeof l[i] === "number") {
      sum += (l[i] ** 2);
    }
  }
  return sum;
}

/* 7 kyu
Sum ALL the arrays!} */
function arraySum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let temp = arraySum(arr[i]);
      res += typeof temp === "number" ? temp : 0;
    } 
    res += typeof arr[i] === "number" ? arr[i] : 0;
  }
  return res;
}

/* 7 kyu
Recursive Replication} */
function replicate(t, n) {
  return t <= 0 ? [] : [n].concat(replicate(t - 1, n));
}

/* 7 kyu
Reverser} */
function reverse(n) {
  let rev = 0;
  while (n) {
    rev = rev * 10 + n % 10;
    n = ~~(n / 10);
  }
  return rev;
}

/* 7 kyu
Recursion #2 - Fibonacci} */
const fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

/* 7 kyu
Naughty or Nice} */
function naughtyOrNice(data) {
  let nice = 0;
  for (let month in data) {
    for (let day in data[month]) {
      data[month][day] == 'Nice' ? nice++ : nice--;
    }
  }
  return nice >= 0 ? "Nice!" : "Naughty!";
}

/* 7 kyu
Multiply the strings in the array} */
function arrMultiply(arr) {
  return arr.reduce((a, c) => +a * +c, 1).toString()
}

/* 7 kyu
Correct the date-string} */
function dateCorrect(ds) {
  if (!ds) return ds;
  const [d, m, y] = ds.split(".").filter(x => !Number.isNaN(+x));
  if (!y) return null;
  return new Date(+y, +m - 1, +d).toLocaleDateString("ro-RO")
}

/* 7 kyu
Correct the time-string} */
function timeCorrect(ts) {
  if (!ts) return ts;

  const [h, m, s] = ts.split(":").filter(x => !Number.isNaN(+x));
  if (!s) return null;
  
  return new Date(2023, 1, 1, +h, +m, +s).toTimeString().slice(0, 8);
}

/* 7 kyu
esreveR} */
reverse = function(array) {
  let res = []
  for (let i = array.length - 1; i >= 0; i--) {
    res.push(array[i])
  }
  return res
}

/* 7 kyu
Leap Years} */
function isLeapYear(year) {
  return (year%4 === 0 && year%100 !== 0) || year % 400 === 0
}

/* 7 kyu
JavaScript class-like objects} */
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() { return `${this.name} is a ${this.type}`; }
  type() { return this.type; }
  name() { return this.name; }
}

/* 7 kyu
Thinkful - Object Drills: Quarks} */
class Quark{
  constructor(color, flavor) {
    this.color = color
    this.flavor = flavor
    this.baryon_number = 1/3
  }
  interact(q2) {
    let temp = q2.color
    q2.color = this.color
    this.color = temp
  }
}


/* 7 kyu
Scoring Tests} */
function scoreTest(str, r, o, w){
  return str.map(x => x==0 ? r : x==1 ? o : x==2 ? -w : null).reduce((a, c) => a + c, 0)
}


/* 7 kyu
Find the anonymous function} */
var FindFunction = function(func, arr) {
  let idx = func.map((x, i) => typeof x == "function" ? i : null).filter(x => x != null)
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (func[idx](arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}


/* 7 kyu
Candy problem} */
function candies(kids){
  if (!Number.isInteger(kids[0])||kids[0]==0||kids.length==1) return -1
  return kids.map((x) => Math.max(...kids) - x).reduce((a, c) => a + c, 0)
}

/* 7 kyu
#~For Kids~# d/m/Y -> Day of the week.} */
function dayOfTheWeek(date) {
  let d = date.split("/")
  const options = { weekday: 'long' }
  return new Date(`${d[2]}-${+d[1]}-${+d[0]}`).toLocaleString('en-US', options)
}

/* 7 kyu
Counting Valleys} */
function countingValleys(s) {
  let key = { 'U': 1, 'F': 0, 'D': -1 }, v = 0
  for (let i = 0, j = 0, k = 0; i < s.length; i++) {
    j = key[s[i]]
    if (j == 1) { k++ } 
    if (j == -1) { k-- }
    if (j == 1 && k == 0) { v++ }
  }
  return v
}


/* 7 kyu
Find Count of Most Frequent Item in an Array} */
function mostFrequentItemCount(c, h = {}) {
  for (n of c) h[n] ? h[n] = h[n] += 1 : h[n] = 1
  return Math.max(...Object.values(h), 0)
}


/* 7 kyu
Geometric Progression Sequence} */
function geometricSequenceElements(a, r, n){
  let res = []
  res.push(a)
  for (let i = 0; i < n - 1; i++) {
    let temp;
    temp = res[i]
    res.push(temp * r)
  }
  return res.join(", ")
}

/* 7 kyu
Javascript filter - 1} */
function searchNames(logins) {
  return logins.filter(([x]) => [...x].slice([...x].length - 1) == "_")
}


/* 7 kyu
Remove All The Marked Elements of a List} */
Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(x => values_list.indexOf(x) < 0)
}

/* 7 kyu
Authenticate a list of usernames} */
function authList(arr) {
  const n = el => el.replace(/\D/g, '').length >= 1
  const lc = el => el.replace(/[^a-z]/g, '').length >= 1
  const sym = str => {
    el = str.replace(/[^a-zA-Z0-9]+/g, '')
    return el.length >= 6 && el.length <= 10 && 
           el.length == str.length && lc(el) && n(el)
  }
  return arr.filter(x => sym(x)).length == arr.length
}


/* 7 kyu
Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language} */
function sortByLanguage(list) {
  for (i of list) {
    return list.sort((a, b) => {
      if (a.language == b.language) {
        return a.firstName.localeCompare(b.firstName)
      } else {
        return a.language.localeCompare(b.language)
      }
    })
  }
}


/* 7 kyu
Coding Meetup #14 - Higher-Order Functions Series - Order the food} */
function orderFood(list) {
  let h = {}
  for (let n of list) {
    if (h[n.meal]) h[n.meal] += 1
    else h[n.meal] = 1
  }
  return h
}


/* 7 kyu
Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins} */
function findAdmin(list, lang) {
  return list.reduce((a,c) => {
    (c.githubAdmin === 'yes' && c.language === lang) ? a.push(c) : null
    return a
  }, [])
}


/* 7 kyu
Coding Meetup #11 - Higher-Order Functions Series - Find the average age} */
function getAverageAge(list) {
  let average = 0
  list.forEach((el) => average += el.age)
  return Math.round(average/list.length)
}

/* 7 kyu
Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?} */
function isSameLanguage(list) {
  return [...new Set(list.map(x => x.language))].length === 1
}

/* 7 kyu
Simple consecutive pairs} */
function pairs(arr) {
  let count = 0

  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 !== 0) {
      if (Math.abs(arr[i - 1] + 1 - arr[i]) == 0) {
        count++
      } else if (Math.abs(arr[i - 1] - 1 - arr[i]) == 0) {
        count++
      }
    }
  }
  return count
};


/* 7 kyu
Find the middle element} */
function gimme (triplet) {
  let mx = Math.max(...triplet)
  let mn = Math.min(...triplet)
  let res = 0
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] != mx && triplet[i] != mn) {
      res += i
      break
    }
  }
  return res
}


/* 7 kyu
Parts of a list} */
function partlist(arr) {
  let res = []
  for (let i = 1; i < arr.length; i++) {
    let temp = []
    temp.push(arr.slice(0, i).join(" "))
    temp.push(arr.slice(i).join(" "))
    res.push(temp)
  }
  return res
}

/* 7 kyu
Binary Pyramid 101} */
function binaryPyramid(m, n) {
  let res = 0
  for (let i = m; i <= n; i++) {
    res += +i.toString(2)
  }
  return res.toString(2)
}


/* 7 kyu
Build a square} */
function generateShape(integer){
  let res = ''
  for (let i = 0; i < integer; i++) {
    res += String("+").repeat(integer) + '\n'
  }
  return res.length > 1 ? res.slice(0, res.length - 1) : '+\n'
}



/* 7 kyu
Kaprekar Split} */
function kaprekarSplit(n){
  let num = (n ** 2).toString()
  if (+num == n) return n - 1
  for (let i = 0; i < num.length; i++) {
    if (+(num.slice(0, i + 1)) + +(num.slice(i + 1)) == n) 
    return i + 1
  }
  return -1
}

/* 7 kyu
Split The Bill} */
function splitTheBill(x) {
  let v = Object.values(x)
  let k = Object.keys(x)
  let r = v.reduce((a, c) => a + c, 0) / k.length
  v = v.map((x) => Math.round((x - r) * 100) / 100)
  return Object.assign(...k.map((key, i) => ({[key]: v[i]})))
}


/* 7 kyu
Small enough? - Beginner} */
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

/* 7 kyu
Sort the Gift Code} */
function sortGiftCode(code){
  return code.split("").sort((a, b) => a.localeCompare(b)).join("")
}

/* 7 kyu
Nth Smallest Element (Array Series #4)} */
function nthSmallest(arr, pos){
  arr = arr.sort((a, b) => a - b)
  return arr[pos - 1]
}

/* 7 kyu
Vowel one} */
function vowelOne(s){
  return s.split("").map((x) => ['a','e','i','o','u'].indexOf(x.toLowerCase()) > -1 ? 1 : 0).join("")
}

/* 7 kyu
Move Zeros} */
function move_zeros(arrNum, isRight) {
  let nz = 0
  let arr = []
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < 1) {
      nz += 1
    } else {
      arr.push(arrNum[i])
    }
  }
  let arrz = Array(nz).fill(0)
  return isRight === false ? arrz.concat(arr) : arr.concat(arrz)
}

/* 7 kyu
Barista problem} */
function barista(c) {
  c = c.sort((a, b) => b - a)
  let t = 0
  for (let i = c.length - 1, j = 0; i >= 0; i--, j++) {
    t += c.slice(i).reduce((a, c) => a + c, 2 * j)
  }
  return t 
}

/* 7 kyu
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters} */
class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }

  get volume() {
    let {length, width, height} = this;
    return length * width * height
  }

  get surfaceArea() {
    let {length, width, height} = this;
    return 2 * (length*width + length*height + width*height);
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

/* 7 kyu
Sorting Arrays ... wait, what?!} */
Array.prototype.sort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; ++j) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]]
      }
    }
  }
  return this.filter((x) => x > 0)
}

/* 7 kyu
Array Mappings} */
Array.prototype.map = function(func) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    res.push(func(this[i], i, this))
  }
  return res
}

/* 7 kyu
Capitalize first letter of a string} */
String.prototype.capitalize = function() { 
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  alph = alph.split("")
  let cc = alph.map((x, i) => 65 + i)
  let idx = alph.indexOf(this[0])

  return idx > -1 ? String.fromCharCode(cc[idx]) + this.slice(1) : this.slice(0)
}

/* 7 kyu
Street Bowling} */
function ballTest(s, r) {
  while(r.length > 0 && s > 0) {
    let spb = r.slice(0, s).replace(/[^x]/g, '').length
    r = r.slice(s)
    s--
    s -= spb
  }
  return r == 0
}

/* 7 kyu
Make Class} */
function makeClass(...properties) {
  return class {
    constructor(...a) {
      properties.forEach((prop, idx) => this[prop] = a[idx])
    }
  }
}

/* 7 kyu
Refactored Greeting} */
class Person {
  constructor(myName) {
    this.name = myName;
  }

  greet(n) {
    return `Hello ${n}, my name is ${this.name}`
  }
}

/* 7 kyu
Building blocks} */
class Block {
  constructor(data) {
    this.data = data
  }

  getWidth() {
    return this.data[0]
  }

  getLength() {
    return this.data[1]
  }

  getHeight() {
    return this.data[2]
  }

  getVolume() {
    return this.data.reduce((a, c) => a * c, 1)
  }

  getSurfaceArea() {
    let a = this.getWidth()
    let b = this.getLength()
    let c = this.getHeight()
    return 2 * (a * b) + 2 * (b * c) + 2 * (a * c)
  }
}

/* 7 kyu
Breaking chocolate problem} */
function breakChocolate(n,m) {
  if (n * m == 0) return 0
  else return (n * m) - 1
}

/* 7 kyu
Make acronym} */
function toAcronym(str){
  str = str.split(" ")
  let acronym = ''
  for (let i = 0; i < str.length; i++) {
    acronym += str[i][0]
  }
  return acronym.toUpperCase()
}

/* 7 kyu
Credit Card Checker} */
function validCard(card){
  card = card.replace(/\D/g, '')
  let arr = [...card].reverse().map((x,i)=> i%2 != 0 ? +x*2 : +x)
  let r = []
  arr.forEach((e)=>{e=e>9?e-9:e,r.push(e)})
  return r.reduce((a,c)=>a+c,0)%10==0
}

/* 7 kyu
Strings, strings, strings (Easy)} */
Array.prototype.toString = function() {
  return '[' + this.join(", ") + ']'
}

Number.prototype.toString = function() {
  return "" + this
}

Boolean.prototype.toString = function() {
  return "" + this
}

/* 7 kyu
Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages} */
const countLanguages = (list, c = []) => {
  list.forEach((el) => { c.push(el.language) })
  return c.reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})
}

/* 7 kyu
Ordered Count of Characters} */
const orderedCount = function (text) {
  let hash = Object.entries([...text].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, []))
  let o = new Map()
  for (i in text) {o.set(text[i]) ? (o.has(text[i], o.get(text[i]))) : ''}
  o = [...o.keys()]
  
  return hash.sort((a, b) => o.indexOf(a[0]) - o.indexOf(b[0]))
}

/* 7 kyu
Greatest common divisor} */
function mygcd(x,y){
  let i = Math.min(x, y)
  if (x === i && y === i) return i

  let r = 0
  while (i > 0) {
    if (x % i === 0 && y % i === 0) {
      r += i
      break;
    } 
    i--
  }
  return r
}

/* 7 kyu
Vowel Count} */
function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++
    }
  }
  return vowelsCount
}

/* 7 kyu
Suzuki needs help lining up his students!} */
function lineupStudents(s){
  // ew   
  return s.split(" ").sort((a, b)=>a.length>b.length ? -1 : a.length<b.length ? 1 : a>b ? -1 : a<b ? 1 : 0)
}

/* 7 kyu
Fun with lists: indexOf} */
function indexOf(head, value) {
  let i = 0;
  
  while (head !== null) {
    if (head.data === value) return i;
    head = head.next
    i++
  }
  return -1
}

/* 7 kyu
Fun with lists: length} */
function length(head) {
  return head != null ? 1 + length(head.next) : 0
}

/* 7 kyu
Sum of a nested list} */
const sumNested = arr => {
  if (arr.length === 0) return 0
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total += sumNested(arr[i])
    } else {
      total += arr[i]
    }
  }
  return total
};

/* 7 kyu
The wheat/rice and chessboard problem} */
function squaresNeeded(grains) {
  if (grains <= 2) return grains
  let i = 0
  while (2**i <= grains) {
    i++
  }
  return i
}


/* 7 kyu
Maximum Product} */
function adjacentElementsProduct(arr) {
  let r = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== undefined) {
      r.push(arr[i - 1] * arr[i])
    }
  }
  return Math.max(...r)
}

/* 7 kyu
Bumps in the Road} */
function bump (x) {
  return x.split("_").join("").length <= 15 ? "Woohoo!" : "Car Dead"
}

/* 7 kyu
Count the divisors of a number} */
function getDivisorsCnt(n){
  let count = 0
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }
  return count
}


/* 7 kyu
Sum of the first nth term of Series} */
function SeriesSum(n) {
  if (n === 0) { return '0.00' }
  let series = 1
  for (let i = 0, j = 1; i < n - 1; i++) {
    j += 3
    series += 1/j
  }
  return series.toFixed(2)
}


/* 7 kyu
Format With} */
String.prototype.formatWith = function (...arguments) {
  let newStr = this.replace(/{(\d)}/g, (s, i) => arguments[i] || s)
  return newStr
}

/* 7 kyu
Which color is the brightest?} */
function brightest(colors) {
  const gc = (a) => Math.max(...[a.slice(1,3), a.slice(3,5), a.slice(5,7)].map((x) => parseInt(x, 16)))
 
  let res = []
  for (let i = 0; i < colors.length; i++) {
    res.push(gc(colors[i]))
  }

  return colors[res.indexOf(Math.max(...res))]
}

/* 7 kyu
Array Array Array} */
function explode(x){
  let n = x.filter((x)=> Number.isInteger(x))
  if (n.length === 2) {
    return Array(n[0] + n[1]).fill(x)
  } else if (n.length === 1) {
    return Array(n[0]).fill(x)
  } else {
    return "Void!"
  }
}

/* 7 kyu
Multiply Word in String} */
function modifyMultiply (str,loc,num) {
  let newStr = ''
  str = str.split(" ")
  for (let i = 0; i < num; i++) {
    if (str[loc]) {
      newStr += str[loc] + "-"
    }
  }
  return newStr.slice(0,newStr.length-1)
} 

/* 7 kyu
Row Weights} */
function rowWeights(arr, [e, o] = [0, 0]){
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) { 
      e += arr[i]
    } else { 
      o += arr[i] 
    }
  }
  return [e, o]
}

/* 7 kyu
Convert Hash To An Array} */
const convertHashToArray = (hash) => {
  hash = Object.keys(hash).sort().reduce((a,c) => {
    a[c] = hash[c]
    return a
  }, {})
  return [...Object.entries(hash)]
}

/* 7 kyu
Form The Minimum} */
function minValue(values){
  return +[...new Set(values.sort((a, b) => a - b))].join("")
}

/* 7 kyu
Product Of Maximums Of Array (Array Series #2)} */
function maxProduct(n,s){
  return n.sort((a,b) => a - b).slice(n.length - s, n.length).reduce((a, c) => a * c, 1)
}

/* 7 kyu
Maximum Gap (Array Series #4)} */
function maxGap (numbers){
  numbers = numbers.sort((a, b) => a - b)
  let r = []
  for (let i = 1; i < numbers.length; i++) {
    r.push(numbers[i] - numbers[i - 1])
  }
  return Math.max(...r)
}

/* 7 kyu
Array Leaders (Array Series #3)} */
const arrayLeaders = (numbers) => {
  let count = 0
  let curr = []
  let i = numbers.length - 1
  while (i >= 0) {
    if (numbers[i] > count) { curr.push(numbers[i]) }
    count += numbers[i]
    i--
  }
  return curr.reverse()
}

/* 7 kyu
Alphabet symmetry} */
const solve = (arr, r = []) => {  
  for (let i in arr) {
    r.push([...arr[i]].map((x) => x.toLowerCase().charCodeAt(0) - 97).filter((x, i) => x == i).length)
  }
  return r
};

/* 7 kyu
Head, Tail, Init and Last} */
// TODO: implement the four functions specified.
const head = x => x[0]
const tail = x => x.slice(1)
const init = x => x.slice(0,x.length-1)
const last = x => x[x.length-1]


/* 7 kyu
Sectional Array Sort} */
function sectSort(a, s, length) {
  let len = (length || a.length) + s
  let a1 = a.slice(0, s)
  let a2 = a.slice(s, len)
  let a3 = a.slice(len)
  return [...a1, ...a2.sort((a,b)=> a-b), ...a3]
}


/* 7 kyu
16+18=214} */
function add(num1, num2) {
  num1 = num1.toString()
  num2 = num2.toString()

  let l1 = num1.length
  let l2 = num2.length
  let len = Math.max(l1, l2)
  if (l1 == 1 || l2 == 1) { return +num1 + +num2}


  const helper = (a, b) => {
    let res = []
    for (let i = a.length; i > 0; i--) {
      res.push(parseInt(a[a.length - i]) + parseInt(b[b.length - i] || 0))
    }
    return +res.join("")
  }

  return len===l1 || l1===l2 ? helper(num1,num2) : helper(num2,num1)
}

/* 7 kyu
Fix string case} */
function solve(s){
  let ilc = [...s].filter((x) => x === x.toLowerCase()).length
  return ilc >= Math.floor(s.length/2) ? s.toLowerCase() : s.toUpperCase()
}

/* 7 kyu
Find missing numbers} */
function findMissingNumbers(arr){
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  let res = []
  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) === -1) {
      res.push(i)
    }
  }
  return res
}

/* 7 kyu
Find the Missing Number} */
function missingNo(n) {
  return n.reduce((a, c)=> a - c,(n.length*(n.length+1))/2)
}

/* 7 kyu
Balanced Number (Special Numbers Series #1 )} */
function balancedNum(n) {
  n = [...n.toString()]
  
  let l = n.length
  let p = Math.floor(l / 2)
  let left;
  let right;
  if (l % 2 === 0) {
    left = n.slice(0, p + 1)
    right = n.slice(p-1, l)
  } else {
    left = n.slice(0, p+1)
    right = n.slice(p, l)
  }
  
  const h = (arr) => {
    return arr.reduce((a,c) => +a + +c, 0)
  }
  
  return h(right) - h(left) === 0 || l <= 1 ? "Balanced" : "Not Balanced"
}

/* 7 kyu
Help the Fruit Guy} */
function removeRotten(arr){
  if (!arr || arr==null) { return [] }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0,6) === "rotten") {
      arr[i]=arr[i].slice(6).toLowerCase()
    }
  }
  return arr
}

/* 7 kyu
Number of Decimal Digits} */
function digits(n) {
  return n.toString().length
}

/* 7 kyu
Beginner Series #3 Sum of Numbers} */
function getSum(a, b) {

  if ( a == b ) return a;
  if ( a < b ) { return a + getSum( a + 1, b ); }
  else { return a + getSum( a - 1, b); }

}

/* 7 kyu
Find the divisors!} */
function divisors(integer) {
  let arr = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) { arr.push(i); }
  }
  return arr.length >= 1 ? arr : `${integer} is prime`
};



/* 7 kyu
Odd or Even?} */
function oddOrEven(array) {
  return array.filter((x)=>x%2).length%2 ? "odd" : "even"
}

/* 7 kyu
Sum of odd numbers} */
function rowSumOddNumbers(n) {
	let t = n * n + (n - 1)
  let sum = t;

  for (let i = t - 2, j = 1; j < n; i -= 2, j++) {
    sum += i
  }
  return sum
}

/* 7 kyu
Binary Addition} */
function addBinary(a,b) {
  let s = a + b
  return s.toString(2)
}

/* 7 kyu
Growth of a Population} */
function nbYear(start, percent, tourist, p) {
  let count = 0;
  while (start < p) {
    start = Math.floor(start+start * percent/100 + tourist)
    count++
  }
  return count
}

/* 7 kyu
Alphabet war} */
function alphabetWar(fight) {

  let left = ['.','s','b','p','w']
  let right = ['.','z','d','q','m']
  let score = 0;

  for (let i = 0; i < fight.length; i++) {
    if (left.indexOf(fight[i]) > -1) {
      score += left.indexOf(fight[i])
    } else if (right.indexOf(fight[i]) > -1) {
      score -= right.indexOf(fight[i])
    }
  }
  return score < 0 ? "Right side wins!" : score > 0 ? "Left side wins!" : "Let's fight again!" 
}

/* 7 kyu
Alternate case} */
function alternateCase(s) {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) < 97) {
      str += s[i].toLowerCase()
    } else {
      str += s[i].toUpperCase()
    }
  }
  return str
}

/* 7 kyu
Spacify} */
function spacify(str) {
  return str.split('').join(" ")
}

/* 7 kyu
Mumbling} */
function accum(s) {
  s = s.toUpperCase()
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (i < 1) {
      str += s[i] + "-"
    } else {
      str += s[i] + Array(i).fill(s[i].toLowerCase()).join("") + "-"
    }
  }
  return str.slice(0, str.length - 1)
}

/* 7 kyu
Find the nth Digit of a Number} */
var findDigit = function(num, nth){
  num = Math.abs(num).toString()
  if (num.length < nth || nth > num) {
    return 0
  } else if (nth <= 0)  {
    return -1
  } else {
    return +(num[num.length - nth])
  }
}

/* 7 kyu
Divide and Conquer} */
function divCon(x){
  let nums = x.filter((el) => typeof el === "number").reduce((a, c) => a + c, 0)
  return x.filter((el) => typeof el === "string").reduce((a, c) => +a - +c, nums)
}

/* 7 kyu
First-Class Function Factory} */
function factory(x){
  return array => array.map((el) => el * x);
}

/* 7 kyu
Factory Functions #1 - Creating profile for people} */
function person(firstName, lastName, age, gender, employed, occupation, married) {
  return {
    firstName, lastName, age, gender, employed, occupation, married,

    sayName() {
      return `${this.firstName} ${this.lastName}`;
    },

    introduce() {
      return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
    }
  };
}

/* 7 kyu
Coding 3min : Remove screws I} */
function sc(screws){
  let res = 1,
      rem = 1,
      next = 1,
      diff = 5;
      
  for (let i = 0; i < screws.length - 1; i++) {
    res += next + rem
    if (screws[i] !== screws[i + 1]) {
      res += diff
    }
  }
  return res
}

/* 7 kyu
sPoNgEbOb MeMe} */
function spongeMeme(sentence) {
  let res = ''
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (i % 2) {
      res += sentence[i].toLowerCase()
    } else {
      res += sentence[i].toUpperCase()
    }
  }
  return res
}

/* 7 kyu
Length and two values.} */
function opposite(n, firstValue, secondValue){
  let res = []
  for (let i = 0; i < n; i++) {
    if (i % 2){
      res.push(secondValue)
    } else {
      res.push(firstValue)
    }
  }
  return res
}

/* 7 kyu
Find the stray number} */
function stray(n) {
  n = Object.entries(n.reduce((a, c) => {
    a[c] = ++a[c] || 1; 
    return a;
  }, {}));

  if (n[0][1] === 1) return Number(n[0][0]);
  else return Number(n[1][0]);
}

/* 7 kyu
Find the stray number} */
function stray(n) {
  n = Object.entries(n.reduce((a, c) => {
    a[c] = ++a[c] || 1; 
    return a;
  }, {}));

  if (n[0][1] === 1) return Number(n[0][0]);
  else return Number(n[1][0]);
}

/* 7 kyu
Coding 3min: Bug in Apple} */
function sc(apple) {
  for (let i = 0; i < apple.length; i++){
    for (let j = 0; j < apple[i].length; j++) {
      if (apple[i][j] == "B") {
        return [i,j];
      }
    }
  }
  return null
}

/* 7 kyu
Testing 1-2-3} */
var number=function(array){
  if (!array) return [];
  let i = 0;
  let res = [];
  while (i < array.length) {
    res.push(`${i + 1}: ${array[i]}`);
    i++;
  }
  return res;
}

/* 7 kyu
Find the capitals} */
var capitals = function (word) {
  let newW = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 97) {
      newW.push(i);
    }
  }
  return newW;
};

/* 7 kyu
Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer} */
function getFirstPython (list) {
  list = list.filter((x) => x.language == "Python");
  if (list.length == 0) {
    return "There will be no Python developers";
  } else {
    let map = list.map((x) => `${x.firstName}, ${x.country}`)
    return [...map][0]
  }
}

/* 7 kyu
Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?} */
function isRubyComing (list) {
  list = list.filter((x) => x.language == "Ruby").length
  return list != 0;
}

/* 7 kyu
How Green Is My Valley?} */
function makeValley(arr) {
  arr = arr.sort((a, b) => b - a);
  let l = [];
  let r = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      r.push(arr[i]);
    } else {
      l.unshift(arr[i]);
    }
  }
  return (r.concat(l)).reverse();
}

/* 7 kyu
Don't give me five!} */
function dontGiveMeFive(start, end) {
  let res = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) res.push(i);
  }
  return res.length;

}

/* 7 kyu
Guess the Sequence} */
function sequence(x) {
  let res = [];
  
  for (let i = 1; i <= x; i++) {
    res.push(i);
  }
  return res.sort();
}

/* 7 kyu
Composing squared strings} */
function compose(s1, s2) {
  s1 = s1.split("\n");
  s2 = s2.split("\n");
  let res = [];
  
  for (let i = 0; i < s1.length; i++) {
    res.push((s1[i].slice(0, i + 1) + (s2[s2.length - 1 - i].slice(0, s2.length - i))))
  }
  
  return res.join("\n");
  
}

/* 7 kyu
String ends with?} */
function solution (str, ending) {
  return str.endsWith(ending)
}

/* 7 kyu
Interactive Dictionary} */
class Dictionary {
  constructor() {
    this.dict = {};
  }
  
  newEntry(key, value) {
    this.dict[key] = value;
  }
  
  look(key) {
    return this.dict[key] || `Can\'t find entry for ${key}`;
  }
}

/* 7 kyu
What a "Classy" Song} */
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.newArr = [];
  }
  howMany(arr) {
    let count = 0;
    for (let i of arr) {
      if(!this.newArr.includes(i.toLowerCase())) {
        this.newArr.push(i.toLowerCase());
        count++;
      }
    }
    return count;
  }
}

/* 7 kyu
Number Pairs} */
function getLargerNumbers(arr1, arr2) {
  let result = [];
  for (let i = 0; i < 10; i++) {
    if (arr1[i] >= arr2[i]) {
      result.push(arr1[i])
    } else if (arr2[i] >= arr1[i]) {
      result.push(arr2[i]);
    }
  }
  return result;
}

/* 7 kyu
The highest profit wins!} */
function minMax(x) {
  x = x.sort((a, b) => a - b)
  if (x.length > 0) {
    return [x[0], x[x.length - 1]]
  } else {
    return [1, 1]
  }
}

/* 7 kyu
Unlucky Days} */
function unluckyDays(year){
  return Array(12).fill(0).map((a, c) => new Date(String(year), c, 13))
  .filter((el) => el.getDay() === 5).length;
}

/* 7 kyu
Check if a triangle is an equable triangle!} */
function equableTriangle(a,b,c) {
  let p = a + b + c
  let x = p * .5
  let area = Math.sqrt(x * ((x - a)*(x - b)*(x - c)))
  if (area == p) { return true; }
  else { return false; }
}

/* 7 kyu
Regex validate PIN code} */
function validatePIN(pin) {
  if (pin.match(/\D/g, "") !== null) {
    return false;
  } else if (pin.length != 4 && pin.length != 6) {
    return false;
  }
  return true;
}

/* 7 kyu
Anagram Detection} */
// write the function isAnagram
var isAnagram = function(t, o) {
  const res = (w) => w.toLowerCase().split("").sort().join("");
  return res(o) === res(t);
};


/* 7 kyu
Is n divisible by (...)?} */
function isDivisible(n, ...x) {
  return x.every(y => n % y === 0)
}

/* 7 kyu
Categorize New Member} */
function openOrSenior(data) {
  return data.map(([x, y]) => (x >= 55 && y > 7) ? "Senior" : "Open")
}

/* 7 kyu
How many are smaller than me?} */
function smaller(nums) {
  let base = 0;
  let arr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    base++;
    for (let j = base; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++
      }
    }
    arr.push(count);
    count = 0;
  }
  return arr;
}

/* 7 kyu
Reverse words} */
function reverseWords(str) {
  return str.split(" ").reverse().join(" ").split('').reverse().join("")
}

/* 7 kyu
Number of People in the Bus} */
const number = (busStops) => busStops.map((x) => x[0] - x[1]).reduce((a, b) => a + b, 0);

/* 7 kyu
Ones and Zeros} */
const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);


/* 7 kyu
Two to One} */
function longest(s1, s2) {

  let newStr = s1.concat(s2).split("").sort();
  let res = [];
  for (const el of newStr) {
    if (!res.includes(el)) { res.push(el) }
  }
  return res.join("")
}

/* 7 kyu
Complementary DNA} */
function DNAStrand(dna) {
  let pairs = {A:"T", T:"A", C:"G", G:"C"};
  return dna.split('').map((x) => pairs[x]).join('');
  
}

/* 7 kyu
Printer Errors} */
function printerError(s) {
  let n = (s.replace(/[a-m]/g, "")||[]).length;
  return `${n}/${s.length}`;
}

/* 7 kyu
Isograms} */
function isIsogram(str){
  return new Set(str.toLowerCase()).size === str.length;
}

/* 7 kyu
Credit Card Mask} */
function maskify(cc) {
  return cc.replace(/\S(?=\S{4})/g, "#");
}

/* 7 kyu
Sum of two lowest positive integers} */
function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

/* 7 kyu
Exes and Ohs} */
function XO(str) {

  str = str.split("");
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x" || str[i] == "X") x++; 
      if (str[i] == "o" || str[i] == "O") o++;
  }
  if (x == o) { return true; }
   else { return false; }
}

/* 7 kyu
Shortest Word} */
function findShort(s) {
  let words = s.split(' ');
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0]);
  return shortest.length;
}

/* 7 kyu
Highest and Lowest} */
function highAndLow(numbers){
  nums = numbers.split(" ")
  return Math.max.apply(null, nums) + " " + Math.min.apply(null, nums)
}

/* 7 kyu
Jaden Casing Strings} */
String.prototype.toJadenCase = function () {
  return this.split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");

};

/* 7 kyu
Descending Order} */
function descendingOrder(n) {
  n = n.toString();
  let newArray = n.split('').sort().reverse().join('')
  return Number(newArray)
}

/* 7 kyu
Who is the killer?} */
function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}

/* 7 kyu
Square Every Digit} */
function squareDigits(num) {
  let res = '';
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    res = res + (num[i] * num[i])
  }
  return Number(res);
}

/* 7 kyu
Disemvowel Trolls} */
function disemvowel (str) {
  return str.replace(/[a/e/i/o/u/A/E/I/O/U]/g, "");
}

/* 7 kyu
Friend or Foe?} */
function friend(friends){
  return friends.filter(e => e.length === 4);
}

/* 7 kyu
Minimize Sum Of Array (Array Series #1)} */
function minSum(arr) {
  let sum = 0;
  const sorted = arr.sort((a,b) => a-b);
  for (let i = 0; i < sorted.length/2; i++) {
    sum += sorted[i] * sorted[sorted.length-1-i]
  }
  return sum
}

/* 7 kyu
Flatten and sort an array} */
function flattenAndSort(array) {
  let newArr = array.reduce((acc, el) => acc.concat(el), []);
  return newArr.sort((a, b) => a - b);
}

/* 7 kyu
JavaScript Array Filter} */
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}

/* 7 kyu
Hello World - Without Strings} */
const helloWorld = () => {
  return String.fromCharCode(72,101,108,108,111,44,32,87,111,114,108,100,33)
}

/* 7 kyu
Get the Middle Character} */
function getMiddle(s) {
  const i = Math.floor(s.length / 2);
  let result = s[i];
  if (s.length % 2 === 0 && i > 0) {
    result = s[i - 1] + result;
  }
  return result;
}

/* 7 kyu
You're a square!} */
var isSquare = function(n) {
  if (n === 0) {
    return true
  } else {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
}