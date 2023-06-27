import stundentModel from "../models/stundentModel.js";

export const createStudent = async (req, res) => {
  try {
    const student = new stundentModel({
      ...req.body,
    });

    await student.save();

    res.status(201).send(`New student name: ${req.body.name} is created`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllStudents = async (req, res) => {
    try {
      const students = await stundentModel.find({})
  
      res.status(201).send(students);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  export const getStudent = async (req, res) => {
    try {
      const students = await stundentModel.find({ name: req.params.name })
  
      res.status(201).send(students);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  export const deleteStudent = async (req, res) => {
    try {
      const students = await stundentModel.deleteOne({ name: req.params.name })
  
      res.status(201).send(students);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  export const updateStudent = async (req, res) => {
    try {
      const students = await stundentModel.findOneAndUpdate({
        name: req.params.name
      }, {
        $set: req.body
      })
  
      res.status(201).send(students);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };