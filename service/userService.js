import User from "../model/user.js";

export const userCreateService = async (userData) => {
    try {
      const [user, created] = await User.findOrCreate({
        where: { userId: userData.userId, phone: userData.phone },
        defaults: userData
    });
    return {user, created};
    } catch (error) {
        throw error;
    }
};

export const userGetService = async () => {
    try {
        const user = await User.findAll(); 
        return {user, error :null};
    } catch (error) {
        throw error;
    }
};

export const userGetByIdService = async (userId) =>{
    try {
        const user = await User.findByPk(userId)
        return {user};
    } catch (error) {
        throw error;
    }
}