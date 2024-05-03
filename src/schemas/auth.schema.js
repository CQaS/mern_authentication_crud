import {
    z
} from "zod"

export const registroSchema = z.object({
    username: z.string({
        required_error: "requirido Username"
    }),
    email: z.string({
            required_error: "requirido Email"
        })
        .email({
            message: "Invalid email"
        }),
    password: z.string({
            required_error: "requirido Password"
        })
        .min(6, {
            message: "Invalid password, minimum length is 6 characters"
        })
})

export const loginSchema = z.object({
    email: z.string({
            required_error: "requirido Email"
        })
        .email({
            message: "Eso no es un Email"
        }),
    password: z.string({
            required_error: "requirido Password"
        })
        .min(6, {
            message: "Invalid password, minimum length is 6 characters"
        })
})