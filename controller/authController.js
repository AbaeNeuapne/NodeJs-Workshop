
const {registers} = require('../model/index')
const bcrypt= require('bcrypt')

exports.registerUser= async (req,res)=>{

    const {username,email,password}= req.body
    console.log(req.body)
    await registers.create({
        username,
        email,
        password: bcrypt.hashSync(password,8) //bcrypt will hash our password into complex form
    })
    res.redirect("/login")
}


exports.loginUser=async (req,res)=>{
    const {email,password} = req.body
    // check whether that email exist or not in users table 
    const data= await registers.findAll({
        where:{
            email:email
        }    
    })
    if(data.length==0){
        res.send("Email is not registered!!")
    }
    else{
        const hashedPassword=data[0].password
        const isValidPassword=bcrypt.compareSync(password,hashedPassword)
        if(isValidPassword){
            res.redirect("/")
        }
        else{
            res.send("Invalid password!!")
        }
    }
    
//     if(data.length ==0){
    //         res.send("No user with that email")
    //     }else{
        //         // now check password 
        //        const isMatched =  bcrypt.compareSync(password,data[0].password)
        //        if(isMatched){
            //         res.send("Logged in success")
            //        }else{
                //         res.send("Invalid password")
                //        }
                //     }
                
            }
            
            
            exports.renderRegister=(req,res)=>{
                res.render("register")
            }

            exports.renderLogin=(req,res)=>{
                res.render("login")
            }