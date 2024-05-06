import instaciaAxios from "./axios"

export const getTasksReq = () => instaciaAxios.post(`/tasks`)
export const getTaskReq = (id) => instaciaAxios.get(`/tasks/${id}`)
export const crearTasksReq = (task) => instaciaAxios.post(`/tasks`, task)
export const actualizarTasksReq = (task) => instaciaAxios.put(`/tasks/${task._id}`, task)
export const borrarTasksReq = (id) => instaciaAxios.delete(`/tasks/${id}`)