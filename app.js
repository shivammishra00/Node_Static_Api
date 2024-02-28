import express from "express";
import dotenv from 'dotenv';
dotenv.config()   
import cors from "cors";  //// cors install or import kiya html se on clik pr data dekhne ke liye
let app = express();
let port = process.env.PORT
app.use(cors());     ///////middleware hai data ko html se dekhne ke liye by on click

app.use(express.json())   //// post method ka middle ware

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

                  /////---------- Get Method --------------/////////

//////----------      data get karna     -------------/////

app.get("/user", (req,res)=>{
   res.send(data)

 ///   map function se filter karna    /////
    // data.map((itm,ind)=>{
    //     if(itm.salary==800){
    //       console.log(itm)
    //     }
    // })

    
 ////////   for loop se filter karna     /////////
// for(let i=0; i<data.length; i++){
//     if(data[i].salary<800){
//         console.log(data[i])
//     }
// }

})



//==========use get api direct server se filter karna by salary =============///////////////

app.get("/users",(req, res)=>{
    
})



///////----------- URL means params se single data send karna ---------//////

app.get("/singleData/:name", (req,res)=>{
    res.send(req.params.name)
 })


//////// -------------  params se multipal data send karna -----------///////

app.get("/multipleData/:name/:salary", (req, res)=>{
    let [...data]  = [req.params.name, req.params.salary]
    res.json(data)
})


///////------------- query through url se single data send karna -----------////

app.get("/singleQuery", (req, res)=>{
    res.send(req.query.city)
})

///////------------ query through url se multiple data send karna ----------/////

app.get("/multipleQuery", (req, res)=>{
    let [...data] = [req.query.city, req.query.name]     // o/p=> ["bhopal","shivam"]
    res.send(data)
})


/////////-----------           Post Method        -----------////////////

app.post("/create", (req, res)=>{
    let result = req.body;
    // console.log(result)
    res.json(result)
})


/////////-----------           Put method            ------------////////////

app.put("/api/emp",(req,res)=>{
    let id = req.query.id;
    let data  = req.body;
    res.send({
        message: `${id} has updated...`,output:data
    })
})



app.listen(port,()=>[
   console.log(`server is running on ${port} `)
])