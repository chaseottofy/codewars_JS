// 6 KYU
// LIST AT BOTTOM OF FILE

/*****************************
1.) Parse HTML/CSS Colors
solved: 7/11/2023
codewars.com/kata/58b57ae2724e3c63df000006
*****************************/
function parseHTMLColor(color) {
  if (color[0] !== '#') {
    color = PRESET_COLORS[color.toLowerCase()]
  }
  if (color[0] === '#' && color.length === 4) {
    color = [...color].map((v, i) => i > 0 ? v + v : v).join('');
  }
  let res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return res ? {
    r: parseInt(res[1], 16),
    g: parseInt(res[2], 16),
    b: parseInt(res[3], 16),
  } : null;
}

/*****************************
2.) Extract the contents of a given tag from the HTML document
solved: 7/11/2023
codewars.com/kata/5808ce703e55743db7000d92
*****************************/
function getTagContent(html, tag, count = 0) {
  if (!html.includes(`</${tag}>`)) return [];

  let res = [];
  if (count === 0) {
    html = html.replace(/\s{2,}/g, '').replace(/\n/g, '');
    count = 1;
  }

  let start = html.indexOf(`<${tag}`);
  let endStart = html.indexOf('>', start);
  let end = html.indexOf(`</${tag}>`);
  res.push(html.slice(endStart + 1, end));
  if (html.includes(`<${tag}`)) {
    return res.concat(getTagContent(html.slice(end + tag.length + 3), tag, 1));
  } else {
    return res;
  }
}

/*****************************
3.) Palindrome for your Dome
solved: 7/11/2023
codewars.com/kata/53046ceefe87e4905e00072a
*****************************/
function palindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  if (!s) return true;
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

/*****************************
4.) PatternCraft - Strategy
solved: 7/11/2023
codewars.com/kata/5682e809386707366d000024
*****************************/
class Fly {
  move(unit) {
    unit.position += 10;
  }
}

class Walk {
  move(unit) {
    unit.position += 1;
  }
}

class Viking {
  constructor () {
    this.position = 0;
    this.moveBehavior = {
      move: (unit) => {
        unit.position += 1;
      }
    };
  }
  move() {
    this.moveBehavior.move(this);
  }
}

/*****************************
5.) PatternCraft - Decorator
solved: 7/11/2023
codewars.com/kata/5682e545fb263ecf7b000069
*****************************/
class Marine {
  constructor(_damage, _armor) {
    this._damage = _damage;
    this._armor = _armor;
  }
  get damage() { return this._damage; };
  get armor() { return this._armor; };
  set damage(value) { this._damage = value; };
  set armor(value) { this._armor = value; };
}

class MarineWeaponUpgrade {
  constructor(marine) {
    return new Marine(marine.damage + 1, marine.armor);
  }
}

class MarineArmorUpgrade {
  constructor(marine) {
    return new Marine(marine.damage, marine.armor + 1);
  }
}

/*****************************
6.) PatternCraft - State
solved: 7/11/2023
codewars.com/kata/5682e72eb7354b2f39000021
*****************************/
class SiegeState {
  constructor() {
    this.canMove = false;
    this.damage = 20;
  }
}

class TankState {
  constructor() {
    this.canMove = true;
    this.damage = 5;
  }
}

class Tank {
  constructor() {
    this.state = new TankState();
  }
  get canMove() {
    return this.state.canMove;
  }
  get damage() {
    return this.state.damage;
  }
}

/*****************************
7.) Binary string
solved: 7/11/2023
codewars.com/kata/52654ea8e218b83553000666
*****************************/
function toBinaryString(n) {
  if (n === 0 || n === 1) return ""+n
  let r = '';
  while (n > 0) {
    r = n % 2 + r;
    n = n >> 1;
  }
  return r;
}


/*****************************
8.) Latin Square Validator
solved: 7/11/2023
codewars.com/kata/646254375cee7a000ffaa404
*****************************/
function verifyLatinSquare(arr, m) {
  if (arr.find(row => row.length !== arr.length)) { return 'Array not square'; }
  if (arr.length !== m) { return 'Array is wrong size'; }
  if (arr.find(row => row.find(col => col < 1 || col > m))) {
    const row = arr.findIndex(row => row.find(col => col < 1 || col > m));
    const col = arr[row].findIndex(col => col < 1 || col > m);
    return `${arr[row][col]} at ${row + 1},${col + 1} is not between 1 and ${m}`;
  }

  const checkRowDuplicates = (row, i, text) => {
    for (let j = 0; j < row.length; j++) {
      if (row.lastIndexOf(row[j]) !== row.indexOf(row[j])) {
        return `${row[j]} occurs more than once in ${text} ${i + 1}`;
      }
    }
    return false;
  };

  for (let i = 0; i < arr.length; i++) {
    const checkCol = checkRowDuplicates(arr.map(row => row[i]), i, 'column');
    const checkRow = checkRowDuplicates(arr[i], i, 'row');
    if (checkCol) { return checkCol; }
    if (checkRow) { return checkRow; }
  }
  return `Valid latin square of size ${m}`;
};

/*****************************
9.) Mad Max: Recursion Road
solved: 7/11/2023
codewars.com/kata/57bd0abcb9799763f1001bdc
*****************************/
function max(a, m = -Infinity) {
  return !a.length ? m : max(a.slice(1), m = a[0] > m ? a[0] : m);
}

/*****************************
10.) Numericals of a String
solved: 7/10/2023
codewars.com/kata/5b4070144d7d8bbfe7000001
*****************************/
function numericals(s) {
  let m = {};
  let str = '';
  for (let l of s) {
    m[l] = (m[l] || 0) + 1;
    str += m[l] ? m[l] : '1';
  }
  return str;
}

/*****************************
11.) Replace letters
solved: 7/10/2023
codewars.com/kata/5a4331b18f27f2b31f000085
*****************************/
function replaceLetters(word) {
  let vows = [1, 5, 9, 15, 21];
  const findClosest = (n) => {
    let min = Infinity, res = 1, f = false;
    if (n > 21) return 1;
    for (let i = 0; i < vows.length; i++) {
      if (n > vows[i]) continue;
      if (vows[i] - n < min) {
        min = vows[i] - n;
        res = vows[i];
        f = true;
      }
    }
    return !f ? 1 : res;
  };

  return [...word].map(v => {
    let vc = (v.charCodeAt() - 96);
    if (vows.includes(vc)) {
      vc = vc === 1 ? 26 : vows.includes(vc - 1) ? vc - 2 : vc - 1;
      return String.fromCharCode((vc <= 0 ? 26 : vc) + 96);
    }
    return String.fromCharCode(findClosest(vc) + 96);
  }).join("");
}

/*****************************
12.) Card game
solved: 7/10/2023
codewars.com/kata/5a3141fe55519e04d90009d8
*****************************/
function cardGame(c1, c2, MAGA) {
  if (c1 === c2) return 'Someone cheats.';
  const getW = n => `The ${['first', 'second'][n]} card won.`;

  const [s1, s2] = [c1.slice(-1), c2.slice(-1)];
  const [j1, j2] = [c1 === 'joker', c2 === 'joker'];
  if (j1) return getW(0);
  if (j2) return getW(1);
  
  const suits = ['J', 'Q', 'K', 'A'];
  let [n1, n2] = [c1.slice(0, -1), c2.slice(0, -1)];
  if (suits.includes(n1)) n1 = suits.indexOf(n1) + 11;
  if (suits.includes(n2)) n2 = suits.indexOf(n2) + 11;

  if (s1 !== s2) {
    if (s1 === MAGA && s2 === MAGA) return +n1 > +n2 ? getW(0) : getW(1);
    if (MAGA === s1) return getW(0);
    if (MAGA === s2) return getW(1);
    if (s1 !== MAGA && s2 !== MAGA) return 'Let us play again.';
  }

  return +n1 > +n2 ? getW(0) : getW(1);
}

/*****************************
13.) Break camelCase
solved: 7/9/2023
codewars.com/kata/5208f99aee097e6552000148
*****************************/
function solution(s) {
  return s.split(/(?=[A-Z])/).join(" ")
}


/*****************************
14.) Simple Encryption #1 - Alternating Split
solved: 7/9/2023
codewars.com/kata/57814d79a56c88e3e0000786
*****************************/
function encrypt(text, n) {
  if (!text || n <= 0) return text; 

  const concatHelper = str => {
    let o = '';
    let e = '';
    for (let i = 0; i < str.length; i++) {
      i % 2 == 0 ? o += str[i] : e += str[i];
    }
    return e + o;
  };

  while (n) {
    text = concatHelper(text);
    n--;
  }
  return text;
}

function decrypt(text, n) {
  if (!text || n <= 0) return text; 

  function revertConcat(str) {
    let res = Array(str.length).fill('');
    let int = 0;
    for (let i = 1; i < str.length; i += 2) {
      res[i] = str[int++];
    }
    for (let i = 0; i < str.length; i += 2) {
      res[i] = str[int++];
    }
    return res.join('');
  }

  while (n) {
    text = revertConcat(text);
    n--;
  }
  return text;
}

/*****************************
15.) Keyword Cipher Helper
solved: 7/9/2023
codewars.com/kata/535c1c80cdbf5011e600030f
*****************************/
function KeywordCipher(abc, keyword) {
  this.alph = [...new Set(keyword + abc)].join('');
  this.encode = function (str) {
    return str.split("").map(v => {
      return this.alph[abc.indexOf(v)] || v;
    }).join('');
  };

  this.decode = function (str) {
    return str.split("").map(v => {
      return abc[this.alph.indexOf(v)] || v;
    }).join('');
  };
}


/*****************************
16.) longest_palindrome
solved: 7/9/2023
codewars.com/kata/54bb6f887e5a80180900046b
*****************************/
function testPal(s) {
  return [...s].reverse().join('') === s;
}

function longestPalindrome(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let sub = s.slice(i, j);
      if (testPal(sub)) {
        max = Math.max(max, sub.length);
      }
    }
  }
  return max;
}


/*****************************
17.) Valid Phone Number
solved: 7/9/2023
codewars.com/kata/525f47c79f2f25a4db000025
*****************************/
function validPhoneNumber(n) {
  return !n.match(/[^0-9() -]/) ? !!~n.indexOf('-') && !!~n.indexOf(' ') : false;
}

/*****************************
18.) Sentence Calculator
solved: 7/9/2023
codewars.com/kata/5970fce80ed776b94000008b
*****************************/
function lettersToNumbers(s) {
  return [...s.replace(/[^a-zA-Z0-9]/g, '')].reduce((a, c) => a + (isNaN(c) ? (c.toUpperCase() == c ? ((c.charCodeAt() - 64) * 2) : c.charCodeAt() - 96) : +c), 0);
}

/*****************************
19.) Cambridge Word Scramble
solved: 7/9/2023
codewars.com/kata/564e48ebaaad20181e000024
*****************************/
function mixwords(str) {
  return typeof str == 'string' ? str.split(' ').map(w => {
    if (w.length < 4) return w;
    let l = w.replace(/[,.!?]/g, ''), s = w.replace(/[^,.!?]/g, '');
    let nw = [...w.slice(1, s ? -2 : -1)];
    nw = nw.length > 1 ? nw.sort(() => Math.random() - 0.5).join('') : nw;
    return `${l[0]}${nw}${l[l.length - 1]}${s}`;
  }).join(' ') : undefined;
};


/*****************************
20.) Shortest code: Father and Son
solved: 7/9/2023
codewars.com/kata/56f928b19982cc7a14000c9d
*****************************/
let sc = s =>[...s].filter((v,_,a) => v==v.toUpperCase()?a.includes(v.toLowerCase()):a.includes(v.toUpperCase())).join('')

/*****************************
21.) ■□ Pattern □■ : Snake
solved: 7/8/2023
codewars.com/kata/56e2ede2c92c6cb1370012ba
*****************************/
function snake(w, h) {
  const chars = ['■', '□', '∷'];
  const chars2 = ['■□', '□■'];
  
  const body = chars2[0].repeat(w / 2) + '\n' + chars2[1].repeat(w / 2) + '\n';
  if (w === 2) return body.repeat(h / 2).slice(0, -1);
  if (h === 2) return body.slice(0, -1);
  
  const p1 = chars[2].repeat(w - 2) + chars2[0] + '\n' + chars[2].repeat(w - 2) + chars2[1] + '\n';
  const p2 = chars2[0] + chars[2].repeat(w - 2) + '\n' + chars2[1] + chars[2].repeat(w - 2) + '\n';

  let res = '';
  let pside = true;
  for (let i = 0; i < h; i += 2) {
    if (i % 4 === 0) {
      res += body;
    } else {
      res += pside ? p1 : p2;
      pside = !pside;
    }
  }
  return res.slice(0, -1);
}

/*****************************
22.) Simple Fun #23: Square Digits Sequence
solved: 7/8/2023
codewars.com/kata/5886d65e427c27afeb0000c1
*****************************/
function squareDigitsSequence(a0) {
  const red = n => [...String(n)].reduce((a, c) => a + Math.pow(parseInt(c), 2), 0);
  
  let seen = [a0];
  while (true) {
    a0 = red(a0);
    if (seen.includes(a0)) break;
    seen.push(a0);
  }
  return seen.length + 1;
}

/*****************************
23.) Sort two arrays
solved: 7/8/2023
codewars.com/kata/5818c52e21a33314e00000cb
*****************************/
function sortArrays(arr1, arr2) {
  let ind2 = Object.keys(arr2).sort((a, b) => arr2[a] < arr2[b] ? -1 : arr2[a] > arr2[b] ? 1 : 0);
  let ind1 = Object.keys(arr1).sort((a, b) => arr1[a] < arr1[b] ? -1 : arr1[a] > arr1[b] ? 1 : 0);
  return [ind2.map((idx) => arr1[+idx]), ind1.map((idx) => arr2[+idx])];
}

/*****************************
24.) Join Two Arrays by Id
solved: 7/8/2023
codewars.com/kata/6481c68ffdf80b6147d85248
*****************************/
function joinArraysById(arr1, arr2) {
  const map = {};
  for (const e of arr1) {
    map[e.id] = map[e.id] ? Object.assign(map[e.id],e) : e;
  }
  for (const e of arr2) {
    map[e.id] = map[e.id] ? Object.assign(map[e.id],e) : e;
  }
  return Object.values(map)
}

/*****************************
25.) Find The Parity Outlier
solved: 7/7/2023
codewars.com/kata/5526fc09a1bbd946250002dc
*****************************/
function findOutlier(int){
  int = int.reduce((a, c, i) => {
    if (c%2) {
      a.ev[0]++;
      a.ev[1] += c;
    } else {
      a.od[0]++;
      a.od[1] += c;
    }
    return a;
  }, {ev:[0, 0], od:[0, 0]});
  
  return int.ev[0] > int.od[0] ? int.od[1] : int.ev[1];
}

/*****************************
26.) Node.js Async I/O
solved: 7/7/2023
codewars.com/kata/542106e2dda52658bf00001a
*****************************/
var exec = require('child_process').exec;
function execute(command, callback) {
  return exec(command, function(err, data) {
    return err ? callback(Error(err)) : callback(null, data);
  });
}

/*****************************
27.) Caesar Cipher Encryption - Variation
solved: 7/7/2023
codewars.com/kata/55ec55323c89fc5fbd000019
*****************************/
function caesarEncode(str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const regex = new RegExp('[a-z]', 'gi');
  let lct = str.toLowerCase();
  let res = '';
  let wordCount = 0;

  for (let i = 0; i < lct.length; i++) {
    let curr = lct[i];
    if (curr.match(regex)) {
      res += alphabet[(alphabet.indexOf(curr) + num + wordCount) % 26];
    } else {
      res += curr;
    }
    if (curr === ' ') { wordCount++; }
  }
  return res;
}


/*****************************
28.) Secret Message
solved: 7/7/2023
codewars.com/kata/54808e45ab03a2c8330009fb
*****************************/
function findSecretMessage(p) {
  p = p.toLowerCase().split(/[\\.!?]/).map(x => x[0] == ' ' ? x.slice(1) : x);
  let m = {};
  let r = [];
  p.forEach((phrase) => {
    phrase = phrase.split(' ');
    for (let w of phrase) {
      if (w !== '') {
        m[w] = (m[w] || 0) + 1;
        if (m[w] === 2) { r.push(w); }
      }
    }
  });
  return r.join(' ');
}


/*****************************
29.) Find the missing term in an Arithmetic Progression
solved: 7/7/2023
codewars.com/kata/52de553ebb55d1fca3000371
*****************************/
var findMissing = function (list) {
  const diff = (list[list.length - 1] - list[0]) / list.length;

  for (let i = 0; i < list.length; i++) {
    let n = list[i] + diff;
    if (n !== list[i + 1]) {
      return n;
    }
  }
};

/*****************************
30.) Sum two arrays
solved: 7/7/2023
codewars.com/kata/59c3e8c9f5d5e40cab000ca6
*****************************/
function addArrays(a, b) {
  if (!a.length) return b;
  if (!b.length) return a;

  let n1 = +(a.join(''));
  let n2 = +(b.join(''));
  let s = n1 + n2;
  let sign = s < 0;

  let res = [...String(s)].map((n, i) => sign && i == 1 ? -Number(n) : +n);
  return sign ? res.slice(1) : res;
}

/*****************************
31.) Balanced Braces (with non-brace characters)
solved: 7/6/2023
codewars.com/kata/5a62173ee626c5f0e40000e9
*****************************/
function isBalanced(str) {
  if (!str) return [true, 0, 0];
  str = str.replace(/[^\(\)\[\]\{\}]/g, "");
  const stack = [];
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];
  let bcount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (open.indexOf(char) > -1) {
      stack.push(char);
    } else {
      const closeChar = char;
      const expected = open[close.indexOf(closeChar)];
      const last = stack[stack.length - 1];
      if (last && (expected === last)) {
        bcount++;
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }

  return [stack.length === 0, bcount, stack.length];
}

