/* 6 kyu
Parse HTML/CSS Colors} */
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

/* 6 kyu
Extract the contents of a given tag from the HTML document} */
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

/* 6 kyu
Palindrome for your Dome} */
function palindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  if (!s) return true;
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

/* 6 kyu
PatternCraft - Strategy} */
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

/* 6 kyu
PatternCraft - Decorator} */
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

/* 6 kyu
PatternCraft - State} */
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

/* 6 kyu
Binary string} */
function toBinaryString(n) {
  if (n === 0 || n === 1) return ""+n
  let r = '';
  while (n > 0) {
    r = n % 2 + r;
    n = n >> 1;
  }
  return r;
}


/* 6 kyu
Latin Square Validator} */
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

/* 6 kyu
Mad Max: Recursion Road} */
function max(a, m = -Infinity) {
  return !a.length ? m : max(a.slice(1), m = a[0] > m ? a[0] : m);
}

/* 6 kyu
Numericals of a String} */
function numericals(s) {
  let m = {};
  let str = '';
  for (let l of s) {
    m[l] = (m[l] || 0) + 1;
    str += m[l] ? m[l] : '1';
  }
  return str;
}

/* 6 kyu
Replace letters} */
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

/* 6 kyu
Card game} */
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

/* 6 kyu
Break camelCase} */
function solution(s) {
  return s.split(/(?=[A-Z])/).join(" ")
}


/* 6 kyu
Simple Encryption #1 - Alternating Split} */
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

/* 6 kyu
Keyword Cipher Helper} */
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


/* 6 kyu
longest_palindrome} */
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


/* 6 kyu
Valid Phone Number} */
function validPhoneNumber(n) {
  return !n.match(/[^0-9() -]/) ? !!~n.indexOf('-') && !!~n.indexOf(' ') : false;
}

/* 6 kyu
Sentence Calculator} */
function lettersToNumbers(s) {
  return [...s.replace(/[^a-zA-Z0-9]/g, '')].reduce((a, c) => a + (isNaN(c) ? (c.toUpperCase() == c ? ((c.charCodeAt() - 64) * 2) : c.charCodeAt() - 96) : +c), 0);
}

/* 6 kyu
Cambridge Word Scramble} */
function mixwords(str) {
  return typeof str == 'string' ? str.split(' ').map(w => {
    if (w.length < 4) return w;
    let l = w.replace(/[,.!?]/g, ''), s = w.replace(/[^,.!?]/g, '');
    let nw = [...w.slice(1, s ? -2 : -1)];
    nw = nw.length > 1 ? nw.sort(() => Math.random() - 0.5).join('') : nw;
    return `${l[0]}${nw}${l[l.length - 1]}${s}`;
  }).join(' ') : undefined;
};


/* 6 kyu
Shortest code: Father and Son} */
let sc = s =>[...s].filter((v,_,a) => v==v.toUpperCase()?a.includes(v.toLowerCase()):a.includes(v.toUpperCase())).join('')

/* 6 kyu
■□ Pattern □■ : Snake} */
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

/* 6 kyu
Simple Fun #23: Square Digits Sequence} */
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

/* 6 kyu
Sort two arrays} */
function sortArrays(arr1, arr2) {
  let ind2 = Object.keys(arr2).sort((a, b) => arr2[a] < arr2[b] ? -1 : arr2[a] > arr2[b] ? 1 : 0);
  let ind1 = Object.keys(arr1).sort((a, b) => arr1[a] < arr1[b] ? -1 : arr1[a] > arr1[b] ? 1 : 0);
  return [ind2.map((idx) => arr1[+idx]), ind1.map((idx) => arr2[+idx])];
}

/* 6 kyu
Join Two Arrays by Id} */
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

/* 6 kyu
Find The Parity Outlier} */
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

/* 6 kyu
Node.js Async I/O} */
var exec = require('child_process').exec;
function execute(command, callback) {
  return exec(command, function(err, data) {
    return err ? callback(Error(err)) : callback(null, data);
  });
}

/* 6 kyu
Caesar Cipher Encryption - Variation} */
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


/* 6 kyu
Secret Message} */
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


/* 6 kyu
Find the missing term in an Arithmetic Progression} */
var findMissing = function (list) {
  const diff = (list[list.length - 1] - list[0]) / list.length;

  for (let i = 0; i < list.length; i++) {
    let n = list[i] + diff;
    if (n !== list[i + 1]) {
      return n;
    }
  }
};

/* 6 kyu
Sum two arrays} */
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

/* 6 kyu
Balanced Braces (with non-brace characters)} */
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

/* 6 kyu
Find match row and column position in a given string} */
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

/* 6 kyu
Roman Numerals Encoder} */
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

/* 6 kyu
Find Grid Position} */
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

/* 6 kyu
Factorial length} */
function count(n) {
  let y = 0;
  while (n > 1) {
    y += Math.log10(n);
    n--;
  }
  return Math.ceil(y);
}

/* 6 kyu
Add All} */
function addAll(numbers) {
  if (numbers.length == 1) return 0;
  numbers.sort((a, b) => a - b);
  numbers[1] += numbers[0];
  return numbers[1] + addAll(numbers.slice(1));
}

/* 6 kyu
More Zeros than Ones} */
function moreZeros(s) {
  const count = str => [...str].filter(n => n === '1').length < (str.length / 2);
  return [...new Set([...s].filter(n => count(n.charCodeAt().toString(2))))];
}

/* 6 kyu
What's A Name In?} */
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

/* 6 kyu
Valid string} */
var validWord = function (d, w) {
  for (let i = 1; i <= w.length; i++) {
    let curr = w.slice(0, i);
    if (d.includes(curr)) {
      if (validWord(d, w.slice(i))) return true;
    }
  }
  return w.length == 0;
};

/* 6 kyu
Brainfuck generator} */
function toBrainfuck(s) {
  return [...s].reduce((a, c) => a + '+'.repeat(c.charCodeAt()) + '.[-]', '');
}

/* 6 kyu
Algorithm Fun: Find The Unknown Number - Part II} */
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

