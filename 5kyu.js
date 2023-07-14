/* 5 kyu
Simple Fun #358: Vertical Histogram Of Letters} */
function verticalHistogramOf(s) {
  let m = {};
  let max = -Infinity;
  s = s.replace(/[^A-Z]/g, '');
  if (!s) return '';

  for (let l of s) {
    m[l] = (m[l] || 0) + 1;
    if (m[l] > max) { max = m[l]; }
  }
  m = Object.entries(m).sort((a, b) => a[0].localeCompare(b[0])).reduce((a, b) => (a[b[0]] = b[1], a), {});

  const set = Object.keys(m);
  let arr = Array.from({ length: set.length }, (_, i) => {
    return [...'*'.repeat(m[set[i]])].concat(set[i]).reverse();
  });

  return Array(max + 1).fill().map((_, j) => Array.from({ length: set.length }, (_, i) => {
    return arr[i][j] || ' ';
  }).join` `).reverse().map(x => x.replace(/ +$/, '')).join`\n`;
}

/* 5 kyu
Using closures to share class state} */
var Cat = (function () {
  var instances = [];
  function Cat(name, weight) {
    if (name && weight) {
      Object.defineProperty(this, 'name', {
        get: function () { return name; },
        set: function (n) {
          name = n;
          return name;
        }
      });
      Object.defineProperty(this, 'weight', {
        get: function () { return weight; },
        set: function (w) {
          weight = w;
          return weight;
        }
      });
      instances.push(this);
    } else {
      throw new Error('Must provide name and weight');
    }
  }
  Cat.averageWeight = function () {
    return instances.reduce((a, c) => a + c.weight, 0) / instances.length;
  };
  return Cat;
}());

/* 5 kyu
Sum of Pairs} */
function sumPairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) {
      return [s - i, i];
    }
    seen.add(i);
  }
  return;
}

/* 5 kyu
Two arrays -- Zero rows and zero columns} */
function countZeroRowsAndColumns(arr1, arr2) {
  let c = 0;
  let cols = Array(arr1[0].length).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    let t = 0;
    for (let j = 0; j < arr1[i].length; j++) {
      const curr1 = arr1[i][j];
      const curr2 = arr2[i][j];
      if (curr1 + curr2) {
        cols[j] += 1;
        t++;
      }
    }
    c += t === 0 ? 1 : 0;
  }
  return c + cols.filter(x => x === 0).length;
}

/* 5 kyu
Sierpinski's Gasket} */
function sierpinski(n) {
  if (n === 0) return 'L';
  if (n === 1) return 'L\nL L';
  let res = [[1n]];
  let len = BigInt(Math.pow(2, n));

  for (let i = 1; i < len; ++i) {
    let arr = [];
    res.push(arr);
    for (let j = 0; j < res[i - 1].length; j++) {
      arr.push(j ? res[i - 1][j - 1] + res[i - 1][j] : 1n);
    }
    arr.push(1n);
  }

  let str = '';
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      str += res[i][j] % 2n ? 'L ' : '  ';
    }
    str = str.trim() + '\n';
  }
  return str.trim();
}


/* 5 kyu
Zonk game} */
function getScore(dice) {
  const count = Array(7).fill(0);
  for (const die of dice) { count[die]++; }
  
  let [score, diceCount, pairCount] = [0, 0, 0];
  const threes = [1000, 200, 300, 400, 500, 600];
  for (let i = 1; i <= 6; i++) {
    if (count[i] === 0) continue;
    diceCount++;
    if (count[i] >= 3) {
      score += threes[i - 1] * ((threes[count[i] - 1] / 100) - 2);
    } else {
      score += i === 1 ? count[i] * 100 : i === 5 ? count[i] * 50 : 0;
      if (count[i] === 2) pairCount++;
    }
    count[i] = 0;
  }

  return diceCount === 6 ? 1000 : pairCount === 3 ? 750 : score > 0 ? score : 'Zonk';
}

/* 5 kyu
An Eventful Bus} */
class Bus {
  constructor () {
    this._handlers = {};
  }

