import Article from "../models/articlesModel";

const Pagination = (req) => {
  let page = Number(req.query.page) * 1 || 1;
  let limit = Number(req.query.limit) * 1 || 4;
  let skip = (page - 1) * limit;

  return { page, limit, skip };
};

const articleCtrl = {
  create: async (req, res) => {
    try {
      if (!req.user) return res.status(404).json({ msg: "Войдите!" });

      const { title, content, thumbnail, category } = req.body;
      const newArticle = await Article.create({
        ...req.body,
        user: req.user._id,
        title: title.toLowerCase(),
      });

      res.json({
        ...newArticle._doc,
        user: req.user,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getArticles: async (req, res) => {
    try {
      const articles = await Article.find();

      res.status(200).json({
        articles,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getArticle: async (req, res) => {
    try {
      const article = await Article.findById({ _id: req.params.id }).populate(
        "user",
        "-password"
      );

      if (!article) return res.status(404).json({ msg: "Такой статьи нет" });

      return res.json(article);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getArticleByUser: async (req, res) => {
    try {
      const article = await Article.findById({ _id: req.user._id }).populate(
        "user",
        "-password"
      );

      if (!article) return res.status(404).json({ msg: "Такой статьи нет" });

      return res.json(article);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateBlog: async (req, res) => {
    if (!req.user) return res.status(404).json({ msg: "Ошибка авторизвции" });

    try {
      const article = await Article.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user._id,
        },
        req.body
      );

      if (!article) return res.status(404).json({ msg: "Ошибка авторизвции" });

      res.json({ msg: "Update Success!", article });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteBlog: async (req, res) => {
    if (!req.user) return res.status(404).json({ msg: "Ошибка авторизвции" });

    try {
      const article = await Article.findOneAndDelete({
        _id: req.params.id,
        user: req.user._id,
      });

      if (!article) return res.status(404).json({ msg: "Ошибка авторизвции" });

      res.json({ msg: "Delete Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  likePost: async (req, res) => {
    try {
      const post = await Article.find({
        _id: req.params.id,
        likes: req.user._id,
      });
      if (post.length > 0)
        return res.status(400).json({ msg: "You liked this post." });

      const like = await Article.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { likes: req.user._id },
        },
        { new: true }
      );

      if (!like)
        return res.status(400).json({ msg: "This post does not exist." });

      res.json({ msg: "Liked Post!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  unLikePost: async (req, res) => {
    try {
      const like = await Article.findOneAndUpdate(
        { _id: req.params.id },
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      );

      if (!like)
        return res.status(400).json({ msg: "This post does not exist." });

      res.json({ msg: "UnLiked Post!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default articleCtrl;