/* 6 kyu
CamelCase to underscore} */
const toUnderScore = name => {
  let res = name.replace(/([A-Z]|\d+)/g, "_$1");
  return res.replace(/^[_]/g, "").replace(/__/g, "_");
};

/* 6 kyu
Find character} */
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

/* 6 kyu
BitMath: Addition} */
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

/* 6 kyu
Making Change} */
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

/* 6 kyu
Make A Window} */
function makeAWindow(num) {
  const [period, dash] = ['.'.repeat(num), '-'.repeat(num)];
  const panes = Array(num).fill(`|${period}|${period}|`).join('\n');
  const mid = `|${dash}+${dash}|`;
  const topBottom = '-'.repeat(mid.length);
  return `${topBottom}\n${panes}\n${mid}\n${panes}\n${topBottom}`;
}

/* 6 kyu
A Taste of Curry} */
function curry(fun) {
  const args = [...arguments].slice(1);
  return function () {
    return fun.apply(this, args.concat([...arguments]));
  };
}


/* 6 kyu
Reducing by rules to get the result} */
function reduceByRules(n, r) {
  return n.reduce((a, b, i) => {
    let cr = (i - 1) % r.length;
    return r[cr](a, b);
  });
}

/* 6 kyu
Generating Generators - Generators #3} */
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

/* 6 kyu
Sequence generator} */
function* sequenceGen(...arguments) {
  while (true) {
    yield arguments[0];
    arguments = arguments.slice(1).concat(arguments.reduce((a, c) => a + c));
  }
}

/* 6 kyu
Sort the columns of a csv-file} */
function sortCsvColumns(str) {
  str = str.split('\n').map(r => r.split(';'));
  return Array.from({ length: str.length }, (_, i) => {
    return [...Array.from({ length: str[0].length }, (_, i) => {
      return Array.from({ length: str.length }, (_, j) => str[j][i]);
    }).sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase())).map(v => v[i])].join(";");
  }).join('\n');
}


/* 6 kyu
Greatest Position Distance Between Matching Array Values} */
var greatestDistance = function (data) {
  let m = 0;
  for (let i = 0; i < data.length; i++) {
    const curr = data.lastIndexOf(data[i]) - i;
    m = curr > m ? curr : m;
  }
  return m;
};


/* 6 kyu
Filter out for good!} */
Array.prototype.remove = function (pred) {
  let arr = [].concat(this);
  let rem = [];
  this.length = 0;
  for (let i = 0; i < arr.length; i++) {
    pred(arr[i]) ? rem.push(arr[i]) : this.push(arr[i]);
  }
  return rem;
};

/* 6 kyu
String Breakers} */
function stringBreakers(n, string){
  let res = [];
  string = string.replace(/\s/g, '');
  for (let i = 0; i < string.length; i += n) {
    res.push(string.slice(i, i + n));
  }
  return res.join('\n');
}

/* 6 kyu
String counting} */
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

/* 6 kyu
Consecutive Count} */
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

/* 6 kyu
Count Repeats} */
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

/* 6 kyu
Only Duplicates} */
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

/* 6 kyu
Duplicates. Duplicates Everywhere.} */
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

/* 6 kyu
Find duplicates in array by properties keys in another array} */
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


/* 6 kyu
Duplicate Arguments} */
function solution(...arguments){
  return arguments.length !== new Set(arguments).size
}

/* 6 kyu
Javascript filter - 2} */
function roomMates(r, f) {
  return r.slice((f - 1) * 6, f * 6).filter(Boolean);
}

/* 6 kyu
All Star Code Challenge #15} */
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


/* 6 kyu
Odd-heavy Array} */
function isOddHeavy(n) {
  if (n.length === 0) return false
  if (n.length === 1) return n[0] % 2 !== 0

  let odd = n.filter(num => num % 2 !== 0)
  let even = n.filter(num => num % 2 === 0)
  if (odd.length === 0) return false
  if (even.length === 0) return true

  return Math.min(...odd) > Math.max(...even)
}

/* 6 kyu
Count word occurrences} */
var wordCounter = function (text) {
  const map = {};
  for (let w of text.split(/[ ,.]+/)) {
    if (w === '') continue;
    map[w] = (parseInt(map[w]) || 0) + 1;
  }
  
  return { count: w => parseInt(map[w]) || 0 }
}

/* 6 kyu
The range() function} */
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

/* 6 kyu
Simple Sentences} */
function makeSentence(parts) {
  return (parts.reduce((a, c, i) => a + ((c.match(/\w/) && i > 0) ? " " + c : c), '') + ".").replace(/\.+/g, '.');
}

/* 6 kyu
Simple Fun #135: Missing Alphabets} */
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

/* 6 kyu
NASA Countdown} */
function countdown(msec) {
  let sign = msec < 0 ? '-' : '+';
  msec = Math.abs(msec);
  const pad = num => String(num).padStart(2, '0');
  let h = (msec / 3_600_000) >> 0;
  let m = ((msec - h * 3_600_000) / 60_000) >> 0;
  let s = ((msec - h * 3_600_000 - m * 60_000) / 1000) >> 0;
  return `${sign}${pad(h)}:${pad(m)}:${pad(s)}`;
}


/* 6 kyu
JSON.parse Date Reviver} */
function JSON_Date_reviver(key, value) {
  let d = Date.parse(value);
  if (typeof value === 'string' && !isNaN(d)) {
    return new Date(d);
  } else {
    return value;
  }
}

/* 6 kyu
Password generator} */
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

/* 6 kyu
Simple time difference} */
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

