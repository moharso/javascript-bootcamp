import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const user = new userModel({
      ...req.body,
    });

    await user.save();

    res.status(201).send(`New user: ${req.body.username} is created`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllUsers = async (req, res) => {
    try {
      const users = await userModel.find({})
  
      res.status(201).send(users);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  export const getUser = async (req, res) => {
    try {
      const users = await userModel.find({ username: req.params.username })
  
      res.status(201).send(users);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  export const deleteUser = async (req, res) => {
    try {
      const users = await userModel.deleteOne({ username: req.params.username })
  
      res.status(201).send(users);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  export const updateUser = async (req, res) => {
    try {
      const users = await userModel.findOneAndUpdate({
        username: req.params.username
      }, {
        $set: req.body
      })
  
      res.status(201).send(users);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };
  

  
