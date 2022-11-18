import { OPEN_MODAL_DELETE_ISSUE, DELETE_ISSUE_CONFIRM, CLOSE_MODAL_DELETE_ISSUE } from "../types"


export const deleteIssueAction = (id) => ({
    type: DELETE_ISSUE_CONFIRM,
    id
})

export const openDeleteIssueModalAction = (id) => ({
    type: OPEN_MODAL_DELETE_ISSUE,
    id
})

export const closeDeleteIssueModalAction = () => ({
    type: CLOSE_MODAL_DELETE_ISSUE,
})

