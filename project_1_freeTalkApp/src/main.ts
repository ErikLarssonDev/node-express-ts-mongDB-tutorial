import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(
  urlencoded({
    extended: false,
  })
);
app.use(json());

declare global {
  // Enables us to use status codes on errors
  interface CustomError extends Error {
    status?: number;
  }
}

// Error handler middle-ware
app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({ message: "Something went wrong!" });
  }
);

const start = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required!");
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    throw new Error("Database connection error!");
  }
  app.listen(8080, () => console.log("Server is up and running on port 8080"));
};

start();
