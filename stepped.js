/**
 * MULTI_LEVEL_CONDITION
 */

const price = 4000;

if (price >= 5000) {
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log('10% Discount Price:', payAmount)
}
else if (price >= 3000) {
    const discount = price * 5 / 100;
    const payAmount = price - discount
    console.log('5% Discount Price:', payAmount)
}
else {
    console.log('No Discount Price:', price)
}