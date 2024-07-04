import express from "express";
import { createUser } from "../controller/signupControle.js";

const router = express.Router();

router.route('/').post(createUser);

export default router;
