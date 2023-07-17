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