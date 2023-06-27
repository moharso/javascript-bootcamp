import mongoose from "mongoose";
import express from "express";
//import studentRoute from "./routes/studentRoute.js"
import userRoute from "./routes/userRoute.js"

const app = express();
const port = 3005;

app.use(express.json())

const connectionToDB = async () => {
     try {
      await mongoose.connect(
        "mongodb+srv://moharso:grizlis@cluster0.scpqode.mongodb.net/users"
      );
      console.log("Pavyko");
    } catch (error) {
       console.log(error);
     }
};

app.use('/user', userRoute)

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port: ${port}`);
});