/* 6 kyu
Alphabetized} */
function alphabetized(s) {
  return s.replace(/[^A-Za-z]/g, '').split('').sort((a, b) => {
    if (a.toLowerCase() === b.toLowerCase()) {
      return b.toLowerCase().localeCompare(a.toLowerCase());
    } else {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
  }).join('');
}

/* 6 kyu
Decipher this!} */
function decipherThis(str) {
  return str.split(' ').map(x => {
    let s = String.fromCharCode(+x.replace(/[^0-9.]/g, ''));
    let e = x.replace(/[^a-zA-Z]/g, '').split('');
    [e[0], e[e.length - 1]] = [e[e.length - 1], e[0]];
    return `${s}${e.join('')}`;
  }).join(' ');
};

/* 6 kyu
Minutes to Midnight} */
function minutesToMidnight(d) {
  const minutes = 1440 - (d.getHours() * 60) - d.getMinutes() - (d.getSeconds() > 30 ? 1 : 0);
  return minutes === 1 ? minutes + " minute" : minutes + " minutes";
}

/* 6 kyu
Fun with ES6 Classes #6 - Fake Files (Basic)} */
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

/* 6 kyu
Time-like string format} */
function solution(hour) {
  if (hour < 100 || hour > 9999) throw new Error();
  let [h, m] = hour.toString().padStart(4, '0').match(/.{1,2}/g);
  return `${parseInt(h)}:${m}`;
}

/* 6 kyu
Simple Fun #396: Find the Longest Substring Consisting of Unique Characters} */
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

/* 6 kyu
Running Average} */
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

/* 6 kyu
Repeated Substring} */
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

/* 6 kyu
Color Choice} */
const checkchoose = (m, n) => {
  const fact = n => n <= 1 ? 1 : n * fact(n - 1);
  
  for (let i = 1; i <= (n / 2) >> 0; i++) {
    if (m === Math.round(fact(n) / fact(i) / fact(n - i))) return i;
  }
  
  return -1;
};

/* 6 kyu
WeIrD StRiNg CaSe} */
function toWeirdCase(s) {
  return s.split(' ').map((x) => {
    return x.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x).join('');
  }).join(' ');
}

/* 6 kyu
Prefill an Array} */
function prefill(n, v) {
  if (!Number.isInteger(+n) || +n < 0 || !isFinite(n) || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);

  if (n === 0) return [];
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(v);
  }
  return res;
}

/* 6 kyu
Handshake problem} */
function getParticipants(h) {
  return h ? Math.ceil((1 + Math.sqrt(1 + 8 * h)) / 2) : 0;
}


/* 6 kyu
Coding Meetup #15 - Higher-Order Functions Series - Find the odd names} */
function findOddNames(list) {
  return list.filter((p) => {
    let isOdd = p.firstName.split('').map(x => x.charCodeAt(0)).reduce((a, c) => a + c, 0) % 2 !== 0;
    return isOdd;
  })
}

/* 6 kyu
Spread number} */
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this; i++) {
    yield i;
  }
}

/* 6 kyu
Reverse Vowels In A String} */
function reverseVowels(str) {
  str = str.split("");
  let arr = str.reduce((acc, cur) => /[^aeiou]/i.test(cur) ? acc : [...acc, cur], []);
  return str.map((item) => /[^aeiou]/i.test(item) ? item : arr.pop()).join("");
}

/* 6 kyu
SMS Lottery Bet Validator} */
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

/* 6 kyu
Consecutive strings} */
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

/* 6 kyu
Give me a Diamond} */
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

/* 6 kyu
Most Consecutive Zeros of a Binary Number} */
function maxConsecZeros(n) {
  return [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", 
    "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"
  ][Math.max(...(+n).toString(2).split('1').map(x => x.length))];
}

/* 6 kyu
Get your steppin' on son} */
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

/* 6 kyu
IndexOf Array in Array} */
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

/* 6 kyu
Framed Reflection} */
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

/* 6 kyu
Create iterator} */
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

/* 6 kyu
Create a frame!} */
const frame = (text, char) => {
  const len = text.reduce((a, b) => a.length > b.length ? a : b).length + 4;
  const fill = char.repeat(len);

  let res = fill + '\n';
  for (let i = 0; i < text.length; i++) {
    res += `${char} ${text[i].padEnd(len - 3, " ")}${char}\n`;
  }
  return res + fill;
};

/* 6 kyu
The takeWhile Function} */
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

/* 6 kyu
Make it equal} */
var a = {
  i: 2,
  toString: function () {
    return a.i++;
  }
}

/* 6 kyu
Time Math} */
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

/* 6 kyu
Write JavaScript's 'call' function using apply.} */
Function.prototype.call = function () {
  const [context, ...args] = [...arguments];
  return this.apply(context, args)
};

/* 6 kyu
Magic Squares} */
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

/* 6 kyu
Unary function chainer} */
function chained(functions) {
  return function (input) {
    return functions.reduce(function (input, fn) {
      return fn(input);
    }, input);
  };
}

/* 6 kyu
Find Cracker.} */
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

/* 6 kyu
Custom Setters and Getters} */
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

/* 6 kyu
Sequences and Series} */
function getScore(n) {
  let x = 0;
  while (n > 0) {
    x += n;
    n--;
  }
  return x * 50
}

/* 6 kyu
Piano Kata, Part 1} */
function blackOrWhiteKey(kc) {
  let k = ['w', 'b', 'w', 'w', 'b', 'w', 'b', 'w', 'w', 'b', 'w', 'b'];
  return k[((kc - 1) % 88) % 12] === 'w' ? 'white' : 'black';
}

/* 6 kyu
Clocky Mc Clock-Face} */
var whatTimeIsIt = function (angle) {
  const date = new Date(1, 1, 1, 0, (angle * 1440) / 360 / 2);
  let [hours, minutes] = [date.getHours(), date.getMinutes()];
  hours = hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  const convert = t => t < 10 ? `0${t}` : t;
  return `${convert(hours)}:${convert(minutes)}`;
};

/* 6 kyu
Is Integer Array?} */
function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      return false;
    }
  }
  return true;
}


/* 6 kyu
Simple Simple Simple String Expansion} */
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


/* 6 kyu
Difference of 2} */
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

/* 6 kyu
Count the photos!} */
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

/* 6 kyu
Binary to Text (ASCII) Conversion} */
function binaryToString(binary) {
  let res = '';
  for (let i = 0; i < binary.length; i += 8) {
    res += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  return res;
}

/* 6 kyu
Sum The Tree} */
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

/* 6 kyu
Smart Sum} */
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

/* 6 kyu
Are we alternate?} */
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

/* 6 kyu
Does array x contain all values within array y?} */
Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    return new Set([...a, ...this]).size === this.length;
  }
})

