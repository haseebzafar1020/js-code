// # primitive

// 7 type: String , number boolean , null , undefined , Symbol , BigInt

const score = 999
const scoreValue = 100.9

const isLoggedIn = false
const outsideTemp = null
let userEmail ;
 

const id =  Symbol ('123')

const bigNumber = 1234567654321234n


// # Referance  (Non Primitive )

// types: Array ,oject , function 
const array = ["haseeb" , "ahsan" , "hasnain"]

let myObjet = {
    name : "haseeb" ,
    age : 33,
}

const myFunction = function()
{
    console.log("hello world");
}

// ***********************************************

// Stack (primitive)   --> jab b values wagera change karni hu tu ya fatch karni hu tu ya memory ma copy data ha uski.. 
//or orignal values asy hi rehtii hn

const number = 1233
let name = "haseeb Zafar"
let email = "haseebmalikgoto@gmail.com"

let newName = name 
newName = "haseeb malik"
console.log(name);

console.log(newName);





//   ,    Heap (Non-primitive)  --> or ya refrence data ha memory ma.. or jab changes kartay hn tu orignal values b change huti ha is ma

let st_One = {
    name : "Ahsan",
    gender : "male"
    
}

let st_two = st_One
st_two.gender = "female"

console.log(st_One.gender);

console.log(st_two.gender);



