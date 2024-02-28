/////////  API se data fetch karna    /////////////
//////use fetch() method///

// fetch("http://192.168.1.48:4000/user")

//  .then((result)=>{                /////  url ka data result me store hua .......

// // console.log(result)      //// result console karne par o/p ka data ajeeb formet me hota hai,
    
//     let finalData = result.json();    ////// us data ko json formet me convert karege...

//     return finalData;                 ///// .then() method promise return karti hai...
            
//   }) .then((data)=>{

//      console.log(data)      /// finalData jo bhi value return karega use yaha console kara lege,
//                            //// to url ka data object formet me dikhne lagega...
// })                         



////================================//=============================////================////


////// use async await function data fetch karna    ///////////

// let apiUrl = "http://192.168.1.48:4000/user"

// async function getApiData(){

//   let result = await fetch(apiUrl);        ///// url ka data result me store hua.....

//   let data = await result.json()           ///// ab us data ko json formet me convert kiya...

//  console.log(data)   //// data console kara liya ab data terminal me dikhega obj formet  me   

// // document.write(data)     ////o/p=> in dom => [object Object],[object Object]

// }
// getApiData()     



//////=======================================================================================////



//// async awit function  se node.html ke dwara onClick me function call karke data fetch karna//

//// html ke dwara yadi data console me dekhna hai to cors ko install,main file me import or use karna hoga.....



let apiUrl = "http://192.168.43.188:4000/user"
async function getApiData(){

  let html = `<table border=1>`    // html variable me table tage assigne kiya
  
  let result = await fetch(apiUrl);
  let data = await result.json();
// console.log(data)    //// data chrome ke console me dikhega is formet me => (2) [{…}, {…}]..

  data.map((itm,ind)=>{    /// use map function to perform html page.....
   
    // console.log(itm)      //// 1st o/p console me => {name: 'shivam', sal: '2000'}
                           ////                   {name: 'rohit', sal: '3000'}


  //  console.log(itm.name)    //// 2 nd o/p console me=>     shivam
                               ///                         rohit...

  //  console.log(itm.name, itm.salary)      // 3 rd o/p chrome console me-->  shivam  2000
                                         //-->                              rohit  3000


   // console.log(ind, itm.name, itm.sal)    /// 4 th o/p-> in console => 0 'shivam' '2000'
                                             ///-->                       1 'rohit' '3000'
                                             
   
// document.write(ind, itm.name, itm.sal)    /// 5 th o/p=>  dom me data without systmatic ese,
                                            ///... show hoga => 0shivam20001rohit3000



///-- dom me data yadi table formet me systmatic way me chaiye to tbl create karna hoga ---/
////   -------------------------------------------------------------------------------////

html += `<tr>
             <td>${itm.name}<td/>
             <td>${itm.salary}<td/>
         <tr/>`
  })
html += `<table/>`
document.getElementById("empdata").innerHTML = html
// console.log(html)    // data console me ajeebformet me aata hai....

}
// getApiData()     ///// node.html me onClick me call kar liya hai ....
