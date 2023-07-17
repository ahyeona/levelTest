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
      c = tempArr.splice(i, 1);

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
  answer.forEach((el) => {
    console.log(el);
  });
  return answer;
}

permuteArray(["1", "2", "3"]);
// permuteArray(["1", "2", "3", "4"]);
