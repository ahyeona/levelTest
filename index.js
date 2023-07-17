console.log("소수 구하기");

function isPrime(n) {
  let result = true;
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPrime(31));
console.log(isPrime(10));

// -----------------------

console.log("소인수 분해");

function primeFactor(n) {
  let answer = [];
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      answer.push(i, n / i);
    }
  }

  if (n == 4) {
    answer.push(2);
  }
  answer.sort((a, b) => {
    return a - b;
  });
  return answer.join(",");
}

console.log(primeFactor(10));

// --------------------------

console.log("십진수를 이진수로 변환");

function base10ToString(n) {
  let answer = "";
  base10ToStringHelper(n);

  function base10ToStringHelper(n) {
    if (n == 0) {
      return;
    } else {
      base10ToStringHelper(Math.floor(n / 2));
      answer += n % 2;
    }
  }

  return answer;
}

console.log(base10ToString(100));

// ---------------------------
console.log("배열 출력하기");
// 배열의 모든 순열 출력

function swap(strArr, idx1, idx2) {
  let tempArr = [...strArr];
  let temp = tempArr[idx1];
  tempArr[idx1] = tempArr[idx2];
  tempArr[idx2] = temp;
  return [tempArr, strArr];
}

function permute(strArr, begin, end) {
  let arr = [];
  if (strArr.length <= 2) {
    return swap(strArr, 0, strArr.length - 1);
  } else {
    let c = [];
    for (let i = 0; i < strArr.length; i++) {
      let tempArr = [...strArr];
      if (c.length != 0) {
        c = [...c[0], ...tempArr.splice(i, 1)];
      } else {
        c = tempArr.splice(i, 1);
      }

      let resultArr = [...permute(tempArr, begin, end)];
        resultArr.forEach((re) => {
          arr.push([...c[0], ...re]);
        });
      c = [];
    }
  }

  return arr;
}

function permuteArray(strArr) {
  let answer = permute(strArr, 0, strArr.length - 1);
  console.log(answer);
  answer.forEach(el => {
    console.log(el)
  });
  return answer;
}

permuteArray(["1", "2", "3"]);
// permuteArray(["1", "2", "3", "4","5"]);
//
//-----------------------

console.log("거꾸로 읽어도 같은 문자열인가");

function isPalindromeRecursive(word) {
  let answer = true;
  for (let i = 0; i < word.length / 2; i++) {
    let result = isPalindromeRecursiveHelper(word, i, word.length - (i + 1));
    if (!result) {
      answer = false;
      break;
    }
  }
  return answer;
}

function isPalindromeRecursiveHelper(word, beginPos, endPos) {
  console.log(beginPos, endPos);
  if (word[beginPos] == word[endPos]) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindromeRecursive("appleelpaa")); // false
console.log(isPalindromeRecursive("appleelppa")); // true
//----------------------

console.log("공통 항목 찾기");

function commonElements(kArray) {
  let commonArr = [];

  kArray.sort((a, b) => a.length - b.length);

  for (let i = 0; i < kArray[0].length; i++) {
    let el = kArray[0][i];
    let count = 0;

    for (let j = 1; j < kArray.length; j++) {
      if (kArray[j].includes(el)) {
        count++;
        if (count == kArray.length - 1) {
          commonArr.push(el);
        }
      }
    }
  }

  return commonArr;
}

console.log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
);
console.log(
  commonElements([
    [1, 2, 3, 3],
    [3, 4, 5],
    [2, 3, 4, 7, 8],
  ])
);

// -----------------------------------
console.log("경일 사탕");
function countCandy() {
  let input = prompt("점수 입력하세요");
  let arr = input.split(" ");
  let answer = [];
  let count = 0;
  arr.sort((a, b) => {
    return parseInt(b) - parseInt(a);
  });

  for (let i = 0; i < arr.length; i++) {
    if (count < 3) {
      if (answer[answer.length - 1] != arr[i]) {
        count++;
      }
      answer.push(arr[i]);
    } else {
      break;
    }
  }
  console.log(answer);

  console.log(answer.length);
  return answer.length;
}
// countCandy();

// countCandy("97 86 75 66 55 97 85 97 97 95")
// -----------------------------------

console.log("경일 문자 찾기");

function findStr() {
  let str = prompt("문자 입력하세요");
  let find = prompt("찾을 문자 입력하세요");

  console.log(str.indexOf(find));
  return str.indexOf(find);
}

// findStr();
// ----------------------------------
