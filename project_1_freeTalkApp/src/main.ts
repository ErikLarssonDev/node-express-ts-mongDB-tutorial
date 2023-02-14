import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(urlencoded({
    extended: false
}
))
app.use(json())

const start = async () => {
    console.log(process.env.MONGO_URI)
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required!")
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch(err) {
        console.log(process.env.MONGO_URI)
        console.log(err)
        throw new Error("Database connection error!")
    }
    app.listen(8080, () => console.log("Server is up and running on port 8080"));
}

start()
