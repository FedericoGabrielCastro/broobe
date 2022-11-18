import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from "../types"

const initialState = false

export const postLoginUserReducer = (state = initialState, { type }) => {

    switch (type) {

        case LOGIN_USER:
            return state = true 

        case LOGIN_USER_SUCCESS:
            window.location.href = "/issues" 
            return state = false

        case LOGIN_USER_FAIL:
            return state = false
                        
    default:
        return state
    }
}
