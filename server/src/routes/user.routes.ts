import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { checkToken, getMeHandle } from "../controllers/user.controller";

const router = express.Router();

router.get("/", deserializeUser, getMeHandle);

router.get("/check-token", deserializeUser, checkToken);

export default router;
