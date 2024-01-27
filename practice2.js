/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const Burger = 450;

if (Burger >= 500) {
    // console.log('You have got free Coke')
}
else {
    // console.log('Please Give 30 TK')
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 90 //in Kilogram 
const height = 1.73736; //meter

const bmi = weight / Math.pow(height, 2);
/* 
if (bmi > 18.5) {
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('You are normal')
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        console.log('You are overweight')
    }
    else {
        console.log('you are obese.')
    }
}
else {
    console.log('you are underweight')
}
 */


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 81;
const friendScore = 91;
/* 
if (myScore > 80) {
    if (friendScore > 80) {
        console.log('go for a lunch.');
    }
    else if (friendScore < 80 && friendScore >= 60) {
        console.log('good luck next time.')
    }
    else if (friendScore < 60 && friendScore >= 40) {
        console.log('friends message unseen.');
    }
    else {
        console.log('block your friend');
    }
}
else {
    console.log('go to home and sleep and act sad');
} */


/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 50;
const num2 = 60;

let result;

/* if (num1 > num2) {
    result = num1 * 2;
}
else {
    result = num1 + num2;
}
 */

result = num1 > num2 ? num1 * 2 : num1 + num2;

// console.log(result)

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 61;
const student = false;
const ticketPrice = 800;
if (age < 10) {
    console.log('Your are free to visit');
}
else if (student) {
    const discount = ticketPrice * 50 / 100;
    const discountPrice = ticketPrice - discount;
    console.log('50% Discount fare:', discountPrice);
}
else if (age >= 60) {
    const discount = ticketPrice * 15 / 100;
    const discountPrice = ticketPrice - discount;
    console.log('15% discount fare:', discountPrice);
}
else {
    console.log('You have to pay full:', ticketPrice);
}
