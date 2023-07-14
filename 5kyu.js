/*
5kyu
1.) Simple Fun #358: Vertical Histogram Of Letters (codewars.com/kata/59cf0ba5d751dffef300001f)

2.) Using closures to share class state (codewars.com/kata/53583765d5493bfdf5001b35)

3.) Sum of Pairs (codewars.com/kata/54d81488b981293527000c8f)

4.) Two arrays -- Zero rows and zero columns (codewars.com/kata/584425e1101928a1bc00003b)

5.) Sierpinski's Gasket (codewars.com/kata/53ea3ad17b5dfe1946000278)

6.) Zonk game (codewars.com/kata/53837b8c94c170e55f000811)

7.) An Eventful Bus (codewars.com/kata/52dad39eafe5003d57000437)

8.) #Hashtag (codewars.com/kata/52ae2db783f47875d0000064)

9.) Grab CSV Columns (codewars.com/kata/5276c0f3f4bfbd5aae0001ad)

10.) Last digit of a large number (codewars.com/kata/5511b2f550906349a70004e1)

11.) Lazy Repeater (codewars.com/kata/51fc3beb41ecc97ee20000c3)

12.) Rotate an array matrix (codewars.com/kata/525a566985a9a47bc8000670)

13.) String like [Char] (codewars.com/kata/53dab6cece5f44b8ee00035d)

14.) validDate Regex (codewars.com/kata/548db0bd1df5bbf29b0000b7)

15.) Calculate age in years (codewars.com/kata/521660e064dc2ccdd900008d)

16.) Javascript Magic Function (codewars.com/kata/55caf9ff29c318407c00001f)

17.) Deep comparison of objects (codewars.com/kata/53c235e4d5cd9c397200021d)

18.) Simple assembler interpreter (codewars.com/kata/58e24788e24ddee28e000053)

19.) Distinct contiguous elements in every window of size k (codewars.com/kata/5945f0c207693bc53100006b)

20.) Function Cache (codewars.com/kata/525481903700c1a1ff0000e1)

21.) Tic-Tac-Toe Checker (codewars.com/kata/525caa5c1bf619d28c000335)

22.) Simple Events (codewars.com/kata/52d3b68215be7c2d5300022f)

23.) Vector class (codewars.com/kata/526dad7f8c0eb5c4640000a4)

24.) Caesar Cipher Helper (codewars.com/kata/526d42b6526963598d0004db)

25.) Not very secure (codewars.com/kata/526dbd6c8c0eb53254000110)

26.) Pagination control - Showing page numbers (codewars.com/kata/57a7cb5f53ba3350c60000e7)

27.) Weight for weight (codewars.com/kata/55c6126177c9441a570000cc)

28.) Scramblies (codewars.com/kata/55c04b4cc56a697bb0000048)

29.) Multi Line Task: Fizz Buzz (codewars.com/kata/593550e26d07549c5100004a)

30.) Basic DeNico (codewars.com/kata/596f610441372ee0de00006e)

31.) Additionless addition. (codewars.com/kata/536ce83e2f403659a5000d47)

32.) PaginationHelper (codewars.com/kata/515bb423de843ea99400000a)

33.) Pete, the baker (codewars.com/kata/525c65e51bf619685c000059)

34.) The Fruit Juice (codewars.com/kata/5264603df227072e6500006d)

35.) Bob's reversing obfuscator (codewars.com/kata/559ee79ab98119dd0100001d)

36.) First non-repeating character (codewars.com/kata/52bc74d4ac05d0945d00054e)

37.) int32 to IPv4 (codewars.com/kata/52e88b39ffb6ac53a400022e)

38.) Calculate Variance (codewars.com/kata/5266fba01283974e720000fa)

39.) The Hashtag Generator (codewars.com/kata/52449b062fb80683ec000024)

40.) Convert PascalCase string into snake_case (codewars.com/kata/529b418d533b76924600085d)

41.) Human Readable Time (codewars.com/kata/52685f7382004e774f0001f7)

42.) String incrementer (codewars.com/kata/54a91a4883a7de5d7800009c)

43.) Product of consecutive Fib numbers (codewars.com/kata/5541f58a944b85ce6d00006a)

44.) Maximum subarray sum (codewars.com/kata/54521e9ec8e60bc4de000d6c)

45.) Rot13 (codewars.com/kata/530e15517bc88ac656000716)

46.) RGB To Hex Conversion (codewars.com/kata/513e08acc600c94f01000001)

47.) Moving Zeros To The End (codewars.com/kata/52597aa56021e91c93000cb0)

48.) Simple Pig Latin (codewars.com/kata/520b9d2ad5c005041100000f)

49.) Beeramid (codewars.com/kata/51e04f6b544cf3f6550000c1)

50.) Rot13 (codewars.com/kata/530e15517bc88ac656000716)

51.) RGB To Hex Conversion (codewars.com/kata/513e08acc600c94f01000001)

52.) Moving Zeros To The End (codewars.com/kata/52597aa56021e91c93000cb0)

53.) Simple Pig Latin (codewars.com/kata/520b9d2ad5c005041100000f)

54.) Beeramid (codewars.com/kata/51e04f6b544cf3f6550000c1)

55.) Formatting a number as price (codewars.com/kata/5318f00b31b30925fd0001f8)

56.) Write out numbers (codewars.com/kata/52724507b149fa120600031d)

57.) Find the unique string (codewars.com/kata/585d8c8a28bc7403ea0000c3)

*/