  has(type) { return this._handlers.hasOwnProperty(type); }
  subscribe(type, fn) {
    this.has(type) ? this._handlers[type].push(fn) : this._handlers[type] = [fn];
  }
  unsubscribe(type, fn) {
    this.has(type) && fn ? this._handlers[type] = this._handlers[type].filter(v => v !== fn) : delete this._handlers[type];
  }
  emit(type, ...args) {
    const fn = this._handlers[type];
    if (fn) { fn.forEach(cb => cb(...args)); }
  }
}

/* 5 kyu
#Hashtag} */
function getHashtags(post) {
  let r = [];
  if (!post) return [];

  let temp = '';
  let f = false;
  for (let i = 0; i < post.length; i++) {
    const curr = post[i];

    if (f) {
      temp += curr;
      if (temp.length === 1) {
        if (!/[a-zA-Z]/.test(curr)) {
          temp = '';
          f = false;
        }
      }

      if (curr === "#") {
        temp = '';
        f = false;
      }

      if (curr === ' ') {
        if (temp.length === 2) {
          temp = '';
          f = false;
        } else {
          if (temp[temp.length - 1] === ' ') {
            r.push(temp.slice(0, -1));
          } else {
            if (temp) {
              r.push(temp);
            }
          }
          temp = '';
          f = false;
        }
      }

      if (i === post.length - 1) {
        r.push(temp);
        temp = '';
        f = false;
      }
    }

    if (curr === '#') {
      if (post[i - 1] === " " || i === 0 || post[i - 1] === '#') {
        f = true;
      }
    }
  }

  return r;
}


/* 5 kyu
Grab CSV Columns} */
function csvColumns(csv, ind) {
  let sp = csv.split('\n');
  let res = [];
  for (let i = 0; i < sp.length; i++) {
    res.push(sp[i].split(',').filter((_, i) => ind.indexOf(i) !== -1).join(','));
  }
  return res.filter(v => v.length > 0).join("\n");
}

/* 5 kyu
Last digit of a large number} */
var lastDigit = function (a, b) {
  if (b == 0) return 1;
  [a, b] = [+a.slice(-1), +b.slice(-2)];

  return Math.pow(a, b % 4 || 4) % 10;
};

/* 5 kyu
Lazy Repeater} */
function makeLooper(str) {
  let count = 0;
  return function () {
    if (count === str.length) {
      count = 0;
    }
    return str[count++];
  };
}


/* 5 kyu
Rotate an array matrix} */
function rotate(m, d) {
  return d === 'clockwise'
    ? m[0].map((_, i) => m.map((r) => r[i]).reverse())
    : m[0].map((_, i) => m.map((r) => r[r.length - 1 - i]));
}


/* 5 kyu
String like [Char]} */
function isVowel(char) {
  return char.match(/^[aeiouAEIOU]$/) != null;
}

String.prototype.toArray = function () {
  return this.split('');
};

String.prototype.map = function (cb) {
  return this.toArray().map(cb).join('');
};

String.prototype.join = function (cb) {
  return this.toArray().join(cb);
};

String.prototype.filter = function (cb) {
  return this.toArray().filter(cb).join('');
};

String.prototype.forEach = function (cb) {
  return this.toArray().forEach(cb);
};

String.prototype.some = function (cb) {
  return this.toArray().some(cb);
};

String.prototype.every = function (cb) {
  return this.toArray().every(cb);
};

String.prototype.reduce = function (cb, a) {
  return this.toArray().reduce(cb, a);
};

String.prototype.reduceRight = function (cb, a) {
  return this.toArray().reduceRight(cb, a);
};

String.prototype.sort = function (cb) {
  return this.toArray().sort(cb).join('');
};

String.prototype.reverse = function () {
  return this.toArray().reverse().join('');
};

String.prototype.push = function (str) {
  return this + str;
};

String.prototype.pop = function () {
  return this.slice(0, this.length - 1);
};

String.prototype.shift = function () {
  return this.slice(1);
};

String.prototype.unshift = function (str) {
  return str + this;
};

String.prototype.splice = function () {
  let arr = this.toArray()
  arr.splice(...arguments)
  return arr.join('')
};

