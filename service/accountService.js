import Account from '../model/account.js'

export const createAccountService = async (accData) => {
    try {
        const [acc, created] =  await Account.findOrCreate({
            where : {accountId : accData.accountId},
            defaults : accData
        });
        if(!created){
            return {error: "Account already Exists"};
        }
        return {acc, created};
    } catch (error) {
        return {error: "An unexpected error occurred"};
    }
}

export const getAccountService = async() => {
    try {
        const acc = await Account.findAll();
        if (acc.length === 0){
            return {error: "No Accounts Found"};
        }
        return {acc};
    } catch (error) {
        return {error: "An unexpected error occurred"};
    }
}

export const getAccountByIdService = async(accId) => {
    try {
        const acc = await Account.findByPk(accId);
        if(!acc){
            return {error: "Account Not Found"};
        }
        return {acc};
    } catch (error) {
        return {error: "An unexpected error occurred"}
    }
}

export const updateAccountService = async(accId, accData) => {
    try {
        const acc = await Account.findByPk(accId);
        if(!acc){
            return {error:"Account Not Found"};
        }
        await acc.update(accData);
        return {acc}
    } catch (error) {
        return {error: "An unexpected error occurred"}
    }
}

export const deleteAccountService = async(accountId) => {
    try {
        const acc = await Account.findByPk(accountId)
        if(!acc){
            throw new Error("Account Not Found")
        }
        await acc.destroy();
        return {acc}
    } catch (error) {
        return {error: "An unexpected error occurred"}
    }
}