const makeregisterTable = (sequelize,DataTypes)=>{
    const register =  sequelize.define('register',{
         username : {
             type : DataTypes.STRING, 
             allowNull : false
         }, 
         email : {
             type : DataTypes.STRING, 
             allowNull : false 
         }, 
         password : {
             type : DataTypes.STRING, 
             allowNull : false
         }, 

     })
     return register
 }
 
 module.exports = makeregisterTable