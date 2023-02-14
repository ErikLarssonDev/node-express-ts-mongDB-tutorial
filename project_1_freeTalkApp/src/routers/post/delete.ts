import { Router, Request, Response, NextFunction } from "express";
import Post from "../../models/post";

const router = Router();

router.delete(
  "/api/post/delete/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
      const error = new Error("Post id is required!") as CustomError;
      error.status = 400;
      next(error);
    }
    try {
      await Post.findOneAndRemove({ _id: id }); // Better to use remove than delete. The document will stay in a cache in the storage in the mongoDB.
    } catch (err) {
      next(new Error("Failed to delete post!"));
    }

    res.status(200).json({ success: true });
  }
);

export { router as deletePostRouter };
