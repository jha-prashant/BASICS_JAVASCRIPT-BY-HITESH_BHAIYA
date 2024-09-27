const NewUser = new Object()

// console.log(NewUser);

NewUser.id="09338"
NewUser.name="prashant"
NewUser.islogedin=false

// console.log(NewUser);

const reguleruser  = {
    email :"someone@gmail.com",
    fullname:{
        username:{
            firstNmae:"prashant",
            lastNamme:"jha"
        }
    }
}
console.log(reguleruser.fullname.username);


const obj1={1:"ram", 2:"sunny",3:"aditya"}
const obj2={4:"shivam",5:"ayush",6:"ckc"}

// const obj3=Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);





