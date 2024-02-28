//// html se form create karke data ko java script tk pahuchana or api ke data ko filter karna //
//  -------------------------------------------------------------------------------------------//

let apiUrl = "http://192.168.1.29:4000/user"
async function getApi(){
    let htmlcode = `<table border = 1 >`
    let result = await fetch(apiUrl);
    let finalData = await result.json();
    // console.log(finalData)         //// terminal me data dikhega...
    
    htmlcode +=  `<tr>
                      <th> Name <th/>
                      <th> Salary <th/>
                  <tr/>`
    
    finalData.map((itm, ind)=>{           /// use  map  function html se data console me dihega.
        //   console.log(itm.name, itm.salary);
    
  
        htmlcode += `<tr>
                         <td>${itm.name}<td/>
                         <td>${itm.salary}<td/>
                    <tr/>`
    })

    htmlcode += `<table/>`
    // console.log(htmlcode);
    document.getElementById("Empdata").innerHTML = htmlcode  /// ye data html ke div me dikhega
                                                              // jiski id Empdata hai
}
// getApi()


//============================================================================================//
////....... jiski jiski salry 800se kam ho vo vo data dikhega  ......// 

let URLapi = "http://192.168.1.29:4000/user"
async function apiget(){
    let data =await  fetch(URLapi);
    let finalresult = await data.json();
    // console.log(finalresult[0].salary)     //// array of object......
    for(let i = 0; i < finalresult.length; i++){
     if(finalresult[i].salary<800){
        console.log(finalresult[i])
     }
 }
}
// apiget()

//========================================================================================//
////...... salary base me data filter karna through input using url ..........////////


let filter = "http://192.168.1.29:4000/user"
async function filterData(sal){
    let htmlfile = `<table border = 1>`        ////use table tag map function ke liye
    let print =await  fetch(filter);
    let finalprint = await print.json();
    // console.log(finalresult[0].salary)     //// array of object......

    
//     for(let i = 0; i < finalprint.length; i++){
//      if(finalprint[i].salary<sal){
//         console.log(finalprint[i])
//      }
//  }


///==== for loop ka use karne se filter data console me dikhega dom me bhi dikh sakta hai lekin systematic nhi agar table form me data chahiye to map function ka use karna padega....=====////

htmlfile += `<tr>
                  <th> Name <th/>
                  <th> Salary <th/>
             <tr/>`


finalprint.map((itm, ind)=>{
    
   if(itm.salary<sal){
     
    // console.log(itm)        ////-console karne par filter data chrome console me dikhega..
    
     htmlfile += `<tr>
                       <td>${itm.name} <td/>
                       <td> ${itm.salary} <td/>
                  <tr/>`
}

})

htmlfile += `<table/>`
document.getElementById("filterEmpTbl").innerHTML = htmlfile;

}




//============================================================================================//
////...... salary base me data filter karna through input direct server se..........////////



