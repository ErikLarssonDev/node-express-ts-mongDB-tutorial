import * as dotenv from "dotenv";
dotenv.config();

import { Application } from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import cookieSession from "cookie-session";
import mongoose from "mongoose";
import { currentUser, errorHandler } from "@shopapp1/common";
import { authRouters } from "./auth/auth.routers";
import { sellerRouters } from "./seller/seller.routes";
import { buyerRouters } from "./buyer/buyer.routes";

export class AppModule {
  constructor(public app: Application) {
    app.set("trust-proxy", true);

    app.use(
      cors({
        origin: "*",
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );

    app.use(urlencoded({ extended: false }));
    app.use(json());
    app.use(
      cookieSession({
        signed: false,
        secure: false,
      })
    );

    Object.setPrototypeOf(this, AppModule.prototype);
  }
  async start() {
    if (!process.env.MONGO_URI) {
      throw new Error("MONG_URI must be defined!");
    }
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY must be defined!");
    }
    if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("STRIPE_SECRET_KEY must be defined!");
      }

    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(process.env.MONGO_URI || ""); // Type error if not a string, but then it is catched below.
    } catch (err) {
      console.error(err);
      throw new Error("database connection error");
    }

    this.app.use(currentUser(process.env.JWT_KEY!));
    this.app.use(authRouters);
    this.app.use(sellerRouters);
    this.app.use(buyerRouters)
    this.app.use(errorHandler);
    this.app.listen(8080, () => console.log("OK! port: 8080"));
  }
}