/*****************************
32.) Find match row and column position in a given string
solved: 7/6/2023
codewars.com/kata/58fae1eb2bffa7a570000039
*****************************/
function findPosition(code, match) {
  let lines = code.split('\n');
  match = match.split('\n');
  let lineStart = 0;
  let indexStart = 0;
  let indexEnd = 0;

  for (let i = 0; i < lines.length; i++) {
    indexStart = lines[i].indexOf(match[0]);
    lineStart = i;
    if (indexStart > -1) break;
  }

  if (match.length === 1) {
    indexEnd = match[0].length + indexStart;
  } else {
    indexEnd = match[match.length - 1].length
  }

  return {
    "lineStart": lineStart,
    "indexStart": indexStart,
    "indexEnd": indexEnd,
    "lineEnd": lineStart + match.length - 1
  };
}

/*****************************
33.) Roman Numerals Encoder
solved: 7/6/2023
codewars.com/kata/51b62bf6a9c58071c600001b
*****************************/
function solution(number) {
  const keys = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let curr = 0;
  let res = '';
  let temp = '';
  while (number) {
    if ((number - vals[curr]) >= 0) {
      temp += keys[curr];
      number -= +vals[curr];
    } else {
      res += temp;
      temp = '';
      curr++;
    }
    if (curr < 0) {
      break;
    }
  }
  return res + temp;
}

/*****************************
34.) Find Grid Position
solved: 7/6/2023
codewars.com/kata/580f6cbcfbf2bec47c000511
*****************************/
function createGrid(r, c, pos) {
  let curr = '';
  let oth = '';
  let has = (pos.y < r) && (pos.x < c);
  for (let i = 0; i < c; i++) {
    if (i === pos.x) {
      curr += '*';
      oth += has ? '1' : '0';
    } else {
      curr += has ? '1' : '0';
      oth += '0';
    }
  }
  let res = [];
  for (let i = 0; i < r; i++) {
    i === pos.y && has ? res.push(curr) : res.push(oth);
  }
  return res.join("\n");
}

/*****************************
35.) Factorial length
solved: 7/6/2023
codewars.com/kata/59f34ec5a01431ab7600005a
*****************************/
function count(n) {
  let y = 0;
  while (n > 1) {
    y += Math.log10(n);
    n--;
  }
  return Math.ceil(y);
}

/*****************************
36.) Add All
solved: 7/6/2023
codewars.com/kata/5b7d7ce57a0c9d86c700014b
*****************************/
function addAll(numbers) {
  if (numbers.length == 1) return 0;
  numbers.sort((a, b) => a - b);
  numbers[1] += numbers[0];
  return numbers[1] + addAll(numbers.slice(1));
}

/*****************************
37.) More Zeros than Ones
solved: 7/6/2023
codewars.com/kata/5d41e16d8bad42002208fe1a
*****************************/
function moreZeros(s) {
  const count = str => [...str].filter(n => n === '1').length < (str.length / 2);
  return [...new Set([...s].filter(n => count(n.charCodeAt().toString(2))))];
}

/*****************************
38.) What's A Name In?
solved: 7/6/2023
codewars.com/kata/59daf400beec9780a9000045
*****************************/
function nameInStr(str, name) {
  let i = 0;
  let curr = 0;
  str = str.toLowerCase();
  name = name.toLowerCase();
  while (i < str.length) {
    if (str[i] === name[curr]) {
      curr++;
    }
    if (curr === name.length) {
      return true;
    }
    i++;
  }
  return false;
}

/*****************************
39.) Valid string
solved: 7/6/2023
codewars.com/kata/52f3bb2095d6bfeac2002196
*****************************/
var validWord = function (d, w) {
  for (let i = 1; i <= w.length; i++) {
    let curr = w.slice(0, i);
    if (d.includes(curr)) {
      if (validWord(d, w.slice(i))) return true;
    }
  }
  return w.length == 0;
};

/*****************************
40.) Brainfuck generator
solved: 7/6/2023
codewars.com/kata/579e646353ba33cce2000093
*****************************/
function toBrainfuck(s) {
  return [...s].reduce((a, c) => a + '+'.repeat(c.charCodeAt()) + '.[-]', '');
}

/*****************************
41.) Algorithm Fun: Find The Unknown Number - Part II
solved: 7/4/2023
codewars.com/kata/59cdb97172851e2824000094
*****************************/
function findUnknowNumber(a, b, c, x, y, z) {
  let i = 1;
  while (true) {
    if (i % a === x && i % b === y && i % c === z) {
      break;
    }
    i++;
  }
  return i;
}

/*****************************
42.) CamelCase to underscore
solved: 7/4/2023
codewars.com/kata/5b1956a7803388baae00003a
*****************************/
const toUnderScore = name => {
  let res = name.replace(/([A-Z]|\d+)/g, "_$1");
  return res.replace(/^[_]/g, "").replace(/__/g, "_");
};

/*****************************
43.) Find character
solved: 7/4/2023
codewars.com/kata/5817030088ca96c0b7000083
*****************************/
const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function findCharacters(m) {
  let d = {};
  for (let l of m.replace(/\s+/g, '')) {
    d[l] = (d[l] || 0) + 1;
  }

  const min = Math.min(...Object.values(d));
  let res = [];
  for (let [k, v] of Object.entries(d)) {
    if (v === min) {
      res.push(k);
    }
  }
  return res.sort((a, b) => alph.indexOf(a) - alph.indexOf(b)).join('');
}

/*****************************
44.) BitMath: Addition
solved: 7/4/2023
codewars.com/kata/57a6c52a72292d3235000187
*****************************/
class BitMath {
  static add(a, b) {
    while (b != 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  }
}

/*****************************
45.) Making Change
solved: 7/4/2023
codewars.com/kata/5365bb5d5d0266cd010009be
*****************************/
const makeChange = (amount) => {
  let d = { 'H': 0, 'Q': 0, 'D': 0, 'N': 0, 'P': 0 };

  while (amount > 0) {
    if (amount >= 50) {
      d['H'] += 1;
      amount -= 50;
    } else if (amount >= 25) {
      d['Q'] += 1;
      amount -= 25;
    } else if (amount >= 10) {
      d['D'] += 1;
      amount -= 10;
    } else if (amount >= 5) {
      d['N'] += 1;
      amount -= 5;
    } else {
      d['P'] += 1;
      amount -= 1;
    }
  }

  for (let [key, value] of Object.entries(d)) {
    if (value === 0) {
      delete d[key];
    }
  }
  return d;
};

/*****************************
46.) Make A Window
solved: 7/4/2023
codewars.com/kata/59c03f175fb13337df00002e
*****************************/
function makeAWindow(num) {
  const [period, dash] = ['.'.repeat(num), '-'.repeat(num)];
  const panes = Array(num).fill(`|${period}|${period}|`).join('\n');
  const mid = `|${dash}+${dash}|`;
  const topBottom = '-'.repeat(mid.length);
  return `${topBottom}\n${panes}\n${mid}\n${panes}\n${topBottom}`;
}

/*****************************
47.) A Taste of Curry
solved: 7/4/2023
codewars.com/kata/52d629bb5feccfd4c100022d
*****************************/
function curry(fun) {
  const args = [...arguments].slice(1);
  return function () {
    return fun.apply(this, args.concat([...arguments]));
  };
}


/*****************************
48.) Reducing by rules to get the result
solved: 7/3/2023
codewars.com/kata/585ba6dff59b3cef3f000132
*****************************/
function reduceByRules(n, r) {
  return n.reduce((a, b, i) => {
    let cr = (i - 1) % r.length;
    return r[cr](a, b);
  });
}

/*****************************
49.) Generating Generators - Generators #3
solved: 7/3/2023
codewars.com/kata/56390ac2815fb1222a000070
*****************************/
function* generator(a, b) {
  function* generator2(a) {
    for (let i = 1; i <= 10; i++) {
      yield `${a} x ${i} = ${a * i}`;
    }
  }

  for (let i = a; i <= b; i++) {
    yield generator2(i);
  }
}

/*****************************
50.) Sequence generator
solved: 7/3/2023
codewars.com/kata/55eee789637477c94200008e
*****************************/
function* sequenceGen(...arguments) {
  while (true) {
    yield arguments[0];
    arguments = arguments.slice(1).concat(arguments.reduce((a, c) => a + c));
  }
}

/*****************************
51.) Sort the columns of a csv-file
solved: 7/3/2023
codewars.com/kata/57f7f71a7b992e699400013f
*****************************/
function sortCsvColumns(str) {
  str = str.split('\n').map(r => r.split(';'));
  return Array.from({ length: str.length }, (_, i) => {
    return [...Array.from({ length: str[0].length }, (_, i) => {
      return Array.from({ length: str.length }, (_, j) => str[j][i]);
    }).sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase())).map(v => v[i])].join(";");
  }).join('\n');
}


/*****************************
52.) Greatest Position Distance Between Matching Array Values
solved: 7/3/2023
codewars.com/kata/5442e4fc7fc447653a0000d5
*****************************/
var greatestDistance = function (data) {
  let m = 0;
  for (let i = 0; i < data.length; i++) {
    const curr = data.lastIndexOf(data[i]) - i;
    m = curr > m ? curr : m;
  }
  return m;
};


/*****************************
53.) Filter out for good!
solved: 7/3/2023
codewars.com/kata/56035d75426e197c3e0000a2
*****************************/
Array.prototype.remove = function (pred) {
  let arr = [].concat(this);
  let rem = [];
  this.length = 0;
  for (let i = 0; i < arr.length; i++) {
    pred(arr[i]) ? rem.push(arr[i]) : this.push(arr[i]);
  }
  return rem;
};

/*****************************
54.) String Breakers
solved: 7/2/2023
codewars.com/kata/59d398bb86a6fdf100000031
*****************************/
function stringBreakers(n, string){
  let res = [];
  string = string.replace(/\s/g, '');
  for (let i = 0; i < string.length; i += n) {
    res.push(string.slice(i, i + n));
  }
  return res.join('\n');
}

/*****************************
55.) String counting
solved: 7/2/2023
codewars.com/kata/5cfd36ea4c60c3001884ed42
*****************************/
function solve(s) {
  s = [...s].map(v => 90 - v.charCodeAt());
  let res = 0;
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    res = (res + s[i] + n * s[i]) % 1000000007;
    n = (s[i] + n * 26) % 1000000007;
  }
  return res;
}

/*****************************
56.) Consecutive Count
solved: 7/2/2023
codewars.com/kata/59c3e819d751df54e9000098
*****************************/
function getConsectiveItems(items, key) {
  items = items.toString();
  key = key.toString();
  let [m, c] = [0, 0];
  for (let i = 0; i < items.length; i++) {
    if (key === items[i]) {
      c++;
      if (c > m) {
        m = c;
      }
    } else {
      c = 0;
    }
  }
  return m;
}

/*****************************
57.) Count Repeats
solved: 7/2/2023
codewars.com/kata/598ee7b6ec6cb90dd6000061
*****************************/
function countRepeats(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (str[i + 1] === curr) {
      count++;
    }
  }
  return count;
}

/*****************************
58.) Only Duplicates
solved: 7/2/2023
codewars.com/kata/5a1dc4baffe75f270200006b
*****************************/
function onlyDuplicates(str) {
  let m = {};
  let res = '';
  for (let l of str) {
    m[l] = (m[l] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (m[str[i]] >= 2) {
      res += str[i];
    }
  }
  return res;
}

/*****************************
59.) Duplicates. Duplicates Everywhere.
solved: 7/2/2023
codewars.com/kata/5e8dd197c122f6001a8637ca
*****************************/
const removeDuplicateIds = (obj) => {
  let has = new Set();
  let map = {};
  let keys = Object.keys(obj).sort((a, b) => b - a);
  for (let key of keys) {
    map[key] = [];
    for (let v of obj[key]) {
      if (!has.has(v)) {
        map[key].push(v);
      }
      has.add(v);
    }
  }
  return map;
};

/*****************************
60.) Find duplicates in array by properties keys in another array
solved: 7/2/2023
codewars.com/kata/58cc070abd22e324b300002a
*****************************/
function duplicated(arr, keys) {
  let map = {};
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp = [...temp, keys.map((key) => arr[i][key] || '').join``]
    map[temp[i]] = map[temp[i]] ? map[temp[i]] + 1 : 1;
  }

  return arr.filter((obj) => {
    const key = keys.map(key => obj[key] || '').join``;
    return map[key] > 1;
  })
}


/*****************************
61.) Duplicate Arguments
solved: 7/2/2023
codewars.com/kata/520d9c27e9940532eb00018e
*****************************/
function solution(...arguments){
  return arguments.length !== new Set(arguments).size
}

/*****************************
62.) Javascript filter - 2
solved: 7/2/2023
codewars.com/kata/5262fa26875ed24a3e000029
*****************************/
function roomMates(r, f) {
  return r.slice((f - 1) * 6, f * 6).filter(Boolean);
}

/*****************************
63.) All Star Code Challenge #15
solved: 7/2/2023
codewars.com/kata/586560a639c5ab3a260000f3
*****************************/
function rotate(str) {
  const getRotate = str => {
    let arr = str.split('');
    arr.push(arr.shift());
    return arr.join('');
  };

  let res = [];
  for (let i = 0; i < str.length; i++) {
    str = getRotate(str);
    res.push(str);
  }
  return res
}


/*****************************
64.) Odd-heavy Array
solved: 7/1/2023
codewars.com/kata/59c7e477dcc40500f50005c7
*****************************/
function isOddHeavy(n) {
  if (n.length === 0) return false
  if (n.length === 1) return n[0] % 2 !== 0

  let odd = n.filter(num => num % 2 !== 0)
  let even = n.filter(num => num % 2 === 0)
  if (odd.length === 0) return false
  if (even.length === 0) return true

  return Math.min(...odd) > Math.max(...even)
}

/*****************************
65.) Count word occurrences
solved: 7/1/2023
codewars.com/kata/54fdbad0762e2e8a54000452
*****************************/
var wordCounter = function (text) {
  const map = {};
  for (let w of text.split(/[ ,.]+/)) {
    if (w === '') continue;
    map[w] = (parseInt(map[w]) || 0) + 1;
  }
  
  return { count: w => parseInt(map[w]) || 0 }
}

/*****************************
66.) The range() function
solved: 7/1/2023
codewars.com/kata/5298961d9ce954d77b0003a6
*****************************/
function range() {
  const args = [...arguments];
  const [start, stop, step] = [
    args.length === 1 ? 0 : args[0],
    args.length === 1 ? args[0] : args[1],
    args.length === 3 ? args[2] : 1
  ];

  const getlen = Math.ceil((stop - start) / (step ? step : 1));
  return stop > start ? Array.from({ length: getlen }, (_, i) => start + (i * step)) : [];
}

/*****************************
67.) Simple Sentences
solved: 7/1/2023
codewars.com/kata/5297bf69649be865e6000922
*****************************/
function makeSentence(parts) {
  return (parts.reduce((a, c, i) => a + ((c.match(/\w/) && i > 0) ? " " + c : c), '') + ".").replace(/\.+/g, '.');
}

/*****************************
68.) Simple Fun #135: Missing Alphabets
solved: 7/1/2023
codewars.com/kata/58a664bb586e986c940001d5
*****************************/
function missingAlphabets(s) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const alphCount = {};
  const sCount = {};
  const max = Math.max(...s.split('').map(c => s.split(c).length - 1));
  let result = '';

  // init
  for (let i = 0; i < 26; i++) {
    alphCount[alph[i]] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = sCount[s[i]] ? sCount[s[i]] + 1 : 1;
  }

  for (let i = 0; i < 26; i++) {
    const curr = alph[i];
    if (sCount[curr]) {
      if (sCount[curr] < max) {
        result += curr.repeat(max - sCount[curr]);
      }
    } else {
      result += curr.repeat(max);
    }
  }

  return result;
}

/*****************************
69.) NASA Countdown
solved: 7/1/2023
codewars.com/kata/56c4931400165c5283000661
*****************************/
function countdown(msec) {
  let sign = msec < 0 ? '-' : '+';
  msec = Math.abs(msec);
  const pad = num => String(num).padStart(2, '0');
  let h = (msec / 3_600_000) >> 0;
  let m = ((msec - h * 3_600_000) / 60_000) >> 0;
  let s = ((msec - h * 3_600_000 - m * 60_000) / 1000) >> 0;
  return `${sign}${pad(h)}:${pad(m)}:${pad(s)}`;
}


/*****************************
70.) JSON.parse Date Reviver
solved: 7/1/2023
codewars.com/kata/533b0d5e7abec41550000a9e
*****************************/
function JSON_Date_reviver(key, value) {
  let d = Date.parse(value);
  if (typeof value === 'string' && !isNaN(d)) {
    return new Date(d);
  } else {
    return value;
  }
}

/*****************************
71.) Password generator
solved: 7/1/2023
codewars.com/kata/58ade2233c9736b01d0000b3
*****************************/
function passwordGen() {
  let check = { lower: false, upper: false, num: false };
  const lc = "abcdefghijklmnopqrstuvwxyz";
  const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const chars = lc + uc + nums;

  const generate = () => {
    return Array.from({ length: Math.floor(Math.random() * 15) + 6 }, (_, i) => {
      let char = chars.charAt(Math.floor(Math.random() * chars.length));

      if (lc.includes(char)) check.lower = true;
      if (uc.includes(char)) check.upper = true;
      if (nums.includes(char)) check.num = true;
      return char;
      
    }).join("");
  };

  let pass = generate();
  if (Object.values(check).includes(false)) {
    return passwordGen();
  } else {
    return pass;
  }
}

/*****************************
72.) Simple time difference
solved: 7/1/2023
codewars.com/kata/5b76a34ff71e5de9db0000f2
*****************************/
function minTo(minutes) {
  let h = String(Math.floor(minutes / 60)).padStart(2, "0");
  let m = String(minutes % 60).padStart(2, "0");
  return h + ":" + m;
}

function solve(arr) {
  if (arr.length === 1) return "23:59";

  const times = [...new Set(arr.map((time) => {
    let [h, m] = time.split(":");
    return (+h * 60) + +m;
  }))].sort((a, b) => a - b);

  let m1 = times[0] + 1440 - times[times.length - 1];
  let m2 = 0;

  for (let i = 0; i < times.length - 1; i++) {
    const diff = times[i + 1] - times[i];
    if (diff > m2) m2 = diff;
  }

  return minTo(Math.max(m1, m2) - 1);
}

