const number = 400
console.log(number);

const balance = new Number(100)
console.log(balance.toString());

console.log(balance.toFixed(2));// point ka bad 2 zeroes ay gay ..

const otherNumber = new Number (24.778) 
console.log(otherNumber.toPrecision(3));//--> ya roundoff karta ha values ko

const hundred = 1000000
console.log(hundred.toLocaleString()); //---> bari values ma (coma ",") lagaty hn



//*********** MATHS ***************

console.log(Math);
console.log(Math.abs(-4)); //absoult values data ha ya 
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));//---> point ka bad value nai lata 4
console.log(Math.min(2,4,5,8));
console.log(Math.max(4,8,3,5));

console.log(Math.random());
console.log((Math.random()*10) +1); //1 digit shift hu ga or 0 ma number nai ay ga +1 ki wajah se
console.log(Math.floor((Math.random()*10) +1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);













