import { REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../types';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';

export function* postRegisterUserSaga({ name, password, email }) {
    const registerUrl = 'https://challenge.broobe.net/api/v1/users';

    const registerUser = () => {
        return axios.post(registerUrl, {
            id: 1,
            name: name,
            email: email,
            password: password,
            created: Date.now().toString,
        });
    };

    try {
        yield call(registerUser);
        yield put({
            type: REGISTER_USER_SUCCESS,
        });
    } catch (error) {
        console.log('register error: ', error);
        yield put({
            type: REGISTER_USER_FAIL,
        });
    }
}
