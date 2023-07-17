console.log("경일 문자 찾기");

function findStr() {
  let str = prompt("문자 입력하세요");
  let find = prompt("찾을 문자 입력하세요");

  console.log(str.indexOf(find));
  return str.indexOf(find);
}

findStr();