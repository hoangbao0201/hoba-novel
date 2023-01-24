import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { getMeHandle } from "../controllers/user.controller";

const router = express.Router();

router.get("/", deserializeUser, getMeHandle);

export default router;
