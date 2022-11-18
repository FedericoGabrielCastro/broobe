import { takeLatest } from 'redux-saga/effects'
import { postRegisterUserSaga } from "./postRegisterUserSaga";
import { CREATE_ISSUE, DELETE_ISSUE_CONFIRM, EDIT_ISSUE, GET_ISSUES, LOGIN_USER, REGISTER_USER } from '../types';
import { postLoginUserSaga } from './postLoginUserSaga';
import { getIssuesSaga } from './getIssuesSage';
import { createIssueSaga } from './createIssueSaga';
import { deleteIssueSaga } from './deleteIssueSaga';
import { editIssueSaga } from './editIssueSaga';

export function* wacherSaga() {
    yield takeLatest(REGISTER_USER, postRegisterUserSaga), // Register user
    yield takeLatest(LOGIN_USER, postLoginUserSaga), // Login user
    yield takeLatest(GET_ISSUES, getIssuesSaga), // Get issues
    yield takeLatest(CREATE_ISSUE, createIssueSaga), // Create issue
    yield takeLatest(DELETE_ISSUE_CONFIRM, deleteIssueSaga), // Delete issue
    yield takeLatest(EDIT_ISSUE, editIssueSaga) // Edit issue
}