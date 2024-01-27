// BMI Calculator

const heightInFeet = 6;
const weightInKg = 71;

if ((heightInFeet >= 4 && heightInFeet <= 5) && (weightInKg >= 40 && weightInKg <= 50)) {
    console.log('Health is Good')
}
else if ((heightInFeet >= 5 && heightInFeet <= 6) && (weightInKg > 50 && weightInKg <= 70)) {
    console.log('Health is Good')
}
else {
    console.log('Health is Bad')
}

// Grading System Count

const mark = 30;

if (mark >= 80) {
    if (mark > 100) {
        console.log('Invalid Marks')
    }
    else {
        console.log('A+')
    }
}
else if (mark >= 70) {
    console.log('A')
}
else if (mark >= 60) {
    console.log('A-');
}
else if (mark >= 50) {
    console.log('B');
}
else if (mark >= 40) {
    console.log('B-')
}
else {

    console.log('Failed')

}