/* 5 kyu
validDate Regex} */
var validDate = /\[(01|03|05|07|08|10|12)-(0[1-9]|[12][0-9]|3[01])\]|\[(04|06|09|11)-(0[1-9]|[12][0-9]|30)\]|\[(02)-(0[1-9]|1[0-9]|2[0-8])\]/

/* 5 kyu
Calculate age in years} */
function getAge(bd, d) {
  const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
  d = d || new Date();
  d.setDate(d.getDate() + (isLeapYear(d.getFullYear()) ? 1 : 0))
  bd.setDate(bd.getDate() + (isLeapYear(bd.getFullYear()) ? 1 : 0))
  return ~~((d.getTime() - bd.getTime()) / 31536000000);
}

/* 5 kyu
Javascript Magic Function} */
function MagicFunction(a) {
  if(a % 2 == 0){
    return true
  }
} return

/* 5 kyu
Deep comparison of objects} */
function deepCompare(a, b) {
  if (a === b) return true
  if (typeof a !== typeof b) return false
  if (typeof a === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) return false
    for (let key in a) {
      if (!deepCompare(a[key], b[key])) return false
    }
    return true
  }
  return false
}

/* 5 kyu
Simple assembler interpreter} */
function simple_assembler(program) {
  const dict = {};
  for (let i = 0; i < program.length; i++) {
    const [cmd, reg, val] = program[i].split(" ");
    if (cmd == 'mov') dict[reg] = isNaN(val) ? +dict[val] : +val;
    if (cmd == 'inc') dict[reg] += 1;
    if (cmd == 'dec') dict[reg] -= 1;
    if (cmd == 'jnz' && dict[reg] != 0) i += +val - 1;
  }
  return dict;
}


/* 5 kyu
Distinct contiguous elements in every window of size k} */
function countContiguousDistinct(k, a) {
  let left = 0;
  let right = 0;
  let res = [];
  let m = new Map();
  while (right < a.length) {
    m.set(a[right], (m.get(a[right]) || 0) + 1);
    if (right - left + 1 === k) {
      res.push(m.size);
      m.set(a[left], m.get(a[left]) - 1);
      if (m.get(a[left]) === 0) m.delete(a[left]);
      left++;
    }
    right++;
  }
  return res;
}

/* 5 kyu
Function Cache} */
function cache(func) {
  const cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    if (key in cache) {
      return cache[key];
    } else {
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  };
}


/* 5 kyu
Tic-Tac-Toe Checker} */
function isSolved(board) {
    const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ];

  let x = new Set(), o = new Set(), winner = null;

  for (let i = 0, k = 0; i < 3; i++, k += 3) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) continue;
      board[i][j] === 1 ? x.add(j + k) : o.add(j + k);
    }
  }

  if (o.size < 3 && x.size < 3) return -1;

  for (let i = 0; i < 8; i++) {
    const curr = winningCombos[i];
    if (x.has(curr[0]) && x.has(curr[1]) && x.has(curr[2])) {
      winner = 1;
      break;
    }
    if (o.has(curr[0]) && o.has(curr[1]) && o.has(curr[2])) {
      winner = 2;
      break;
    }
  }

  return winner === null ? x.size + o.size === 9 ? 0 : -1 : winner;
}

/* 5 kyu
Simple Events} */
class Event {
  constructor() {
    this.inBucket = []
  }

  subscribe(...args) {
    args.map(
      x => (x && x.constructor === Function) ? this.inBucket.push(x) : x
    )
  }

  unsubscribe(...args) {
    for (let i of args) {
      let index = this.inBucket.lastIndexOf(i)
      if (index !== -1) this.inBucket.splice(index, 1)
    }
  }

  emit(...args) {
    return this.inBucket.slice().map(x => x.apply(this, args))
  }
}

/* 5 kyu
Vector class} */
class Vector {
  constructor(components) {
    this.components = components
  }

  check(vec) {
    if (this.components.length !== vec.components.length) {
      throw new Error()
    }
  }

  add(vec) {
    this.check(vec)
    return new Vector(this.components.map((val, i) => val + vec.components[i]))
  }

  subtract(vec) {
    this.check(vec)
    return new Vector(this.components.map((val, i) => val - vec.components[i]))
  }

