const data = {
    user: "V",
    city: "Bhopal"
   }
const apiURL="http://localhost:5000/api/employee?id=5";

let option={
    method:'patch',
    Headers:{
        'Accept':'application/json',
        'content-type':'application/json'
    },
    body:JSON.stringify(emply)
}
async function add(){
let response =await fetch(apiURL,option)
let finaldata= await response.json()
console.log(finaldata)
}
add()