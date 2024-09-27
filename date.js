//date

let my_date = new Date()
// console.log(my_date.toISOString());
// console.log(my_date.toLocaleDateString());
// console.log(my_date.toLocaleString());
// console.log(typeof my_date);


// month started with zero.


let created_date = new Date("08-01-2024")
// console.log(created_date.toDateString())
// console.log(created_date.toLocaleString());

let my_timestamp = Date.now()
console.log(my_timestamp)
console.log(created_date.getTime());
console.log(Math.floor(Date.now()/1000));