/* 6 kyu
Insert value into an array} */
Array.prototype.insert = function (index, value) {
  index = index < 0 ? 0 : index > this.length ? this.length : index;
  this.splice(index, 0, value);
  return this;
};
Object.defineProperty(Array.prototype, "insert", { enumerable: false });

/* 6 kyu
Custom each() Array method} */
Array.prototype.each = function (cb) {
  for (let i = 0; i < this.length; i++) { 
    if (cb(this[i], i)) {
      break;
    }
  }
}

/* 6 kyu
Implementing Array.prototype.groupBy method} */
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

/* 6 kyu
Parse a linked list from a string} */
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

/* 6 kyu
Mexican Wave} */
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

/* 6 kyu
Format words into a sentence} */
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

/* 6 kyu
Selective Array Reversing} */
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

/* 6 kyu
Getting MAD} */
function getting_mad(arr) {
  let min = Math.abs(arr[0] - arr[1]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, Math.abs(arr[i] - arr[j]));
    }
  }
  return min;
}

/* 6 kyu
Calculate number of inversions in array} */
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

/* 6 kyu
Find matching parenthesis} */
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

/* 6 kyu
Happy numbers} */
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

/* 6 kyu
Multiples of 3 or 5} */
function solution(n) {
  if (n <= 1) return 0;
  return new Array(n - 1).fill(n - 1).reduce((a, c, i) => {
    let curr = c -= i;
    if (curr % 3 == 0 || curr % 5 == 0) { a += curr; }
    return a;
  }, 0)
}


/* 6 kyu
Highest Scoring Word} */
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

/* 6 kyu
N High Scores} */
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

/* 6 kyu
Well, that's just (proto)typical! The Misadventures of Bob the Highly Paid Consultant #3} */
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

/* 6 kyu
Most Frequent Weekdays} */
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

/* 6 kyu
String character frequency} */
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

/* 6 kyu
Closures and Scopes} */
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

/* 6 kyu
Determine the date by the day number} */
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

/* 6 kyu
Valid Braces} */
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


/* 6 kyu
String average} */
function averageString(str) {
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  str = str.split(" ")

  let nums = str.map((x) => arr.indexOf(x) > -1 ? ""+arr.indexOf(x) : false)

  return nums.filter(Boolean).length !== str.length 
    ? "n/a"
    : arr[~~(nums.reduce((a, c) => +a + +c, 0) / str.length)]
}


/* 6 kyu
Find the Mine!} */
function mineLocation(field){
  let rows = field.length
  let pos = [].concat(...field).indexOf(1) 
  return [(pos - (pos % rows)) / rows, pos % rows]
}


/* 6 kyu
first character that repeats} */
function firstDup(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}


/* 6 kyu
Clock in Mirror} */
function WhatIsTheTime(timeInMirror) {
  let [h, m] = timeInMirror.split(":")
  const helper = (n) => +n < 10 ? "0" + n : n
  m = String((60 - +m) % 60)
  h = String(12 - (+m > 0 ? +h + 1 : h) % 12)

  return `${helper(h)}:${helper(m)}`
}

/* 6 kyu
Ordinal Numbers} */
function ordinal(number, brief) {
  let s = ["th", "st", "nd", "rd"], v = number % 100;
  let ord = (s[(v - 20) % 10] || s[v] || s[0]);
  if (brief && ord[1] === 'd') {
    return "d"
  } else {
    return ord
  }
}

/* 6 kyu
Adding ordinal indicator suffixes to numbers} */
function numberToOrdinal(n) {
  let o = ['th', 'st', 'nd', 'rd'], l = n % 100
  return n > 0 
    ? n + (o[(l - 20) % 10] || o[l] || o[0]) 
    : `${n}`
}


/* 6 kyu
Good vs Evil} */
function goodVsEvil(good, evil) {
  const helper = (side, arr) => arr.map((x, i) => x * side.split(" ")[i]).reduce((a, c) => a + c, 0)
  let goodsum = helper(good, [1, 2, 3, 3, 4, 10])
  let evilsum = helper(evil, [1, 2, 2, 2, 3, 5, 10])
  return goodsum > evilsum ? "Battle Result: Good triumphs over Evil" : goodsum < evilsum ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field"
}

/* 6 kyu
Roman Numerals Decoder} */
function solution (r) {
  const key = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  let sum = 0;
  for (let i = 0; i < r.length; i++) {
    key[r[i]] < key[r[i + 1]] ? sum -= key[r[i]] : sum += key[r[i]];
  }
  return sum
}

/* 6 kyu
Delete occurrences of an element if it occurs more than n times} */
function deleteNth(arr,n){
  let h = {}
  let res = []
  for (let i = 0; i < arr.length; i++) {
    h[arr[i]] ? h[arr[i]]++ : h[arr[i]] = 1
    h[arr[i]] <= n ? res.push(arr[i]) : null
  }
  return res
}


/* 6 kyu
Highest Rank Number in an Array} */
function highestRank(arr) {
  let h = {}
  for (n of arr) {
    if (h[n]) h[n]++
    else h[n] = 1
  }
  return +Object.entries(h).sort((a, b) => b[1] == a[1] ? b[0] - a[0] : b[1] - a[1])[0][0]
}


/* 6 kyu
Fold an array} */
function foldArray(arr, runs) {
  let n = arr.length
  let len = n % 2 == 0 ? Math.floor(n / 2) : Math.ceil(n / 2)
  let [l,r] = [arr.slice(0,len), arr.slice(len).reverse()]
  let res = l.map((x,i) => r[i] == undefined ? x : r[i] + x)
  if (runs == 1) return res
  return foldArray(res, runs - 1)
}


/* 6 kyu
Dashatize it} */
function dashatize(num) {
  if (!Number.isInteger(num)) return 'NaN'
  num=[...""+num].filter(x => Number.isInteger(+x)).map((x) => { 
    return Math.abs(x) % 2 == 0 || x == 0 ? x : `-${x}-`
  }).join("").replace(/--/g, '-')
  if (num[0] == "-") num = num.slice(1)
  if (num[num.length - 1] == "-") num = num.slice(0,num.length -1)
  return num
}


