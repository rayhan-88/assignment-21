import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import router from "./src/routes/api.js";

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(hpp())

const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)
mongoose.connect("mongodb://localhost:27017/assignment",{autoIndex:true}).then(()=>{
    console.log("MongoDB Connected!")
}).catch(err=>{
    console.log({message:"MongoDB Connection Error",error:err.toString()});});

app.set('etag', false);
app.use("/api/",router)



export default app;