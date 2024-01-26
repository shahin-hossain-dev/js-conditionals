const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = true;

/**
 * ***********************
 * General Condition 
 * ***********************
 */
// যদি সবগুলো শর্ত পূরন করতে হয় তাহলে && and ব্যবহার করতে হয়।
if (salary > 20000 && height > 66) {
    console.log('su.... Patro')
}
else {
    console.log('Onno patro khuji')
}

// যদি যেকোনো একটি শর্ত পূরন করতে হয় তাহলে || or ব্যবহার করতে হয়।

if (salary > 25000 || height > 66) {
    console.log('Yes Kobul')
}
else {
    console.log('No. Not Kobul')
}

/**
 * ************************
 * More and More Condition*
 * ************************
 */

if (salary > 20000 && height > 66 && isBCS == true) {
    console.log('Alhamdulillah Kobul');
}
else {
    console.log('Dekhi ki kora jay');
}

/**
 * ***********************
 * Complex Condition 
 * ***********************
 */

if ((salary > 20000 && height > 70) || isBCS == true) {
    console.log('Ji Alhamdulillah Sobai Raji');
}
else {
    console.log('Dekhi Sobar shathe kotha bolte hobe');
}

if ((salary > 50000 || hasCar == true) && isBCS == true) {
    console.log('Ji Kobul')
}