require('dotenv').config()
// const app = require('express')()
const express = require('express')
const { blogs, sequelize, users } = require('./model/index')
// const multer = require('./middleware/multerConfig').multer
// const storage = require('./middleware/multerConfig').storage



const app = express()
const blogRoute = require("./routes/blogRoute")
const authRoute = require('./routes/authRoute')

// app.use(express.json())

app.set('view engine','ejs')
require("./model/index")
app.use(express.urlencoded({extended : true}))

// http://localhost:3000 + /
// http://localhost:3000 + /blog/:id
// http://localhost:3000 + /delete/:id
// http://localhost:3000 + /create

app.use('',blogRoute)
app.use('',authRoute)
// http://localhost:3000 + register
// http://localhost:3000 + login


//For userDetails

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

app.use(express.static('./public/'))
app.use(express.static("./storage/"))

app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})