  dot(vec) {
    this.check(vec)
    return this.components.map((val, i) => val * vec.components[i]).reduce((a, c) => a + c, 0)
  }

  norm() {
    return Math.hypot(...this.components)
  }

  toString() {
    return `(${this.components.join(',')})`
  }

  equals(vec) {
    return this.components.every((val, i) => val === vec.components[i])
  }
}

/* 5 kyu
Caesar Cipher Helper} */
class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }
  getShift(val, shift, isEncode) {
    val = val.toUpperCase().charCodeAt(0)
    if (isEncode) {
      if (val >= 65 && val <= 90) {
        return String.fromCharCode((val + shift - 65) % 26 + 65);
      } else {
        return String.fromCharCode(val)
      }
    } else {
      if (val >= 65 && val <= 90) {
        return String.fromCharCode(((val + 26 - shift) + 65) % 26 + 65)
      } else {
        return String.fromCharCode(val)
      }
    }
  }
  encode(str) {
    return str.split("").map(x => this.getShift(x, this.shift, true)).join("");
  }
  decode(str) {
    return str.split("").map(x => this.getShift(x, this.shift, false)).join("");
  }
}

/* 5 kyu
Not very secure} */
function alphanumeric(string){
  let temp = string.replace(/[^a-zA-Z0-9]/g, '')
  return temp.length > 0 ? temp == string : false
}


/* 5 kyu
Pagination control - Showing page numbers} */
const getPages = (len, curr, size) => {
  if (len < 2) return [];
  if (curr - size < 2) curr = size + 2
  if (curr + size >= len) curr = len - size - 1

  let arr = [1]
  const [l, r] = [Math.max(2, curr - size), 
                  Math.min(len - 1, curr + size)]
                  
  for (let i = l; i <= r; i++) { arr.push(i) }
  return arr.concat(len)
};


/* 5 kyu
Weight for weight} */
function orderWeight(str) {
  const helper = str => [...str].reduce((a, c) => a + +c, 0)
  return str.split(" ").sort((a, b) => {
    if (helper(a) == helper(b)) {
      return a.localeCompare(b)
    } else {
      return helper(a) - helper(b)
    }
  }).join(" ")
}

/* 5 kyu
Scramblies} */
function scramble(str1, str2) {
  let h = {}
  const helper = (str,check) => {
    for (let n of str) {
      if (h[n]) {
        check == true ? h[n]-- : h[n]++
      } else {
        check == true ? h[n]=0 : h[n]=1
      } 
    }
  }
  helper(str2,false), helper(str1,true)
  return Math.max(...Object.values(h)) == 0
}


/* 5 kyu
Multi Line Task: Fizz Buzz} */
f=
n=>
(n%
3
?''
:'\
fi\
zz'
)+
(n
%5?
'':
'b\
u\
zz'
)
||n


/* 5 kyu
Basic DeNico} */
const deNico = (key, m) => {
  m = m.split("")
  key = key.split("")

  let sortKey = key.slice().sort()
  let getKey = key.slice().map(x => sortKey.indexOf(x) + 1)

  let dict = {}, pos = [];

  getKey.forEach((el) => dict[el + 'k'] = [])


  for (let i = 0, k = 1; i < m.length; i++, k++) {
    if (k == getKey.length + 1) { k = 1 }
    pos.push(k)
  }

  m.map((x, i) => dict[pos[i] + 'k'] = [...dict[pos[i] + 'k'], x])
  
  let res = []
  for (let i = 0; i < m.length; i++) {
    for (const x in dict) {
      if (dict[x].length > 0) {
        let temp = dict[x].shift()
        res = [...res, temp]
      }
    }
  }
  return res.join("").trimRight()
}


/* 5 kyu
Additionless addition.} */
function add (x, y) {
  let n1 = x & y, n2 = x ^ y
  while (n1 != 0) {
    let temp = n1 << 1
    n1 = n2 & temp
    n2 ^= temp
  }
  return n2
}

/* 5 kyu
PaginationHelper} */
class PaginationHelper {
  constructor(collection, items) {
    this.collection = collection;
    this.items = items;
    this.len = this.collection.length;
    this.pages;
  }

