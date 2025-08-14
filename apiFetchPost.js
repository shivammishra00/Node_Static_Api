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



//=====================================================================================///


const apiURL = "http://localhost:5000/postdata";

const data = {
   user: "V",
   city: "Bhopal"
}

let option = {
   method: "POST",
   headers: {
      "Accept": "application/json",
      "content-Type": "application/json"
   },
   body: JSON.stringify(data)
}

async function sendData() {
   let response = await fetch(apiURL, option)
   let res = await response.json()
   console.log(res)
}
sendData()