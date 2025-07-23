import { Op } from "sequelize";
import User from "../model/user.js";

export const userCreateService = async (userData) => {
    try {
        const [user, created] = await User.findOrCreate({
            where: {
                [Op.or]: [
                    { userId: userData.userId },
                    { phone: userData.phone }
                ]
            },
            defaults: userData
        });

        if (!created) {
            return {error: "User already exists"};
        }
        return {user};
    } catch (error) {
        return {error: "An unexpected error occurred"};
    }
}; 


export const userGetService = async () => {
    try {
        const users = await User.findAll();
        if (users.length === 0) {
            return { error: "No Users Found" };
        }
        return { users };
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
};   

export const userGetByIdService = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return { error: "User Not Found" };
        }
        return { user };
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
};   

export const userUpdateService = async (userId, userData) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return { error: "User Not Found" };
        }
        await user.update(userData);
        return { user };
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
};   

export const userDeleteService = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return { error: "User Not Found" };
        }
        await user.destroy();
        return { user};
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
};   