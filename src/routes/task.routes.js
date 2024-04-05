import {
    Router
} from "express";
import {
    authRequerido
} from "../middlewares/validarToken.js";
const router = Router();

router.get('/', authRequerido, (req, res) => {
    res.send('tareas')
})

export default router