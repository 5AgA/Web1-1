var x = parseInt(prompt("첫 번째 정수 입력:"));
var y = parseInt(prompt("두 번째 정수 입력:"));
var z = prompt("연산자를 입력하시오");
document.write("<h2>두 수를 이용한 산술연산<br></h2>")
switch (z)
{
    case '+': document.write(x + " " + z + " " + y + " = " + (x + y));
        break;

    case '-': document.write(x + " " + z + " " + y + " = " + (x - y));
        break; 

    case '*': document.write(x + " " + z + " " + y + " = " + (x * y));
        break;

    case '/': document.write(x + " " + z + " " + y + " = " + (x / y));
        break;

    case '%': document.write(x + " " + z + " " + y + " = " + (x % y));
        break; 
}