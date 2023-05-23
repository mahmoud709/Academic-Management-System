import { Router } from "express";
import { login, loginForm } from "../controllers/user.js";
const router = new Router();
router.get('/',loginForm)
router.post('/login',login)
export default router;