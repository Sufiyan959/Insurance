import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
import path from "path"; // ✅ Import path

dotenv.config({ path: path.resolve(process.cwd(), "src/.env") }); // ✅ Adjusted path

const mongoUrl = "mongodb://localhost:27017/"

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/");
        console.log(`MongoDB connected!`);
    } catch (error) {
        console.log("MongoDB Connection error", error);
        process.exit(1);
    }
};

export default connectDB;
