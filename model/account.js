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
        allowNull : false
    },
    balance : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    cardNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cardType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    creditLimit: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    availableCredit: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

User.hasMany(Account, {foreignKey : 'userId'});
Account.belongsTo(User, {foreignKey : 'userId'});

export default Account;
