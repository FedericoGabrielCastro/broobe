import { CREATE_ISSUE } from "../types"

export const createIssueAction = ({title, description, id, priority_id}) => ({
    type: CREATE_ISSUE,
    title: title,
    description: description,
    id: id,
    priority_id: priority_id
})
