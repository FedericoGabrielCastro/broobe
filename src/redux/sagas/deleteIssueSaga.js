import { CLOSE_MODAL_DELETE_ISSUE, GET_ISSUES } from '../types';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

export function* deleteIssueSaga({ id }) {
    const deleteIssueUrl = `https://challenge.broobe.net/api/v1/issues/${id.id}`;

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('bearer')}` },
    };

    const createIssue = () => {
        return axios
            .delete(
                deleteIssueUrl,

                config
            )
            .then((response) => console.log(response.data));
    };

    try {
        yield call(createIssue);
        yield put({
            type: CLOSE_MODAL_DELETE_ISSUE,
        });
        yield put({
            type: GET_ISSUES,
        });
    } catch (error) {
        console.log('create issue error: ', error);
        yield put({
            type: CLOSE_MODAL_DELETE_ISSUE,
        });
    }
}
