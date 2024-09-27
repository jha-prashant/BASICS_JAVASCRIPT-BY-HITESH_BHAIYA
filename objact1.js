

//object literals
const mySym = Symbol("key1")
const jsUser={
    name:"prashant",
    age:22,
    location:"haldia",
    islogedin:false,
    logedinDays:["monday","tuesday","wedenesday","thursday","friday"],
    [mySym]: "key1"
} 
// console.log(jsUser);
console.log(jsUser.age)
console.log(jsUser.name)
console.log(jsUser["logedinDays"])

console.log(typeof jsUser[mySym])
