import { DataTypes } from "sequelize";
import connectionStr from "../config/connection.js";
import User from "./user.js"

const Account = connectionStr.define('Account',{
    accountId : {
        type : DataTypes.STRING,
        primaryKey : true,
        allowNull : false
    },
    type : {
        type : DataTypes.ENUM('savings','current','credit'),
        allowNull : false
    },
    branch : {
        type : DataTypes.STRING,
        allowNull : false
    },
    ifsc : {
        type : DataTypes.INTEGER,
        unique : true,
        allowNull : false
    },
    balance : {
        type : DataTypes.INTEGER,
        allowNull : true
    }
});

User.hasMany(Account, {foreignKey : 'userId'});
Account.belongsTo(User, {foreignKey : 'userId'});

export default Account;
