/* 4 kyu
Longest Palindromic Substring (Linear)} */
function expandAroundCenter(s, left, right) {
  let size = s.length;
  while (left >= 0 && right < size && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

function longest_palindrome(s) {
  if (!s) return s;

  const size = s.length;
  if (size === 1) return s;
  if (size === 2) return s[0] === s[1] ? s : s[0];
  let left = 0, right = 0, max = -Infinity, results = [];

  for (let i = 0; i < size; i++) {
    const len = Math.max(
      expandAroundCenter(s, i, i),
      expandAroundCenter(s, i, i + 1)
    );

    if (len > max) {
      max = len;
      results = [s.slice(
        i - Math.floor((len - 1) / 2),
        i + Math.floor(len / 2) + 1)];
    }
    if (len > right - left) {
      left = i - Math.floor((len - 1) / 2);
      right = i + Math.floor(len / 2);
    }
  }

  if (right - left === 0) return s[0];
  return results[0];
}


/* 4 kyu
The observed PIN} */
const keypad = {
  '1': ['1', '2', '4'],
  '2': ['1', '2', '3', '5'],
  '3': ['2', '3', '6'],
  '4': ['1', '4', '5', '7'],
  '5': ['2', '4', '5', '6', '8'],
  '6': ['3', '5', '6', '9'],
  '7': ['4', '7', '8'],
  '8': ['5', '7', '8', '9', '0'],
  '9': ['6', '8', '9'],
  '0': ['8', '0']
};
function getPINs(obs) {
  const permutePins = (pin, idx) => {
    if (idx === obs.length) return [pin];
    const curr = obs[idx];
    const currKey = keypad[curr];
    let res = [];

    for (let i = 0; i < currKey.length; i++) {
      const newPin = pin + currKey[i];
      res.push(...permutePins(newPin, idx + 1));
    }
    return res;
  };

  return obs.length === 1 ? keypad[obs] : permutePins('', 0);
}

/* 4 kyu
Next smaller number with the same digits} */
function nextSmaller(n) {
  if (n < 10) return -1;
  if (n < 100) {
    const temp = n % 10 * 10 + Math.floor(n / 10);
    return temp < n && String(temp).length === 2 ? temp : -1;
  }

  const digits = Array.from(String(n), Number);
  let [curr, swap] = [-1, -1];

  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] > digits[i + 1]) {
      curr = i;
      break;
    }
  }
  if (curr !== -1) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < digits[curr]) {
        swap = i;
        break;
      }
    }
  }

  if (curr === -1 || swap === -1) { return -1; }

  [digits[curr], digits[swap]] = [digits[swap], digits[curr]];
  const sd = digits.slice(curr + 1).sort((a, b) => b - a);
  const res = [...digits.slice(0, curr + 1), ...sd];
  return res[0] === 0 || res.join("") > n ? -1 : +res.join("");
}

/* 4 kyu
Strings Mix} */
function mix(s1, s2) {
  let m = {};
  let m2 = {};
  s1 = s1.replace(/[^a-z]/gi, '');
  s2 = s2.replace(/[^a-z]/gi, '');

  for (let l of s1) { m[l] = (m[l] || 0) + 1; }
  for (let l of s2) { m2[l] = (m2[l] || 0) + 1; }

  let max = {};
  let x = {};

  for (let [k, v] of Object.entries(m)) {
    const curr = k;
    if (curr.toLowerCase() !== curr) continue;
    if (+v > 1) {
      max[k] = +v;
      x[k] = 1;
    }
  }

  for (let [k, v] of Object.entries(m2)) {
    const curr = k;
    if (curr.toLowerCase() !== curr) continue;
    if (+v > 1) {
      if (!max[curr]) {
        max[k] = +v;
        x[k] = 2;
      } else {
        if (max[k] < +v) {
          max[k] = +v;
          x[k] = 2;
        } else if (max[k] === +v) {
          x[k] = 3;
        }
      }
    }
  }

  const ents = Object.entries(max).sort((a, b) => a[1] === b[1] ? x[a[0]] === x[b[0]] ? a[0].localeCompare(b[0]) : x[a[0]] - x[b[0]] : b[1] - a[1]);

  let res = '';
  for (let i = 0; i < ents.length; i++) {
    const [k, v] = ents[i];
    res += `${x[k] == 3 ? '=' : x[k]}:${k.repeat(+v)}/`;
  }
  return res.slice(0, -1);
}

/* 4 kyu
Sum Strings as Numbers} */
function sumStrings(a, b) {
  let sum = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    const digA = i >= 0 ? Number(a[i]) : 0;
    const digB = j >= 0 ? Number(b[j]) : 0;
    const digitSum = digA + digB + carry;

    carry = Math.floor(digitSum / 10);
    const remainder = digitSum % 10;
    sum = remainder + sum;
    i--;
    j--;
  }
  return sum[0] === '0' ? sum.slice(1) : sum;
}

/* 4 kyu
Name Your Space} */
function namespace(root, path, value) {
  const keys = path.split('.');
  let current = root;

  if (value !== undefined) {
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
    current[keys[keys.length - 1]] = value;
  } else {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!current || !current.hasOwnProperty(key)) {
        return undefined;
      }
      current = current[key];
    }
    return current;
  }
}

