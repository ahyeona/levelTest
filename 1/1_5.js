console.log("배열 출력하기");
// 배열의 모든 순열 출력

function swap(strArr, idx1, idx2) {
  let tempArr = [...strArr];
  let temp = strArr[idx1];
  strArr[idx1] = strArr[idx2];
  strArr[idx2] = temp;
  return [tempArr, strArr];
}

let arr = [];
let arr5 = [];
let length;

function permute(strArr, begin, end) {
  if (strArr.length == 2) {
    let [arr1, arr2] = swap(strArr, strArr.length - 2, strArr.length - 1);
    let temp2 = arr5[arr5.length - 1];
    console.log(arr5)
    // arr5.pop();
    arr5.pop();

    arr.push([...temp2, ...arr1]);
    arr.push([...temp2, ...arr2]);
  } else if (strArr.length > 2) {
    for (let i = 0; i < strArr.length; i++) {
      let arr2 = [...strArr];
      let temp = arr2.splice(i, 1);
      // arr.push(temp, arr2.slice(0, begin))
      //   if (arr.length == 1) {
      // arr.push([...arr[arr.length - 1], ...temp]);
      //   } else {
      // arr.push(temp);
      //   }

      if (arr5.length != 0) {
        let temp4 = arr5[arr5.length - 1];
        arr5.pop();
        arr5.push([...temp4, ...temp]);
      } else {
        arr5.push([...temp]);
      }
      permute(arr2, begin + 1, end);
    }
  }
  return arr;
}

function permuteArray(strArr) {
  length = strArr.length;
  let answer = permute(strArr, 0, strArr.length);

  answer.forEach((element) => {
    console.log(element);
  });

  return answer;
}

permuteArray(["1", "2", "3"]);
// permuteArray(["1", "2", "3", "4"]);
