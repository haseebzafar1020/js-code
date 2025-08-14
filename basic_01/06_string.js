const name = "HASEEB"
const repoCount = 50

// console.log(name+ repoCount); ---> old pattern ha 

console.log(`hello my name is ${name} and my repocount is ${repoCount} `); // new pattern and best way


const gameName = new String('haseeb') // write cmd in  web console 
// --> string ka all function nazr a jay gay...
console.log(gameName[0]);

console.log(gameName.__proto__); // is se hmmay all String function ka pata chal jata ha in web console


console.log(name.toUpperCase());
console.log(name.toLowerCase());
// console.log(gameName.tolength());
console.log(name.charAt(2)); // kis position pr konsa char ha 
console.log(name.indexOf('E'));


// --> ya function substring ma torta ha 
const newsubString1 = gameName.substring(0, 4)
console.log(newsubString1);

// --> is ma ap minus ki values b da saktay hn 
const another = gameName.slice(-8,4)
console.log(another);

const stringOne = "         ALI RAZA       "
console.log(stringOne);
console.log(stringOne.trim());  /// --> trim () spaces remove karta ha

//--> replace () 

const url = "http//:haseeb.com/%20haseeb"
console.log(url.replace('%20', '-'));
 
console.log(url.includes("hitessh"));


//---->  at() Function  ---->
//
const array = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array.at(index)}`);
// Expected output: "An index of -2 returns 130"

//------> charCodeat() ----> ya char ka assci code bata ha -->

const sentence = "The quick brown fox jumps over the lazy dog.";

const Index = 4;

console.log(
  `Character code ${sentence.charCodeAt(Index)} is equal to ${sentence.charAt(
index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"











