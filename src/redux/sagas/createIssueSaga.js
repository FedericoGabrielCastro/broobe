import { CREATE_ISSUE, CREATE_ISSUE_FAIL, CREATE_ISSUE_SUCCESS } from "../types"
import { put, call } from "redux-saga/effects"
import axios from "axios";

export function* createIssueSaga({
    title,
    description,
    id
}) {
 
    const createIssueUrl = "https://challenge.broobe.net/api/v1/issues"

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("bearer")}`}
    }

    const createIssue = () => {
        return axios.post(createIssueUrl, {
            "id": Math.random(), // aca le llega un numero super aleartorio desde uuid pero decidio no tomarlo asique math random
            "name": title,
            "description": description,
            "priority_id": 1
          },
        config).then(response => console.log(response.data))
    }

    try {
        yield call(createIssue)
        yield put({
            type: CREATE_ISSUE_SUCCESS
        })
    } catch (error) {
        console.log("create issue error: ", error )
        yield put({
            type: CREATE_ISSUE_FAIL
        })
    }
}