/* 6 kyu
Grouped by commas} */
function groupByCommas(n) {
  return n.toLocaleString()
}


/* 6 kyu
Srot the inner ctonnet in dsnnieedcg oredr} */
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

/* 6 kyu
Lottery Ticket} */
function bingo(ticket, win){
  let res = Array(ticket.length).fill(null)
  ticket.forEach((el, i) => {
    if (el[0].split("").map(x => x.charCodeAt(0) == el[1] ? res[i]++ : "")) {
    }
  })
  return res.filter(Boolean).length >= win ? "Winner!" : "Loser!"
}

/* 6 kyu
Zero-plentiful Array} */
function zeroPlentiful(arr) {
  let r = [], c = [], count = 0
  for (let i = 0; i < arr.length; i++) {
    arr[i] == 0 ? count++ : count = 0
    count == 4 ? r.push(count) : count == 1 ? c.push(count) : ""
  }
  return c.length > r.length ? 0 : r.length
}


/* 6 kyu
Title Case} */
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


/* 6 kyu
Which are in?} */
function inArray(a1, a2) {
  return a1.filter(x => !!~a2.join(" ").indexOf(x)).sort()
}


/* 6 kyu
Help the bookseller !} */
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


/* 6 kyu
Reversing a Process} */
function decode(r) {
  let key = parseInt(r), str = r.slice(key.toString().length).split("")
  let cipher = 'abcdefghijklmnopqrstuvwxyz'
  cipher = cipher.split("").map((_,i) => String.fromCharCode(i * key % 26 + 97))
  return new Set(cipher).size == 26 
    ? str.map((x) => String.fromCharCode(cipher.indexOf(x) + 97)).join("") 
    : "Impossible to decode" 
}


/* 6 kyu
Character with longest consecutive repetition} */
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


/* 6 kyu
Count the days!} */
function countDays(d) {
  let days = Math.round((new Date().getTime() - d.getTime())/1000/60/60/24)
  return days == 0 ? "Today is the day!" : days < 0 ? `${days*-1} days` : "The day is in the past!"
}


/* 6 kyu
Find the odd int} */
function findOdd(nums) {
  let res = 0, h = {}
  for (n of nums) { h[n] ? h[n]++ : h[n] = 1 }
  Object.entries(h).forEach((el) => el[1] % 2 !== 0 ? res += +el[0] : '')
  return res
}


/* 6 kyu
ASCII hex converter} */
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


/* 6 kyu
Hex class} */
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


/* 6 kyu
What's your running pace?} */
function runningPace(distance, time){
  time = time.split(":").map((x, i) => i == 0 ? x *= 60 : +x)
  let min = Math.floor((time[0]+time[1])/distance)
  let sec = Math.floor(min%60)
  sec = sec <= 9 ? `0${sec}` : sec
  return `${Math.floor(min/60)}:${sec}`
}

/* 6 kyu
What century is it?} */
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

/* 6 kyu
New Cashier Does Not Know About Space or Shift} */
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

/* 6 kyu
Maze Runner} */
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

/* 6 kyu
Tortoise racing} */
function race(v1, v2, g) {
  if (v1 >= v2) return null
  const t = v2 - v1
  const r = ~~(g/t*3600)
  const h = ~~(r/3600), m = ~~((r-(h*3600))/60), s = ~~(r - (h * 3600) - (m * 60))
  return [h,m,s]
}


/* 6 kyu
Find the Nth longest string in an Array} */
const longest = (arr, n) => arr.map((v, i) => v = [v, i]).sort(
  (a, b) => a[0].length == b[0].length ? a[1] - b[1] : b[0].length - a[0].length
)[n - 1][0]


/* 6 kyu
Inside Out Strings} */
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

/* 6 kyu
Separating Strings} */
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


/* 6 kyu
Find the total white and black areas in a strange chessboard} */
function whiteBlackAreas(cols, rows) {
  let [er, ec, or, oc] = [0,0,0,0]
  for (let i = 0; i < cols.length; i++) {
    if (i % 2 !== 0) { or += rows[i], oc += cols[i] } 
    else { ec += cols[i], er += rows[i] }
  }
  return [er * ec + or * oc, er * oc + ec * or]
}


/* 6 kyu
Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word} */
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

/* 6 kyu
A String of Sorts} */
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

/* 6 kyu
Sort Strings by Most Contiguous Vowels} */
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


/* 6 kyu
String array duplicates} */
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

/* 6 kyu
CamelCase Method} */
String.prototype.camelCase=function(){
  if (!this.length) return "";
  let str = this.trim().split(" ");
  return str.map((x) => x[0].toUpperCase() + x.slice(1)).join("");
}


/* 6 kyu
Extract last names of people named Michael} */
function getMichaelLastName(inp) {

  inp = inp.replace(/[^a-zA-Z]+/g, ' ').split(" ")
  const check = arr => arr[0].toLowerCase() != arr[0] ? true : false
  const res = []

  for (let i = 0; i < inp.length; i++) {
    inp[i + 1] != undefined && inp[i] == "Michael" && check(inp[i + 1]) ? res.push(inp[i+1]) : ''
  }
  return res
}


/* 6 kyu
Find the most frequently occurring elements in arrays} */
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

/* 6 kyu
search in multidimensional array} */
var locate = function(arr,value){
  let idx = -20
  let len = arr.length
  while (++idx < len) { arr = [].concat(...arr) }
  return arr.indexOf(value) > -1
}

/* 6 kyu
Update inventory in your smartphone store} */
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

/* 6 kyu
Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details} */
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


/* 6 kyu
Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?} */
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

/* 6 kyu
Coding Meetup #10 - Higher-Order Functions Series - Create usernames} */
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


/* 6 kyu
Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?} */
const isAgeDiverse = (list, a = Array(10).fill(false)) => {
  for (i of list) { i = "" + i.age, a[i.length > 2 ? +(i[0]+"0") : +(i[0])] = true } 
  return a.filter(Boolean).length == 10
}


/* 6 kyu
Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?} */
function allContinents(list) {
  return [...new Set(list.map(x => x.continent))].length === 5
}

