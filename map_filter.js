const books=[
   { title: "firstbook",genre: "fiction",publish :1981, edition:2001},
   { title: "secondbook",genre: "non-fiction",publish :1992, edition:2008 },
   { title: "thirdbook",genre: "history", publish :1999, edition:2007},
   {title: "foutrhbook",genre: "non-fiction",publish :1989, edition:2015},
   {title: "fithtbook",genre: "science",publish :2009, edition:2014},
   {title: "sixbook",genre: "fiction",publish :1989, edition:2010},
   {title: "seventhbook",genre: "non-fiction",publish :1992, edition:2008},
   {title: "eighthbook",genre: "non-fiction",publish :1992, edition:2008}
]

let userbook = books.filter( (bk) => bk.genre === "non-fiction")
userbook = books.filter( (bk) => {
    return bk.publish >= 1981 && bk.genre === "history"
   } )
console.log(userbook);
 