/* 4 kyu
Making Change: Part 2} */
class Currency {
  constructor(den) {this.den = den;}
  numWays(amount) {
    const m = Array(amount + 1).fill(0);
    m[0] = 1;
    for (const c of this.den) {
      for (let i = c; i <= amount; i++) {
        m[i] += m[i - c];
      }
    }
    return m[amount]
  }

  minChange(amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (const c of this.den) {
      for (let i = c; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
    return dp[amount];
  }
}

/* 4 kyu
Advanced Events} */
function Event() {
  let handlers = [];

  this.subscribe = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'function') {
        handlers.push(arguments[i]);
      }
    }
  };

  this.unsubscribe = function () {
    for (let i = arguments.length - 1; i >= 0; i--) {
      let index = handlers.lastIndexOf(arguments[i]);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  };

  this.emit = function () {
    let currentHandlers = handlers.slice();
    for (let i = 0; i < currentHandlers.length; i++) {
      currentHandlers[i].apply(this, arguments);
    }
  };
}

/* 4 kyu
Connect Four: Who Won?} */
const scanLine = (arr) => {
  let [winner, stillPlayable] = [null, false];
  let [countMove, countEmpty] = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    const [lastMove, currMove] = [arr[i - 1] || '', arr[i] || ''];

    if (currMove === "-") {
      countEmpty++;
      countMove = 0;
    } else {
      countEmpty = 0;
      countMove = (lastMove === currMove) ? countMove + 1 : 1;
    }

    if (countEmpty === 4) { stillPlayable = true; }
    if (countMove === 4) {
      winner = arr[i];
      break;
    }
  }
  return { winner: winner, stillPlayable: stillPlayable };
};

const getColumn = (arr, n) => arr.map(x => x[n]);

const getDiagonals = (matrix) => {
  const result = [];
  for (row = 0; row < 3; row++) {
    for (col = 0; col < 4; col++) {
      if (
        matrix[row][col] !== 0
        && matrix[row][col] === matrix[row + 1][col + 1]
        && matrix[row][col] === matrix[row + 2][col + 2]
        && matrix[row][col] === matrix[row + 3][col + 3]
      ) {
        result.push(matrix[row][col]);
      }
    }
  };

  for (row = 3; row < 6; row++) {
    for (col = 0; col < 4; col++) {
      if (
        matrix[row][col] !== 0
        && matrix[row][col] === matrix[row - 1][col + 1]
        && matrix[row][col] === matrix[row - 2][col + 2]
        && matrix[row][col] === matrix[row - 3][col + 3]
      ) {
        result.push(matrix[row][col]);
      }
    }
  };
  return result;
};

function connectFour(board) {
  const gameStatus = { winner: null, stillPlayable: false };

  for (let i = 0; i < board.length; i++) {
    const [row, column] = [board[i], getColumn(board, i),];
    const [checkRow, checkColumn] = [scanLine(row), scanLine(column)];

    if (checkRow.winner || checkColumn.winner) {
      gameStatus.winner = checkRow.winner ? checkRow.winner : checkColumn.winner;
      break;
    } else {
      if (!gameStatus.stillPlayable) {
        if (checkRow.stillPlayable) {
          gameStatus.stillPlayable = checkRow.stillPlayable;
        }
        if (checkColumn.stillPlayable) {
          gameStatus.stillPlayable = checkColumn.stillPlayable;
        }
      }
    }
  }

  if (gameStatus.winner) {
    return gameStatus.winner;
  } else {
    let diaganols = getDiagonals(board);
    diaganols = diaganols.filter((v) => v !== "-");
    return diaganols[0] ? diaganols[0] : gameStatus.stillPlayable ? "in progress" : "draw";
  }
}


/* 4 kyu
parseInt() reloaded} */
function parseInt(string) {
  // condense the object below into one line
  const numbers = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90, "hundred": 100, "thousand": 1000, "million": 1000000};

  let number = 0;
  let current = 0;
  const words = string.split(" ")
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes("-")) {
      words[i] = words[i].split("-")
      words.splice(i, 1, words[i][0], words[i][1])
    }
    if (words[i] === "and") {
      continue;
    }
    if (words[i] === "hundred") {
      current *= 100;
      continue;
    }
    if (words[i] === "thousand") {
      current *= 1000;
      number += current;
      current = 0;
      continue;
    }
    if (words[i] === "million") {
      current *= 1000000;
      number += current;
      current = 0;
      continue;
    }
    current += numbers[words[i]];
  }

  return number + current;
}

/* 4 kyu
Counting Change Combinations} */
function countChange(money, coins) {
  if (money === 0) { return 1; }
  if (money < 0) { return 0; }
  if (coins.length === 0) { return 0; }
  return countChange(money - coins[0], coins) + countChange(money, coins.slice(1));
}

