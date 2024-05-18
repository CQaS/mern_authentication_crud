import Task from "../models/task.models.js"

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        }).populate('user')

        res.json(tasks)
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            msg: 'Task not found'
        })
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user')
        if (!task) return res.status(404).json('Task not found')
        res.json(task)
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            msg: 'Task not found'
        })
    }
}

export const createTask = async (req, res) => {
    try {
        console.log('body')
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
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            msg: 'Task not created',
        })
    }

}

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json('Task not found')
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            msg: 'Task not deleted',
        })

    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!task) return res.status(404).json('Task not found')
        res.json(task)
    } catch (error) {
        console.error(error)
        return res.status(404).json({
            msg: 'Task not deleted',
        })

    }

}