const age = 45;
const price = 500;

if (age <= 12) {
    console.log('You eat anything for free');
}
else if (age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log('50% Discount Price:', payAmount)
}
else if (age >= 50) {
    // 25% discount 
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log('25% Discount Price :', payAmount)
}
else if (age >= 40) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log('10% discount Price:', payAmount)
}
else {
    console.log('Pay Full:', price)
}