  itemCount() {
    return this.len
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.items)
  }

  pageItemCount(idx) {
    let arr = []
    for (let i = 0; i < this.len; i++) {
      if (i === 0 && i <= this.items) {
        arr.push(Array.from(this.collection.slice(0, this.items)))
      } else if (i % this.items === 0 && i > 0) {
        arr.push(Array.from(this.collection.slice(i, i + this.items)))
      }
    } 
    this.pages = arr
    return arr[idx] !== undefined ? arr[idx].length : -1
  }

  pageIndex(i) {
    let el = this.collection[i]
    if (el === undefined) return -1
    let page = 0;
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].includes(el)) {
        page += i
      }
    }
    return page
  }
}

/* 5 kyu
Pete, the baker} */
function cakes(r, a) {
  let props = Object.keys(r)
  let totals = []
  for (let i = 0; i < props.length; i++) {
    totals.push(a[props[i]] / r[props[i]])
  }
  return parseInt(Math.min(...totals)) || 0
}

/* 5 kyu
The Fruit Juice} */
class Jar {
  constructor() {
    this.total = 0;
    this.concentrations = [];
    this.types = []
  }

  add(amount, type) {
    if (this.getLength() === 0 || !this.types.includes(type)) {
      this.concentrations.push([amount, type])
      this.types.push(type)
    } else {
      for (let i = 0; i < this.getLength(); i++) {
        if (this.concentrations[i].includes(type)) {
          this.concentrations[i][0] += amount
        }
      }
    }
    this.total += amount
  }

  pourOut(amount) {
    if (this.types.length === 0) {
      
    } else if (this.types.length === 1) {
      if (amount >= this.concentrations[0][0]) {
        this.concentrations[0][0] = 0
        this.total = 0
      } else {
        this.concentrations[0][0] -= amount
        this.total -= amount
      }
      
    } else {
      let percentages = []
      for (let i = 0; i < this.getLength(); i++) {
        percentages.push(this.getConcentration(this.concentrations[i][1]))
      }

      if (amount >= this.total) {
        this.total = 0
        for (let i = 0; i < this.getLength(); i++) {
          this.concentrations[i][0] = (this.total * percentages[i])
        }

      } else {
        this.total -= amount
        for (let i = 0; i < this.getLength(); i++) {
          this.concentrations[i][0] = (this.total * percentages[i])
        }
      }
    }
  }

  getTotalAmount() {
    return this.total
  }

  getLength() {
    return this.types.length === 0 ? 0 : this.concentrations.length
  }

  getIndexOfType(type) {
    return this.types.indexOf(type)
  }

  getConcentration(type) {
    if (!this.types.includes(type) || this.types.length === 0) {
      return 0;
    } else if (this.types.length === 1 && this.types.includes(type)) {
      return 1;
    } else if (this.types.length > 1 && this.types.includes(type) && this.total === 0) {
      return 0;
    } else {
      return this.concentrations[this.getIndexOfType(type)][0] / this.total
    }
  }
}

/* 5 kyu
Bob's reversing obfuscator} */
function decoder(str, marker) {
  str = str.split(marker)

  let a = []
  let b = []
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      a.push(str[i])
    } else if (i % 2 === 1) {
      b.push(str[i])
    } else {

    }
  }
  return a.concat(b.reverse().map((x) => x.split("").reverse().join(""))).join("")
}


/* 5 kyu
First non-repeating character} */
function firstNonRepeatingLetter(s) {
  if (s.length === 0) { return '' }
  if (s.length === 1) { return s }

  const h = (a, b) => {
    let temp = b.toLowerCase();
    if (a[temp]) a[temp][1] += 1
    else a[temp] = [b, 1]
    return a
  }

  let o = s.split("").reduce(h,{})

  let r = Object.values(o)
  // let c = 0
  // for (let i of r) { c+=i[1] }
  
  if (r.length === 1) { return '' } 
  // if (c === r.length) { return '' }

  // return r.filter((x) => x[1] === 1)[0][0].toString()
  return [].concat(...r.filter((x) => x[1] === 1))[0] || ''

}