/* 6 kyu
Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer} */
const findSenior = (list, m=[]) => {
  for (a in list) { m.push(list[a].age) }
  return list.filter(x => x.age < Math.max(...m) ? '' : x)
}


/* 6 kyu
Permute a Palindrome} */
const permuteAPalindrome = (inp, m=new Map) => {
  for (i of inp) { m.has(i) ? m.delete(i) : m.set(i) } return m.size<=1
}


/* 6 kyu
Odd/Even number of divisors} */
function oddity(n) {
  return Math.sqrt(n)%1===0?'odd':'even'
}

/* 6 kyu
Simple Fun #52: Pair Of Shoes} */
function pairOfShoes(shoes) {
  const helper = (arr, val) => arr.reduce((a, c) => c[0] === val ? a + c[1] : a, 0)
  let [a, b] = [helper(shoes, 0), helper(shoes, 1)]
  return a - b === 0
}


/* 6 kyu
Count the smiley faces!} */
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

/* 6 kyu
The Deaf Rats of Hamelin} */
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

/* 6 kyu
Build Tower} */
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


/* 6 kyu
Split and Join} */
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


/* 6 kyu
Turn String Input into Hash} */
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


/* 6 kyu
String tops} */
function tops(msg) {
  let arr = [1]
  for (let i = 6, j = 5; i < msg.length; i += j + 4, j += 4) {
    if (msg[i]) { arr.push(i) }
  }
  return arr.reverse().map((x) => msg[x]).join("")
}


/* 6 kyu
Begin your day with a challenge, but an easy one.} */
function oneTwoThree(n) {
  let b = Array(n).fill(1).join("")
  if (n === 0) return ["0", "0"]
  return [Array(n/9>>>0).fill(9).concat(n % 9 || '').join(""), b]
}


/* 6 kyu
Catalog} */
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

/* 6 kyu
Strings, strings, strings (Hard)} */
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

/* 6 kyu
Meeting} */
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

/* 6 kyu
Unknown amount of duplicates. One missing number.} */
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

/* 6 kyu
Check if two words are isomorphic to each other} */
function isomorph(a, b) {
  if (!a || !b) return false
  const helper = arr => {
    return arr.split("").map((x) => arr.indexOf(x)).join(" ")
  }
  return helper(b) == helper(a)
}

/* 6 kyu
Validate Credit Card Number} */
function validate(card) {
  let arr = [...""+card].reverse().map((x, i) => i % 2 != 0 ? +x * 2 : +x)
  let r = []
  arr = arr.forEach((e)=> {e = e>9 ? e-9 : e, r.push(e)})
  return r.reduce((a,c)=> a+c, 0) % 10 == 0
}

/* 6 kyu
Who has the most money?} */
function mostMoney(students, r = []) {
  students.forEach((s) => {
    r.push((s.fives * 5) + (s.tens * 10) + (s.twenties * 20))
  })
  let i = r.indexOf(Math.max(...r))
  const checkAll = [...new Set(r)].length === 1
  return r.length === 1 ? students[0].name : checkAll ? "all" : students[i].name
}

/* 6 kyu
Mix Fruit Juice} */
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

/* 6 kyu
Fruit Machine} */
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

/* 6 kyu
Character counts} */
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

/* 6 kyu
N-th Fibonacci} */
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

/* 6 kyu
Array Deep Count} */
function deepCount(a){
  let t = a.length
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      t += deepCount(a[i])
    }
  }
  return t
}

/* 6 kyu
A Memory game array} */
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

/* 6 kyu
Selective memory} */
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

/* 6 kyu
Special Multiples} */
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

/* 6 kyu
One line task: Square Every Digit} */
sd=x=>+[...""+x].map(n=>n*n).join``


/* 6 kyu
"Stringing"+"Me"+"Along"} */
function createMessage () {
  let args = [...arguments][0]
  function m() {
    if (arguments.length === 0) { return args }
    args += ` ${[...arguments][0]}`
    return m
  }
  return m
}

/* 6 kyu
Training Random Testcases #1: Fizz Buzz} */
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

/* 6 kyu
Find the Nexus of the Codewars Universe} */
const nexus = (users, r = []) => {
  for (let [k, v] of Object.entries(users)) { 
    r.push(Math.abs(+k - v)) 
  }
  return +(Object.keys(users)[r.indexOf(Math.min(...r))])
}

/* 6 kyu
Adjacent repeated words in a string} */
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

/* 6 kyu
IPv4 to int32} */
function ipToInt32(ip){
  return ip.split(".").reduce((a,c)=> +a * 256 + +c, 0)
}

/* 6 kyu
Pyramid Array} */
function pyramid(n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push(Array(i+1).fill(1))
  }
  return res
}

/* 6 kyu
Count words} */
function wordCount(s) {
  s = s.split(/[^a-zA-Z]/ig)
  return s.filter((a) => {
    if (a === '' || ["a","the","on","at","of","upon","in","as"].indexOf(a.toLowerCase()) > -1) {
    } else {
      return a
    }
  }).length
}

/* 6 kyu
Change it up} */
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

/* 6 kyu
The Supermarket Queue} */
function queueTime(customers, n) {
  const curr = Array(n).fill(0)
  for (let acc of customers) {
    curr[curr.indexOf(Math.min(...curr))] += acc
  }
  return Math.max(...curr)
}

/* 6 kyu
Message Validator} */
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


/* 6 kyu
Find the missing letter} */
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

/* 6 kyu
Is a number prime?} */
function isPrime(num) {
  let sq = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) return false;
  }
  return num > 1 ? true : false
}


/* 6 kyu
Decode the Morse code} */
decodeMorse = function (morseCode) {
  morseCode = morseCode.trim().split(" ").map((el) => MORSE_CODE[el] || ' ')
  return morseCode.join("").replace(/\s+/g, ' ')
}

/* 6 kyu
Find the unique number} */
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

/* 6 kyu
Kebabize} */
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

/* 6 kyu
+1 Array} */
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

/* 6 kyu
Lock and Key} */
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

/* 6 kyu
Two Sum} */
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

