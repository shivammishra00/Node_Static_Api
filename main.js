                     ///////////==> step 1   ///////////

import express from "express";   /////  install kiya fir import kiya.....

//============================================================================================//
 
                     ////////// ==> step 2    //////////

const app = express();    //// express me http ki all method hoti hai isliye variable me store 
                            //// karaya taki sari metjod use kar sake.....

//============================================================================================//

                     ////////// ==> step 6    //////////

app.use(express.json())     ////// .. ye ek middleware hai jab body se data send karte hai
                                /////      server me to ye us data ko accept karta hai
                                /////       or hame dikhta hai. (when we use post method)


//============================================================================================//

                /// ye data hai jo variable me store hai ......

let data = [
             {name: "shivam", salary: 400},
             {name: "ankit", salary: 500},
             {name: "romel", salary: 600},
             {name: "karamat", salary: 700},
             {name: "aniket", salary: 800},
             {name: "ayush", salary: 900},
             {name: "yash", salary: 1000},
             {name: "shivank", salary: 1100}
];


//=============================================================================================//

                     ////////// ==> step 3    ///////////

   ////////////....  http ki method  no.1  GET METHOD  //////////

app.get("/displaydata", (req, res)=>{

      res.send(data)      ////// data clint ko dikhega browser me means clint side

 //-- res.send() ek method hai jab url me request karege server me to server response send karega..........//     

    // console.log(data)        /////////...data server means terminal me dikhega.......

    // res.json(data)           //// isse json formet data direct show hoga......

    // res.json({
    //     "name": "shivam",         //////yaha data direct send kar diya gaya hai json formet me
    //     "address": "satna"
    // })


    // res.send({
    //     "name": "shivam",
    //     "address": "satna"
    // })


    // console.log({
    //     "name": "shivam",
    //     "address": "satna"
    // })


    // res.send("hii")   ///// clint side
    // console.log("hii")    ///// server side
})



//=========> URL ke through data send karna means params se data send karna <=========///
          //================================================================//

///------------------- --Tarika 1st => params ke through -------------------------------///
                      //-------------------------------//


//-- ----params se single data send karna [URL=> http://IP:port/Route/ VariableValue(city)] --//

app.get("/singleData/:city", (req, res)=>{
    
    res.json(req.params.city)    ///-- url me req kiya params se jo data bheja use city name ke 
                                  //-- variable me store kara liya ab ye data browser me dikhega.....
})


//.............................................................................................//

///---  params se multipal data send karna [URL=> http://IP:port/Route/:Vname1/:vcity2] ---///

app.get("/multipleData/:name/:salary", (req, res)=>{
    let [...data]  = [req.params.name, req.params.salary]   // Rest operator use kiya or usme 
    res.json(data)                                     // multipal variable store kara liya
})                        // or un variable ko rout ke baad colon or forword slash lagakar use kar liya ab same kram se data url ke through send karege .....



//---------------------------------------------------------------------------------------------//


///----------------------- Tarika 2 nd => when we use query Object  ------------------------//   
                        //-----------------------------------------//

///////------------- query through url se single data send karna -----------////

//--->  url me Route ke baad question mark ? use karte hai
//--->  uske baad VariableName1=Value
///---> [URL => http://IP:Port/Route?VariableName1=Value]


app.get("/singleQuery", (req, res)=>{
    res.send(req.query.city)
})


//--------------------------------------------------------------------------------------------//


///////------------ query through url se multiple data send karna ----------/////


//--> rest operator ka use kar lege 
//--> or url me first variable ke baad &VariableName2=Value (& jab multipal value send karna ho)
//--> [URL => IP:Port/Route?VariableName1=Value&Vname2=Value]


app.get("/multipleQuery", (req, res)=>{
    let [...data] = [req.query.city, req.query.name]    
    res.send(data)        ///------- o/p=> array formet me aayega ["bhopal","shivam"]
    
    // res.json([{
    //     city:data[0],              //// ab output array of objct formet me aayega....
    //     name:data[1]              //// square bracket hata de to output object formet me aayega.
    // }])
    
})                                   


//============================================================================================//
                          
                        //////////// ==> step 5     //////////

//////////////----------       http method no. 2 POST METHOD       -------------///////////   
                            //===============================//

// NOTE ==> post method se data tabhi dikhega jab hum middle ware use karege step 6 me....

app.post("/create", (req, res)=>{
    let data =  req.body;
    console.log(data)      // server me data dikhega

    // res.send(data)            //// clint side data show hoga..

    // res.send(req.body)           //// clint side data show hoga..

    // console.log(req.body)      //// server me data dikhega

    // res.json({
    //     "name": "hii"         ///// isse direct data thunder me clint ko dikhega .....
    // })

    // console.log({
    //     "name": "hii"            ////// isse direct data server me terminal me dikhega .....
    // })
})


//////////////----------       http method no. 3 PUT METHOD       -------------///////////   
                            //===============================//

app.put("/api/put",(req,res)=>{
    let id = req.query.id;
    let data = req.body;
    console.log({message:`${id} has updated....`, output: data})
})

//////////////----------       http method no. 4 PATCH METHOD       -------------///////////   
                            //===============================//

app.patch("/api/patch",(req,res)=>{
    let id = req.query.id;
    let data = req.body;
    res.send({message:`${id} has updated....`, output: data})
})

//////////////----------       http method no. 5 DELETE METHOD       -------------///////////   
                            //===============================//

app.delete("/api/delete",(req,res)=>{
    const data = [
        {id: 1, name: "shivam", age: 22,},
        {id: 2, name: "prakash", age: 23},
        {id: 3, name: "munna", age: 24},
        {id: 4, name: "ravi", age: 25}
    ]
    let id = req.query.id;
    res.send({message:`${id} has deleted....`, output: data})
})

//=============================================================================================//


                  ///////////// ==> step 4     //////////

app.listen(5001, ()=>{
    console.log(`server is running on port 5001`)
})              

// listen accept 2 parameter first one is port and second one is call back function