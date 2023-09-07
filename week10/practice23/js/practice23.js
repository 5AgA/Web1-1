var memNum = parseInt(prompt("입장객 수 입력:"));
var colNum = parseInt(prompt("한 줄의 좌석 수 입력:"));

document.write("<h2>자리 배치도</h2>");

if (memNum % colNum == 0)
var rowNum = memNum / colNum;
else
var rowNum = parseInt(memNum / colNum) + 1;

document.write("모두 " + rowNum + "개의 줄이 필요합니다.");