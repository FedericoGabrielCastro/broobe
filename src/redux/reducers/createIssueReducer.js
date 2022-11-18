import { CREATE_ISSUE, CREATE_ISSUE_FAIL, CREATE_ISSUE_SUCCESS } from "../types"

const initialState = {}

export const createIssueReducer = (state = initialState, { type } ) => {
  
    switch (type) {

        case CREATE_ISSUE_SUCCESS:
            return window.location.href = "/issues"
        case CREATE_ISSUE_FAIL:
            return state
        case CREATE_ISSUE:
            return state

    default:
        return state
    }
}
