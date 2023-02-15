import { Router, Request, Response, NextFunction } from "express";
import User from "../../models/user";
import { authenticationService } from "../../../common";
import { currentUser } from "./../../../common";
import jwt from "jsonwebtoken";

const router = Router();

router.get(
  "/current-user",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ currentUser: req.currentUser });
  }
);

export { router as currentUserRouter };
