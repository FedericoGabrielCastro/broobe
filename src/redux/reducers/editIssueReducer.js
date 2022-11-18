import { EDIT_ISSUE_SUSSESS, EDIT_ISSUE_FAIL } from '../types';

const initialState = {};

export const editIssueReducer = (state = initialState, { type }) => {
    switch (type) {
        case EDIT_ISSUE_SUSSESS:
            return (window.location.href = '/issues');
        case EDIT_ISSUE_FAIL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
