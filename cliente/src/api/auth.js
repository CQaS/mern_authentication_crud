import instaciaAxios from "./axios"

export const registroReq = (user) => instaciaAxios.post(`/registro`, user)
export const loginReq = (user) => instaciaAxios.post(`/login`, user)
export const verificarTokenReq = () => instaciaAxios.get('/verificarToken')