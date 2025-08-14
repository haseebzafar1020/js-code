const arr = [1,2,3,4,5]
const arr1 = ["ahsan" ,"haseeb"]

const arr2 = new Array(1,2,3,4,5)
// console.log(arr2[3]);

//-->Array Method


// arr.push(6)
// console.log(arr);

// arr.push(7)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(9)
// console.log(arr); // start ma 9 ajay gay sab eliment ko agy shift kaar kay...

// arr.shift()
// console.log(arr); //start wala element remove hu jay ga...



// console.log(arr.includes(9)); // bolean data type 
// console.log(arr.indexOf(9)); // bolean

// const newArr =  arr.join() // join method change ker data ha array ki typeof "string" ma..
// console.log(arr);
// console.log(newArr);


const arn1 = arr.slice(1,3)  //ya Methid bata ha ka konse index se kis index tak arrray ko print karna ha  
console.log(arr);           //[1,2,3,4,5]
console.log("A ", arn1)    // [2,3]


const myn2 = arr.splice(1,3) // ya array ma se data ko remove kar data ha --> ya array ko manupalte karta ha...
console.log(arr)             //[ 1, 5 ]  orignal array
console.log("B" , myn2);     //  B [ 2, 3, 4 ]   splice array 









