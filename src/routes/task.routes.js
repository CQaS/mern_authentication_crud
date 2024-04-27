import {
    Router
} from "express";
import {
    authRequerido
} from "../middlewares/validarToken.middleware.js";
const router = Router();
import {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} from "../controllers/taks.controller.js";
import {
    validarSchema
} from "../middlewares/validarSchema.middleware.js";
import {
    crearTaskSchema
} from "../schemas/task.schema.js";


router.get('/tasks', authRequerido, getTasks)
router.post('/tasks', authRequerido, validarSchema(crearTaskSchema), createTask)
router.get('/tasks/:id', authRequerido, getTask)
router.delete('/tasks/:id', authRequerido, deleteTask)
router.put('/tasks/:id', authRequerido, updateTask)

export default router