import { EDIT_ISSUE } from "../types";

export const editIssueAction = ({id, name , description}) => ({
    type: EDIT_ISSUE,
    id,
    name,
    description
})