/*****************************
73.) Alphabetized
solved: 7/1/2023
codewars.com/kata/5970df092ef474680a0000c9
*****************************/
function alphabetized(s) {
  return s.replace(/[^A-Za-z]/g, '').split('').sort((a, b) => {
    if (a.toLowerCase() === b.toLowerCase()) {
      return b.toLowerCase().localeCompare(a.toLowerCase());
    } else {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
  }).join('');
}

/*****************************
74.) Decipher this!
solved: 7/1/2023
codewars.com/kata/581e014b55f2c52bb00000f8
*****************************/
function decipherThis(str) {
  return str.split(' ').map(x => {
    let s = String.fromCharCode(+x.replace(/[^0-9.]/g, ''));
    let e = x.replace(/[^a-zA-Z]/g, '').split('');
    [e[0], e[e.length - 1]] = [e[e.length - 1], e[0]];
    return `${s}${e.join('')}`;
  }).join(' ');
};

/*****************************
75.) Minutes to Midnight
solved: 7/1/2023
codewars.com/kata/58528e9e22555d8d33000163
*****************************/
function minutesToMidnight(d) {
  const minutes = 1440 - (d.getHours() * 60) - d.getMinutes() - (d.getSeconds() > 30 ? 1 : 0);
  return minutes === 1 ? minutes + " minute" : minutes + " minutes";
}

/*****************************
76.) Fun with ES6 Classes #6 - Fake Files (Basic)
solved: 7/1/2023
codewars.com/kata/5784c8116211383b5f0001d3
*****************************/
class File {
  constructor (name, contents) {
    Object.defineProperties(this, {
      'fullName': { value: name },
      'filename': {value: name.slice(0, name.lastIndexOf('.'))},
      'extension': { value: name.slice(name.lastIndexOf('.') + 1)},
      'contents': { value: contents, writable: true, configurable: true },
      'line': { value: 0, writable: true, configurable: true },
      'char': { value: 0, writable: true, configurable: true }
    });
  }

  getContents() {
    return this.contents;
  }

  write(newContents) {
    this.contents += (this.contents ? "\n" : "") + newContents;
  }

  gets() {
    return this.getContents().split("\n")[this.line++];
  }

  getc() {
    return this.getContents()[this.char++];
  }
}

/*****************************
77.) Time-like string format
solved: 6/30/2023
codewars.com/kata/51e000d070fe4414000003f0
*****************************/
function solution(hour) {
  if (hour < 100 || hour > 9999) throw new Error();
  let [h, m] = hour.toString().padStart(4, '0').match(/.{1,2}/g);
  return `${parseInt(h)}:${m}`;
}

/*****************************
78.) Simple Fun #396: Find the Longest Substring Consisting of Unique Characters
solved: 6/30/2023
codewars.com/kata/5bcd90808f9726d0f6000091
*****************************/
function longestSubstringOf(string) {
  let [max, curr] = ['', ''];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let index = curr.indexOf(char);
    if (index === -1) {
      curr += char;
      if (curr.length > max.length) {
        max = curr;
      }
    } else {
      curr = curr.slice(index + 1) + char;
    }
  }
  return max.length;
}

/*****************************
79.) Running Average
solved: 6/30/2023
codewars.com/kata/589e4d646642d144a90000d8
*****************************/
function runningAverage() {
  let [t, c] = [0, 0];
  return function (n) {
    let res = (t += n) / ++c;
    if (res % 1 !== 0 && (res % 1).toString().length > 3) {
      return +res.toFixed(2);
    }
    return res;
  };
}

/*****************************
80.) Repeated Substring
solved: 6/30/2023
codewars.com/kata/5491689aff74b9b292000334
*****************************/
function f(s) {
  let [m, n] = ['', 0];

  for (let i = 1; i < s.length; i++) {
    let curr = s.substring(0, i);
    let tst = s.split(curr).filter(v => !v).length;
    if (tst > n) {
      [m, n] = [curr, tst];
    }
  }
  return n - 1 <= 1 ? [s, 1] : [m, n - 1];
}

/*****************************
81.) Color Choice
solved: 6/30/2023
codewars.com/kata/55be10de92aad5ef28000023
*****************************/
const checkchoose = (m, n) => {
  const fact = n => n <= 1 ? 1 : n * fact(n - 1);
  
  for (let i = 1; i <= (n / 2) >> 0; i++) {
    if (m === Math.round(fact(n) / fact(i) / fact(n - i))) return i;
  }
  
  return -1;
};

/*****************************
82.) WeIrD StRiNg CaSe
solved: 5/13/2023
codewars.com/kata/52b757663a95b11b3d00062d
*****************************/
function toWeirdCase(s) {
  return s.split(' ').map((x) => {
    return x.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x).join('');
  }).join(' ');
}

/*****************************
83.) Prefill an Array
solved: 5/13/2023
codewars.com/kata/54129112fb7c188740000162
*****************************/
function prefill(n, v) {
  if (!Number.isInteger(+n) || +n < 0 || !isFinite(n) || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);

  if (n === 0) return [];
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(v);
  }
  return res;
}

/*****************************
84.) Handshake problem
solved: 5/13/2023
codewars.com/kata/5574835e3e404a0bed00001b
*****************************/
function getParticipants(h) {
  return h ? Math.ceil((1 + Math.sqrt(1 + 8 * h)) / 2) : 0;
}


/*****************************
85.) Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
solved: 5/13/2023
codewars.com/kata/583a8bde28019d615a000035
*****************************/
function findOddNames(list) {
  return list.filter((p) => {
    let isOdd = p.firstName.split('').map(x => x.charCodeAt(0)).reduce((a, c) => a + c, 0) % 2 !== 0;
    return isOdd;
  })
}

/*****************************
86.) Spread number
solved: 5/13/2023
codewars.com/kata/5cbded7a36240b000dac91eb
*****************************/
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this; i++) {
    yield i;
  }
}

/*****************************
87.) Reverse Vowels In A String
solved: 5/13/2023
codewars.com/kata/585db3e8eec141ce9a00008f
*****************************/
function reverseVowels(str) {
  str = str.split("");
  let arr = str.reduce((acc, cur) => /[^aeiou]/i.test(cur) ? acc : [...acc, cur], []);
  return str.map((item) => /[^aeiou]/i.test(item) ? item : arr.pop()).join("");
}

/*****************************
88.) SMS Lottery Bet Validator
solved: 5/13/2023
codewars.com/kata/59a3e2897ac7fd05f800005f
*****************************/
function validateBet(game, text) {
  let invalidChar = text.match(/^[0-9, ]+$/gi);
  if (!invalidChar) return null;

  let bet = text.match(/[0-9]+/g);
  if (!bet || bet.length !== game[0]) return null;
  if (new Set(bet).size !== bet.length) return null;

  let betNums = bet.map(n => +n);
  if (Math.min(...betNums) < 1
    || Math.max(...betNums) > game[1]) return null;

  return betNums.sort((a, b) => a - b);
}

/*****************************
89.) Consecutive strings
solved: 5/12/2023
codewars.com/kata/56a5d994ac971f1ac500003e
*****************************/
function longestConsec(arr, k) {
  if (k <= 0 || k > arr.length || !arr.length) return '';
  let j = 0;
  let [con, curr] = [[], []]
  let longest = {len: 0,str: []};
  while (j < arr.length) {
    curr.push(arr[j]);
    if (curr.length === k) {
      let temp = curr.join("");
      let len = temp.length;
      if (len > longest.len) {
        longest.str = [temp];
        longest.len = len;
      } else if (len === longest.len) {
        longest.str.push(temp);
      }
      con.push(temp);
      curr.shift();
    }
    j++;
  }
  return longest.str[0];
}

/*****************************
90.) Give me a Diamond
solved: 5/12/2023
codewars.com/kata/5503013e34137eeeaa001648
*****************************/
function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;
  let [s1, s2] = [Math.floor(n / 2), 1];
  let [a, b] = ['', ''];
  let j = n - 2;
  for (let i = 1; i <= n; i += 2) {
    a += '*'.repeat(i).padStart(s1 + i, ' ') + '\n';
    if (j >= 1) {
      b += '*'.repeat(j).padStart(s2 + j, ' ') + '\n';
    }
    s2++;
    s1--;
    j -= 2;
  }
  return a + b;
}

/*****************************
91.) Most Consecutive Zeros of a Binary Number
solved: 5/12/2023
codewars.com/kata/59decdf40863c76ae3000080
*****************************/
function maxConsecZeros(n) {
  return [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", 
    "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"
  ][Math.max(...(+n).toString(2).split('1').map(x => x.length))];
}

/*****************************
92.) Get your steppin' on son
solved: 5/12/2023
codewars.com/kata/55e00266d494ce5155000032
*****************************/
function wordStep(str) {
  str = str.split(' ');
  let w = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      w += i > 1 ? str[i].length - 1 : str[i].length;
    }
  }

  let res = [];
  let last = str[0].length - 1;
  str.forEach((el, idx) => {
    if (idx % 2 !== 0) {
      el = idx === str.length - 1 ? el.slice(1) : el.slice(1, -1);
      el.split('').forEach((lett) => {
        let pre = Array(last).fill(' ');
        pre.push(lett);
        res.push(idx === str.length - 1 ? pre : [...pre, ...Array(w - last - 1).fill(' ')]);
      });
    } else {
      if (idx === 0) {
        res.push([...el, ...Array(w - last - 1).fill(' ')]);
        return;
      }
      let pre = Array(last).fill(' ');
      last += el.length - 1;
      res.push([...pre, ...el, ...Array(w - last - 1).fill(' ')]);
    }
  });
  res.forEach((r) => console.log(r));
  return res;
}

/*****************************
93.) IndexOf Array in Array
solved: 5/12/2023
codewars.com/kata/5783ef69202c0ee4cb000265
*****************************/
var searchArray = function (arr, query) {
  let res = -1;
  if (query.length !== 2) {
    throw new Error('throw Error');
  }

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el[2] || !Array.isArray(el)) {
      throw new Error('throw Error');
    }
    if (el[0] === query[0] && el[1] === query[1]) {
      res = i;
      break;
    }
  }
  return res;
};

/*****************************
94.) Framed Reflection
solved: 5/12/2023
codewars.com/kata/581331293788bc1702001fa6
*****************************/
function mirror(text) {
  text = text.split(' ').reverse();
  const len = text.reduce((a, b) => a.length > b.length ? a : b).length + 4;

  text = text.join(' ');
  let res = '*'.repeat(len) + '\n';
  let temp = '* ';
  for (let i = text.length - 1; i >= 0; i--) {
    if (text[i] !== ' ') {
      temp += text[i];
    } else {
      res += temp.padEnd(len - 2, ' ') + ' *\n';
      temp = '* ';
    }
  }
  return res += temp.padEnd(len - 2, ' ') + ' *\n' + '*'.repeat(len);
}

/*****************************
95.) Create iterator
solved: 5/12/2023
codewars.com/kata/5c743cec901022438549964a
*****************************/
const createIterator = (array) => {
  const iterator = {
    index: 0,
    next: () => {
      return array.length > iterator.index ?
        { value: array[iterator.index++], done: false } :
        { value: undefined, done: true };
    }
  };
  return iterator;
};

/*****************************
96.) Create a frame!
solved: 5/12/2023
codewars.com/kata/5672f4e3404d0609ec00000a
*****************************/
const frame = (text, char) => {
  const len = text.reduce((a, b) => a.length > b.length ? a : b).length + 4;
  const fill = char.repeat(len);

  let res = fill + '\n';
  for (let i = 0; i < text.length; i++) {
    res += `${char} ${text[i].padEnd(len - 3, " ")}${char}\n`;
  }
  return res + fill;
};

/*****************************
97.) The takeWhile Function
solved: 5/12/2023
codewars.com/kata/54f9173aa58bce9031001548
*****************************/
function takeWhile(arr, pred) {
  if (!pred(arr[0])) return [];
  let [res, curr] = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      curr.push(arr[i]);
    } else {
      if (curr.length > res.length) {
        res = curr;
      }
      curr = [];
    }
    if (i === arr.length - 1 && curr.length > res.length) {
      res = curr;
    }
  }
  return res;
}

/*****************************
98.) Make it equal
solved: 5/10/2023
codewars.com/kata/5736b7b749fc585e8900001f
*****************************/
var a = {
  i: 2,
  toString: function () {
    return a.i++;
  }
}

/*****************************
99.) Time Math
solved: 5/10/2023
codewars.com/kata/5aceae374d9fd1266f0000f0
*****************************/
function timeMath(t1, op, t2) {
  [t1, t2] = [t1.split(':'), t2.split(':')]
  let d1 = new Date(1969, 6, 9, +t1[0], +t1[1], +t1[2], 0);
  let d2 = new Date(1969, 6, 9, +t2[0], +t2[1], +t2[2], 0);
  
  const tcalc = (g1, g2) => g1 + (op === "+" ? g2 : -g2);
  d1.setHours(tcalc(d1.getHours(), d2.getHours()));
  d1.setMinutes(tcalc(d1.getMinutes(), d2.getMinutes()));
  d1.setSeconds(tcalc(d1.getSeconds(), d2.getSeconds()));
  return d1.toTimeString().slice(0, 8);
}

/*****************************
100.) Write JavaScript's 'call' function using apply.
solved: 5/10/2023
codewars.com/kata/52d56d9c6b02b2fa9a0006d9
*****************************/
Function.prototype.call = function () {
  const [context, ...args] = [...arguments];
  return this.apply(context, args)
};

/*****************************
101.) Magic Squares
solved: 5/9/2023
codewars.com/kata/58c979aafd407d6e9f000071
*****************************/
function magicSquare(arr) {
  if (!arr[0]) return false;
  const sums = new Set();
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let colSum = 0;
    let diagSum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
      diagSum += arr[j][j];
    }
    sums.add(rowSum);
    sums.add(colSum);
    sums.add(diagSum);
  }
  return sums.size === 1;
}

/*****************************
102.) Unary function chainer
solved: 5/9/2023
codewars.com/kata/54ca3e777120b56cb6000710
*****************************/
function chained(functions) {
  return function (input) {
    return functions.reduce(function (input, fn) {
      return fn(input);
    }, input);
  };
}

/*****************************
103.) Find Cracker.
solved: 5/5/2023
codewars.com/kata/59f70440bee845599c000085
*****************************/
function findHack(arr) {
  const m = { 'A': 30, 'B': 20, 'C': 10, 'D': 5 };
  let res = [];
  arr.forEach((a) => {
    let extra = 0;
    let count = 0;
    a[2].forEach((v) => {
      v = m[v] || 0;
      v >= 20 ? extra++ : extra -= 69;
      count = (count + v <= 200) ? count + v : 200;
    });
    count += (extra > 4 && count < 180) ? 20 : 0;
    if (a[1] !== count) {
      res.push(a[0]);
    }
  });
  return res;
}

/*****************************
104.) Custom Setters and Getters
solved: 5/5/2023
codewars.com/kata/5241060ff2471a5d7600025a
*****************************/
function Archiver() {
  let archive = [];
  let tempval = null;
  let temperature = null;
  Object.defineProperty(this, 'temperature', {
    get() { return tempval; },
    set(val) {
      tempval = val;
      archive.push({ date: new Date(), val: val });
    },
  });
  this.getArchive = () => archive;
}

/*****************************
105.) Sequences and Series
solved: 5/5/2023
codewars.com/kata/5254bd1357d59fbbe90001ec
*****************************/
function getScore(n) {
  let x = 0;
  while (n > 0) {
    x += n;
    n--;
  }
  return x * 50
}

/*****************************
106.) Piano Kata, Part 1
solved: 5/5/2023
codewars.com/kata/589273272fab865136000108
*****************************/
function blackOrWhiteKey(kc) {
  let k = ['w', 'b', 'w', 'w', 'b', 'w', 'b', 'w', 'w', 'b', 'w', 'b'];
  return k[((kc - 1) % 88) % 12] === 'w' ? 'white' : 'black';
}

/*****************************
107.) Clocky Mc Clock-Face
solved: 5/5/2023
codewars.com/kata/59752e1f064d1261cb0000ec
*****************************/
var whatTimeIsIt = function (angle) {
  const date = new Date(1, 1, 1, 0, (angle * 1440) / 360 / 2);
  let [hours, minutes] = [date.getHours(), date.getMinutes()];
  hours = hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  const convert = t => t < 10 ? `0${t}` : t;
  return `${convert(hours)}:${convert(minutes)}`;
};

/*****************************
108.) Is Integer Array?
solved: 5/5/2023
codewars.com/kata/52a112d9488f506ae7000b95
*****************************/
function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      return false;
    }
  }
  return true;
}


/*****************************
109.) Simple Simple Simple String Expansion
solved: 5/5/2023
codewars.com/kata/5ae326342f8cbc72220000d2
*****************************/
function stringExpansion(s) {
  let len = null;
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(+s[i])) {
      len = +s[i];
    } else {
      if (len === null) {
        res += s[i];
      } else if (len > 0) {
        res += s[i].repeat(len);
      }
    }
  }
  return res;
}


/*****************************
110.) Difference of 2
solved: 3/23/2023
codewars.com/kata/5340298112fa30e786000688
*****************************/
function twosDifference(input) {
  let res = [];
  input = input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    const a = input[i];
    for (let j = i; j < input.length; j++) {
      const b = input[j];
      if (a - b === 2 || b - a === 2) {
        res.push(b > a ? [a, b] : [b, a]);
      }
    }
  }
  return res;
}

/*****************************
111.) Count the photos!
solved: 3/23/2023
codewars.com/kata/6319dba6d6e2160015a842ed
*****************************/
function countPhotos(road) {
  let [left, right, count] = [0, 0, 0];
  for (let i = 0, j = road.length - 1; i < road.length; i++, j--) {
    if (road[i] === ">") left++;
    if (road[i] === ".") count += left;

    if (road[j] === "<") right++;
    if (road[j] === ".") count += right;
  }
  return count;
}

/*****************************
112.) Binary to Text (ASCII) Conversion
solved: 3/23/2023
codewars.com/kata/5583d268479559400d000064
*****************************/
function binaryToString(binary) {
  let res = '';
  for (let i = 0; i < binary.length; i += 8) {
    res += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  return res;
}

/*****************************
113.) Sum The Tree
solved: 2/22/2023
codewars.com/kata/5800580f8f7ddaea13000025
*****************************/
function sumTheTreeValues(root){
  if (!root) return null;
  let sum = 0;
  let stack = [];
  let current = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    sum += current.value;
    current = current.right;
  }
  return sum;
}

