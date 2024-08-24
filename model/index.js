// import { Sequelize, DataTypes } from 'sequelize'   //script
                    //or
const {Sequelize, DataTypes} = require('sequelize') //common gs
const databaseConfig = require('../config/dbConfig')
const makeblogTable = require('./blogModel')
const makeuserTable = require('./userModel')
// or const sequelize= require('sequelize')

console.log(databaseConfig.user)

const sequelize=new Sequelize(databaseConfig.db, databaseConfig.username, databaseConfig.password,/* or 'nodedatabase', 'root', '',*/ {
    host: databaseConfig.host,  // host: 'localhost', 
    port: databaseConfig.port,  // port: 3306,  //default
    dialect: databaseConfig.dialect, // dialect: 'mysql', //kun type of database use garne.
    operatorsAliases : false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

sequelize.authenticate()
// .then(() => console.log('Connected...'))
// .catch(err => console.error('Failed to connect:', err));

.then(()=>{
    console.log("milyo hai username password")
})

.catch((err)=>{
    console.log("xya error aayo ",err)
})

const db= {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.blogs=makeblogTable(sequelize,  DataTypes)
db.users=makeuserTable(sequelize,  DataTypes)





db.sequelize.sync({force : false}). then(()=>{
    console.log("synced")
})


module.exports= db //in cgs
// export default db //in import or script
