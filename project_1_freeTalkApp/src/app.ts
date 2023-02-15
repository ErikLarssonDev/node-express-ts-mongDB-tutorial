import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import cors from 'cors'
import cookieSession from "cookie-session";
import {
  newPostRouter,
  deletePostRouter,
  updatePostRouter,
  showPostRouter,
  addImagesRouter,
  deleteImagesRouter,

  newCommentRouter,
  deleteCommentRouter,

  signinRouter,
  signupRouter,
  currentUserRouter,
} from "./routers";
import { requireAuth, currentUser, errorHandler, NotFoundError } from "../common";
import { signoutRouter } from "./routers/auth/signout";

const app = express();

app.use(cors({
    origin: "*", // It is not necessary, app.use(cors() will do the same as default is "*". This makes it possible for all client applications to access our API.
    optionsSuccessStatus: 200
}))

app.set('trust proxy', true) // So that the API will accept the local proxy

app.use(
  urlencoded({
    extended: false,
  })
);
app.use(json());
app.use(cookieSession({ // In production, change to true.
    signed: false,
    secure: false
}))

app.use(currentUser)

// Routes
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)
app.use(currentUserRouter)

app.use(requireAuth, newPostRouter);
app.use(requireAuth, deletePostRouter);
app.use(requireAuth, updatePostRouter);
app.use(showPostRouter); // Anyone can see posts without logging in.
app.use(requireAuth, addImagesRouter)
app.use(requireAuth, deleteImagesRouter)

app.use(requireAuth, newCommentRouter);
app.use(requireAuth, deleteCommentRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  return next(new NotFoundError())
  
});

// Error handler middle-ware
app.use(errorHandler);

export { app }