
// const app = require('express')()
require("dotenv").config()
const express = require('express')
const { blogs, users } = require('./model/index')

// const multer=require('./middleware/multerConfig').multer
// const storage=require('./middleware/multerConfig').storage
const {multer,storage}=require("./middleware/multerConfig")
const upload=multer({storage:storage})
const app = express()

app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')
require("./model/index")
// app.use(express.json)


app.get("/create",(req,res)=>{
    res.render("create.ejs")
})


app.post("/create", upload.single('image') /*for accepting single image */,async(req,res)=>{
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

app.get("/user",(req,res)=>{
    res.render("user.ejs")
}) 

app.post("/user", async(req,res)=>{

    const {firstName,middleName,lastName,age,nationality,occupation,email,phone,address}=req.body

    await users.create({
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        age:age,
        nationality:nationality,
        occupation:occupation,
        email:email,
        phone:phone,
        address:address
    })
    res.send("Your form is submitted successfully!!")
})


app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})