/* 5 kyu
int32 to IPv4} */
function int32ToIp(int32) {
   return(int32 >>> 24) + "." + 
         ((int32 >> 16)&255) + "." + 
          ((int32 >> 8)&255) + "." + 
            (int32 & 255)
}

/* 5 kyu
Calculate Variance} */
var variance = function(numbers) {
  let l = numbers.length
  const helper = (arr) => arr.reduce((a,c)=>a+c,0)
  const m = helper(numbers)/l
  numbers = numbers.map((n) => ((n-m)**2)/l)
  return helper(numbers)
};

/* 5 kyu
The Hashtag Generator} */
function generateHashtag(str) {
  str = str.toLowerCase().split(/\s/g).filter((x) => x != '')
           .map((x) => x[0].toUpperCase() + x.slice(1)).join('')

  return !str.length || str.length >= 140 ? false : "#" + str
}

/* 5 kyu
Convert PascalCase string into snake_case} */
function toUnderscore(s) {
  if (typeof s === "number") return s.toString()
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(+s[i])) {
      res += s[i] + "_"
    } else if (i > 0 && s.charCodeAt(i) < 97 & s[i - 1] != "_" && !Number.isInteger(+s[i-1])) {
      res += "_" + s[i]
    } else {
      res += s[i]
    }
  }
  return res.toLowerCase()
}

/* 5 kyu
Human Readable Time} */
function humanReadable (seconds) {
  
  let s = Math.floor(seconds%3600%60)
  let m = Math.floor(seconds/60%60)
  let h = Math.floor(seconds/3600)

  const getTime = (op) => {
    if (op >= 10) {
      return op
    } else if (op <= 9 && op >= 1) {
      return "0" + op
    } else {
      return "00"
    }
  }

  return [getTime(h),":",getTime(m),":",getTime(s)].join("")
}

/* 5 kyu
String incrementer} */
function incrementString(str) {
  let i = str.length - 1
  str = str.split("")
  let checkNum = str.filter((x) => x >= 0)
  if (checkNum.length === 0) { return str.join("") + "1" }

  let letters = str.slice(0, i - checkNum.length + 1).join("")

  let arr = Array(checkNum.length).fill(0)
  arr = checkNum.map((x, y) => arr[y] += +checkNum[y])

  let j = arr.length - 1
  if (arr[j] <= 8) {
    arr[j] += 1
    return letters + arr.join("")
   } else if (arr[j] === 9 && arr[0] === 9) {
    return letters + [1].concat(Array(arr.length).fill(0)).join("")
   }

  while (arr[j] > 8) {
    arr[j] = 0
    arr[j - 1] += 1
    j--
    if (arr[j] === 9 && arr[j + 1] === 0) { break; }
  }
  return letters + arr.join("")
}

/* 5 kyu
Product of consecutive Fib numbers} */
function productFib(prod) {

  let a = 0,
      b = 1,
      c = 1,
      d = 1;

  let sumOne = 0,
      sumTwo = 0,
      p = 0;

  while (prod > p) {
    sumOne = a + b
    sumTwo = c + d
    a = b
    b = sumOne
    c = d
    d = sumTwo
    p = sumOne * sumTwo
  }

  return sumOne * sumTwo == prod ? [sumOne, sumTwo, true] : [sumOne, sumTwo, false]
}


/* 5 kyu
Maximum subarray sum} */
var maxSequence = function(arr){
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]) 
  }
  return Math.max(...arr, 0)
}

/* 5 kyu
Rot13} */
function rot13(m) {
  let res = []
  
  for (let i = 0; i < m.length; i++) {
    if (m.charCodeAt(i) < 65 || m.charCodeAt(i) > 122) {
      res.push(m[i])
    } else if ((m.charCodeAt(i) > 109 ) || (m.charCodeAt(i) > 77 && m.charCodeAt(i) < 97)) {
      res.push(String.fromCharCode(m.charCodeAt(i) - 13))
    } else {
      res.push(String.fromCharCode(m.charCodeAt(i) + 13))
    }
  }
  return res.join("")
}

