const express= require("express")
const app = express()


app.get('/',(request,response)=>{
    response.send('My, World!')
})
app.get('/about',(request,response)=>{
    response.send('This is about page!')
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
    console.log("The project of nodeJs has begun")
})