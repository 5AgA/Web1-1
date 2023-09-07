var birthYear = parseInt(prompt("태어난 년도 입력:"));
var lastNum = birthYear % 10;

document.write("<h2>당신의 마스크 구매 요일은 언제일까요?</h2><hr>");
if (lastNum == 1 || lastNum == 6)
document.write("월요일에 구매 가능".bold().fontcolor('red')+"<br>");
else if (lastNum == 2 || lastNum == 7)
document.write("화요일에 구매 가능".bold().fontcolor('red')+"<br>");
else if (lastNum == 3 || lastNum == 8)
document.write("수요일에 구매 가능".bold().fontcolor('red')+"<br>");
else if (lastNum == 4 || lastNum == 9)
document.write("목요일에 구매 가능".bold().fontcolor('red')+"<br>");
else if (lastNum == 5 || lastNum == 0)
document.write("금요일에 구매 가능".bold().fontcolor('red')+"<br>");

document.write("토요일과 일요일도 구매 가능".bold().fontcolor('red'))