/**
 * ********************
 *    SWITCH STATEMENT
 * *********************
 * if..else এর মধ্যে condition লিখা হয়
 * কিন্তু switch এর মধ্যে expression লিখা হয়। switch হলো if..else এর updated version
 * switch এ একটি case true না হলে আরেকটি case এর কাছে যাবে। অতপর case true হলে print করবে িএবং break করে দিতে হবে।
 */

// 
const dayOfWeek = 10;
switch (dayOfWeek) {
    case 1:
        console.log('Saturday')
        break;
    case 2:
        console.log('Sunday');
        break;
    case 3:
        console.log('Monday')
        break;
    case 4:
        console.log('Tuesday')
        break;
    case 5:
        console.log('Wednesday')
        break;
    case 6:
        console.log('Thursday')
        break;
    default:
        console.log('Number is Invalid')
        break;
}

// boolean condition 
// boolean এর ক্ষেত্রে switch condition এর মধ্যে boolean(true/false) দিতে হয়।
const light = true;
switch (true) {
    case light:
        console.log('Light On 💡');
        break;
    default:
        console.log('Light Off 🕯');
}

// --------------Grading System with Switch Statement----------------

function calcGrading(score) {

    let gradingScore;

    switch (true) {
        case (score <= 100 && score >= 90):
            gradingScore = "A"
            break;
        case (score <= 89 && score >= 70):
            gradingScore = "B"
            break;
        case (score <= 69 && score >= 60):
            gradingScore = "C"
            break;
        case (score <= 59 && score >= 0):
            gradingScore = "F"
            break;
        case (score >= 100 && score <= 0):
            gradingScore = 'Invalid Score'
            break;
        default:
            return "Invalid Score"
    }
    return gradingScore;
}

console.log(calcGrading(80));

//-------------------- banana categorized ----------------------------
function categorizedFood(fruit) {
    switch (fruit.toLowerCase()) {
        // এখানে যদি ৩টা case এর মধ্যে একটা সত্য হলে break আগের console.log() show করবে। পরের গুলো একই স্টেপ follow করবে।
        case 'banana':
        case 'apple':
        case 'angur':
            console.log('This is a Common Fruit')
            break;
        case 'mango':
        case 'jackfruit':
        case 'watermelon':
            console.log('This is a seasonal Food')
            break;
        case 'orange':
        case 'multa':
            console.log('This is a Lemon food')
            break
        default:
            return console.log(`This Fruit(${fruit}) is not recognized`)

    }
}
categorizedFood('mango');

// -------------get season-------------------

function getSeason(month) {
    switch (true) {
        case (month === 12 || month === 1 || month === 2):
            console.log('It is Winter Season')
            break;
        case (month <= 11 && month >= 9):
            console.log('It is Autumn Season')
            break;
        case (month <= 8 && month >= 6):
            console.log('It is Summer Season')
            break;
        case (month <= 5 && month >= 3):
            console.log('It is Spring Season')
            break;
        default:
            return console.log('It is Invalid Month Number')
    }
}

getSeason(8)