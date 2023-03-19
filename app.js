var a = +prompt("Please enter your number like 10 ");
function simpleOutput(){
    alert(`The value of a is ${a}`);
}
function secondOutput(){
    alert(`The value of a is ${++a} \n Now the value of a is ${a}`);
}
function thirdOutput(){
    alert(`The value of a is ${a++}\n Now the value of a is ${a}`);
}
function fourthOutput(){
    alert(`The value of a is ${--a} \n Now the value of a is ${a}`);
}
function fifthOutput(){
    alert(`The value of a is ${a--}\n Now the value of a is ${a}`);
}
//task 2
var a2 = 2; let b2 = 1;
function q2a(){
    alert(`a is: ${a2}`);
}
function q2b(){
    alert(`b is: ${b2}`);
}
function q2c(){
    let result = --a2 - --b2 + ++b2 + b2--;
    alert(`Result is: ${result}`);
}
//task3

function greet(){
    let yourName = prompt("Enter your name: ");
    alert(`Hello ${yourName}!, have a nice day.`);
}

//task 4

