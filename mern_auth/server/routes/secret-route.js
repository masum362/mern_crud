import jwt from "jsonwebtoken";
import userModal from "../model/userSchema.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token)

  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  } else {
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.id = decodedToken.id;
      const User = await userModal.findOne({ _id: req.id });
      req.User = User;
      next();
    } catch (err) {
      console.log(err);
      // console.log('token false')
      res.status(401).json({ message: "Invalid token" });
    }
  }
};

export default authMiddleware;