/*****************************
1.) Simple Fun #358: Vertical Histogram Of Letters
solved: 7/11/2023
codewars.com/kata/59cf0ba5d751dffef300001f
*****************************/
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

/*****************************
2.) Using closures to share class state
solved: 7/11/2023
codewars.com/kata/53583765d5493bfdf5001b35
*****************************/
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

/*****************************
3.) Sum of Pairs
solved: 7/10/2023
codewars.com/kata/54d81488b981293527000c8f
*****************************/
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

/*****************************
4.) Two arrays -- Zero rows and zero columns
solved: 7/9/2023
codewars.com/kata/584425e1101928a1bc00003b
*****************************/
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

/*****************************
5.) Sierpinski's Gasket
solved: 7/9/2023
codewars.com/kata/53ea3ad17b5dfe1946000278
*****************************/
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


/*****************************
6.) Zonk game
solved: 7/6/2023
codewars.com/kata/53837b8c94c170e55f000811
*****************************/
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

/*****************************
7.) An Eventful Bus
solved: 7/4/2023
codewars.com/kata/52dad39eafe5003d57000437
*****************************/
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

/*****************************
8.) #Hashtag
solved: 7/3/2023
codewars.com/kata/52ae2db783f47875d0000064
*****************************/
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


/*****************************
9.) Grab CSV Columns
solved: 7/3/2023
codewars.com/kata/5276c0f3f4bfbd5aae0001ad
*****************************/
function csvColumns(csv, ind) {
  let sp = csv.split('\n');
  let res = [];
  for (let i = 0; i < sp.length; i++) {
    res.push(sp[i].split(',').filter((_, i) => ind.indexOf(i) !== -1).join(','));
  }
  return res.filter(v => v.length > 0).join("\n");
}

/*****************************
10.) Last digit of a large number
solved: 7/3/2023
codewars.com/kata/5511b2f550906349a70004e1
*****************************/
var lastDigit = function (a, b) {
  if (b == 0) return 1;
  [a, b] = [+a.slice(-1), +b.slice(-2)];

  return Math.pow(a, b % 4 || 4) % 10;
};

/*****************************
11.) Lazy Repeater
solved: 7/2/2023
codewars.com/kata/51fc3beb41ecc97ee20000c3
*****************************/
function makeLooper(str) {
  let count = 0;
  return function () {
    if (count === str.length) {
      count = 0;
    }
    return str[count++];
  };
}


/*****************************
12.) Rotate an array matrix
solved: 7/2/2023
codewars.com/kata/525a566985a9a47bc8000670
*****************************/
function rotate(m, d) {
  return d === 'clockwise'
    ? m[0].map((_, i) => m.map((r) => r[i]).reverse())
    : m[0].map((_, i) => m.map((r) => r[r.length - 1 - i]));
}


/*****************************
13.) String like [Char]
solved: 6/30/2023
codewars.com/kata/53dab6cece5f44b8ee00035d
*****************************/
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

/*****************************
14.) validDate Regex
solved: 6/30/2023
codewars.com/kata/548db0bd1df5bbf29b0000b7
*****************************/
var validDate = /\[(01|03|05|07|08|10|12)-(0[1-9]|[12][0-9]|3[01])\]|\[(04|06|09|11)-(0[1-9]|[12][0-9]|30)\]|\[(02)-(0[1-9]|1[0-9]|2[0-8])\]/

/*****************************
15.) Calculate age in years
solved: 5/10/2023
codewars.com/kata/521660e064dc2ccdd900008d
*****************************/
function getAge(bd, d) {
  const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
  d = d || new Date();
  d.setDate(d.getDate() + (isLeapYear(d.getFullYear()) ? 1 : 0))
  bd.setDate(bd.getDate() + (isLeapYear(bd.getFullYear()) ? 1 : 0))
  return ~~((d.getTime() - bd.getTime()) / 31536000000);
}