/*****************************
114.) Smart Sum
solved: 2/21/2023
codewars.com/kata/5831200eb812b8016d000094
*****************************/
function smartSum() {
  let sum = 0;
  const args = [...arguments]
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      sum += smartSum.apply(this, args[i]);
    } else if (typeof args[i] === "number") {
      sum += args[i];
    }
  }
  return sum;
}

/*****************************
115.) Are we alternate?
solved: 2/20/2023
codewars.com/kata/59325dc15dbb44b2440000af
*****************************/
function isAlt(word) {
  if (word.length < 2) return true;
  let v = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1 };
  let count = v[word[0]] ? 1 : 0;
  for (let i = 1; i<word.length; i++) {
    count += v[word[i]] ? 1 : -1;
    if (count > 1 || count < 0) return false;
  }
  return true;
}

/*****************************
116.) Does array x contain all values within array y?
solved: 2/20/2023
codewars.com/kata/5143cc9694a24abcd2000001
*****************************/
Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    return new Set([...a, ...this]).size === this.length;
  }
})

/*****************************
117.) Insert value into an array
solved: 2/20/2023
codewars.com/kata/581dc1852d68e751180000c6
*****************************/
Array.prototype.insert = function (index, value) {
  index = index < 0 ? 0 : index > this.length ? this.length : index;
  this.splice(index, 0, value);
  return this;
};
Object.defineProperty(Array.prototype, "insert", { enumerable: false });

/*****************************
118.) Custom each() Array method
solved: 2/20/2023
codewars.com/kata/513e7e1aee7d36073e00000d
*****************************/
Array.prototype.each = function (cb) {
  for (let i = 0; i < this.length; i++) { 
    if (cb(this[i], i)) {
      break;
    }
  }
}

/*****************************
119.) Implementing Array.prototype.groupBy method
solved: 2/20/2023
codewars.com/kata/53c2c3e78d298dddda000460
*****************************/
Array.prototype.groupBy = function (fn) {
  let h = {};
  for (let item of this) {
    let curr = !fn ? item : fn(item);
    if (h[curr]) { 
      h[curr].push(item); 
    } else {
      h[curr] = [item];
    }
  }
  return h;
}

/*****************************
120.) Parse a linked list from a string
solved: 2/20/2023
codewars.com/kata/582c5382f000e535100001a7
*****************************/
function parse(string) {
  if (string.length === 4 || !string) {
    return null;
  } else {
    return new Node(
      +string.split(" -> ")[0], 
      parse(string.split(" -> ").slice(1).join(" -> "))
    );
  }
}

/*****************************
121.) Mexican Wave
solved: 2/19/2023
codewars.com/kata/58f5c63f1e26ecda7e000029
*****************************/
function wave(str) {
  str = str.split("")
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    let temp = str;
    temp[i] = temp[i].toUpperCase()
    res.push(temp.join(""))
    temp[i] = temp[i].toLowerCase()
  }
  return res
}

/*****************************
122.) Format words into a sentence
solved: 2/19/2023
codewars.com/kata/51689e27fe9a00b126000004
*****************************/
function formatWords(w) {
  if (!w || !w.length) return '';

  w = w.filter(w => !!w);
  if (!w[0]) return "";
  if (w.length === 1) return w[0];
  if (w.length === 2) return `${w[0]} and ${w[1]}`;

  let res = "";
  for (let i = 0; i < w.length - 1; i++) {
    res += `${w[i]}, `;
  }
  return res.slice(0, -2) + ` and ${w[w.length - 1]}`;
}

/*****************************
123.) Selective Array Reversing
solved: 2/19/2023
codewars.com/kata/58f6000bc0ec6451960000fd
*****************************/
function selReverse(arr, len) {
  if (len <= 1) return arr;
  let res = [], temparr = [];
  for (let i = 0, j = len; i < arr.length; i++, j--) {
    if (j === 0) {
      j = len;
      res = [...res, ...temparr];
      temparr = [];
    }
    temparr.unshift(arr[i]);
  }
  return temparr.length > 0 ? [...res, ...temparr] : res;
}

/*****************************
124.) Getting MAD
solved: 2/19/2023
codewars.com/kata/593a061b942a27ac940000a7
*****************************/
function getting_mad(arr) {
  let min = Math.abs(arr[0] - arr[1]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, Math.abs(arr[i] - arr[j]));
    }
  }
  return min;
}

/*****************************
125.) Calculate number of inversions in array
solved: 2/18/2023
codewars.com/kata/537529f42993de0e0b00181f
*****************************/
function countInversions(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    for (j = i; j < array.length; j++) {
      if (curr > array[j]) {
        count++;
      }
    } 
  }
  return count;
}

/*****************************
126.) Find matching parenthesis
solved: 2/18/2023
codewars.com/kata/59293c2cfafd38975600002d
*****************************/
String.prototype.findParenMatch = function (pos) {
  let l = [], r = [], check = this[pos];
  const len = check === ")" ? pos + 1 : this.length;

  for (let i = 0; i < len; i++) {
    this[i] === "(" ? l.push(i) : r.push(i);
    if (this[i] === ")") {
      if (r.pop() === pos && check === ")") {
        let res = l.pop();
        return res === undefined ? -1 : res;
      } else {
        if (l.pop() === pos) return i;
      }
    }
  }
  return -1;
};

/*****************************
127.) Happy numbers
solved: 2/17/2023
codewars.com/kata/5464cbfb1e0c08e9b3000b3e
*****************************/
function isHappy(n) {
  if (n === 1) return true;
  let sum = 0;
  let set = {};
  while(n !== 1 && !set[sum]) {
    set[sum] = true;
    sum = 0;
    n.toString().split("").forEach(num => sum+=num**2);
    n = sum;
  }
  return sum === 1;
}

/*****************************
128.) Multiples of 3 or 5
solved: 2/17/2023
codewars.com/kata/514b92a657cdc65150000006
*****************************/
function solution(n) {
  if (n <= 1) return 0;
  return new Array(n - 1).fill(n - 1).reduce((a, c, i) => {
    let curr = c -= i;
    if (curr % 3 == 0 || curr % 5 == 0) { a += curr; }
    return a;
  }, 0)
}


/*****************************
129.) Highest Scoring Word
solved: 2/15/2023
codewars.com/kata/57eb8fcdf670e99d9b000272
*****************************/
function high(x) {
  let max = 0;
  let cnt = 0;
  let word = "";
  let tempword = "";
  for (let i = 0; i < x.length; i++) {
    const curr = (+x.charCodeAt(i) - 96);
    if (curr >= 1) {
      tempword += x[i];
      cnt += curr;
    } else {
      if (cnt > max) {
        max = cnt;
        word = tempword;
      }
      cnt = 0;
      tempword = "";
    }
  }
  return cnt > max ? tempword : word;
}

/*****************************
130.) N High Scores
solved: 2/14/2023
codewars.com/kata/5ad0fdf461c493cc09000036
*****************************/
function topScores(r, n) {
  if (n <= 0) return [];
  const h = {};
  for (const [user, score] of r) {
    if (h[user]) {
      if (h[user] < score) {
        h[user] = score;
      }
    } else {
      h[user] = score;
    }
  }

  return Object.entries(h).sort((a, b) => {
    return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1];
  }).slice(0, n);
}

/*****************************
131.) Well, that's just (proto)typical! The Misadventures of Bob the Highly Paid Consultant #3
solved: 2/14/2023
codewars.com/kata/5877146c7aad3940f0000029
*****************************/
class Cart {
  constructor(user) {
    this.user = user;
    this.cart = [];
  }

  add(item) {
    this.cart.push(item);
  }

  remove(item) {
    this.cart = this.cart.filter(i => i.id !== item.id);
  }

  clear() {
    this.cart = [];
  }

  subtotal() {
    return this.cart.reduce((a,c) => +a + (+c.value * +c.quantity), 0);
  }

  toString() {
    return this.cart.map(item => `${item.name}: ${item.quantity}@ ${item.value} ea.`).join("\n");
  }
}

/*****************************
132.) Most Frequent Weekdays
solved: 2/14/2023
codewars.com/kata/56eb16655250549e4b0013f4
*****************************/
function mostFrequentDays(y) {
  const wn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [start, end] = [new Date(y, 0, 1), new Date(y, 11, 31)];
  const counts = {};

  while (start <= end) {
    counts[wn[start.getDay()]] = (counts[wn[start.getDay()]] || 0) + 1;
    start.setDate(start.getDate() + 1);
  }
  
  let res = [];
  for (let [key, val] of Object.entries(counts)) {
    if (val === Math.max(...Object.values(counts))) {
      key === "Monday" ? res.unshift(key) : res.push(key);
    }
  }
  return res;
}

/*****************************
133.) String character frequency
solved: 2/14/2023
codewars.com/kata/5a1a514effe75fd63b0000f2
*****************************/
function solve(s){
  const freq = {};
  for (let l of s) { freq[l] = (freq[l] || 0) + 1; }
  for (let k in freq) {
    // preserve original hash
    const temp = Object.assign({}, freq);
    // decrement value of each key by 1 and delete if value is 0
    if (!(--temp[k])) delete temp[k];
    if (new Set(Object.values(temp)).size === 1) return true;
  }
  return false;
};

/*****************************
134.) Closures and Scopes
solved: 2/13/2023
codewars.com/kata/526ec46d6f5e255e150002d1
*****************************/
function createFunction(n) {
  return function() {
    return n;
  };
}

function createFunctions(n) {
  var callbacks = [];
  for (var i = 0; i < n; i++) {
    callbacks.push(createFunction(i));
  }
  return callbacks;
}

/*****************************
135.) Determine the date by the day number
solved: 12/26/2022
codewars.com/kata/602afedfd4a64d0008eb4e6e
*****************************/
function getDay(day, isLeap){
  let months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]
  let tempdate;
  if (isLeap) {
    tempdate = new Date(2024, 0, day)
    return months[tempdate.getMonth()] + ", " + tempdate.getDate()
  } else {
    tempdate = new Date(2023, 0, day)
    return months[tempdate.getMonth()] + ", " + tempdate.getDate()
  }
}

/*****************************
136.) Valid Braces
solved: 10/29/2022
codewars.com/kata/5277c8a221e209d3f6000b56
*****************************/
function validBraces(braces) {
  const key = {
    "(": 1, "[": 2, "{": 3,
    ")": -1,"]": -2,"}": -3,
  }

  let res = []
  for (let i = 0; i < braces.length; i++) {
    let brace = braces[i]
    if (key[brace] > 0) {
      res.push(key[brace])
    } else {
      if (key[brace] + res.pop() !== 0) {
        return false
      }
    }
  }
  return res.length === 0
}


/*****************************
137.) String average
solved: 10/20/2022
codewars.com/kata/5966847f4025872c7d00015b
*****************************/
function averageString(str) {
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  str = str.split(" ")

  let nums = str.map((x) => arr.indexOf(x) > -1 ? ""+arr.indexOf(x) : false)

  return nums.filter(Boolean).length !== str.length 
    ? "n/a"
    : arr[~~(nums.reduce((a, c) => +a + +c, 0) / str.length)]
}


/*****************************
138.) Find the Mine!
solved: 10/20/2022
codewars.com/kata/528d9adf0e03778b9e00067e
*****************************/
function mineLocation(field){
  let rows = field.length
  let pos = [].concat(...field).indexOf(1) 
  return [(pos - (pos % rows)) / rows, pos % rows]
}


/*****************************
139.) first character that repeats
solved: 10/20/2022
codewars.com/kata/54f9f4d7c41722304e000bbb
*****************************/
function firstDup(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}


/*****************************
140.) Clock in Mirror
solved: 10/20/2022
codewars.com/kata/56548dad6dae7b8756000037
*****************************/
function WhatIsTheTime(timeInMirror) {
  let [h, m] = timeInMirror.split(":")
  const helper = (n) => +n < 10 ? "0" + n : n
  m = String((60 - +m) % 60)
  h = String(12 - (+m > 0 ? +h + 1 : h) % 12)

  return `${helper(h)}:${helper(m)}`
}

/*****************************
141.) Ordinal Numbers
solved: 10/20/2022
codewars.com/kata/52dda52d4a88b5708f000024
*****************************/
function ordinal(number, brief) {
  let s = ["th", "st", "nd", "rd"], v = number % 100;
  let ord = (s[(v - 20) % 10] || s[v] || s[0]);
  if (brief && ord[1] === 'd') {
    return "d"
  } else {
    return ord
  }
}

/*****************************
142.) Adding ordinal indicator suffixes to numbers
solved: 10/20/2022
codewars.com/kata/52dca71390c32d8fb900002b
*****************************/
function numberToOrdinal(n) {
  let o = ['th', 'st', 'nd', 'rd'], l = n % 100
  return n > 0 
    ? n + (o[(l - 20) % 10] || o[l] || o[0]) 
    : `${n}`
}


/*****************************
143.) Good vs Evil
solved: 10/3/2022
codewars.com/kata/52761ee4cffbc69732000738
*****************************/
function goodVsEvil(good, evil) {
  const helper = (side, arr) => arr.map((x, i) => x * side.split(" ")[i]).reduce((a, c) => a + c, 0)
  let goodsum = helper(good, [1, 2, 3, 3, 4, 10])
  let evilsum = helper(evil, [1, 2, 2, 2, 3, 5, 10])
  return goodsum > evilsum ? "Battle Result: Good triumphs over Evil" : goodsum < evilsum ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field"
}

/*****************************
144.) Roman Numerals Decoder
solved: 9/28/2022
codewars.com/kata/51b6249c4612257ac0000005
*****************************/
function solution (r) {
  const key = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  let sum = 0;
  for (let i = 0; i < r.length; i++) {
    key[r[i]] < key[r[i + 1]] ? sum -= key[r[i]] : sum += key[r[i]];
  }
  return sum
}

/*****************************
145.) Delete occurrences of an element if it occurs more than n times
solved: 9/23/2022
codewars.com/kata/554ca54ffa7d91b236000023
*****************************/
function deleteNth(arr,n){
  let h = {}
  let res = []
  for (let i = 0; i < arr.length; i++) {
    h[arr[i]] ? h[arr[i]]++ : h[arr[i]] = 1
    h[arr[i]] <= n ? res.push(arr[i]) : null
  }
  return res
}


/*****************************
146.) Highest Rank Number in an Array
solved: 9/22/2022
codewars.com/kata/5420fc9bb5b2c7fd57000004
*****************************/
function highestRank(arr) {
  let h = {}
  for (n of arr) {
    if (h[n]) h[n]++
    else h[n] = 1
  }
  return +Object.entries(h).sort((a, b) => b[1] == a[1] ? b[0] - a[0] : b[1] - a[1])[0][0]
}


/*****************************
147.) Fold an array
solved: 9/22/2022
codewars.com/kata/57ea70aa5500adfe8a000110
*****************************/
function foldArray(arr, runs) {
  let n = arr.length
  let len = n % 2 == 0 ? Math.floor(n / 2) : Math.ceil(n / 2)
  let [l,r] = [arr.slice(0,len), arr.slice(len).reverse()]
  let res = l.map((x,i) => r[i] == undefined ? x : r[i] + x)
  if (runs == 1) return res
  return foldArray(res, runs - 1)
}


/*****************************
148.) Dashatize it
solved: 9/22/2022
codewars.com/kata/58223370aef9fc03fd000071
*****************************/
function dashatize(num) {
  if (!Number.isInteger(num)) return 'NaN'
  num=[...""+num].filter(x => Number.isInteger(+x)).map((x) => { 
    return Math.abs(x) % 2 == 0 || x == 0 ? x : `-${x}-`
  }).join("").replace(/--/g, '-')
  if (num[0] == "-") num = num.slice(1)
  if (num[num.length - 1] == "-") num = num.slice(0,num.length -1)
  return num
}


/*****************************
149.) Grouped by commas
solved: 9/22/2022
codewars.com/kata/5274e122fc75c0943d000148
*****************************/
function groupByCommas(n) {
  return n.toLocaleString()
}


/*****************************
150.) Srot the inner ctonnet in dsnnieedcg oredr
solved: 9/22/2022
codewars.com/kata/5898b4b71d298e51b600014b
*****************************/
function sortTheInnerContent(words) {
  let res = ''
  words.split(" ").forEach((word) => {
    if (word.length <= 2) {
      res += word + " "
    } else {
      res += word[0] + word.split("").slice(1, word.length - 1).sort((a, b) => b.localeCompare(a)).join("") + word[word.length - 1] + " "
    }
  })
  return res.slice(0, res.length - 1)
}

/*****************************
151.) Lottery Ticket
solved: 9/22/2022
codewars.com/kata/57f625992f4d53c24200070e
*****************************/
function bingo(ticket, win){
  let res = Array(ticket.length).fill(null)
  ticket.forEach((el, i) => {
    if (el[0].split("").map(x => x.charCodeAt(0) == el[1] ? res[i]++ : "")) {
    }
  })
  return res.filter(Boolean).length >= win ? "Winner!" : "Loser!"
}

/*****************************
152.) Zero-plentiful Array
solved: 9/22/2022
codewars.com/kata/59e270da7997cba3d3000041
*****************************/
function zeroPlentiful(arr) {
  let r = [], c = [], count = 0
  for (let i = 0; i < arr.length; i++) {
    arr[i] == 0 ? count++ : count = 0
    count == 4 ? r.push(count) : count == 1 ? c.push(count) : ""
  }
  return c.length > r.length ? 0 : r.length
}


/*****************************
153.) Title Case
solved: 9/16/2022
codewars.com/kata/5202ef17a402dd033c000009
*****************************/
function titleCase(t, m) {
  if (!t) return ''
  const helper = (arr) => {
    if (arr == undefined) return []
    return arr.split(" ").map((x) => {
      if (x.length == 1) return x.toUpperCase()
      return x[0].toUpperCase() + x.slice(1).toLowerCase()
    })
  }
  t = helper(t), m = helper(m)

  if (!m.length) return t.join(" ")
  for (let i = 0; i < t.length; i++) {
    if (m.includes(t[i]) && i>0) {
      t[i] = t[i].toLowerCase()
    }
  }
  return t.join(" ")
}


/*****************************
154.) Which are in?
solved: 9/16/2022
codewars.com/kata/550554fd08b86f84fe000a58
*****************************/
function inArray(a1, a2) {
  return a1.filter(x => !!~a2.join(" ").indexOf(x)).sort()
}


