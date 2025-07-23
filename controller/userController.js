import { userCreateService, userGetByIdService, userGetService } from "../service/userService.js";

export const createUser = async (req, res) => {
  try {
    const {user, created} = await userCreateService(req.body)
    if (created) {
      console.log("User Created");
      return res.status(201).json(user);
    } else {
      console.log("User already exists:", user);
      res.status(409).json({ error: "User already exists" });
    }
  } catch (error) {
    console.error("Sequelize error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getUser = async (req,res) => {
    try {
      const {user} = await userGetService();
        if (user.length == ''){
            return res.status(400).json({res:"No User Found"});
        }
        else{
           return res.status(200).json(user);
        }
    } catch (error) {
        console.error("Sequelize error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



export const getUserById = async (req,res) => {
    const {user} = await userGetByIdService(req.params.userId);
    try {
        if (user){
            return res.status(200).json(user);
        }
        else{
            return res.status(400).json({res:"No User Found"});
        }
        
    } catch (error) {
        console.error("Sequelize error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.userId);
    try {
        if (!user) {
            return res.status(404).json({ error: "No User Found" });
        } else {
            await user.update(req.body);
            return res.status(200).json(user);
        }
    } catch (error) {
        console.error("Sequelize error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
