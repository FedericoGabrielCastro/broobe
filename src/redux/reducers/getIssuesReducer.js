import {
    GET_ISSUES,
    GET_ISSUES_SUCCESS,
    GET_ISSUES_FAIL
} from "../types"

const initialState = {
    loading: false,
    issues: []
}

export const getIssuesReducer = (state = initialState, { type, issues }) => {
    switch (type) {

        case GET_ISSUES:
            return {
                ...state,
                loading: true
            } 

        case GET_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: issues
            }

        case GET_ISSUES_FAIL:
            return {
                ...state,
                loading: false
            }

    default:
        return state
    }
}
