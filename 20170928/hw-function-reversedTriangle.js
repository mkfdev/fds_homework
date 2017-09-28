// 역 정삼각형 출력 for문으로 코딩한것 -> 함수로 만들어서 호출하기
var result = "";
for (var i = 0; i < 5; i++) {

  for (var k = 0; k < i; k++) {
    result += " ";
  }
  for (var j = 0; j < 9 - (i * 2); j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);



//방법1.함수선언식(기존 for문은 매개변수가 달라졌을때 제대로 적용되지 않는다)
function reverseTriangle(line) {
  var result = "";
  for (var i = line; i >= 1; i--) {

    for (var k = 1; k <= line - i; k++) {
      result += " ";
    }
    for (var j = 1; j <= (2 * i) - 1; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

var result = reverseTriangle(10);
console.log(result);




//방법2. 함수표현식
var reversedtriangle = function(reverseLine) {
  var result = "";
  for (var i = reverseLine; i >= 1; i--) {

    for (var k = 1; k <= reverseLine - i; k++) {
      result += " ";
    }
    for (var j = 1; j <= (2 * i) - 1; j++) {
      result += "*";
    }
    result += "\n";
  }

  return result;
}

console.log(reversedtriangle(8));