import { Op } from "sequelize";
import User from "../model/user.js";
import bcrypt from 'bcrypt';

const saltRound = 15

export const userCreateService = async (userData) => {
    try {
        const hashing = await bcrypt.hash(userData.password, saltRound);
        const [user, created] = await User.findOrCreate({
            where: {
                [Op.or]: [
                    { userId: userData.userId },
                    { phone: userData.phone }
                ]
            },
            defaults: {
                ...userData,
                password: hashing
            }
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

export const loginService = async(userId, password) => {
    try {
        const user = await User.findOne({
            where :{userId}
        });

        if(!user){
            return {error: "User does not Exists"}
        }

        const isPassword = await bcrypt.compare(password, user.password)

        if(!isPassword){
            return {error : "Invalid Password"}
        }

        return{user};
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
}