/*****************************
16.) Javascript Magic Function
solved: 5/10/2023
codewars.com/kata/55caf9ff29c318407c00001f
*****************************/
function MagicFunction(a) {
  if(a % 2 == 0){
    return true
  }
} return

/*****************************
17.) Deep comparison of objects
solved: 2/20/2023
codewars.com/kata/53c235e4d5cd9c397200021d
*****************************/
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

/*****************************
18.) Simple assembler interpreter
solved: 2/19/2023
codewars.com/kata/58e24788e24ddee28e000053
*****************************/
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


/*****************************
19.) Distinct contiguous elements in every window of size k
solved: 2/19/2023
codewars.com/kata/5945f0c207693bc53100006b
*****************************/
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

/*****************************
20.) Function Cache
solved: 2/13/2023
codewars.com/kata/525481903700c1a1ff0000e1
*****************************/
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


/*****************************
21.) Tic-Tac-Toe Checker
solved: 2/13/2023
codewars.com/kata/525caa5c1bf619d28c000335
*****************************/
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

/*****************************
22.) Simple Events
solved: 10/22/2022
codewars.com/kata/52d3b68215be7c2d5300022f
*****************************/
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

/*****************************
23.) Vector class
solved: 9/28/2022
codewars.com/kata/526dad7f8c0eb5c4640000a4
*****************************/
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

/*****************************
24.) Caesar Cipher Helper
solved: 9/28/2022
codewars.com/kata/526d42b6526963598d0004db
*****************************/
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

/*****************************
25.) Not very secure
solved: 9/23/2022
codewars.com/kata/526dbd6c8c0eb53254000110
*****************************/
function alphanumeric(string){
  let temp = string.replace(/[^a-zA-Z0-9]/g, '')
  return temp.length > 0 ? temp == string : false
}


/*****************************
26.) Pagination control - Showing page numbers
solved: 9/22/2022
codewars.com/kata/57a7cb5f53ba3350c60000e7
*****************************/
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


/*****************************
27.) Weight for weight
solved: 9/18/2022
codewars.com/kata/55c6126177c9441a570000cc
*****************************/
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

/*****************************
28.) Scramblies
solved: 9/18/2022
codewars.com/kata/55c04b4cc56a697bb0000048
*****************************/
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


/*****************************
29.) Multi Line Task: Fizz Buzz
solved: 8/31/2022
codewars.com/kata/593550e26d07549c5100004a
*****************************/
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


/*****************************
30.) Basic DeNico
solved: 8/30/2022
codewars.com/kata/596f610441372ee0de00006e
*****************************/
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


/*****************************
31.) Additionless addition.
solved: 8/29/2022
codewars.com/kata/536ce83e2f403659a5000d47
*****************************/
function add (x, y) {
  let n1 = x & y, n2 = x ^ y
  while (n1 != 0) {
    let temp = n1 << 1
    n1 = n2 & temp
    n2 ^= temp
  }
  return n2
}

/*****************************
32.) PaginationHelper
solved: 8/20/2022
codewars.com/kata/515bb423de843ea99400000a
*****************************/
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

/*****************************
33.) Pete, the baker
solved: 8/17/2022
codewars.com/kata/525c65e51bf619685c000059
*****************************/
function cakes(r, a) {
  let props = Object.keys(r)
  let totals = []
  for (let i = 0; i < props.length; i++) {
    totals.push(a[props[i]] / r[props[i]])
  }
  return parseInt(Math.min(...totals)) || 0
}

/*****************************
34.) The Fruit Juice
solved: 8/8/2022
codewars.com/kata/5264603df227072e6500006d
*****************************/
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

/*****************************
35.) Bob's reversing obfuscator
solved: 8/2/2022
codewars.com/kata/559ee79ab98119dd0100001d
*****************************/
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


/*****************************
36.) First non-repeating character
solved: 8/1/2022
codewars.com/kata/52bc74d4ac05d0945d00054e
*****************************/
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

/*****************************
37.) int32 to IPv4
solved: 8/1/2022
codewars.com/kata/52e88b39ffb6ac53a400022e
*****************************/
function int32ToIp(int32) {
   return(int32 >>> 24) + "." + 
         ((int32 >> 16)&255) + "." + 
          ((int32 >> 8)&255) + "." + 
            (int32 & 255)
}

