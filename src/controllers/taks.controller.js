import Task from "../models/task.models.js"

export const getTasks = async (req, res) => {

    const tasks = await Task.find({
        user: req.user.id
    }).populate('user')

    res.json(tasks)
}

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate('user')
    if (!task) return res.status(404).json('Task not found')
    res.json(task)
}

export const createTask = async (req, res) => {
    console.log(req.body)
    const {
        titulo,
        descripcion,
        fecha
    } = req.body

    const nuevaTarea = new Task({
        titulo,
        descripcion,
        fecha,
        user: req.user.id
    })
    const tareaGuardada = await nuevaTarea.save()
    res.json(tareaGuardada)
}

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json('Task not found')
    res.sendStatus(204)
}

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!task) return res.status(404).json('Task not found')
    res.json(task)

}