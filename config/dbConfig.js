const db = require("../model")

const databaseConfig = {
    db : process.env.DB,
    username: process.env.USERNAME2,
    password: process.env.PASSWORD,
    host: process.env.HOST,
<<<<<<< HEAD
    // port: 3306,             //for local host
    port: 50034,         //for online host
=======
    port: 29703,
>>>>>>> 1890e4ef9694d2eb52381c26ef187503f7a334c7
    dialect: 'mysql'
}

module.exports = databaseConfig