/*****************************
38.) Calculate Variance
solved: 8/1/2022
codewars.com/kata/5266fba01283974e720000fa
*****************************/
var variance = function(numbers) {
  let l = numbers.length
  const helper = (arr) => arr.reduce((a,c)=>a+c,0)
  const m = helper(numbers)/l
  numbers = numbers.map((n) => ((n-m)**2)/l)
  return helper(numbers)
};

/*****************************
39.) The Hashtag Generator
solved: 8/1/2022
codewars.com/kata/52449b062fb80683ec000024
*****************************/
function generateHashtag(str) {
  str = str.toLowerCase().split(/\s/g).filter((x) => x != '')
           .map((x) => x[0].toUpperCase() + x.slice(1)).join('')

  return !str.length || str.length >= 140 ? false : "#" + str
}

/*****************************
40.) Convert PascalCase string into snake_case
solved: 7/31/2022
codewars.com/kata/529b418d533b76924600085d
*****************************/
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

/*****************************
41.) Human Readable Time
solved: 7/31/2022
codewars.com/kata/52685f7382004e774f0001f7
*****************************/
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

/*****************************
42.) String incrementer
solved: 7/30/2022
codewars.com/kata/54a91a4883a7de5d7800009c
*****************************/
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

/*****************************
43.) Product of consecutive Fib numbers
solved: 6/10/2022
codewars.com/kata/5541f58a944b85ce6d00006a
*****************************/
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


/*****************************
44.) Maximum subarray sum
solved: 5/28/2022
codewars.com/kata/54521e9ec8e60bc4de000d6c
*****************************/
var maxSequence = function(arr){
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]) 
  }
  return Math.max(...arr, 0)
}

/*****************************
45.) Rot13
solved: 5/28/2022
codewars.com/kata/530e15517bc88ac656000716
*****************************/
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

/*****************************
46.) RGB To Hex Conversion
solved: 5/28/2022
codewars.com/kata/513e08acc600c94f01000001
*****************************/
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

/*****************************
47.) Moving Zeros To The End
solved: 5/28/2022
codewars.com/kata/52597aa56021e91c93000cb0
*****************************/
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

/*****************************
48.) Simple Pig Latin
solved: 5/28/2022
codewars.com/kata/520b9d2ad5c005041100000f
*****************************/
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

/*****************************
49.) Beeramid
solved: 5/27/2022
codewars.com/kata/51e04f6b544cf3f6550000c1
*****************************/
var beeramid = function(bonus, price) {
  let saturdaysAreForTheBoys = parseInt(bonus/price)
  let level = 0
  while ((level + 1)**2 <= saturdaysAreForTheBoys) {
    level++
    saturdaysAreForTheBoys -= level * level
  }
  return level
}

/*****************************
50.) Rot13
solved: 5/28/2022
codewars.com/kata/530e15517bc88ac656000716
*****************************/
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

/*****************************
51.) RGB To Hex Conversion
solved: 5/28/2022
codewars.com/kata/513e08acc600c94f01000001
*****************************/
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

/*****************************
52.) Moving Zeros To The End
solved: 5/28/2022
codewars.com/kata/52597aa56021e91c93000cb0
*****************************/
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

/*****************************
53.) Simple Pig Latin
solved: 5/28/2022
codewars.com/kata/520b9d2ad5c005041100000f
*****************************/
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

/*****************************
54.) Beeramid
solved: 5/27/2022
codewars.com/kata/51e04f6b544cf3f6550000c1
*****************************/
var beeramid = function(bonus, price) {
  let saturdaysAreForTheBoys = parseInt(bonus/price)
  let level = 0
  while ((level + 1)**2 <= saturdaysAreForTheBoys) {
    level++
    saturdaysAreForTheBoys -= level * level
  }
  return level
}

/*****************************
55.) Formatting a number as price
solved: 4/5/2022
codewars.com/kata/5318f00b31b30925fd0001f8
*****************************/
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

/*****************************
56.) Write out numbers
solved: 3/12/2022
codewars.com/kata/52724507b149fa120600031d
*****************************/
function number2words(n){
  const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
  
  if (n < 20) return num[n];
    const digit = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " " + number2words(n%100));
    return number2words(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + number2words(n%1000): "");
}

/*****************************
57.) Find the unique string
solved: 3/1/2022
codewars.com/kata/585d8c8a28bc7403ea0000c3
*****************************/
function findUniq(arr) {
  let newArr = arr.map(a => {
    return [...new Set(a.toLowerCase())].sort().join("")
  });
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]))
    return arr[i];
  }
}