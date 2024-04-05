import {
    Router
} from "express";
import {
    authRequerido
} from "../middlewares/validarToken.js";
const router = Router();
import {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} from "../controllers/taks.controller.js";


router.get('/tasks/', authRequerido, getTasks)
router.get('/tasks/:id', authRequerido, getTask)
router.post('/tasks/', authRequerido, createTask)
router.delete('/tasks/:id', authRequerido, deleteTask)
router.put('/tasks/:id', authRequerido, updateTask)

export default router