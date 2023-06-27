import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 4,
        required: true,
    },
    
});

export default mongoose.model("user", userSchema)