import userModal from "../model/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const LoginUserData = async (req, res) => {
  const { email, password } = req.body;
  const validUser = await userModal.findOne({ email: email });

  if (!validUser) {
    return res.status(404).json({ message: "user not found" });
  } else {
    const isMatch = await bcrypt.compare(password, validUser.password);

    if (!isMatch) {
      return res.status(404).json({ message: "password not match" });
    } else {
      // const token = validUser.generateToken();
      console.log(validUser);
      const token = jwt.sign(
        { id: validUser._id },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      res.cookie("token", token, {
        expiresIn: Date.now() + 360000,
        httpOnly: true,
      });
    //   const cookies = req.cookies;

return res.status(201).json({
        validUser,
        message: "Authentication successful",token
      });      
    }
  }
};

export const RegisterUserData = async (req, res) => {

  const { email, password, name, confirm_password } = req.body;
  const newUser = new userModal({
    email: email,
    password: password,
    name: name,
    confirm_password: confirm_password,
  });

  try {
    const isNewUser = await userModal.findOne({ email: newUser.email });

    if (isNewUser) {
      console.log("Already a registered user");
      return res.status(409).json({ message: "Already a registered user" });
    } else {
      await newUser.save();
      console.log(newUser);
      console.log("registration successful");
      return res.status(201).json(newUser);
    }
  } catch (error) {
    console.log("something went wrong");
    return res.status(500).json({ message: "not added" });
  }
};

export const dashboardData = async (req, res) => {
  try {
    // console.log(`id: ${req.id}`);
    const validUser = await userModal.findOne({_id: req.id});
    if(!validUser){
        console.log('user not found');
        return res.status(401).json({ message: "User Not Authorized Perfectly" });
    }
    else{
        console.log('user verified successfully')
        return res.status(201).json({validUser,message:"login success"});
    }
    
  } catch (error) {
    return res.status(500).json({ message: "not added" });
  }
};



export const logOut = async (req, res) => {
  console.log('clicked for log out')
  try {
    console.log('goes into the try block')
    // console.log(req.headers)
    // req.headers.authorization('')
    console.log(req)
    return res.status(201).json({ message: 'logged out' });
  } catch (error) {
    console.log('goes into the error block')
    return res.status(500).json({ message: "something went wrong" });
  }
};
