import express from "express";
import articleCtrl from "../controllers/articlesCtrl";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/article", auth, articleCtrl.create);
router.patch("/article/:id/like", auth, articleCtrl.likePost);
router.patch("/article/:id/unlike", auth, articleCtrl.unLikePost);

router.get("/home/articles", articleCtrl.getArticles);

router.get("/article/user/:id", articleCtrl.getArticleByUser);

router
  .route("/article/:id")
  .get(articleCtrl.getArticle)
  .put(auth, articleCtrl.updateBlog)
  .delete(auth, articleCtrl.deleteBlog);

export default router;
