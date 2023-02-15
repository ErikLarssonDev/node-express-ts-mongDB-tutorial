import { Router, Request, Response, NextFunction } from "express";
import Post from "../../models/post";
import { BadRequestError } from "../../../common";
import User, { UserDoc } from "../../models/user";

const router = Router();

router.delete(
  "/api/post/delete/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
      return next(new BadRequestError("Post id is required!"));
    }

    try {
      await Post.findOneAndRemove({ _id: id }); // Better to use remove than delete. The document will stay in a cache in the storage in the mongoDB.
    } catch (err) {
      next(new Error("Failed to delete post!"));
    }
    const user = await User.findOneAndUpdate(
      { _id: req.currentUser!.userId },
      { $pull: { posts: id } },
      { new: true }
    );

    if (!user) return next(new Error())

    res.status(200).send(user);
  }
);

export { router as deletePostRouter };
