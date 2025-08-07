let myDate = new Date()
console.log(myDate.toString());//Thu Aug 07 2025 06:11:56 GMT-0700 (Pacific Daylight Time)
console.log(myDate.toLocaleString());//8/7/2025, 6:11:56 AM
console.log(myDate.toISOString())//2025-08-07T13:11:56.501Z
console.log(myDate.toUTCString())//Thu, 07 Aug 2025 13:11:56 GMT
console.log(myDate.toJSON())//2025-08-07T13:11:56.501Z
console.log(typeof myDate);

let = MyCreatedDate = new Date(2025, 7 ,26)
console.log(MyCreatedDate.toDateString());  // day and date

let = MyCreatedDate1 = new Date(2025 , 8 , 26 ,5 , 9)
console.log(MyCreatedDate1.toLocaleString());  //date time and

let = MyCreatedDate2 = new Date ("02-22-2025")
console.log(MyCreatedDate2.toLocaleString());  


let timeStamps =  Date.now()
console.log(timeStamps);      // milisecound ma time da ga

console.log(MyCreatedDate1.getTime());

console.log(Math.floor(Date().now/1000));  /// change milisecound To secound

let myDate1 =new Date()
console.log(myDate1);

console.log (myDate1.getMonth())

myDate1.toLocaleString('default' ,{
    weekday:"long"
})                            // date ko custamize kar sakty hn hm





















