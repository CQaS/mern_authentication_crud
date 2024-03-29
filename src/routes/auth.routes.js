import {
    Router
} from "express";
import {
    login,
    registro
} from "../controllers/auth.controller.js";

const routerAuth = Router();

routerAuth.post('/registro', registro)
routerAuth.post('/login', login)

export default routerAuth