/*****************************
155.) Help the bookseller !
solved: 9/16/2022
codewars.com/kata/54dc6f5a224c26032800005c
*****************************/
function stockList(art, ctg){
  let val = Array(ctg.length).fill(0)
  art.forEach((el, i) => {
    el = el.split(" ")
    let idx = ctg.indexOf(el[0][0])
    val[idx] += +el[1]
  })

  let res = ''
  let count = 0
  for (let i = 0; i < ctg.length; i++) {
    if (val[i] == 0) count++
    res += `(${ctg[i]} : ${val[i]}) - `
  }
  
  if (count == val.length) return ''
  return res.slice(0, res.length - 3)
}


/*****************************
156.) Reversing a Process
solved: 9/16/2022
codewars.com/kata/5dad6e5264e25a001918a1fc
*****************************/
function decode(r) {
  let key = parseInt(r), str = r.slice(key.toString().length).split("")
  let cipher = 'abcdefghijklmnopqrstuvwxyz'
  cipher = cipher.split("").map((_,i) => String.fromCharCode(i * key % 26 + 97))
  return new Set(cipher).size == 26 
    ? str.map((x) => String.fromCharCode(cipher.indexOf(x) + 97)).join("") 
    : "Impossible to decode" 
}


/*****************************
157.) Character with longest consecutive repetition
solved: 9/16/2022
codewars.com/kata/586d6cefbcc21eed7a001155
*****************************/
function longestRepetition(s) {
  if (!s) return ['', 0]
  let temp = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] !== undefined && s[i] != s[i + 1]) {
      temp += s[i], temp += " "
    } else {
      temp += s[i]
    }
  }
  temp = temp.split(" ")
  let getLen = temp.map(x => x.length)
  let res = temp[getLen.indexOf(Math.max(...getLen))]
  return [res[0], res.length]
}


/*****************************
158.) Count the days!
solved: 9/14/2022
codewars.com/kata/5837fd7d44ff282acd000157
*****************************/
function countDays(d) {
  let days = Math.round((new Date().getTime() - d.getTime())/1000/60/60/24)
  return days == 0 ? "Today is the day!" : days < 0 ? `${days*-1} days` : "The day is in the past!"
}


/*****************************
159.) Find the odd int
solved: 9/13/2022
codewars.com/kata/54da5a58ea159efa38000836
*****************************/
function findOdd(nums) {
  let res = 0, h = {}
  for (n of nums) { h[n] ? h[n]++ : h[n] = 1 }
  Object.entries(h).forEach((el) => el[1] % 2 !== 0 ? res += +el[0] : '')
  return res
}


/*****************************
160.) ASCII hex converter
solved: 9/10/2022
codewars.com/kata/52fea6fd158f0576b8000089
*****************************/
var Converter = {
  toAscii: function (hex) {
    let arr = [], temp = '', f = false;
    for (let i = 0, j = 0; i < hex.length; i++) {
      j++
      temp += hex[i]
      if (j == 2) {
        f = true
      }
      if (f == true) {
        arr.push(temp)
        j = 0, temp = '', f = false
      }
    }
    return arr.map(x => String.fromCharCode(parseInt(x, 16))).join("")
  },
  toHex: function (ascii) {
    return ascii.split("").map(x => x.charCodeAt(0).toString(16)).join("")
  }
}


