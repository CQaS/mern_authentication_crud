import axios from 'axios'

const API = 'http://localhost:3000/api'

export const registroReq = (user) => axios.post(`${API}/registro`, user)
export const loginReq = (user) => axios.post(`${API}/login`, user)