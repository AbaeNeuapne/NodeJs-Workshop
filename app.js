
// const app = require('express')()
require("dotenv").config()
const express = require('express')
const { blogs } = require('./model/index')
const app = express()

app.set('view engine','ejs')
require("./model/index")
// app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))


app.get("/create",(req,res)=>{
    res.render("create.ejs")
})


app.post("/create", async(req,res)=>{
    //    const title=req.body.title
    //    const subtitle=req.body.subtitle
    //    const description=req.body.description
    const {title,subtitle,description}=req.body
    
    await blogs.create({
        title:title,        //title     //if lhs and rhs are same
        subtitle:subtitle,  //subtitle
        description:description //description
    })
    res.send("Blog added successfully")
    
})

// app.get("/user",(req,res)=>{
//     res.render("userData.ejs")
// }) 

// app.post("/user", async(req,res)=>{

//     const {firstName,middleName,lastName,age,nationality,occupation,email,phone,address}=req.body

//     await users.create({
//         firstName:firstName,
//         middleName:middleName,
//         lastName:lastName,
//         age:age,
//         nationality:nationality,
//         occupation:occupation,
//         email:email,
//         phone:phone,
//         address:address
//     })
//     req.send("Your form is submitted successfully!!")
// })


app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})