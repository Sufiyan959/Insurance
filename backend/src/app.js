import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors()); 


//common midddleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended:true, limit:"16kb"}))
app.use(express.static("public")) 

app.use(cookieParser())

//import routes
import userRouter from "./routes/users.routes.js"

//routes

app.use("/user", userRouter )



export { app }