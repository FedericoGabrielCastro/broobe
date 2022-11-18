import { combineReducers } from 'redux';
import { createIssueReducer } from './createIssueReducer';
import { deleteIssueReducer } from './deleteIssueReducer';
import { editIssueReducer } from './editIssueReducer';
import { getIssuesReducer } from './getIssuesReducer';
import { postLoginUserReducer } from './postLoginUserReducer';
import { postRegisterUserReducer } from './postRegisterUserReducer';

export const rootReducer = combineReducers({
    postRegisterUserReducer: postRegisterUserReducer, // Register a new user.
    postLoginUserReducer: postLoginUserReducer, // Login user.
    getIssuesReducer: getIssuesReducer, // Get all issues.
    createIssueReducer: createIssueReducer, // Create new issue.
    deleteIssueReducer: deleteIssueReducer, // Delete issue
    editIssueReducer: editIssueReducer, // Edit issues
});