/*****************************
161.) Hex class
solved: 9/10/2022
codewars.com/kata/5483366098aa442def0009af
*****************************/
class Hex {
  constructor(value) {
    this.value = value
  }
  valueOf() {
    return this.value
  }
  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`
  }
  toJSON() {
    return this.toString()
  }
  plus(val) {
    return new Hex(this.value + val)
  }
  minus(val) {
    return new Hex(this.value - val)
  }
  static parse(string) {
    return parseInt(string, 16)
  }
}


/*****************************
162.) What's your running pace?
solved: 9/8/2022
codewars.com/kata/578b8c0e84ac69a4d20004c8
*****************************/
function runningPace(distance, time){
  time = time.split(":").map((x, i) => i == 0 ? x *= 60 : +x)
  let min = Math.floor((time[0]+time[1])/distance)
  let sec = Math.floor(min%60)
  sec = sec <= 9 ? `0${sec}` : sec
  return `${Math.floor(min/60)}:${sec}`
}

/*****************************
163.) What century is it?
solved: 9/8/2022
codewars.com/kata/52fb87703c1351ebd200081f
*****************************/
function whatCentury(year) {
  const pattern = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th']
  let n = Math.ceil(year/100)
  let i;
  if (n%10==0) {
    if (n >= 10) {
      return `${n}th`
    } else {
      return '1st'
    }
  } else {
    n = n.toString()
    i = n[n.length - 1]
    if (n > 10 && n < 20) {
      return `${+n}th`
    } else {
      return `${+n}${pattern[i - 1]}`
    }
  }
}

/*****************************
164.) New Cashier Does Not Know About Space or Shift
solved: 9/7/2022
codewars.com/kata/5d23d89906f92a00267bb83d
*****************************/
function getOrder(input) {
  let len = input.length
  let s = ['burger','fries','chicken','pizza','sandwich','onionrings','milkshake','coke']
  input = input.toLowerCase().split("")
  let res = [], temp = '', i = 0
  
  while (i < len) {
    let m = input[i]
    temp += m
    if (s.indexOf(temp) > -1) {
      res.push(temp), temp = ''
    }
    if (m == undefined) {
      break
    }
    i++
  }
  return res.sort((a, b) => s.indexOf(a) - s.indexOf(b)).map(x => x[0].toUpperCase() + x.slice(1)).join(" ")
}

/*****************************
165.) Maze Runner
solved: 9/7/2022
codewars.com/kata/58663693b359c4a6560001d6
*****************************/
function mazeRunner(m, d) {
  m = [].concat(...m)
  let len = Math.sqrt(m.length)
  let s = m.indexOf(2)
  let k = {'N': -len, 'S': len, 'E': 1, 'W': -1}

  let path = new Set()
  for (let i = 0; i < d.length; i++) {
    s += k[d[i]]
    if (m[s] == undefined) {
      path.add(1)
    } else {
      path.add(m[s])
    }
  }
  if (path.has(1)) return 'Dead'

  if (!path.has(1)) {
    if (path.has(3)) {
      return 'Finish'
    } else {
      return 'Lost'
    }
  }
}

/*****************************
166.) Tortoise racing
solved: 9/5/2022
codewars.com/kata/55e2adece53b4cdcb900006c
*****************************/
function race(v1, v2, g) {
  if (v1 >= v2) return null
  const t = v2 - v1
  const r = ~~(g/t*3600)
  const h = ~~(r/3600), m = ~~((r-(h*3600))/60), s = ~~(r - (h * 3600) - (m * 60))
  return [h,m,s]
}


/*****************************
167.) Find the Nth longest string in an Array
solved: 9/4/2022
codewars.com/kata/5594c4599934000e1e00002e
*****************************/
const longest = (arr, n) => arr.map((v, i) => v = [v, i]).sort(
  (a, b) => a[0].length == b[0].length ? a[1] - b[1] : b[0].length - a[0].length
)[n - 1][0]


/*****************************
168.) Inside Out Strings
solved: 9/2/2022
codewars.com/kata/57ebdf1c2d45a0ecd7002cd5
*****************************/
function insideOut(x){
  let str = x.split(" ")
  str = str.map((x) => {
    let x1;
    let x2;
    x = x.split("")
    if (x.length % 2 === 0) {
      if (x.length <= 2) {
        // do nothing
      } else {
        x1 = x.slice(0, (x.length / 2)).reverse()
        x2 = x.slice((x.length / 2)).reverse()
        x = x1.concat(...x2)
      }
    } 
    else if (x.length % 2 !== 0) {
      if (x.length <= 3) {
        // do nothing
      } else {
        x1 = x.slice(0,((x.length - 1) / 2)).reverse()
        x2 = x.slice(((x.length - 1) / 2))
        x3 = x.slice(((x.length - 1) / 2)).slice(1).reverse()
        x = x1.concat(x2[0].concat(...x3))
      }
    }
    return x.join("")
  })
  return str.join(" ")
}

/*****************************
169.) Separating Strings
solved: 8/31/2022
codewars.com/kata/5977ef1f945d45158d00011f
*****************************/
function sepStr(str) {
  str = str.split(" ").map(x => x.split(""))
  const row = str.length
  const col = Math.max(...str.map(x => x.length))
  let ar = []

  for (let x = 0; x < col; x++) {
    ar.push([])
    for (let y = 0; y < row; y++) {
      if (str[y][x] !== undefined) {
        ar[x].push(str[y][x])
      } else {
        ar[x].push('')
      }
    }
  }
  return ar
}


/*****************************
170.) Find the total white and black areas in a strange chessboard
solved: 8/31/2022
codewars.com/kata/6262f9f7afc4729d8f5bef48
*****************************/
function whiteBlackAreas(cols, rows) {
  let [er, ec, or, oc] = [0,0,0,0]
  for (let i = 0; i < cols.length; i++) {
    if (i % 2 !== 0) { or += rows[i], oc += cols[i] } 
    else { ec += cols[i], er += rows[i] }
  }
  return [er * ec + or * oc, er * oc + ec * or]
}


/*****************************
171.) Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word
solved: 8/30/2022
codewars.com/kata/57fb04649610ce369a0006b8
*****************************/
function remove(s){
  const words = s.split(" ").map(x => x.replace(/[!=]/g, '').trim())
  s = s.split(" ")

  const helper = (s, [a, b] = [0, 0]) => {
    for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
      if (s[j] == '!') {
        b += 1
      } else {
        break
      }

      if (s[i] == '!') {
        a += 1
      } else {
        break
      }
    }
    return Math.min(a, b)
  }

  const res = []
  const len = s.map((x) => helper(x))
  for (let i = 0; i < s.length; i++) {
    res.push('!'.repeat(len[i]) + words[i] + '!'.repeat(len[i]))
  }

  return res.join(" ")
}

/*****************************
172.) A String of Sorts
solved: 8/30/2022
codewars.com/kata/536c6b8749aa8b3c2600029a
*****************************/
function sortString(string,ordering) {
  let order = []
  let xtra = ''
  for (let i = 0; i < string.length; i++) {
    if (ordering.indexOf(string[i]) <= -1) {
      xtra += string[i]
    } else {
      order.push([string[i], ordering.indexOf(string[i])])
    }
  }
  let res = order.sort((a, b) => a[1] - b[1])
  return [].concat(...res).filter(x=>typeof x == 'string').join("") + xtra
}

/*****************************
173.) Sort Strings by Most Contiguous Vowels
solved: 8/30/2022
codewars.com/kata/5d2d0d34bceae80027bffddb
*****************************/
function sortStringsByVowels(s) {
  let vowCount = []

  const helper = (str, f = false, res = []) => {
    const v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let curr = ''
    for (let i = 0; i < str.length; i++) {
      if (v.indexOf(str[i]) <= -1) {
        f = false
      } else if (v.indexOf(str[i]) > -1) {
        f = true
      }

      if (f == true) {
        curr += str[i]
        if (v.indexOf(str[i + 1]) <= -1 || str[i + 1] == undefined) {
          res.push(curr)
        }
      }
      
      if (f == false) {
        curr = ''
      }
    }
    return res
  }

  s.forEach((el) => vowCount.push(helper(el)))
  let k = []
  let e = {}

  vowCount.forEach((el) => { k.push(Math.max(...el.map(x=>x.length)))})
  s.forEach((el, i) => e[el] = k[i])
  let res = Object.entries(e).sort((a,b)=> b[1] - a[1] || a - b)
  return [].concat(...res).filter(x=> typeof x == 'string')
}


/*****************************
174.) String array duplicates
solved: 8/30/2022
codewars.com/kata/59f08f89a5e129c543000069
*****************************/
function dup(s) {
  let h = []
  const helper = (str) => {
    let res = []
    let flag = false
    for (let i = 0; i < str.length; i++) {
      if (str[i - 1] == str[i]) {
        flag = false
      } else if (str[i - 1] != str[i]) {
        flag = true
      }

      if (flag == true) {
        res.push(str[i])
      }
    }
    return res.join("")
  }

  s.forEach((e) => h.push(helper(e)))
  return h
};

/*****************************
175.) CamelCase Method
solved: 8/29/2022
codewars.com/kata/587731fda577b3d1b0001196
*****************************/
String.prototype.camelCase=function(){
  if (!this.length) return "";
  let str = this.trim().split(" ");
  return str.map((x) => x[0].toUpperCase() + x.slice(1)).join("");
}


/*****************************
176.) Extract last names of people named Michael
solved: 8/29/2022
codewars.com/kata/580741302e14acaef900015a
*****************************/
function getMichaelLastName(inp) {

  inp = inp.replace(/[^a-zA-Z]+/g, ' ').split(" ")
  const check = arr => arr[0].toLowerCase() != arr[0] ? true : false
  const res = []

  for (let i = 0; i < inp.length; i++) {
    inp[i + 1] != undefined && inp[i] == "Michael" && check(inp[i + 1]) ? res.push(inp[i+1]) : ''
  }
  return res
}


/*****************************
177.) Find the most frequently occurring elements in arrays
solved: 8/29/2022
codewars.com/kata/578b44a47c77f5a1bd000011
*****************************/
function getMostFrequent(json) {
  const freq = []
  const helper = (row) => {
    let h = []
    for (n of row) { h[n] ? h[n] += 1 : h[n] = 1 }

    let mx = Math.max(...Object.values(h)), ent = Object.entries(h)
    let idxOfMx = [], rowIdx = []

    for (let i = 0; i < ent.length; i++) {
      ent[i][1] == mx ? idxOfMx.push(+ent[i][0]) : ''
    }
    for (let i = 0; i < idxOfMx.length; i++) {
      rowIdx.push(row.lastIndexOf(idxOfMx[i]))
    }

    return idxOfMx[rowIdx.indexOf(Math.max(...rowIdx))]
  }
  json['temperature'].forEach((el) => freq.push(helper(el)))
  return freq
}

/*****************************
178.) search in multidimensional array
solved: 8/29/2022
codewars.com/kata/52840d2b27e9c932ff0016ae
*****************************/
var locate = function(arr,value){
  let idx = -20
  let len = arr.length
  while (++idx < len) { arr = [].concat(...arr) }
  return arr.indexOf(value) > -1
}

/*****************************
179.) Update inventory in your smartphone store
solved: 8/29/2022
codewars.com/kata/57a31ce7cf1fa5a1e1000227
*****************************/
function updateInventory(curr, n) {
  let res = [], temp = []
  curr.concat(n).forEach((el) => {
    if (temp.indexOf(el[1]) > -1) {
      res[temp.indexOf(el[1])][0] += el[0]
    } else {
      temp.push(el[1])
      res.push(el)
    }
  })
  return res.sort((a, b) => a[1].localeCompare(b[1]))
}

/*****************************
180.) Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
solved: 8/29/2022
codewars.com/kata/583d972b8bbc0402cf000121
*****************************/
function askForMissingDetails(list) {
  let res = []
  list.forEach((el) => {
    for (i in el) {
      if (el[i] == null) {
        el.question = `Hi, could you please provide your ${i}.` 
        res.push(el)
      }
    }
  })
  return res || []
}


/*****************************
181.) Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
solved: 8/28/2022
codewars.com/kata/58381907f8ac48ae070000de
*****************************/
function isLanguageDiverse(list) {
  let chk = Array(3).fill(0)
  list.forEach((el) => {
    let tmp = el.language[0]
    tmp == 'J' ? chk[0]++ :
    tmp == 'P' ? chk[1]++ :
    tmp == 'R' ? chk[2]++ : null
  })
  return Math.max(...chk) / 2 <= Math.min(...chk) 
}

/*****************************
182.) Coding Meetup #10 - Higher-Order Functions Series - Create usernames
solved: 8/28/2022
codewars.com/kata/582a53ed261c2af9d200018c
*****************************/
function addUsername(list) {
  const usernames = []
  list.forEach((el) => 
    usernames.push(el.firstName.toLowerCase()+el.lastName[0].toLowerCase() + ""+(new Date().getFullYear()-el.age)
  ))

  for (i in list) {
    list[i].username = usernames[i]
  }
  
  return list
}


/*****************************
183.) Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
solved: 8/28/2022
codewars.com/kata/5829ca646d02cd1a65000284
*****************************/
const isAgeDiverse = (list, a = Array(10).fill(false)) => {
  for (i of list) { i = "" + i.age, a[i.length > 2 ? +(i[0]+"0") : +(i[0])] = true } 
  return a.filter(Boolean).length == 10
}


/*****************************
184.) Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
solved: 8/28/2022
codewars.com/kata/58291fea7ff3f640980000f9
*****************************/
function allContinents(list) {
  return [...new Set(list.map(x => x.continent))].length === 5
}

/*****************************
185.) Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
solved: 8/28/2022
codewars.com/kata/582887f7d04efdaae3000090
*****************************/
const findSenior = (list, m=[]) => {
  for (a in list) { m.push(list[a].age) }
  return list.filter(x => x.age < Math.max(...m) ? '' : x)
}


/*****************************
186.) Permute a Palindrome
solved: 8/28/2022
codewars.com/kata/58ae6ae22c3aaafc58000079
*****************************/
const permuteAPalindrome = (inp, m=new Map) => {
  for (i of inp) { m.has(i) ? m.delete(i) : m.set(i) } return m.size<=1
}


/*****************************
187.) Odd/Even number of divisors
solved: 8/28/2022
codewars.com/kata/55830eec3e6b6c44ff000040
*****************************/
function oddity(n) {
  return Math.sqrt(n)%1===0?'odd':'even'
}

/*****************************
188.) Simple Fun #52: Pair Of Shoes
solved: 8/27/2022
codewars.com/kata/58885a7bf06a3d466e0000e3
*****************************/
function pairOfShoes(shoes) {
  const helper = (arr, val) => arr.reduce((a, c) => c[0] === val ? a + c[1] : a, 0)
  let [a, b] = [helper(shoes, 0), helper(shoes, 1)]
  return a - b === 0
}


/*****************************
189.) Count the smiley faces!
solved: 8/27/2022
codewars.com/kata/583203e6eb35d7980400002a
*****************************/
function countSmileys(arr) {
  
  let eyes = [':', ';'],
      noses = ['-', '~'],
      mouths = [')', 'D'];

  let count = 0

  const check = el => {
    if (el.length > 2 && el.length <= 3) {
      return eyes.indexOf(el[0]) > -1 && noses.indexOf(el[1]) > -1 && mouths.indexOf(el[2]) > -1
    } else if (el.length == 2) {
      return eyes.indexOf(el[0]) > -1 && mouths.indexOf(el[1]) > -1
    }
  }

  arr.forEach((el) => count += 1 ? check(el) == true : '')
  return count
}

/*****************************
190.) The Deaf Rats of Hamelin
solved: 8/27/2022
codewars.com/kata/598106cb34e205e074000031
*****************************/
var countDeafRats = function (town) {

  town = town.replace(/\s+/g, '')
  
  let r = 0
  let seen = false

  for (let i = 1, j = town.indexOf('P') + 1; i < town.length; i++) {
    
    if (seen == false) {
      if (i % 2 !== 0 && town.slice(i - 1, i + 1) == "O~") {
        r++
      } 
    } 
    
    if (seen == true) {
      j++
      if (j % 2 == 0 && town.slice(j - 1, j + 1) == "~O") {
        r++
      } 
    }

    if (town[i - 1] == "P") {
      seen = true
    }
  }

  return r
}

/*****************************
191.) Build Tower
solved: 8/27/2022
codewars.com/kata/576757b1df89ecf5bd00073b
*****************************/
function towerBuilder(nFloors) {
  let res = []
  let n1 = " "
  for (let i = 1, j = nFloors - 1, k = 0; i <= nFloors; i++, j--) {
    if (i >= 2) {
      k += 1
    }
    res.push(n1.repeat(j) + "*".repeat(i + k) + n1.repeat(j))
  }
  return res
}


/*****************************
192.) Split and Join
solved: 8/27/2022
codewars.com/kata/5816ead8dae5a59eaa000053
*****************************/
function split(arr) {
  return [[].concat(...arr), arr.map(x => x ? [x.length] : '')]
}

function join(arr1, arr2) {
  let res = []
  for (let i = 0, j = 0; i < arr2.length; i++) {
    res.push(arr1.slice(j, j + arr2[i][0]))
    j += arr2[i][0]
  }
  return res
}


/*****************************
193.) Turn String Input into Hash
solved: 8/23/2022
codewars.com/kata/52180ce6f626d55cf8000071
*****************************/
function strToHash(str) {
  if (!str) return {}
  let hash = {}
  str = str.split(", ")
  let keys = str.map((x) => x.split("=")[0])
  let values = str.map((x) => +x.split("=")[1])
  for (let i = 0; i < str.length; i++) {
    hash[keys[i]] = values[i]
  }
  return hash
}


/*****************************
194.) String tops
solved: 8/23/2022
codewars.com/kata/59b7571bbf10a48c75000070
*****************************/
function tops(msg) {
  let arr = [1]
  for (let i = 6, j = 5; i < msg.length; i += j + 4, j += 4) {
    if (msg[i]) { arr.push(i) }
  }
  return arr.reverse().map((x) => msg[x]).join("")
}


/*****************************
195.) Begin your day with a challenge, but an easy one.
solved: 8/22/2022
codewars.com/kata/5873b2010565844b9100026d
*****************************/
function oneTwoThree(n) {
  let b = Array(n).fill(1).join("")
  if (n === 0) return ["0", "0"]
  return [Array(n/9>>>0).fill(9).concat(n % 9 || '').join(""), b]
}


/*****************************
196.) Catalog
solved: 8/22/2022
codewars.com/kata/59d9d8cb27ee005972000045
*****************************/
function catalog(s, article) {
  s = s.split("<prod>")
  let arr = []
  s.forEach((prod) => {
    if (prod.includes(article)) {
      let str = ''
      let pr = prod.replace(/\<.*?\>/g, ' ').trim().split(" ")
      let cat = ['> prx: ',' qty: ']
      let c = 0
      for (let i = 0; i < pr.length; i++) {
        if (pr[i].length == 0 && c == 0) {
          str += cat[0]
          c += 1
        } else if (pr[i].length == 0 && c == 1) {
          str += cat[1]
          c = 0
        } else if (c == 1 && pr[i].length > 0) {
          str += `$${pr[i]}`
        } else {
          str += pr[i] + " "
        }
      }
      arr.push(str.slice(0, str.length - 1))
    }
  })
  return arr.length ? arr.join("\r\n") : "Nothing"
}

/*****************************
197.) Strings, strings, strings (Hard)
solved: 8/20/2022
codewars.com/kata/56d9439813f38853b40000e4
*****************************/
Array.prototype.toString = function () {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (i == 0) str += '['
    if (i > 0) str += ','

    if (typeof this[i] == "string") {str += "'" + this[i] + "'"} 
    else { str += this[i].toString() }

    if (i == this.length - 1) str += ']'
  }
  return str.length == 0 ? '[' + '' + ']' : str
}

/*****************************
198.) Meeting
solved: 8/20/2022
codewars.com/kata/59df2f8f08c6cec835000012
*****************************/
function meeting(s) {
  s = s.split(";").map((x) => x.split(":")).sort((a, b) => {
    let x;
    x = a[1].localeCompare(b[1])
    if (a[1].toLowerCase() == b[1].toLowerCase()) {
      x = a[0].localeCompare(b[0])
    }
    return x
  })
  let res = []
  s.forEach((el) => res.push(`(${el[1].toUpperCase()}, ${el[0].toUpperCase()})`))
  return res.join("")
}

/*****************************
199.) Unknown amount of duplicates. One missing number.
solved: 8/17/2022
codewars.com/kata/5a5cdb07fd56cbdd3c00005b
*****************************/
function findDupsMiss(arr) {
  let h = []
  let d = []
  let total = 0
  for (let n of arr) {
    if (h[n]) {
      h[n] += 1
      d.push(n)
    } else {
      h[n] = 1
      total += n
    }
  }
  let len = arr.length - d.length + 1
  h = Object.keys(h)
  let m = +h[h.length - 1]
  return [(len * (m + (m - len + 1)) / 2) - total, d.sort((a, b) => a - b)]
}

/*****************************
200.) Check if two words are isomorphic to each other
solved: 8/10/2022
codewars.com/kata/59dbab4d7997cb350000007f
*****************************/
function isomorph(a, b) {
  if (!a || !b) return false
  const helper = arr => {
    return arr.split("").map((x) => arr.indexOf(x)).join(" ")
  }
  return helper(b) == helper(a)
}

/*****************************
201.) Validate Credit Card Number
solved: 8/8/2022
codewars.com/kata/5418a1dd6d8216e18a0012b2
*****************************/
function validate(card) {
  let arr = [...""+card].reverse().map((x, i) => i % 2 != 0 ? +x * 2 : +x)
  let r = []
  arr = arr.forEach((e)=> {e = e>9 ? e-9 : e, r.push(e)})
  return r.reduce((a,c)=> a+c, 0) % 10 == 0
}

/*****************************
202.) Who has the most money?
solved: 8/8/2022
codewars.com/kata/528d36d7cc451cd7e4000339
*****************************/
function mostMoney(students, r = []) {
  students.forEach((s) => {
    r.push((s.fives * 5) + (s.tens * 10) + (s.twenties * 20))
  })
  let i = r.indexOf(Math.max(...r))
  const checkAll = [...new Set(r)].length === 1
  return r.length === 1 ? students[0].name : checkAll ? "all" : students[i].name
}

/*****************************
203.) Mix Fruit Juice
solved: 8/8/2022
codewars.com/kata/5905871c00881d0e85000015
*****************************/
function mixFruit (arr) {

  arr = arr.map(x => x.toLowerCase())
  let s = [ 'banana', 'orange', 'apple', 'lemon', 'grapes' ]
  let s2 = [ 'avocado', 'strawberry', 'mango' ]

  let m = 0
  for (let i = 0; i < arr.length; i++) {
    if (s.includes(arr[i])) {
      m += 5
    } else if (s2.includes(arr[i])) {
      m += 7
    } else {
      m += 9
    }
  }

  return Math.round(m / arr.length)
}

/*****************************
204.) Fruit Machine
solved: 8/8/2022
codewars.com/kata/590adadea658017d90000039
*****************************/
function fruit(reels, spins) {
  let items = ["Jack","Queen","King","Bar","Cherry","Seven","Shell","Bell","Star","Wild"],
      three = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      twoPlus = [2, 4, 6, 8, 10, 12, 14, 16, 18, 0],
      two = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const helper = (s, arr) => { return arr.map((x) => s.indexOf(x)) }

  let arr = []
  for (let i = 0; i < reels.length; i++) { arr.push(helper(items, reels[i])) }

  let scores = []
  for (let i = 0; i < arr.length; i++) { scores.push(arr[i][spins[i]] + 1) }

  let dub = 0
  let trip = 0
  if (scores[0] === scores[1] && scores[1] === scores[2]) { trip += scores[0] }
  if (scores[0] === scores[1]) { dub += scores[0] }
  if (scores[0] === scores[2]) { dub += scores[0] }
  if (scores[1] === scores[2]) { dub += scores[1] }

  let w = 0
  const distribute = t => {
    return dub>0 && trip==0 ? w += t[dub-1] : trip>0 ? w += three[trip-1] : trip<0 && dub<0 ? w=0 : 0
  }
  return scores.includes(10) && dub !== 10 ? distribute(twoPlus) : distribute(two)
}

/*****************************
205.) Character counts
solved: 8/8/2022
codewars.com/kata/56b409febccd5aafbd000021
*****************************/
/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (chars) {
  if (this.length === 0 || !chars) { return undefined }
  if (typeof chars === "string") { chars = chars.split("") }
  

  let res = []
  let arr = [...this]

  const helper = (arr, char) => { return arr.filter((x) => x == char).length}
  for (let i = 0; i < chars.length; i++) {
    res.push(helper(arr, chars[i]))
  }
  return res.length === 1 ? res[0] : res
};

/*****************************
206.) N-th Fibonacci
solved: 8/8/2022
codewars.com/kata/522551eee9abb932420004a0
*****************************/
function nthFibo(n) {
  const nth = n;
  let a = 1
  let b = 0
  let temp;

  let r = []
  while (n >= 0) {
    temp = a    
    a = a + b
    b = temp
    r.push(b)
    --n
  }
  return [0].concat(r)[nth - 1]
}

/*****************************
207.) Array Deep Count
solved: 8/7/2022
codewars.com/kata/596f72bbe7cd7296d1000029
*****************************/
function deepCount(a){
  let t = a.length
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      t += deepCount(a[i])
    }
  }
  return t
}

/*****************************
208.) A Memory game array
solved: 8/7/2022
codewars.com/kata/55437532b73f053bac000096
*****************************/
function createTiles(n){
  if (n % 2 !== 0) { return [] }
  let arr = []
  for (let i = 0, j = n/2, k = n/2; i < n; i++, j--, k--) {
    if (j !== undefined && j > 0) {
      arr.push(j, k)
    }
  }
  return arr.sort(() => Math.random() - 0.5)  
}

/*****************************
209.) Selective memory
solved: 8/7/2022
codewars.com/kata/58bee820e9f98b215200007c
*****************************/
function select(memory){
  memory = memory.split(", ")
  let idx = []
  let arr = []
  let k = []
  for (let i = 0; i < memory.length; i++) {
    if (memory[i].startsWith("!")) {
      idx.push(i)
      k.push(memory[i].slice(1), memory[i + 1])
    } else {
      arr.push(memory[i])
    }
  }
  
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (k.includes(arr[i])) {

    } else {
      res.push(arr[i])
    }
  }

  return res.join(", ")
}

/*****************************
210.) Special Multiples
solved: 8/7/2022
codewars.com/kata/55e785dfcb59864f200000d9
*****************************/
function countSpecMult(n, mxval) {
  const isPrime = num => {
    let sq = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= sq; i++)
      if (num % i === 0) return false;
    return num > 2;
  }

  let i = 2;
  let k = 2;
  let count = 1;
  while (count < n) {
    if (isPrime(i)) {
      count++
      k *= i
    }
    i++
  }
  return Math.floor(mxval/k)
}

/*****************************
211.) One line task: Square Every Digit
solved: 8/2/2022
codewars.com/kata/5acd142a2ec8c48521000104
*****************************/
sd=x=>+[...""+x].map(n=>n*n).join``


/*****************************
212.) "Stringing"+"Me"+"Along"
solved: 8/2/2022
codewars.com/kata/55f4a44eb72a0fa91600001e
*****************************/
function createMessage () {
  let args = [...arguments][0]
  function m() {
    if (arguments.length === 0) { return args }
    args += ` ${[...arguments][0]}`
    return m
  }
  return m
}

/*****************************
213.) Training Random Testcases #1: Fizz Buzz
solved: 8/2/2022
codewars.com/kata/57980be93467db22f5000038
*****************************/
function randomNumber() {
  const r = Math.ceil(Math.random() * 100) <= 80;
  
  while (true) {
    const c = Math.ceil(Math.random() * 9999);
    
    if (r == (c % 5 == 0 || c % 3 == 0)) {
      return c;
    }
  }
}







function correctSolution(n){
  //This is a sample of trainer's solution
  //You don't need coding for it.
  if (typeof n!='number' || isNaN(n) || n<1 || n>999 || n%1!=0) 
    return "Invalid input!"
  return n%15==0?"Fizz Buzz":n%5==0?"Buzz":n%3==0?"Fizz":n
}

function wrongSolution1(n){
  //This is a sample of trainer's solution
  //You don't need coding for it.
  return n==3?"Fizz":n==5?"Buzz":n==15?"Fizz Buzz":n
}

/*****************************
214.) Find the Nexus of the Codewars Universe
solved: 8/2/2022
codewars.com/kata/5453dce502949307cf000bff
*****************************/
const nexus = (users, r = []) => {
  for (let [k, v] of Object.entries(users)) { 
    r.push(Math.abs(+k - v)) 
  }
  return +(Object.keys(users)[r.indexOf(Math.min(...r))])
}

/*****************************
215.) Adjacent repeated words in a string
solved: 8/1/2022
codewars.com/kata/5245a9138ca049e9a10007b8
*****************************/
function countAdjacentPairs(s) {
  if (!s.length) { return 0 }
  s = s.toLowerCase().split(" ")
  let a = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i+1] && s[i-1] !== s[i+1]) {
      a.push(s[i+1])
    }
  }
  return a.length
}

/*****************************
216.) IPv4 to int32
solved: 8/1/2022
codewars.com/kata/52ea928a1ef5cfec800003ee
*****************************/
function ipToInt32(ip){
  return ip.split(".").reduce((a,c)=> +a * 256 + +c, 0)
}

/*****************************
217.) Pyramid Array
solved: 8/1/2022
codewars.com/kata/515f51d438015969f7000013
*****************************/
function pyramid(n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push(Array(i+1).fill(1))
  }
  return res
}

/*****************************
218.) Count words
solved: 8/1/2022
codewars.com/kata/56b3b27cadd4ad275500000c
*****************************/
function wordCount(s) {
  s = s.split(/[^a-zA-Z]/ig)
  return s.filter((a) => {
    if (a === '' || ["a","the","on","at","of","upon","in","as"].indexOf(a.toLowerCase()) > -1) {
    } else {
      return a
    }
  }).length
}

/*****************************
219.) Change it up
solved: 8/1/2022
codewars.com/kata/58039f8efca342e4f0000023
*****************************/
function changer(str) { 
  return [...str].map((x) => {
    let cc = 0
    let s = ''

    if (!Number.isInteger(+x)) {
      if (x.charCodeAt(0) === 90 || x.charCodeAt(0) === 122) {
        cc += 96
      } else {
        cc += x.charCodeAt(0)
      }

      let newstr = String.fromCharCode(cc+1).toLowerCase()
      if (['a','e','i','o','u'].indexOf(newstr) > -1) {
        newstr = newstr.toUpperCase()
      } 
      s += newstr
    } else {
      s += x
    }
    return s
  }).join("")
}

/*****************************
220.) The Supermarket Queue
solved: 8/1/2022
codewars.com/kata/57b06f90e298a7b53d000a86
*****************************/
function queueTime(customers, n) {
  const curr = Array(n).fill(0)
  for (let acc of customers) {
    curr[curr.indexOf(Math.min(...curr))] += acc
  }
  return Math.max(...curr)
}

/*****************************
221.) Message Validator
solved: 7/31/2022
codewars.com/kata/5fc7d2d2682ff3000e1a3fbc
*****************************/
function isAValidMessage(message){

  let a = message.split(/([0-9]+)/).slice(1)
  if (a[a.length-1] === "") {return false}
  
  let len = []
  let arr = []
  for (let i = 0; i < a.length; i++) {
    if (Number.isInteger(+a[i])) {
      len.push(a[i]) 
    } else {
      arr.push(String(a[i].length))
    }
  }

  return len.join('') === arr.join('')
}


/*****************************
222.) Find the missing letter
solved: 7/31/2022
codewars.com/kata/5839edaa6754d6fec10000a2
*****************************/
function findMissingLetter(a) {
  a=a.join("")
  let res = 0
  for (let i = 0; i < a.length; i++) {
    if (a.charCodeAt(i+1) - a.charCodeAt(i)>1) {
      res += a.charCodeAt(i)+1
    }
  }
  return String.fromCharCode(res)
}

/*****************************
223.) Is a number prime?
solved: 7/31/2022
codewars.com/kata/5262119038c0985a5b00029f
*****************************/
function isPrime(num) {
  let sq = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) return false;
  }
  return num > 1 ? true : false
}


/*****************************
224.) Decode the Morse code
solved: 7/31/2022
codewars.com/kata/54b724efac3d5402db00065e
*****************************/
decodeMorse = function (morseCode) {
  morseCode = morseCode.trim().split(" ").map((el) => MORSE_CODE[el] || ' ')
  return morseCode.join("").replace(/\s+/g, ' ')
}

/*****************************
225.) Find the unique number
solved: 5/13/2022
codewars.com/kata/585d7d5adb20cf33cb000235
*****************************/
function findUniq(arr) {
  let count = {};
  for (const num of arr) {
    if (count[num]) { count[num] += 1; }
    else { count[num] = 1; }
  }

  for (let [key, value] of Object.entries(count)) {
    if (value == 1) { return Number(key); }
  }
}

/*****************************
226.) Kebabize
solved: 7/30/2022
codewars.com/kata/57f8ff867a28db569e000c4a
*****************************/
function kebabize(str) {

  str = str.replace(/[^a-zA-Z]/g, '')
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) < 97) {
      res += `-${str[i].toLowerCase()}`
    } else {
      res += str[i]
    }
  }
  return res[0] === "-" ? res.slice(1) : res
}

/*****************************
227.) +1 Array
solved: 7/30/2022
codewars.com/kata/5514e5b77e6b2f38e0000ca9
*****************************/
function upArray(arr) {
  let i = arr.length - 1
  const hasNegative = arr.some((x) => x<0 || x>9 || typeof x !== "number")
  if (i + 1 === 0 || hasNegative) { return null }
  if (arr[i] < 9) { return arr.slice(0, i).concat(arr[i] + 1) }

  while (arr[i] > 8) {
    arr[i] = 0
    arr[i - 1] += 1
    i--
    if (arr[i] === 9 && arr[i + 1] === 0) { break; }
  }

  if (arr[0] === 0) { return [1].concat(Array(arr.length).fill(0)) }

  return arr
}

/*****************************
228.) Lock and Key
solved: 7/29/2022
codewars.com/kata/53c2a84a1dfa43a7e40005ba
*****************************/
class Lock {
  constructor() {
    this.keys = [];
  }

  createKey() {
    let key = {};
    this.keys.push(key)
    return key
  }

  check(key) {
    return this.keys.some((k) => k === key)
  }

  expire(key) {
    this.keys = this.keys.filter((k) => k !== key)
  }

}

/*****************************
229.) Two Sum
solved: 7/22/2022
codewars.com/kata/52c31f8e6605bcc646000082
*****************************/
function twoSum(numbers, target) {
  let res = []
  for (let i = 0; i < numbers.length; i++) {
    let curr = numbers[i]
    let p = target - curr
    if (res[p] !== undefined) {
      return [res[p], i]
    } else {
      res[curr] = i
    }
  }
}

/*****************************
230.) Reverse every other word in the string
solved: 7/22/2022
codewars.com/kata/58d76854024c72c3e20000de
*****************************/
function reverse(str) {
  if (!str) {return '';}

  let res = []
  let temp;
  str = str.trim().split(" ")

  for (let i = 0; i < str.length; i++){ 
    if (i % 2 !== 0) {
      temp = str[i]
      res.push(Array.from(temp).reverse().join(""))
    } else {
      res.push(str[i])
    }
  }

  return res.join(" ")
}

/*****************************
231.) Sum consecutives
solved: 7/22/2022
codewars.com/kata/55eeddff3f64c954c2000059
*****************************/
function sumConsecutives(s) {
  let res = []
  let temp = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      temp += s[i]
    } else if (s[i] !== s[i + 1]) {
      res.push(temp + s[i])
      temp = 0;
    }
  }

  return res
}

/*****************************
232.) Make the Deadfish Swim
solved: 7/22/2022
codewars.com/kata/51e0007c1f9378fa810002a9
*****************************/
function parse(data) {
  let val = 0
  let res = []

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      val += 1
    } else if (data[i] === "d") {
      val -= 1
    } else if (data[i] === "s") {
      val *= val
    } else if (data[i] === "o") {
      res.push(val)
    } else {
    }
  }
  return res
}

/*****************************
233.) Pair of gloves
solved: 7/22/2022
codewars.com/kata/58235a167a8cb37e1a0000db
*****************************/
function numberOfPairs(gloves) {
  let getPairs = []
  let res = 0

  for (let p of gloves) {
    if (getPairs[p]) getPairs[p] += 1
    else getPairs[p] = 1
  }

  for (let p in getPairs) {
    if (getPairs.hasOwnProperty(p)) {
      if (getPairs[p] % 2 !== 0) {
        getPairs[p] -= 1
        res += getPairs[p] / 2
      } else {
        res += getPairs[p] / 2
      }
    }
  }
  return res
}

/*****************************
234.) Sums of Parts
solved: 7/21/2022
codewars.com/kata/5ce399e0047a45001c853c2b
*****************************/
function partsSums(ls) {
  let curr = ls.reduce((a, c) => a + c, 0)

  let res = [curr]
  for (let i = 0; i < ls.length; i++) {
    curr -= ls[i]
    res.push(curr)
  }

  return res
}

/*****************************
235.) Multiplication table
solved: 7/21/2022
codewars.com/kata/534d2f5b5371ecf8d2000a08
*****************************/
multiplicationTable = function(size) {
  let res = []
  let curr = 0,
      mult = 0;

  const helper = (size, curr, mult) => {
    let mx = []
    for (let i = 0; i < size; i++) {
      mx.push(curr += 1 + mult)
    }
    return mx
  }

  for (let i = 0; i < size; i++) {
    res.push(helper(size, curr, mult++))
  }
  return res
}

/*****************************
236.) Backspaces in string
solved: 7/21/2022
codewars.com/kata/5727bb0fe81185ae62000ae3
*****************************/
function cleanString(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      res += s[i]
    } else {
      res = res.slice(0, res.length - 1)
    }
  }
  return res
}

/*****************************
237.) Collatz
solved: 7/18/2022
codewars.com/kata/5286b2e162056fd0cb000c20
*****************************/
function collatz(n) {
  let res = `${n}`
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = (3 * n) + 1
    }
    res += `->${n}`
  }
  return res
}

/*****************************
238.) "this" is an other solution
solved: 6/25/2022
codewars.com/kata/54834b3559e638b39d0009a2
*****************************/
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = `${this.firstName} ${this.lastName}`;
  Object.freeze(this);
}

/*****************************
239.) "this" is an other problem
solved: 6/25/2022
codewars.com/kata/547f1a8d4a437abdf800055c
*****************************/
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  set fullName(value) {
    value = value.split(" ");
    if (value.length === 2) {
      this.firstName = value[0]
      this.lastName = value[1]
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}` 
  }
}

