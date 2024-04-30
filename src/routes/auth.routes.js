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
} from "../middlewares/validarToken.middleware.js";
import {
    validarSchema
} from "../middlewares/validarSchema.middleware.js";
import {
    registroSchema,
    loginSchema

} from "../schemas/auth.schema.js";

const routerAuth = Router();

routerAuth.post('/registro', validarSchema(registroSchema), registro)
routerAuth.post('/login', validarSchema(loginSchema), login)
routerAuth.post('/logout', logout)
routerAuth.get('/profile', authRequerido, profile)

export default routerAuth