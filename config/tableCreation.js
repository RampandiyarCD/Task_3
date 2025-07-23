import User from "../model/user.js";
import Account from "../model/account.js";
import Statement from "../model/statement.js";
import sequelize from "./connection.js";

const tableCreation = async ()=>{
    try {
        await sequelize.sync();
        console.log("Table Created Successfully");
    } catch (error) {
        console.error(error);
    }
}

export default tableCreation;