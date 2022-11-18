import axios from "axios";
import { call, put} from "redux-saga/effects"
import { EDIT_ISSUE_FAIL, EDIT_ISSUE_SUSSESS } from "../types";

export function* editIssueSaga({
    id,
    name,
    description 
}) {
    console.log(id, name , description)
    const editIssueUrl = `https://challenge.broobe.net/api/v1/issues/${id}`

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("bearer")}`}
    }

    const createIssue = () => {
        return axios.patch(
            editIssueUrl,
            {
                "id": 134,
                "description": description,
                "name": name,
                "priority_id": 1
            },
            config
        ).then(response => console.log(response.data))
    }

    try {
        yield call(createIssue)
        yield put({
            type: EDIT_ISSUE_SUSSESS
        })
    } catch (error) {
        console.log("create issue error: ", error )
        yield put({
            type: EDIT_ISSUE_FAIL
        })
    }
}