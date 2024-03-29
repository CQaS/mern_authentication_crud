import User from '../models/user.models.js'

export const registro = async (req, res) => {
    const {
        username,
        password,
        email
    } = req.body

    try {
        const nuevoUsuaro = new User({
            username,
            password,
            email
        })

        const usuarioCreado = await nuevoUsuaro.save()
        res.json(usuarioCreado)

    } catch (error) {
        console.error(error)
    }

}
export const login = (req, res) => {
    res.send('LOGIN')

}