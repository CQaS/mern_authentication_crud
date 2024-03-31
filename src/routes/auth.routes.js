import {
    Router
} from "express";
import {
    login,
    registro,
    logout
} from "../controllers/auth.controller.js";

const routerAuth = Router();

routerAuth.post('/registro', registro)
routerAuth.post('/login', login)
routerAuth.post('/logout', logout)

export default routerAuth