import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import Account from "./account.js";

const Statement = sequelize.define('Statement',{
    date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    },
    amount : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    balance : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});

Account.hasMany(Statement,{foreignKey : 'accountId'});
Statement.belongsTo(Account, {foreignKey:'accountId'});

export default Statement;
