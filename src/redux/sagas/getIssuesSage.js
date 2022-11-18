import {
    GET_ISSUES_SUCCESS,
    GET_ISSUES_FAIL
} from "../types"
import { put, call } from "redux-saga/effects"
import axios from "axios"

export function* getIssuesSaga() {

    const getIssuesUrl = "https://challenge.broobe.net/api/v1/issues"

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("bearer")}`}
    }

    var issues

    const getIssues = () => {
        return axios.get(
            getIssuesUrl,  
            config
        ).then(response => {return issues = response.data})
    }

    try {
        yield call(getIssues)
        yield put({
            type: GET_ISSUES_SUCCESS,
            issues: issues
        })
    } catch (error) {
        console.log("get issues fail: ", error)
        yield put({
            type: GET_ISSUES_FAIL
        })
    }
}