/* 6 kyu
Reverse every other word in the string} */
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

/* 6 kyu
Sum consecutives} */
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

/* 6 kyu
Make the Deadfish Swim} */
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

/* 6 kyu
Pair of gloves} */
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

/* 6 kyu
Sums of Parts} */
function partsSums(ls) {
  let curr = ls.reduce((a, c) => a + c, 0)

  let res = [curr]
  for (let i = 0; i < ls.length; i++) {
    curr -= ls[i]
    res.push(curr)
  }

  return res
}

/* 6 kyu
Multiplication table} */
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

/* 6 kyu
Backspaces in string} */
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

/* 6 kyu
Collatz} */
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

/* 6 kyu
"this" is an other solution} */
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = `${this.firstName} ${this.lastName}`;
  Object.freeze(this);
}

/* 6 kyu
"this" is an other problem} */
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

/* 6 kyu
Equal Sides Of An Array} */
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

/* 6 kyu
Simple frequency sort} */
function solve(arr){
  let res = {}
  for (let n of arr) {
    if (res[n]) res[n] = res[n] + 1
    else res[n] = 1
  }
  return arr.slice().sort((a, b) => res[b] - res[a] || a - b)
}

/* 6 kyu
Write Number in Expanded Form - Part 2} */
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

/* 6 kyu
Write Number in Expanded Form} */
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


/* 6 kyu
Take a Ten Minutes Walk} */
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


/* 6 kyu
Persistent Bugger.} */
function persistence(num) {
  num = num.toString()
  let count = 0
  while (num.length !== 1) {
    count++
    num = num.split("").reduce((a, c) => a * c, 1).toString()
  }
  return count
}

/* 6 kyu
Detect Pangram} */
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

/* 6 kyu
Does my number look big in this?} */
function narcissistic(n) {
  let len = n.toString().length
  let res = 0
  for (let i = 0; i < len; i++) {
    res += (+n.toString()[i])**len
  }
  return res == n
}

/* 6 kyu
Prime Primes} */
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

/* 6 kyu
Simple Substitution Cipher Helper} */
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

/* 6 kyu
Are they the "same"?} */
function comp(a1, a2){
  if (!Array.isArray(a1) || !Array.isArray(a2)) return false;
  a1 = a1.sort((a, b) => a - b);
  a2 = a2.sort((a, b) => a - b).map((el) => Math.sqrt(el));
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

/* 6 kyu
Convert string to camel case} */
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

/* 6 kyu
Length of missing array} */
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

/* 6 kyu
Run-length encoding} */
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

/* 6 kyu
Playing with digits} */
function digPow(n, p){
  nums = n.toString()
  let x = 0
  p >= 1 ? p -= 1 : p
  
  for (let i = 0; i < nums.length; i++) {
    x += (+nums[i]) ** +(p += 1)
  } 
  return x/n % 1 === 0 ? x/n : -1
}

/* 6 kyu
Loose Change} */
function looseChange(cents) {

  let changeMachine = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents <= 0) return changeMachine;

  let c = 0;
  if (/[\.]/.test(String(cents)) == true) {
    c += parseInt(cents);
  } else {
    c += cents;
  }

  changeMachine.Quarters = Math.floor(c / 25);
  changeMachine.Dimes = Math.floor(c % 25 / 10);
  changeMachine.Nickels = Math.floor(c % 25 % 10 / 5);
  changeMachine.Pennies = Math.floor(c % 25 % 10 % 5);
  return changeMachine;

}

/* 6 kyu
Replace With Alphabet Position} */
function alphabetPosition(text) {
  text = text.toLowerCase().replace(/[^a-z]/g, '');
  let res = [];
  for (let i = 0; i < text.length; i++) {
    res.push(text.charCodeAt(i) - 96);
  }
  return res.join(" ");
}

/* 6 kyu
Duplicate Encoder} */
function duplicateEncode(word) {
  word = word.toLowerCase().split("");

  const map = word.reduce((a, c) => {
    a[c] = ++a[c] || 1;
    return a;
  }, {});

  const helper = freq => map[freq] > 1 ? ')' : '(';
  return word.map(helper).join("");
}

/* 6 kyu
Count characters in your string} */
function count (string) {  
  return string.split("").reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});
}

/* 6 kyu
Filling an array (part 2)} */
// squares
const squares = n => {
  let res = []
  for (let i = 1; i <= n; i++) {
    res.push(i ** 2)
  }
  return res
}

// range
const range = (n, start, step) => {
  let res = [start];
  for (let i = 0; i < n - 1; i++) {
    res.push(start += step)
  }
  return res
}

// random
const random = (n, min, max) => {
  function r(min, max) {
    return Math.round(Math.random() * (max - min)) + min
  }
  return Array.from({length: n }, $ => r(min, max))
}

// primes
const primes = n => {
  let arr = []
  let i = 2
  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i)
    }
    i++
  }

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  };
  return arr
}


/* 6 kyu
Loose Change} */
function looseChange(cents) {

  let changeMachine = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents <= 0) return changeMachine;

  let c = 0;
  if (/[\.]/.test(String(cents)) == true) {
    c += parseInt(cents);
  } else {
    c += cents;
  }

  changeMachine.Quarters = Math.floor(c / 25);
  changeMachine.Dimes = Math.floor(c % 25 / 10);
  changeMachine.Nickels = Math.floor(c % 25 % 10 / 5);
  changeMachine.Pennies = Math.floor(c % 25 % 10 % 5);
  return changeMachine;

}

/* 6 kyu
Replace With Alphabet Position} */
function alphabetPosition(text) {
  text = text.toLowerCase().replace(/[^a-z]/g, '');
  let res = [];
  for (let i = 0; i < text.length; i++) {
    res.push(text.charCodeAt(i) - 96);
  }
  return res.join(" ");
}

/* 6 kyu
Duplicate Encoder} */
function duplicateEncode(word) {
  word = word.toLowerCase().split("");

  const map = word.reduce((a, c) => {
    a[c] = ++a[c] || 1;
    return a;
  }, {});

  const helper = freq => map[freq] > 1 ? ')' : '(';
  return word.map(helper).join("");
}

