import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from '../types';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';

export function* postLoginUserSaga({ password, email }) {
    const loginUrl = 'https://challenge.broobe.net/api/v1/login';

    const loginUser = () => {
        return axios
            .post(loginUrl, {
                email: email,
                password: password,
            })
            .then((response) =>
                localStorage.setItem('bearer', response.data.token)
            );
    };

    try {
        yield call(loginUser);
        yield put({
            type: LOGIN_USER_SUCCESS,
        });
    } catch (error) {
        console.log('login error: ', error);
        yield put({
            type: LOGIN_USER_FAIL,
        });
    }
}
