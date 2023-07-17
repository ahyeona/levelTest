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