/* 6 kyu
Count characters in your string} */
function count (string) {  
  return string.split("").reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});
}

/* 6 kyu
Your order, please} */
function order(words) {
  words = words.split(" ")
  let res = [];
  for (let i = 0; i <= words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[j].includes(i)) {
        res.push(words[j]);
      }
    }
  }
  return res.join(" ");
}

/* 6 kyu
Arrays Similar} */
function arraysSimilar(a1, a2) {

  if (!a1 || !a2) return false;
  if (a1.length != a2.length) return false;
  
  // concat and check types
  let qc = a1.concat(a2);
  qc = qc.every((val, i, qc) => typeof val === typeof qc[0]);
  if (qc == false) return false;
  else 
  
  // bubble
  function b(a) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
          [a[j+1], a[j]] = [a[j], a[j+1]];
        }
      }
    }
    return a;
  }

  // iterate through sorted elements
  let x = b(a1), y = b(a2);
  function check(x, y) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) return false;
    }
    return true;
  }
  return check(x, y);
}

/* 6 kyu
Where is my parent!?(cry)} */
function compare(a, b) {
  if (a.toLowerCase() !== b.toLowerCase()) {
    a = a.toLowerCase();
    b = b.toLowerCase();
  }
  return a > b ? 1 : (a < b ? -1 : 0);
}

function findChildren(dancingBrigade) {
  return dancingBrigade.split("").sort(compare).join("")
}

/* 6 kyu
Unique In Order} */
var uniqueInOrder=function(iterable){
  let res = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i - 1] !== iterable[i]) {
      res.push(iterable[i]);
    }
  }
  return res;
}

/* 6 kyu
Sort the odd} */
function sortArray(array) {
  let odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((a) => a % 2 ? odd.shift() : a);
}

/* 6 kyu
How many pages in a book?} */
function amountOfPages(summary) {
  let count = 0;
  for (let i = 0; i <= summary; i++) {
    count += i.toString().length;
    if (count > summary) {
      return i;
    }
  }
}

/* 6 kyu
Bit Counting} */
function countBits(n) {
  n = n.toString(2).split("");
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] > 0) count++;
  }
  return count;
}

/* 6 kyu
Split Strings} */
function solution (str) {
  let isEven = str % 2 === 0 ? str : `${str}_`;
  let res = [];

  while (isEven.length >= 2) {
    let arr = isEven.slice(0, 2);
    str = isEven.slice(2);
    res.push(arr);
    isEven = str;
  }
  return res;
}

/* 6 kyu
Defining getters and setters on an existing class} */
Object.defineProperty(Person.prototype, "name", {
  get: function () { return `${this.firstName} ${this.lastName}`; },
  set: function (name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
})

/* 6 kyu
Rotate matrix counter - clockwise N - times!} */
function rotateAgainstClockwise(m, times) {
  times = times % 4;
  if (times === 0) return m;
  for (let x = 0; x < times; x++) {
    let rotate = [];
    for (let i = m.length - 1; i >= 0; i--) {
      let matrix = [];
      for (let j = 0; j < m.length; j++) {
        matrix.push(m[j][i]);
      }
      rotate.push(matrix)
    }
    m = rotate;
  }
  return m
}

/* 6 kyu
Manhattan Distance} */
function manhattanDistance(x, y){
  let p1 = Math.abs(x[0] - y[0])
  let p2 = Math.abs(x[1] - y[1])
  return Math.abs(p1 + p2)
}

/* 6 kyu
Bouncing Balls} */
function bouncingBall(h, bounce, window) {

  res = 0;

  if (h <= 0 || bounce >=1 || bounce <= 0 || window >= h) {
    return -1;
  }
  while (h > window) {
    if (h > window)
      res++;
    h = h * bounce;
    if (h > window) {
      res++;
    }
  }
  return Number(res);
}

/* 6 kyu
Row of the odd triangle} */
function oddRow(n) {
  let f = 1;
  for (let i = 1; i < n; i++) { f += i * 2; }

  let s = [f]
  for (let i = 1; i < n; i++) { s.push(f += 2); }
  return s;
  
}

/* 6 kyu
Assemble string} */
function assembleString(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i==0) res.push(arr[i][j])
      if (res[j] == "*" || arr[i][j] == "#") 
      res[j] = arr[i][j];
    }
  }
  return res.map((x) => x == "*" ? "#" : x).join("");
}

/* 6 kyu
Sum of Digits / Digital Root} */
function digital_root(n) {
  let arr = [];
  let reducer = (a,b) => parseInt(a) + parseInt(b);

  while(n > 9) {
    arr = n.toString().split("")
    n = arr.reduce(reducer)
  }
  return n;
}

/* 6 kyu
Array.diff} */
function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x))
}

/* 6 kyu
Stop gninnipS My sdroW!} */
function spinWords(w){

  return w.split(" ").map(word => (word.length >= 5) ? word.split("").reverse().join("") : word).join(" ");

}

/* 6 kyu
Who likes it?} */
function likes(names) {

  let count = names.length;
    if (count < 1) { return "no one likes this"}
    else if (count === 1) { return `${names} likes this`}
    else if (count === 2) { return `${names[0]} and ${names[1]} like this`}
    else if (count === 3) {return `${names[0]}, ${names[1]} and ${names[2]} like this` }
    else { return `${names[0]}, ${names[1]} and ${count - 2} others like this`}
}

/* 6 kyu
Create Phone Number} */
function createPhoneNumber(numbers){
  let a = numbers.join();
  let b = a.replace(/,/g, '')
  return (`(${b.slice(0, 3)})` + " " + b.slice(3, 6) + "-" + b.slice(6,10)) 
}

/* 6 kyu
Counting Duplicates} */
function duplicateCount(text) {
  let nText = text.toLowerCase();
  let myObj = {};
  let counter = 0;
  for (let i = 0; i < nText.length; i++) {
    if (!myObj[nText[i]]) {
      myObj[nText[i]] = 1;
    } else if (myObj[nText[i]] < 2) {
      myObj[nText[i]] += 1;
      counter++;
    }
  }
  return counter;
}