import * as Yup from "yup"

export const RegisterSchema = Yup.object({
    id: Yup.number(),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    created: Yup.string()
})