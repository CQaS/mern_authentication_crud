import User from '../models/user.models.js'
import passHash from 'bcryptjs'
import {
    crearToken
} from '../libs/jwt.js'

export const registro = async (req, res) => {


    const {
        username,
        password,
        email
    } = req.body


    try {

        const usuarioExiste = await User.findOne({
            email
        })
        if (usuarioExiste) return res.status(400).json(['El usuario existe'])

        const passwordHash = await passHash.hash(password, 10)
        const nuevoUsuaro = new User({
            username,
            password: passwordHash,
            email
        })

        const usuarioCreado = await nuevoUsuaro.save()

        const token = await crearToken({
            id: usuarioCreado.id
        })
        res.cookie("token", token)

        res.json({
            id: usuarioCreado.id,
            username: usuarioCreado.username,
            email: usuarioCreado.email,
            createdAt: usuarioCreado.createdAt,
            updatedAt: usuarioCreado.updatedAt
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error
        })
    }

}

export const login = async (req, res) => {

    const {
        password,
        email
    } = req.body


    try {
        const usuarioEncontrado = await User.findOne({
            email
        })

        if (!usuarioEncontrado) res.status(404).json({
            msg: 'Usuario no encontrado'
        })

        const passwordDistinto = await passHash.compare(password, usuarioEncontrado.password)

        if (!passwordDistinto) res.status(404).json({
            msg: 'Password incorrecto'
        })

        if (usuarioEncontrado && passwordDistinto) {
            const token = await crearToken({
                id: usuarioEncontrado.id
            })
            res.cookie("token", token)

            res.json({
                id: usuarioEncontrado.id,
                username: usuarioEncontrado.username,
                email: usuarioEncontrado.email,
                createdAt: usuarioEncontrado.createdAt,
                updatedAt: usuarioEncontrado.updatedAt
            })
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error
        })
    }

}

export const logout = (req, res) => {
    res.cookie("token", '', {
        expires: new Date(0)
    })
    res.sendStatus(200)
}

export const profile = async (req, res) => {
    console.log(req.user)

    const userData = await User.findById(req.user.id)

    if (!userData) return res.status(404).json({
        msg: 'User not found'
    })

    return res.json({
        id: userData._id,
        username: userData.username,
        email: userData.email,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt
    })

}