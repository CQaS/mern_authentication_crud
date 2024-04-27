export const validarSchema = (schema) => (req, res, next) => {
    try {
        console.log(req.body)
        schema.parse(req.body)
        next()
    } catch (e) {
        return res.status(400).json({
            e: e.errors.map((ERR) => ERR.message)
        })
    }
}