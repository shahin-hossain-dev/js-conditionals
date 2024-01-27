/**
 * TERNARY -> 3 Parts of It.
 *  ?  :
 * condition ? do something when true : do something when false
 */

const age = 20;
/* if (age > 18) {
    console.log('You can Vote');
}
else {
    console.log('Your age under 18');
} */

// --------------simple ternary----------------

// age >= 18 ? console.log('You can vote') : console.log('Your age under 18');;


let price = 1000;
const isLeader = false;

/* if (isLeader == true) {
    price = 0;
}

else {
    price = price + 100;
} */
// console.log(price)

// price = isLeader === true ? price = 0 : price + 100;


// -------------------optional semi-advanced-----------------

/* if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 100;
}
 */
//-----------nested ternary operator-------------
price = isLeader === true ?
    price > 1000 ?
        price / 2 : 0
    : price + 100;

console.log(price)