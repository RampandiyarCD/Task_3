import { createAccountService, getAccountService, getAccountByIdService,updateAccountService,deleteAccountService} from "../service/accountService.js";

export const createAccount = async(req, res) => {
    try {
        const accData = await createAccountService(req.body);

        if(accData?.error){
            return res.status(404).json({error: accData.error});
        }
        return res.status(200).json({account: accData});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getAccount = async(req, res) => {
    try {
        const accData = await getAccountService();

        if(accData?.error){
            return res.status(404).json({error: accData.error});
        }
        return res.status(200).json({accounts: accData});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getAccountById = async(req, res) => {
    try {
        const accID = await getAccountByIdService(req.params.accId);

        if(accID?.error){
            return res.status(404).json({error: accID.error});
        }
        return res.status(200).json({account: accID});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateAccount = async(req, res) => {
    try {
        const accID = await updateAccountService(req.params.accId, req.body);

        if(accID?.error){
            return res.status(404).json({error: accID.error});
        }
        return res.status(200).json({account: accID});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteAccount = async(req, res) => {
    try {
        const accID = await deleteAccountService(req.params.accId);

        if(accID?.error){
            return res.status(404).json({error: accID.error});
        }
        return res.status(200).json({message: "Account deleted successfully", account: accID});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}