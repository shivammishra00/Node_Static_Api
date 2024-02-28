const data = {
    user: "V",
    city: "Bhopal"
   }
   /////
   const apiURL = `http://localhost:5000/api/employee?id=5`;
   /////
   async function putData(){
    let response = await fetch(apiURL, {
     method:"PUT",
     body:JSON.stringify(data),
     headers:{
      "content-Type":"application/json"
     }
    })
    let res = await response.json()
    console.log(res)
   }
   putData()
