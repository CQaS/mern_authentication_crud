import instaciaAxios from "./axios"

export const getTasksReq = () => instaciaAxios.get(`/tasks`)
export const getTaskReq = (id) => instaciaAxios.get(`/tasks/${id}`)
export const crearTasksReq = (task) => instaciaAxios.post(`/tasks`, task)
export const actualizarTasksReq = (id, task) => instaciaAxios.put(`/tasks/${id}`, task)
export const borrarTasksReq = (id) => instaciaAxios.delete(`/tasks/${id}`)