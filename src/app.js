import express from "express";
import authRoutes from "./routes/authRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app=express();

app.use(express.json());

app.use("/auth",authRoutes);
app.use("/content",contentRoutes);

app.listen(3000,()=>{
    console.log("server is runnig on port 3000");
});
