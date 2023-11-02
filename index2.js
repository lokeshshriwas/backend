const express = require('express')
const app = express()

let port  = 3000;

app.listen(port, ()=>{
    console.log(`port number ${port}`)
})

// app.use((req, res) =>{
//     console.log("request recieved")
//     // res.send("this is a general response")
//     res.send({
//         name: "lokesh",
//         lastname: "shriwas",
//         age: 21,
//         school: "holy cross"
//     })
// })

// routing in express

// app.get("/", (req, res)=>{
//     res.send("you called root path")
// })


// path parameter

// app.get('/:username/:id', (req,res) =>{
//     let {username , id} = req.params
//     // console.log(req.params)
//     res.send(`hello ${username} and the id is ${id}`)
// })


// query strings

app.get('/search', (req,res) =>{
    let {q} = req.query

    if(!q){
        res.send("nothing searched")
    }else{
        // console.log(req.params)
        res.send(`you searched for ${q}`)
    }
})