/*****************************
240.) Equal Sides Of An Array
solved: 6/18/2022
codewars.com/kata/5679aa472b8f57fb8c000047
*****************************/
function findEvenIndex(arr) {
  let target = arr.reduce((a, c) => a + c, 0)
  let min = 0;
  let i = 0;
  while (i < arr.length) {
    if (i > 0) {
      min += arr[i - 1]
    }
    target -= arr[i]
    if (target == min) return i
    i++
  }
  return -1
}

/*****************************
241.) Simple frequency sort
solved: 6/18/2022
codewars.com/kata/5a8d2bf60025e9163c0000bc
*****************************/
function solve(arr){
  let res = {}
  for (let n of arr) {
    if (res[n]) res[n] = res[n] + 1
    else res[n] = 1
  }
  return arr.slice().sort((a, b) => res[b] - res[a] || a - b)
}

/*****************************
242.) Write Number in Expanded Form - Part 2
solved: 6/18/2022
codewars.com/kata/58cda88814e65627c5000045
*****************************/
function expandedForm(num) {

  num = num.toString().split(".");
  let flo = num[0],
      dec = num[1],
      res = '',
      end = '/1';

  for (let i = 0; i < flo.length; i++) {
    if (flo[i] != 0) {
      res += `${flo[i].padEnd(flo.length - i, "0")} + `;
    }
  }

  for (let i = 0; i < dec.length; i++) {
    if (dec[i] != 0 ) {
      res += `${dec[i]}${end.padEnd(i + 3, "0")} + `;
    }
  }

  return res.slice(0, res.length - 3);
}

/*****************************
243.) Write Number in Expanded Form
solved: 6/18/2022
codewars.com/kata/5842df8ccbd22792a4000245
*****************************/
function expandedForm(num) {
  num = num.toString();
  let res = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] != 0) {
      res += `${num[i].padEnd(num.length - i, "0")} + `;
    }
  }
  return res.slice(0, res.length - 3);
}


/*****************************
244.) Take a Ten Minutes Walk
solved: 6/18/2022
codewars.com/kata/54da539698b8a2ad76000228
*****************************/
function isValidWalk(walk) {
  let grid = {n:0, s:0, w:0, e:0, t:0}
  let total = 0;
  for (let d of walk) {
    if (grid[d]) grid[d] += 1
    else grid[d] = 1
    total++
  }
  grid = Object.values(grid)
  return total === 10 ? grid[0] == grid[1] && grid[2] == grid[3] : false;
}


/*****************************
245.) Persistent Bugger.
solved: 6/16/2022
codewars.com/kata/55bf01e5a717a0d57e0000ec
*****************************/
function persistence(num) {
  num = num.toString()
  let count = 0
  while (num.length !== 1) {
    count++
    num = num.split("").reduce((a, c) => a * c, 1).toString()
  }
  return count
}

/*****************************
246.) Detect Pangram
solved: 6/16/2022
codewars.com/kata/545cedaa9943f7fe7b000048
*****************************/
function isPangram(string){
  let res = []
  string = string.split(" ").join("").toLowerCase()
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 96 && string.charCodeAt(i) <= 122) {
      res.push(string.charCodeAt(i))
    }
  }
  res = Array.from(new Set(res))
  return res.reduce((a, c) => a - c, 2847) == 0
}

/*****************************
247.) Does my number look big in this?
solved: 6/12/2022
codewars.com/kata/5287e858c6b5a9678200083c
*****************************/
function narcissistic(n) {
  let len = n.toString().length
  let res = 0
  for (let i = 0; i < len; i++) {
    res += (+n.toString()[i])**len
  }
  return res == n
}

/*****************************
248.) Prime Primes
solved: 6/12/2022
codewars.com/kata/57ba58d68dcd97e98c00012b
*****************************/
function primePrimes(n) {

  const isPrime = n => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let count = 0;
  let total = 0;
  for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (isPrime(i) && isPrime(j)) {
        count++;
        total += (j/i)
      }
    }
  }
  return [count, Math.floor(total)]
}

/*****************************
249.) Simple Substitution Cipher Helper
solved: 6/12/2022
codewars.com/kata/52eb114b2d55f0e69800078d
*****************************/
function SubstitutionCipher(abc1, abc2) {
  this.cipher = function (curr, s1, s2) {
    let idx = []
    for (let i = 0; i < curr.length; i++) {
      if (s1.indexOf(curr[i]) == -1) {
        idx.push(curr[i])
      } else {
        idx.push(s1.indexOf(curr[i]))
      }
    }
    return idx.map((x) => typeof x == "number" ? s2[x] : x).join``
  }
  this.encode = function (str) {
    return this.cipher(str, abc1, abc2);
  }
  this.decode = function (str) {
    return this.cipher(str, abc2, abc1);
  }
}

