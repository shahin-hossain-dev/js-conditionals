// 
const isLeader = false;

//JS এ condition check করার সময় boolean value হলে বলে দিতে হয়না যে true নাকি false auto নিয়ে নিবে.
// if (isLeader === true)
if (isLeader) {
    console.log('Leader is True');
}
else {
    console.log('Leader is False');
}

// --------Logical Not--------------

// if (isLeader === false) //true এটা সত্য হলে ভিতরে ঢুকবে ।
// if(isLeader) //false
// if(!isLeader) // true
if (!isLeader) {
    console.log('Tore Bia Dia dimu');
}
else {
    console.log('Tui amaar noyoner moni');
}

//------- double Bang !!---------

// if(isLeader) //false
// if(!isLeader) //true // একটা bang দিলে true হয়ে যায়।
// if(!!isLeader) //false //দুইটা bang দিলে আবার false  হয়ে যায়।

