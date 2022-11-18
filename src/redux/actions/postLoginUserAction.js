import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from '../types';

export const postLoginUserAction = ({ password, email }) => ({
    type: LOGIN_USER,
    password: password,
    email: email,
});

export const loginUserSuccess = () => ({
    type: LOGIN_USER_SUCCESS,
});

export const loginUserFail = () => ({
    type: LOGIN_USER_FAIL,
});
