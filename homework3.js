1) A function that takes at least three arguments and returns the result of some set of operations using those arguments.
const setOfOperation =  function (a, b, c) {
d= a*(b+c);
return d;
}

2) A function that takes no arguments and returns something 
const noArguments = function () {
return 6;
}

3) A function that takes arguments, does something but does not return anything 
const myFunction = function (a, b) {
a+b;
}

4) A function that takes three strings and returns the string that is the longest.  
const longestString= function ( a, b, c ) {
if (a.length > b.length && a.length > c.length) {
return a;
 }
else if (b.length > a.length && b.length > c.length) {
return b;
    }
else (c.length > a.length && c.length > b.length){
return c; 
 }
else {
return “Some of them are equal”;
}
}

5) A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger

const numCompare = function (num1, num2) {
if (num1===num2) {
return 0;
}
else if (num1 > num2) {
return 1;
}
else {
return -1;
}
}

6)  Create a multiply function (that multiplies the two given arguments together and returns the result
const multiply = function (arg1, arg 2 ) {
arg3 = arg1*arg2;
return arg3;
}

7) Create a divide function (that divides the first argument by the second and returns the result
const devision = function (num1, num2 ) {
num3 = num1/num2;
return num3;
}

8) Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) 
const triangleArea = function(base, height) {
area= devision ( multiply (base, height), 2);
return area;
};
9)  Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length

const numLength = function (num) {
const n= num.toString();
return n.length;
}

10)  Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1. 

const compareLength = function (str1, str2, num) {
if (str1.length+ str2.length > num) {
return 1;
}
else {
return -1;
}
}

11) Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.   - 10 points

const runStuff = function (num1, num2, str) {
if (str=== "'triangle'") {
area= (num1*num2)/2;
return area;
}
if ( str === "rectangle") {
area = num1*num2;
return area;
}
else { return -1;
}
}

