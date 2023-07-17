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