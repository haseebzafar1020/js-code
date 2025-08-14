//singleton
// Object.create
//object Literals

const mysm = Symbol("keys")

const jsUser = {
    name: "haseeb",
    "Full name " : "Haseeb Zafar" ,   // object ki keys jo huti hawo String hi huti an
    //  mysm : "keys1",    // is tarah se ham isy Acesss nai kartay ya abi String ka behavior ha is ka 
        [mysm] : "key1" ,  // symbol ko ham [ ] bracket ma rak kar use kartay hn...
    age: 22,
    location: "karachi",
    email : "haseebmalikgoto@gmail.com",
    isLogedIn: false,
    lastLoginIn: ["Monday","tuesday","wednesday"]

}


// Access karnay ka method..

console.log(jsUser.email);  //haseebmalikgoto@gmail.com
console.log(jsUser["email"]);//haseebmalikgoto@gmail.com
console.log(jsUser["Full name "]);  // ya sirf [] se acess huta ha 
console.log( jsUser[mysm]);

jsUser.email = "haseebmaliksoto@gmail.com"
// Object.freeze(jsUser)      // object ma changing nai aygi is se..
// jsUser.email = "ahsan@gmail.com"

// console.log(jsUser);



jsUser.greeting = function(){
    console.log("hello JS Coders");
}

jsUser.greetingTwo = function () {
    console.log(`hello JS Coders , ${this["Full name "]}, ${this.age}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


