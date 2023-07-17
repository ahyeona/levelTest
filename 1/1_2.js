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
