import Users from "../models/userModel";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.body.headers.Authorization;

    if (!token)
      return res.status(400).json({
        msg: "Ошибка авторизации",
      });

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded)
      return res.status(400).json({
        msg: "Ошибка авторизации",
      });

    const user = await Users.findOne({
      _id: decoded.id,
    });

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export default auth;