/* 4 kyu
Most frequently used words in a text} */
function topThreeWords(text, wordCount = {}) {
  text.toLowerCase().split(/[^a-z']/).forEach(word => {
    if (word.length > 0 && word.toLowerCase() !== word.toUpperCase()) {
      wordCount[word] = wordCount[word] + 1 || 1;
    }
  });

  return Object.keys(wordCount).sort((a,b) => wordCount[b] - wordCount[a]).slice(0, 3);
}

/* 4 kyu
Roman Numerals Helper} */
let key = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const RomanNumerals = {
  toRoman: function (num) {
    let res = ''
    for (let i in key) {
      while (num >= val[i]) {
        res += key[i]
        num -= val[i]
      }
    }
    return res
  },

  fromRoman: function (str) {
    str = str.toUpperCase()
    let res = 0
    for (let i in key) {
      while (str.indexOf(key[i]) === 0) {
        res += val[i]
        str = str.replace(key[i], '')
      }
    }
    return res
  }
}

/* 4 kyu
Strip Comments} */
function solution(input, markers) {

  let flag = false
  let res = []

  for (let i = 0; i < input.length; i++) {
    if (markers.indexOf(input[i]) > -1) {
      flag = true
    }
    if (input[i] == '\n') {
      flag = false
    }

    if (flag == false) {
      if (input[i] == ' ' && input[i - 1] != undefined && input[i - 1] != ',') {

      } else {

        res.push(input[i])
      }
    } 
    
    if (flag == true) {

    }
  }

  return res.join('')

};

/* 4 kyu
So Many Permutations!} */
function permutations(string) {
  if (string.length === 1) {return [...string]}
  if (string.length < 2) { return string }

  let res = []
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    let r = string.slice(0, i) + string.slice(i + 1, string.length)
    for (perm of permutations(r)) { res.push(char + perm) }
  }
  return [...new Set(res)] 
}


/* 4 kyu
Human readable duration format} */
function formatDuration (time) {
  if (!time) { return "now"; }

  let years = Math.floor(time / 31536000)
  let days = Math.floor((time % 31536000) / 86400)
  let hours = Math.floor(((time % 31536000) % 86400) / 3600)
  let minutes = Math.floor((((time % 31536000) % 86400) % 3600) / 60)
  let seconds = (((time % 31536000) % 86400) % 3600) % 60;

  let arr = [[years, 'years'],[ days, 'days'],[ hours, 'hours'], [minutes, 'minutes'], [seconds, 'seconds']]
  let a = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(0)) { a.push(arr[i]) } 
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === 1) {
      a[i][1] = a[i][1].slice(0, a[i][1].length - 1)
    }
  }

  a = [].concat(...a)

  if (a.length > 2) {
    a.splice(a.length - 2 , 0, 'and')
  } else {
    return a.join(" ")
  }

  let res = ''
  let len = a.filter((x) => Number.isInteger(+x)).length - 2
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      res += a[i]
    } else if (i % 2 !== 0 && len > 0){
      len--
      res += ` ${a[i]}, `
    } else if (i % 2 !== 0 && len === 0) {
      res += ` ${a[i]} `
    }
  }
  return res
}

/* 4 kyu
Next bigger number with the same digits} */
function nextBigger(num) {
  let arr = num.toString().split('').map(n => parseInt(n));
  let last = null;
  let smallest;
  for (let i = 0, j = arr.length; i < j; i++) {
    if (arr[i] < arr[i+1] && i + 1 < j) {
      last = i
      smallest = i + 1
    } else if (last !== null) {
      if (arr[smallest] > arr[i] && arr[i] > arr[last]) {
        smallest = i
      }
    }
  }

  if (last === null) { return -1 }

  let temp = arr[last]
  arr[last] = arr[smallest]
  arr[smallest] = temp

  return +arr.slice(0, last + 1).concat(...arr.slice(last + 1).sort()).join("")
}

/* 4 kyu
Recover a secret string from random triplets} */
var recoverSecret = function(triplets) {
  let curr = Array.from(new Set(triplets.join(""))).join("").replace(",", "")

  let done = true;
  while (done) {
    done = false;
    for (let i = 0; i < triplets.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (curr.indexOf(triplets[i][j]) > curr.indexOf(triplets[i][j + 1])) {
          done = true;
          curr = curr.replace(triplets[i][j], triplets[i][j + 1]).replace(triplets[i][j + 1], triplets[i][j])
        }
      }
    }
  }
  return curr
}

/* 4 kyu
Range Extraction} */
function solution(list) {
  let res = ''
  let group = false

  for (let i = 0; i < list.length; i++) {
    let j = list[i]
    if (list[i + 1] !== j + 1) {
      if (group) 
        res += (list[i - 2] + 2 === list[i]) ? "-" : ","
        res += j + ","
        group = false
    } else if (!group) {
      res += j
      group = true
    }
  }
  return res.slice(0, -1)
}

/* 4 kyu
Snail} */
snail = function(array) {
  if (array.length < 2) { return array[0] || []}
  else {
    const sorted = [];
    sorted.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      sorted.push(array[i].pop());
    }
    sorted.push(...array.pop().reverse())
    for (let i = array.length - 1; i >= 0; i--) {
      sorted.push(array[i].shift())
    }
    sorted.push(...snail(array));
    return sorted;
  }
}