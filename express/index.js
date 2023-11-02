const express = require('express')
const app = express()

let port  = 3000;

app.listen(port, ()=>{
    console.log(`server is working and responding ${port}`)
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

app.get("/", (req, res)=>{
    res.send("you called root path")
})
app.get("/search", (req, res)=>{
    res.send("you called search path")
})
app.get("/apple", (req, res)=>{
    res.send("you called apple path")
})
app.get("/mango", (req, res)=>{
    res.send("you called mango path")
})
app.get("/pinapple", (req, res)=>{
    res.send("you called pinapple path")
})
app.get("*", (req, res)=>{
    res.send("this path is not defind please go to another route")
})

// post request

app.post("*", (req, res)=>{
    res.send("this is a post request")
})