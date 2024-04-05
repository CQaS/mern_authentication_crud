import {
    Router
} from "express";
import {
    login,
    registro,
    logout,
    profile
} from "../controllers/auth.controller.js";
import {
    authRequerido
} from "../middlewares/validarToken.js";

const routerAuth = Router();

routerAuth.post('/registro', registro)
routerAuth.post('/login', login)
routerAuth.post('/logout', logout)
routerAuth.get('/profile', authRequerido, profile)

export default routerAuth