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
countCandy();