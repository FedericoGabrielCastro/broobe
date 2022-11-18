import { REGISTER_USER } from "../types"

export const postRegisterUserAction = ({name, password, email}) => ({
    type: REGISTER_USER,
    name: name,
    password: password,
    email: email
})