/* 5 kyu
RGB To Hex Conversion} */
function rgb() {

  let hex = [...arguments];
  let res = '';

  for (let i = 0; i < hex.length; i++) {
    if (hex[i].toString(16).length == 1) {
      res += `0${hex[i].toString(16)}`
    } else if (hex[i] < 0) {
      res += "00";
    } else if (hex[i] > 255) {
      res += "FF";
    } else {
      res += hex[i].toString(16);
    }
  }
  return res.toUpperCase();
}

/* 5 kyu
Moving Zeros To The End} */
function moveZeros(arr) {
  let res = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number" && arr[i] < 1) {
      count += 1;
    } else {
      res.push(arr[i]);
    }
  }

  let zeros = new Array(count).fill(0);
  return res.concat(zeros);
}

/* 5 kyu
Simple Pig Latin} */
function pigIt(str) {
  let res = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "?" && str[i] != "!") {
      res.push(`${str[i].slice(1)}${str[i].slice(0, 1)}ay`);
    } else {
      res.push(str[i]);
    }
  }
  return res.join(" ");
}

/* 5 kyu
Beeramid} */
var beeramid = function(bonus, price) {
  let saturdaysAreForTheBoys = parseInt(bonus/price)
  let level = 0
  while ((level + 1)**2 <= saturdaysAreForTheBoys) {
    level++
    saturdaysAreForTheBoys -= level * level
  }
  return level
}

/* 5 kyu
Rot13} */
function rot13(m) {
  let res = []
  
  for (let i = 0; i < m.length; i++) {
    if (m.charCodeAt(i) < 65 || m.charCodeAt(i) > 122) {
      res.push(m[i])
    } else if ((m.charCodeAt(i) > 109 ) || (m.charCodeAt(i) > 77 && m.charCodeAt(i) < 97)) {
      res.push(String.fromCharCode(m.charCodeAt(i) - 13))
    } else {
      res.push(String.fromCharCode(m.charCodeAt(i) + 13))
    }
  }
  return res.join("")
}

/* 5 kyu
RGB To Hex Conversion} */
function rgb() {

  let hex = [...arguments];
  let res = '';

  for (let i = 0; i < hex.length; i++) {
    if (hex[i].toString(16).length == 1) {
      res += `0${hex[i].toString(16)}`
    } else if (hex[i] < 0) {
      res += "00";
    } else if (hex[i] > 255) {
      res += "FF";
    } else {
      res += hex[i].toString(16);
    }
  }
  return res.toUpperCase();
}

/* 5 kyu
Moving Zeros To The End} */
function moveZeros(arr) {
  let res = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number" && arr[i] < 1) {
      count += 1;
    } else {
      res.push(arr[i]);
    }
  }

  let zeros = new Array(count).fill(0);
  return res.concat(zeros);
}

/* 5 kyu
Simple Pig Latin} */
function pigIt(str) {
  let res = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "?" && str[i] != "!") {
      res.push(`${str[i].slice(1)}${str[i].slice(0, 1)}ay`);
    } else {
      res.push(str[i]);
    }
  }
  return res.join(" ");
}

/* 5 kyu
Beeramid} */
var beeramid = function(bonus, price) {
  let saturdaysAreForTheBoys = parseInt(bonus/price)
  let level = 0
  while ((level + 1)**2 <= saturdaysAreForTheBoys) {
    level++
    saturdaysAreForTheBoys -= level * level
  }
  return level
}

/* 5 kyu
Formatting a number as price} */
function numberToPrice(number) {

  if (typeof number != 'number') { return "NaN"; }
  
  let res = '';
  let x = '';

  number = number.toString()
  let arr = number.split('.', number.length - 1);
  x = Number(arr[0]).toLocaleString();

  let dec = arr[1] ? arr[1] : "00";
  if (dec.length == 1) {
    dec += "0";
  } else {
    dec = dec.substring(0, 2)
  }
  return res += `${x}.${dec}`;
}

/* 5 kyu
Write out numbers} */
function number2words(n){
  const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
  
  if (n < 20) return num[n];
    const digit = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " " + number2words(n%100));
    return number2words(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + number2words(n%1000): "");
}

/* 5 kyu
Find the unique string} */
function findUniq(arr) {
  let newArr = arr.map(a => {
    return [...new Set(a.toLowerCase())].sort().join("")
  });
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]))
    return arr[i];
  }
}