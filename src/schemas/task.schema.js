import {
    z
} from "zod"

export const crearTaskSchema = z.object({
    titulo: z.string({
        required_error: "Titulo required",
    }),
    descripcion: z.string({
        required_error: "Descripcion required, please provide a descripcion string",
    }),
    fecha: z.string().datetime().optional(),
})