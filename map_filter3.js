// const munuber = [1,2,3]

// // const totalnumber = munuber.reduce( function (acc,curval) {
// //     return acc+curval
// // },0 )

// const totalnumber = munuber.reduce( (acc,curval) => acc+curval, 0)
// console.log(totalnumber);


const shopingcart = [
    {
        itemName:"js course",
        price : 2999
    },
    {
        itemName:"py course",
        price : 999
    },
    {
        itemName:"java dev course",
        price : 4999
    },
    {
        itemName:"data science course",
        price : 8999
    },
    {
        itemName:"mobile dev course",
        price : 12999
    }
]

totalpayment = shopingcart.reduce( (acc,item) => acc+item.price,0 )
console.log(totalpayment);
