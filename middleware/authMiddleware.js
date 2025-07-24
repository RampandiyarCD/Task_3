import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const genrateToken = async (user) => {
  try {
    const accessToken = jwt.sign(
      { userID: user.userId },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    if (!accessToken) {
      return { error: "No Token Generated" };
    }

    return accessToken;
  } catch (error) {
    return { error: "Internal Server Error" };
  }
};

export const auth = async (req, res, next) => {
  const authHead = req.headers["authorization"];
  const token = authHead && authHead.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;

    next();
  });
};
