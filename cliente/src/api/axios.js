import axios from "axios";

const instaciaAxios = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
})

export default instaciaAxios