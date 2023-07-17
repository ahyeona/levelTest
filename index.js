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
  let temp = strArr[idx1];
  strArr[idx1] = strArr[idx2];
  strArr[idx2] = temp;
  return [tempArr, strArr];
}

function permute(strArr, begin, end) {
    let arr = []; // 순열을 저장할 배열
    let arr5 = []; // 임시 배열

    if (strArr.length == 2) {
      let [arr1, arr2] = swap(strArr, strArr.length - 2, strArr.length - 1);
    //   let temp2 = arr5[arr5.length - 1];
      let temp2 = [...arr5];

      arr5.pop();
      arr.push([...temp2, ...arr1]);
      arr.push([...temp2, ...arr2]);
      console.log([...temp2, ...arr2]);
    } else if (strArr.length > 2) {
      for (let i = 0; i < strArr.length; i++) {
        let arr2 = [...strArr];
        let temp = arr2.splice(i, 1);

        if (arr5.length != 0) {
          let temp4 = arr5[arr5.length - 1];
          arr5.pop();
          arr5.push([...temp4, ...temp]);
        } else {
          arr5.push([...temp]);
        }
        const permutations = permute(arr2, begin + 1, end);
        arr.push(...permutations);
      }
    }
    return arr;
  }

  function permuteArray(strArr) {
    let answer = permute(strArr, 0, strArr.length);
    answer.forEach((element) => {
      console.log(element);
    });
    return answer;
  }

  permuteArray(["1", "2", "3", "4"]);


// let length;

// function permute(strArr, begin, end) {
//   let arr = [];
//   let arr5 = [];
//   if (strArr.length == 2) {
//     let [arr1, arr2] = swap(strArr, strArr.length - 2, strArr.length - 1);
//     let temp2 = arr5[arr5.length - 1];
//     // let temp2 = [...arr5];
//     console.log(arr5);
//     // arr5.pop();
//     arr5.pop();
//     // arr5 = []

//     arr.push([...temp2, ...arr1]);
//     arr.push([...temp2, ...arr2]);
//     console.log("/////////////////////arr", [...temp2, ...arr2]);
//   } else if (strArr.length > 2) {
//     for (let i = 0; i < strArr.length; i++) {
//       let arr2 = [...strArr];
//       let temp = arr2.splice(i, 1);
//       // arr.push(temp, arr2.slice(0, begin))
//       //   if (arr.length == 1) {
//       // arr.push([...arr[arr.length - 1], ...temp]);
//       //   } else {
//       // arr.push(temp);
//       //   }

//       if (arr5.length != 0) {
//         let temp4 = arr5[arr5.length - 1];
//         // let temp4 = [...arr5];
//         arr5.pop();
//         arr5.push([...temp4, ...temp]);
//       } else {
//         arr5.push([...temp]);
//       }
//       permute(arr2, begin + 1, end);
//     }
//   }
//   return arr;
// }

// function permuteArray(strArr) {
//   length = strArr.length;
//   let answer = permute(strArr, 0, strArr.length);

//   answer.forEach((element) => {
//     console.log(element);
//   });

//   return answer;
// }




// permuteArray(["1", "2", "3"]);
permuteArray(["1", "2", "3", "4"]);

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
