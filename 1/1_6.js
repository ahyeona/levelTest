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