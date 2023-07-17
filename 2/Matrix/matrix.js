function matrix(a, b) {
  if (a[1].length !== b.length) {
    return -1;
  }

  let answer = [];
  for (let i = 0; i < a.length; i++) {
    let arr = [];
    for (let j = 0; j < b[1].length; j++) {
      arr.push(0);
      console.log(answer);
    }
    answer.push(arr);
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < a.length; k++) {
        console.log(i, j, k);
        answer[i][k] += a[i][j] * b[j][k];
      }
    }
  }

  return answer;
}

let a = [
  [1, 2],
  [2, 4],
];
let b = [
  [1, 0],
  [0, 3],
];
console.log(matrix(a, b));
