var first = parseInt(prompt("50미만의 숫자를 입력하세요."));
var second = parseInt(prompt("50미만의 숫자를 입력하세요."));
if (first > 49 || second > 49)
    alert("조건에 맞지 않는 숫자가 있습니다.");
else if (first < 50 && second < 50)
    alert("두 개의 숫자 모두 50미만이군요.");