
function myName(){
console.log("h");
console.log("a");
console.log("s");
console.log("e");
console.log("e");
console.log("b");
}

// myName()

function addTwoNumbers( num1 ,num2 ){  // parameters
    console.log(num1 + num2);   
}

// addTwoNumbers(1 ,8)  // Argument 

// const result = addTwoNumbers(7 ,8)   // output --> 15
// console.log("Result:",result);   // output --> undefined qk ya koi values nai la raha function se  jo Result ma akr store hu 



function addTwoNumbers( num1 ,num2 ){  // parameters
    let result =  num1 + num2;
  return result;
}

const result = addTwoNumbers(10,20)
console.log(result);

function isLogggedIn (userName){
    return `${userName} just logged in`
}

 let username = isLogggedIn("haseeb")

 console.log(username);
 




