import express from "express";
import authCtrl from "../controllers/authCtrl";

const router = express.Router();

router.post("/register", authCtrl.register);

router.post("/login", authCtrl.login);

router.get("/logout", authCtrl.logout);

router.get("/refresh_token", authCtrl.generateAccessToken);

export default router;
