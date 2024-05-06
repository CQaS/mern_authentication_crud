import jwt from "jsonwebtoken";
import {
    SECRET_KEY
} from "../config.js";

export const authRequerido = (req, res, next) => {
    const {
        token
    } = req.cookies
    if (!token) return res.status(400).json({
        msg: 'no token'
    })

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(401).json({
            msg: 'Invalido token'
        })
        req.user = user

        console.log('token vaido')

        next();
    })
}