// how to create a singleton object 
const tinderUser = new Object() //---> singlton Object
const tinder = {};      //----> non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Akash"
tinderUser.isLogggedIn = false

// console.log(tinderUser);


// object ka ander object ...

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "haseeb",
            lastName: "zafar"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);  //is tarah ham isy access kar sakty hn...

 
const obj1 = {1 : "a" , 2:"b" , 3:"c"}
const obj2 = {2 : "a" , 5:"b" , 6:"c"}
const obj3 = {7 : "a" , 8:"b" , 9:"c"}
 
// const obj4 = {obj1,obj2,obj3}

// const obj4 = Object.assign({},obj1,obj2,obj3) //{} ya as a source use karty hn
const obj4 = {...obj1,...obj2,...obj3}   // ya spread wala method ha..
// console.log(obj4); 

//---jab data base se data ata ha 

const user = [
    {
        id: 1,
        name : "haseeb"
    }
    ,
     {
        id:2,
        name : "Ahsan"
    }
    ,
     {
        id: 3,
        name : "hasnain"
    }
]


// console.log(user[0]); // is tarah access karaty hn ...

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  // _
// console.log(Object.values(tinderUser));//   -ya sab array banjata ha 
// console.log(Object.entries(tinderUser));// _

// console.log(Object.hasOwnProperty('name')); // ya batata ha ka ya cheez is ka pass ha ya nai.








