const makeUserTable=(sequelize, DataTypes)=>{
    const user=sequelize.define('user',{
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },

        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },

        middleName:{
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        nationality:{
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation:{
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        }
        // add more fields here
    })
    return user
}
module.exports= makeUserTable