import { OPEN_MODAL_DELETE_ISSUE, CLOSE_MODAL_DELETE_ISSUE, DELETE_ISSUE_CONFIRM } from "../types"

const initialState = {
    modal: false,
    id: null
}

export const deleteIssueReducer = (state = initialState, { type, id }) => {
    switch (type) {

        case OPEN_MODAL_DELETE_ISSUE:
            return { 
                ...state,
                modal: true,
                id: id    
            }
        
        case CLOSE_MODAL_DELETE_ISSUE:
            return { 
                ...state,
                modal: false
            }

        case DELETE_ISSUE_CONFIRM:
            return {
                ...state,
                modal: false
            }

    default:
        return state
    }
}
