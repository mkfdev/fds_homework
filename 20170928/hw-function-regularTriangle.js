// 정삼각형 출력 for문으로 코딩한것 -> 함수로 만들어서 호출하기
var result = "";
for (var i = 0; i < 5; i++) {
  for (var j = 1; j < 5 - i; j++) {
    result += " ";
  }
  for (var k = 0; k < (i * 2) + 1; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

console.log('\n----------');
console.log('\n');

//방법1.함수선언식
function regularTriangle(line) {
  var result = "";
  for (var i = 0; i < line; i++) {
    for (var j = 1; j < line - i; j++) {
      result += " ";
    }
    for (var k = 0; k < (i * 2) + 1; k++) {
      result += "*";
    }
    result += "\n";
  }

  return result;
}

var result = regularTriangle(20);
console.log(result);

//방법2. 함수표현식
var triangle = function(triLine) {
  var result = "";
  for (var i = 0; i < triLine; i++) {
    for (var j = 1; j < triLine - i; j++) {
      result += " ";
    }
    for (var k = 0; k < (i * 2) + 1; k++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

console.log(triangle(12));