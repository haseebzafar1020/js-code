const heroes = ["AHSAN" , "HASNNAIN", "AYAN"]
const another_heros = ["Sheeraz", "bilal" , "Usman"]

// another_heros.push(heroes)  //     0          1        2                    3
// console.log(another_heros); //[ 'Sheeraz', 'bilal', 'Usman', [ 'AHSAN', 'HASNNAIN', 'AYAN' ] ]

// console.log(another_heros[3][0]);  // AHSAN

// another_heros.concat(heroes)    // same output ha concat ka b or push ka b
// console.log(another_heros);//[ 'Sheeraz', 'bilal', 'Usman', [ 'AHSAN', 'HASNNAIN', 'AYAN' ] ]


// let allHeroes = another_heros.concat(heroes)  // [ 'Sheeraz', 'bilal', 'Usman', 'AHSAN', 'HASNNAIN', 'AYAN' ]
// console.log(allHeroes);

const all_new_heroes = [...another_heros,...heroes]  // ya spread kar data ha array ko.. 
// console.log(all_new_heroes);//[ 'Sheeraz', 'bilal', 'Usman', 'AHSAN', 'HASNNAIN', 'AYAN' ]


const another_Arr = [1,2,3,[4,6,8],9,7,9,[7,8,9]]
const real_Another_arr = another_Arr.flat(Infinity)
console.log(real_Another_arr);


console.log(Array.isArray("haseeb")); // ya batay ga ka ya array ha nai ..
console.log(Array.from("Haseeb"));// ya string ko array ma change kar da ga ..
console.log(Array.from({name: "Haseeb"}));   // [] intersting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));