/*****************************
250.) Are they the "same"?
solved: 2/27/2022
codewars.com/kata/550498447451fbbd7600041c
*****************************/
function comp(a1, a2){
  if (!Array.isArray(a1) || !Array.isArray(a2)) return false;
  a1 = a1.sort((a, b) => a - b);
  a2 = a2.sort((a, b) => a - b).map((el) => Math.sqrt(el));
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

/*****************************
251.) Convert string to camel case
solved: 6/10/2022
codewars.com/kata/517abf86da9663f1d2000003
*****************************/
function toCamelCase(str){
  if (!str) return '';
  str = str.replace(/[^\pA-Za-z']/g, ' ')
  let res = ''
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == ' ') {
      res += str[i + 1].toUpperCase()
    } else {
      res += str[i + 1]
    }
  }
  return str[0] += res.split(" ").join("")
}

/*****************************
252.) Length of missing array
solved: 6/10/2022
codewars.com/kata/57b6f5aadb5b3d0ae3000611
*****************************/
function getLengthOfMissingArray(aoa) {
  if (!aoa || aoa.some(v => !v)) return 0;
  let t = [] //length of each arr

  for (let i = 0; i < aoa.length; i++) {
    t.push(aoa[i].length)
  }

  let idx = 0
  let min = Math.min(...t) 
  for (let i = min; i < t.length + min + 1; i++) {
    idx += i
  }
  if (min == 0) {
    return 0
  } else {
    return idx - t.reduce((a, c) => a + c, 0)
  }
}

/*****************************
253.) Run-length encoding
solved: 6/10/2022
codewars.com/kata/546dba39fa8da224e8000467
*****************************/
var runLengthEncoding = function(str){
  let arr = []
  let i = 0;
  while (i < str.length) {
    if (str[i] === str[i - 1]) {
      arr[arr.length - 1][0] += 1
    } else {
      arr.push([1, str[i]])
    }
    i++
  }
  return arr
}

/*****************************
254.) Playing with digits
solved: 6/10/2022
codewars.com/kata/5552101f47fc5178b1000050
*****************************/
function digPow(n, p){
  nums = n.toString()
  let x = 0
  p >= 1 ? p -= 1 : p
  
  for (let i = 0; i < nums.length; i++) {
    x += (+nums[i]) ** +(p += 1)
  } 
  return x/n % 1 === 0 ? x/n : -1
}

/*
6kyu
1.) Parse HTML/CSS Colors (codewars.com/kata/58b57ae2724e3c63df000006)

2.) Extract the contents of a given tag from the HTML document (codewars.com/kata/5808ce703e55743db7000d92)

3.) Palindrome for your Dome (codewars.com/kata/53046ceefe87e4905e00072a)

4.) PatternCraft - Strategy (codewars.com/kata/5682e809386707366d000024)

5.) PatternCraft - Decorator (codewars.com/kata/5682e545fb263ecf7b000069)

6.) PatternCraft - State (codewars.com/kata/5682e72eb7354b2f39000021)

7.) Binary string (codewars.com/kata/52654ea8e218b83553000666)

8.) Latin Square Validator (codewars.com/kata/646254375cee7a000ffaa404)

9.) Mad Max: Recursion Road (codewars.com/kata/57bd0abcb9799763f1001bdc)

10.) Numericals of a String (codewars.com/kata/5b4070144d7d8bbfe7000001)

11.) Replace letters (codewars.com/kata/5a4331b18f27f2b31f000085)

12.) Card game (codewars.com/kata/5a3141fe55519e04d90009d8)

13.) Break camelCase (codewars.com/kata/5208f99aee097e6552000148)

14.) Simple Encryption #1 - Alternating Split (codewars.com/kata/57814d79a56c88e3e0000786)

15.) Keyword Cipher Helper (codewars.com/kata/535c1c80cdbf5011e600030f)

16.) longest_palindrome (codewars.com/kata/54bb6f887e5a80180900046b)

17.) Valid Phone Number (codewars.com/kata/525f47c79f2f25a4db000025)

18.) Sentence Calculator (codewars.com/kata/5970fce80ed776b94000008b)

19.) Cambridge Word Scramble (codewars.com/kata/564e48ebaaad20181e000024)

20.) Shortest code: Father and Son (codewars.com/kata/56f928b19982cc7a14000c9d)

21.) ■□ Pattern □■ : Snake (codewars.com/kata/56e2ede2c92c6cb1370012ba)

22.) Simple Fun #23: Square Digits Sequence (codewars.com/kata/5886d65e427c27afeb0000c1)

23.) Sort two arrays (codewars.com/kata/5818c52e21a33314e00000cb)

24.) Join Two Arrays by Id (codewars.com/kata/6481c68ffdf80b6147d85248)

25.) Find The Parity Outlier (codewars.com/kata/5526fc09a1bbd946250002dc)

26.) Node.js Async I/O (codewars.com/kata/542106e2dda52658bf00001a)

27.) Caesar Cipher Encryption - Variation (codewars.com/kata/55ec55323c89fc5fbd000019)

28.) Secret Message (codewars.com/kata/54808e45ab03a2c8330009fb)

29.) Find the missing term in an Arithmetic Progression (codewars.com/kata/52de553ebb55d1fca3000371)

30.) Sum two arrays (codewars.com/kata/59c3e8c9f5d5e40cab000ca6)

31.) Balanced Braces (with non-brace characters) (codewars.com/kata/5a62173ee626c5f0e40000e9)

32.) Find match row and column position in a given string (codewars.com/kata/58fae1eb2bffa7a570000039)

33.) Roman Numerals Encoder (codewars.com/kata/51b62bf6a9c58071c600001b)

34.) Find Grid Position (codewars.com/kata/580f6cbcfbf2bec47c000511)

35.) Factorial length (codewars.com/kata/59f34ec5a01431ab7600005a)

36.) Add All (codewars.com/kata/5b7d7ce57a0c9d86c700014b)

37.) More Zeros than Ones (codewars.com/kata/5d41e16d8bad42002208fe1a)

38.) What's A Name In? (codewars.com/kata/59daf400beec9780a9000045)

39.) Valid string (codewars.com/kata/52f3bb2095d6bfeac2002196)

40.) Brainfuck generator (codewars.com/kata/579e646353ba33cce2000093)

41.) Algorithm Fun: Find The Unknown Number - Part II (codewars.com/kata/59cdb97172851e2824000094)

42.) CamelCase to underscore (codewars.com/kata/5b1956a7803388baae00003a)

43.) Find character (codewars.com/kata/5817030088ca96c0b7000083)

44.) BitMath: Addition (codewars.com/kata/57a6c52a72292d3235000187)

45.) Making Change (codewars.com/kata/5365bb5d5d0266cd010009be)

46.) Make A Window (codewars.com/kata/59c03f175fb13337df00002e)

47.) A Taste of Curry (codewars.com/kata/52d629bb5feccfd4c100022d)

48.) Reducing by rules to get the result (codewars.com/kata/585ba6dff59b3cef3f000132)

49.) Generating Generators - Generators #3 (codewars.com/kata/56390ac2815fb1222a000070)

50.) Sequence generator (codewars.com/kata/55eee789637477c94200008e)

51.) Sort the columns of a csv-file (codewars.com/kata/57f7f71a7b992e699400013f)

52.) Greatest Position Distance Between Matching Array Values (codewars.com/kata/5442e4fc7fc447653a0000d5)

53.) Filter out for good! (codewars.com/kata/56035d75426e197c3e0000a2)

54.) String Breakers (codewars.com/kata/59d398bb86a6fdf100000031)

55.) String counting (codewars.com/kata/5cfd36ea4c60c3001884ed42)

56.) Consecutive Count (codewars.com/kata/59c3e819d751df54e9000098)

57.) Count Repeats (codewars.com/kata/598ee7b6ec6cb90dd6000061)

58.) Only Duplicates (codewars.com/kata/5a1dc4baffe75f270200006b)

59.) Duplicates. Duplicates Everywhere. (codewars.com/kata/5e8dd197c122f6001a8637ca)

60.) Find duplicates in array by properties keys in another array (codewars.com/kata/58cc070abd22e324b300002a)

61.) Duplicate Arguments (codewars.com/kata/520d9c27e9940532eb00018e)

62.) Javascript filter - 2 (codewars.com/kata/5262fa26875ed24a3e000029)

63.) All Star Code Challenge #15 (codewars.com/kata/586560a639c5ab3a260000f3)

64.) Odd-heavy Array (codewars.com/kata/59c7e477dcc40500f50005c7)

65.) Count word occurrences (codewars.com/kata/54fdbad0762e2e8a54000452)

66.) The range() function (codewars.com/kata/5298961d9ce954d77b0003a6)

67.) Simple Sentences (codewars.com/kata/5297bf69649be865e6000922)

68.) Simple Fun #135: Missing Alphabets (codewars.com/kata/58a664bb586e986c940001d5)

69.) NASA Countdown (codewars.com/kata/56c4931400165c5283000661)

70.) JSON.parse Date Reviver (codewars.com/kata/533b0d5e7abec41550000a9e)

71.) Password generator (codewars.com/kata/58ade2233c9736b01d0000b3)

72.) Simple time difference (codewars.com/kata/5b76a34ff71e5de9db0000f2)

73.) Alphabetized (codewars.com/kata/5970df092ef474680a0000c9)

74.) Decipher this! (codewars.com/kata/581e014b55f2c52bb00000f8)

75.) Minutes to Midnight (codewars.com/kata/58528e9e22555d8d33000163)

76.) Fun with ES6 Classes #6 - Fake Files (Basic) (codewars.com/kata/5784c8116211383b5f0001d3)

77.) Time-like string format (codewars.com/kata/51e000d070fe4414000003f0)

78.) Simple Fun #396: Find the Longest Substring Consisting of Unique Characters (codewars.com/kata/5bcd90808f9726d0f6000091)

79.) Running Average (codewars.com/kata/589e4d646642d144a90000d8)

80.) Repeated Substring (codewars.com/kata/5491689aff74b9b292000334)

81.) Color Choice (codewars.com/kata/55be10de92aad5ef28000023)

82.) WeIrD StRiNg CaSe (codewars.com/kata/52b757663a95b11b3d00062d)

83.) Prefill an Array (codewars.com/kata/54129112fb7c188740000162)

84.) Handshake problem (codewars.com/kata/5574835e3e404a0bed00001b)

85.) Coding Meetup #15 - Higher-Order Functions Series - Find the odd names (codewars.com/kata/583a8bde28019d615a000035)

86.) Spread number (codewars.com/kata/5cbded7a36240b000dac91eb)

87.) Reverse Vowels In A String (codewars.com/kata/585db3e8eec141ce9a00008f)

88.) SMS Lottery Bet Validator (codewars.com/kata/59a3e2897ac7fd05f800005f)

89.) Consecutive strings (codewars.com/kata/56a5d994ac971f1ac500003e)

90.) Give me a Diamond (codewars.com/kata/5503013e34137eeeaa001648)

91.) Most Consecutive Zeros of a Binary Number (codewars.com/kata/59decdf40863c76ae3000080)

92.) Get your steppin' on son (codewars.com/kata/55e00266d494ce5155000032)

93.) IndexOf Array in Array (codewars.com/kata/5783ef69202c0ee4cb000265)

94.) Framed Reflection (codewars.com/kata/581331293788bc1702001fa6)

95.) Create iterator (codewars.com/kata/5c743cec901022438549964a)

96.) Create a frame! (codewars.com/kata/5672f4e3404d0609ec00000a)

97.) The takeWhile Function (codewars.com/kata/54f9173aa58bce9031001548)

98.) Make it equal (codewars.com/kata/5736b7b749fc585e8900001f)

99.) Time Math (codewars.com/kata/5aceae374d9fd1266f0000f0)

100.) Write JavaScript's 'call' function using apply. (codewars.com/kata/52d56d9c6b02b2fa9a0006d9)

101.) Magic Squares (codewars.com/kata/58c979aafd407d6e9f000071)

102.) Unary function chainer (codewars.com/kata/54ca3e777120b56cb6000710)

103.) Find Cracker. (codewars.com/kata/59f70440bee845599c000085)

104.) Custom Setters and Getters (codewars.com/kata/5241060ff2471a5d7600025a)

105.) Sequences and Series (codewars.com/kata/5254bd1357d59fbbe90001ec)

106.) Piano Kata, Part 1 (codewars.com/kata/589273272fab865136000108)

107.) Clocky Mc Clock-Face (codewars.com/kata/59752e1f064d1261cb0000ec)

108.) Is Integer Array? (codewars.com/kata/52a112d9488f506ae7000b95)

109.) Simple Simple Simple String Expansion (codewars.com/kata/5ae326342f8cbc72220000d2)

110.) Difference of 2 (codewars.com/kata/5340298112fa30e786000688)

111.) Count the photos! (codewars.com/kata/6319dba6d6e2160015a842ed)

112.) Binary to Text (ASCII) Conversion (codewars.com/kata/5583d268479559400d000064)

113.) Sum The Tree (codewars.com/kata/5800580f8f7ddaea13000025)

114.) Smart Sum (codewars.com/kata/5831200eb812b8016d000094)

115.) Are we alternate? (codewars.com/kata/59325dc15dbb44b2440000af)

116.) Does array x contain all values within array y? (codewars.com/kata/5143cc9694a24abcd2000001)

117.) Insert value into an array (codewars.com/kata/581dc1852d68e751180000c6)

118.) Custom each() Array method (codewars.com/kata/513e7e1aee7d36073e00000d)

119.) Implementing Array.prototype.groupBy method (codewars.com/kata/53c2c3e78d298dddda000460)

120.) Parse a linked list from a string (codewars.com/kata/582c5382f000e535100001a7)

121.) Mexican Wave (codewars.com/kata/58f5c63f1e26ecda7e000029)

122.) Format words into a sentence (codewars.com/kata/51689e27fe9a00b126000004)

123.) Selective Array Reversing (codewars.com/kata/58f6000bc0ec6451960000fd)

124.) Getting MAD (codewars.com/kata/593a061b942a27ac940000a7)

125.) Calculate number of inversions in array (codewars.com/kata/537529f42993de0e0b00181f)

126.) Find matching parenthesis (codewars.com/kata/59293c2cfafd38975600002d)

127.) Happy numbers (codewars.com/kata/5464cbfb1e0c08e9b3000b3e)

128.) Multiples of 3 or 5 (codewars.com/kata/514b92a657cdc65150000006)

129.) Highest Scoring Word (codewars.com/kata/57eb8fcdf670e99d9b000272)

130.) N High Scores (codewars.com/kata/5ad0fdf461c493cc09000036)

131.) Well, that's just (proto)typical! The Misadventures of Bob the Highly Paid Consultant #3 (codewars.com/kata/5877146c7aad3940f0000029)

132.) Most Frequent Weekdays (codewars.com/kata/56eb16655250549e4b0013f4)

133.) String character frequency (codewars.com/kata/5a1a514effe75fd63b0000f2)

134.) Closures and Scopes (codewars.com/kata/526ec46d6f5e255e150002d1)

135.) Determine the date by the day number (codewars.com/kata/602afedfd4a64d0008eb4e6e)

136.) Valid Braces (codewars.com/kata/5277c8a221e209d3f6000b56)

137.) String average (codewars.com/kata/5966847f4025872c7d00015b)

138.) Find the Mine! (codewars.com/kata/528d9adf0e03778b9e00067e)

139.) first character that repeats (codewars.com/kata/54f9f4d7c41722304e000bbb)

140.) Clock in Mirror (codewars.com/kata/56548dad6dae7b8756000037)

141.) Ordinal Numbers (codewars.com/kata/52dda52d4a88b5708f000024)

142.) Adding ordinal indicator suffixes to numbers (codewars.com/kata/52dca71390c32d8fb900002b)

143.) Good vs Evil (codewars.com/kata/52761ee4cffbc69732000738)

144.) Roman Numerals Decoder (codewars.com/kata/51b6249c4612257ac0000005)

145.) Delete occurrences of an element if it occurs more than n times (codewars.com/kata/554ca54ffa7d91b236000023)

146.) Highest Rank Number in an Array (codewars.com/kata/5420fc9bb5b2c7fd57000004)

147.) Fold an array (codewars.com/kata/57ea70aa5500adfe8a000110)

148.) Dashatize it (codewars.com/kata/58223370aef9fc03fd000071)

149.) Grouped by commas (codewars.com/kata/5274e122fc75c0943d000148)

150.) Srot the inner ctonnet in dsnnieedcg oredr (codewars.com/kata/5898b4b71d298e51b600014b)

151.) Lottery Ticket (codewars.com/kata/57f625992f4d53c24200070e)

152.) Zero-plentiful Array (codewars.com/kata/59e270da7997cba3d3000041)

153.) Title Case (codewars.com/kata/5202ef17a402dd033c000009)

154.) Which are in? (codewars.com/kata/550554fd08b86f84fe000a58)

155.) Help the bookseller ! (codewars.com/kata/54dc6f5a224c26032800005c)

156.) Reversing a Process (codewars.com/kata/5dad6e5264e25a001918a1fc)

157.) Character with longest consecutive repetition (codewars.com/kata/586d6cefbcc21eed7a001155)

158.) Count the days! (codewars.com/kata/5837fd7d44ff282acd000157)

159.) Find the odd int (codewars.com/kata/54da5a58ea159efa38000836)

160.) ASCII hex converter (codewars.com/kata/52fea6fd158f0576b8000089)

161.) Hex class (codewars.com/kata/5483366098aa442def0009af)

162.) What's your running pace? (codewars.com/kata/578b8c0e84ac69a4d20004c8)

163.) What century is it? (codewars.com/kata/52fb87703c1351ebd200081f)

164.) New Cashier Does Not Know About Space or Shift (codewars.com/kata/5d23d89906f92a00267bb83d)

165.) Maze Runner (codewars.com/kata/58663693b359c4a6560001d6)

166.) Tortoise racing (codewars.com/kata/55e2adece53b4cdcb900006c)

167.) Find the Nth longest string in an Array (codewars.com/kata/5594c4599934000e1e00002e)

168.) Inside Out Strings (codewars.com/kata/57ebdf1c2d45a0ecd7002cd5)

169.) Separating Strings (codewars.com/kata/5977ef1f945d45158d00011f)

170.) Find the total white and black areas in a strange chessboard (codewars.com/kata/6262f9f7afc4729d8f5bef48)

171.) Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word (codewars.com/kata/57fb04649610ce369a0006b8)

172.) A String of Sorts (codewars.com/kata/536c6b8749aa8b3c2600029a)

173.) Sort Strings by Most Contiguous Vowels (codewars.com/kata/5d2d0d34bceae80027bffddb)

174.) String array duplicates (codewars.com/kata/59f08f89a5e129c543000069)

175.) CamelCase Method (codewars.com/kata/587731fda577b3d1b0001196)

176.) Extract last names of people named Michael (codewars.com/kata/580741302e14acaef900015a)

177.) Find the most frequently occurring elements in arrays (codewars.com/kata/578b44a47c77f5a1bd000011)

178.) search in multidimensional array (codewars.com/kata/52840d2b27e9c932ff0016ae)

179.) Update inventory in your smartphone store (codewars.com/kata/57a31ce7cf1fa5a1e1000227)

180.) Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details (codewars.com/kata/583d972b8bbc0402cf000121)

181.) Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse? (codewars.com/kata/58381907f8ac48ae070000de)

182.) Coding Meetup #10 - Higher-Order Functions Series - Create usernames (codewars.com/kata/582a53ed261c2af9d200018c)

183.) Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse? (codewars.com/kata/5829ca646d02cd1a65000284)

184.) Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented? (codewars.com/kata/58291fea7ff3f640980000f9)

185.) Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer (codewars.com/kata/582887f7d04efdaae3000090)

186.) Permute a Palindrome (codewars.com/kata/58ae6ae22c3aaafc58000079)

187.) Odd/Even number of divisors (codewars.com/kata/55830eec3e6b6c44ff000040)

188.) Simple Fun #52: Pair Of Shoes (codewars.com/kata/58885a7bf06a3d466e0000e3)

189.) Count the smiley faces! (codewars.com/kata/583203e6eb35d7980400002a)

190.) The Deaf Rats of Hamelin (codewars.com/kata/598106cb34e205e074000031)

191.) Build Tower (codewars.com/kata/576757b1df89ecf5bd00073b)

192.) Split and Join (codewars.com/kata/5816ead8dae5a59eaa000053)

193.) Turn String Input into Hash (codewars.com/kata/52180ce6f626d55cf8000071)

194.) String tops (codewars.com/kata/59b7571bbf10a48c75000070)

195.) Begin your day with a challenge, but an easy one. (codewars.com/kata/5873b2010565844b9100026d)

196.) Catalog (codewars.com/kata/59d9d8cb27ee005972000045)

197.) Strings, strings, strings (Hard) (codewars.com/kata/56d9439813f38853b40000e4)

198.) Meeting (codewars.com/kata/59df2f8f08c6cec835000012)

199.) Unknown amount of duplicates. One missing number. (codewars.com/kata/5a5cdb07fd56cbdd3c00005b)

200.) Check if two words are isomorphic to each other (codewars.com/kata/59dbab4d7997cb350000007f)

201.) Validate Credit Card Number (codewars.com/kata/5418a1dd6d8216e18a0012b2)

202.) Who has the most money? (codewars.com/kata/528d36d7cc451cd7e4000339)

203.) Mix Fruit Juice (codewars.com/kata/5905871c00881d0e85000015)

204.) Fruit Machine (codewars.com/kata/590adadea658017d90000039)

205.) Character counts (codewars.com/kata/56b409febccd5aafbd000021)

206.) N-th Fibonacci (codewars.com/kata/522551eee9abb932420004a0)

207.) Array Deep Count (codewars.com/kata/596f72bbe7cd7296d1000029)

208.) A Memory game array (codewars.com/kata/55437532b73f053bac000096)

209.) Selective memory (codewars.com/kata/58bee820e9f98b215200007c)

210.) Special Multiples (codewars.com/kata/55e785dfcb59864f200000d9)

211.) One line task: Square Every Digit (codewars.com/kata/5acd142a2ec8c48521000104)

212.) "Stringing"+"Me"+"Along" (codewars.com/kata/55f4a44eb72a0fa91600001e)

213.) Training Random Testcases #1: Fizz Buzz (codewars.com/kata/57980be93467db22f5000038)

214.) Find the Nexus of the Codewars Universe (codewars.com/kata/5453dce502949307cf000bff)

215.) Adjacent repeated words in a string (codewars.com/kata/5245a9138ca049e9a10007b8)

216.) IPv4 to int32 (codewars.com/kata/52ea928a1ef5cfec800003ee)

217.) Pyramid Array (codewars.com/kata/515f51d438015969f7000013)

218.) Count words (codewars.com/kata/56b3b27cadd4ad275500000c)

219.) Change it up (codewars.com/kata/58039f8efca342e4f0000023)

220.) The Supermarket Queue (codewars.com/kata/57b06f90e298a7b53d000a86)

221.) Message Validator (codewars.com/kata/5fc7d2d2682ff3000e1a3fbc)

222.) Find the missing letter (codewars.com/kata/5839edaa6754d6fec10000a2)

223.) Is a number prime? (codewars.com/kata/5262119038c0985a5b00029f)

224.) Decode the Morse code (codewars.com/kata/54b724efac3d5402db00065e)

225.) Find the unique number (codewars.com/kata/585d7d5adb20cf33cb000235)

226.) Kebabize (codewars.com/kata/57f8ff867a28db569e000c4a)

227.) +1 Array (codewars.com/kata/5514e5b77e6b2f38e0000ca9)

228.) Lock and Key (codewars.com/kata/53c2a84a1dfa43a7e40005ba)

229.) Two Sum (codewars.com/kata/52c31f8e6605bcc646000082)

230.) Reverse every other word in the string (codewars.com/kata/58d76854024c72c3e20000de)

231.) Sum consecutives (codewars.com/kata/55eeddff3f64c954c2000059)

232.) Make the Deadfish Swim (codewars.com/kata/51e0007c1f9378fa810002a9)

233.) Pair of gloves (codewars.com/kata/58235a167a8cb37e1a0000db)

234.) Sums of Parts (codewars.com/kata/5ce399e0047a45001c853c2b)

235.) Multiplication table (codewars.com/kata/534d2f5b5371ecf8d2000a08)

236.) Backspaces in string (codewars.com/kata/5727bb0fe81185ae62000ae3)

237.) Collatz (codewars.com/kata/5286b2e162056fd0cb000c20)

238.) "this" is an other solution (codewars.com/kata/54834b3559e638b39d0009a2)

239.) "this" is an other problem (codewars.com/kata/547f1a8d4a437abdf800055c)

240.) Equal Sides Of An Array (codewars.com/kata/5679aa472b8f57fb8c000047)

241.) Simple frequency sort (codewars.com/kata/5a8d2bf60025e9163c0000bc)

242.) Write Number in Expanded Form - Part 2 (codewars.com/kata/58cda88814e65627c5000045)

243.) Write Number in Expanded Form (codewars.com/kata/5842df8ccbd22792a4000245)

244.) Take a Ten Minutes Walk (codewars.com/kata/54da539698b8a2ad76000228)

245.) Persistent Bugger. (codewars.com/kata/55bf01e5a717a0d57e0000ec)

246.) Detect Pangram (codewars.com/kata/545cedaa9943f7fe7b000048)

247.) Does my number look big in this? (codewars.com/kata/5287e858c6b5a9678200083c)

248.) Prime Primes (codewars.com/kata/57ba58d68dcd97e98c00012b)

249.) Simple Substitution Cipher Helper (codewars.com/kata/52eb114b2d55f0e69800078d)

250.) Are they the "same"? (codewars.com/kata/550498447451fbbd7600041c)

251.) Convert string to camel case (codewars.com/kata/517abf86da9663f1d2000003)

252.) Length of missing array (codewars.com/kata/57b6f5aadb5b3d0ae3000611)

253.) Run-length encoding (codewars.com/kata/546dba39fa8da224e8000467)

254.) Playing with digits (codewars.com/kata/5552101f47fc5178b1000050)
*/