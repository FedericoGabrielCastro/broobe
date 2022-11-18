import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from "../types"

const initialState = false

export const postRegisterUserReducer = (state = initialState, { type }) => {

    switch (type) {

        case REGISTER_USER:
            return state = true 

        case REGISTER_USER_SUCCESS:
            window.location.href = "/auth/login" 
            return state = false

        case REGISTER_USER_FAIL:
            return state = false
                        
    default:
        return state
    }
}
