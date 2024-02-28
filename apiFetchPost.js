// async function postData(ename, esal){
//     let apiURL = `http://192.168.1.29:4000/create`;

//     let dt = {
//                name: ename,
//                salary: esal
//     }


//     let result = await fetch(apiURL, {
//      method: 'POST',
//      headers:{
//       "Content-Type": "application/json"
//      },
//      body:JSON.stringify(dt)
//     })
//     let response = await result.json() 
//     console.log(response)
//    }
//    postData()



//=========================================================================================//


const data = {
   user: "V",
   city: "Bhopal"
}
/////
const apiURL = "http://localhost:5000/postdata";
/////
async function sendData() {
   let response = await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
         'Accept':'application/json',
         "content-Type": "application/json"
      }
   })
   let res = await response.json()
   console.log(res)
}
sendData()