import { Router, Request, Response, NextFunction } from "express";
import Post from "../../models/post";
import Comment from "../../models/comment";
import { BadRequestError } from "../../../common";

const router = Router();

router.delete(
  "/api/comment/:commentId/delete/:postId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { commentId, postId } = req.params;
    if (!commentId || !postId) {
      return next(new BadRequestError("Comment id and post id are required!"));
    }
    try {
      await Comment.findOneAndRemove({ _id: commentId }); // Better to use remove than delete. The document will stay in a cache in the storage in the mongoDB.
    } catch (err) {
      next(new Error("Failed to delete comment!"));
    }
    await Post.findOneAndUpdate(
      { _id: postId },
      { $pull: { comments: commentId } }
    );
    res.status(200).json({ success: true });
  }
);

export { router as deleteCommentRouter };
