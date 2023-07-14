/*
3kyu

1.) Help the general decode secret enemy messages. (codewars.com/kata/52cf02cd825aef67070008fa)

2.) Make a spiral (codewars.com/kata/534e01fbbb17187c7e0000c6)

3.) How many are smaller than me II? (codewars.com/kata/56a1c63f3bc6827e13000006)

4.) Alphabetic Anagrams (codewars.com/kata/53e57dada0cb0400ba000688)

5.) The soul of wit: reverse an array (codewars.com/kata/59b81886460387d8fc000043)
*/

/*****************************
1.) Help the general decode secret enemy messages.
solved: 7/7/2023
codewars.com/kata/52cf02cd825aef67070008fa
*****************************/
const charToNum = {
  'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8,
  'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16,
  'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24,
  'y': 25, 'z': 26, 'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32,
  'G': 33, 'H': 34, 'I': 35, 'J': 36, 'K': 37, 'L': 38, 'M': 39, 'N': 40,
  'O': 41, 'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48,
  'W': 49, 'X': 50, 'Y': 51, 'Z': 52, '0': 53, '1': 54, '2': 55, '3': 56,
  '4': 57, '5': 58, '6': 59, '7': 60, '8': 61, '9': 62, '.': 63, ',': 64,
  '?': 65, ' ': 66, ';': 67,
};
const exceptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];
const numToChar = {};
function cvt(char, pos) {
  if (exceptions.includes(char)) return char;

  let [cnt, num] = [0, charToNum[char]];
  while (true) {
    if (num % 2 == 0) {
      num /= 2;
      cnt++;
    } else {
      num += 67;
    }
    if (cnt == pos + 1)
      break;
  }
  return numToChar[num];
}

device.decode = function(str) {
  for (let it of Object.entries(charToNum)) { numToChar[it[1]] = it[0]; }
  const res = Array(str.length).fill('');
  for (let s = 0; s < str.length; ++s) {
    res[s] = cvt(str[s], s);
  }
  return res.join('');
}


/*****************************
2.) Make a spiral
solved: 7/4/2023
codewars.com/kata/534e01fbbb17187c7e0000c6
*****************************/
function spiralize(n) {
  const spiral = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let [row, col] = [2, 1];
  let currentDir = 'right';
  let done = false;

  spiral[1][n - 1] = 1; // row one
  spiral[0].fill(1); // row two
  spiral[n - 1].fill(1); // last row
  for (let i = 0; i < n; i++) {
    spiral[i][spiral.length - 1] = 1; // last col of each row
    if (i !== 1) spiral[i][0] = 1; // first col of each row except middle;
  }

  const checkDone = (temprow, tempcol, dir) => {
    switch (dir) {
      case 'right':
        done = spiral[temprow][tempcol + 1] === 1 || spiral[temprow + 1][tempcol + 1] === 1;
        break;
      case 'down':
        done = spiral[temprow + 2][tempcol] === 1;
        break;
      case 'left':
        done = spiral[temprow - 1][tempcol - 1] === 1;
        break;
      case 'up':
        done = spiral[temprow - 2][tempcol] === 1;
        break;
      default:
        done = false;
        break;
    }
  };

  while (true) {
    checkDone(row, col, currentDir);
    if (done) break;

    if (currentDir === 'right') {
      const length = n - spiral[row].filter(Boolean).length - 1;
      let tempcol = col;
      for (let i = tempcol; i <= length; i++) {
        if (spiral[row][i + 1] === 1) break;
        spiral[row][i] = 1;
        col = i;
      }
      currentDir = 'down';
    }

    else if (currentDir === 'down') {
      let temprow = row;
      for (let i = temprow; i < n - 2; i++) {
        if (spiral[i + 1][col] === 1) break;
        spiral[i][col] = 1;
        row = i;
      }
      currentDir = 'left';
    }

    else if (currentDir === 'left') {
      let tempcol = col;
      let i = tempcol - 1;
      while (true) {
        if (spiral[row][i - 1] === 1) break;
        spiral[row][i] = 1;
        col = i;
        i--;
      }
      currentDir = 'up';
    }

    else if (currentDir === 'up') {
      let temprow = row;
      for (let i = temprow; i > 0; i--) {
        if (spiral[i - 1][col] === 1) break;
        spiral[i][col] = 1;
        row = i;
      }
      currentDir = 'right';
    }
  }
  return spiral;
};

/*****************************
3.) How many are smaller than me II?
solved: 3/27/2023
codewars.com/kata/56a1c63f3bc6827e13000006
*****************************/
function smaller(nums) {
  const result = new Array(nums.length).fill(0);
  const indexedNums = nums.map((num, index) => [num, index]);

  function merge(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = merge(arr.slice(0, mid));
    const right = merge(arr.slice(mid));

    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i][0] > right[j][0]) {
        result[left[i][1]] += right.length - j;
        arr[i + j] = left[i];
        i++;
      } else {
        arr[i + j] = right[j];
        j++;
      }
    }

    while (i < left.length) {
      arr[i + j] = left[i];
      i++;
    }

    while (j < right.length) {
      arr[i + j] = right[j];
      j++;
    }

    return arr;
  }

  merge(indexedNums);
  return result;
}

/*****************************
4.) Alphabetic Anagrams
solved: 8/29/2022
codewars.com/kata/53e57dada0cb0400ba000688
*****************************/
function listPosition(s) {
  const a = s.split("")
  let total = 1

  const fc = (n, res = 1) => {
    for (let i = n; i >= 2; i--) { res *= i } return res;
  }
  const combo = (arr, h = {}) => {
    for (let n of arr) h[n] = h[n] ? h[n] += 1 : 1
    return fc(arr.length) / Object.values(h).reduce((a, c) => a * fc(c), 1)
  }

  for (let i = 0; i < a.length; i++) {
    const set = new Set()
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j] && !set.has(a[j])) {
        set.add(a[j])
        total += combo([...a.slice(i, j), ...a.slice(j + 1)])
      }
    }
  }
  return total
}


/*****************************
5.) The soul of wit: reverse an array
solved: 8/1/2022
codewars.com/kata/59b81886460387d8fc000043
*****************************/
reverse=a=>[...a].map(a.pop,a)