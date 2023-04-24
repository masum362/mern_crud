import User from "../model/userSchema.js";


export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    console.log("seccessfully added user");
    res.status(201).json(newUser);
  } catch (error) {
    console.log("user adding error: " + error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUser = await User.find({});
    res.status(201).json(allUser);
  } catch (error) {
    console.log("dara reading error: " + error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(201).json(user);
  } catch (error) {
    console.log("dara reading error: " + error);
  }
};

export const updateUser = async (req, res) => {
    const user = req.body;
const editUser = new User(user);
  try {
    const user = await User.updateOne({ _id: req.params.id },editUser);
    res.status(201).json(user);
  } catch (error) {
    console.log("dara reading error: " + error);
  }
};



export const deleteUser = async (req, res) => {
  
  try {
    console.log("deletting user")
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(201).json(user);
  } catch (error) {
    console.log("dara reading error: " + error);
  }
};


