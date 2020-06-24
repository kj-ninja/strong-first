import * as actionTypes from './actionTypes';
import firebase from "../../api/firebase";
import {translate} from "../../functions/translate";

export const authStart = () => ({type: actionTypes.AUTH_START});
export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
};
export const authFail = (error) => ({type: actionTypes.AUTH_FAIL, error})

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const login = (values) => {
    return dispatch => {
        dispatch(authStart());

        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then(res => {
                res.user.getIdTokenResult()
                    .then(res => {
                        const expireTime = res.claims.exp - res.claims.auth_time;
                        const expirationDate = new Date(new Date().getTime() + expireTime * 1000)

                        localStorage.setItem('token', res.token);
                        localStorage.setItem('expirationDate', expirationDate);
                        dispatch(authSuccess(res.token));
                        dispatch(checkAuthTimeout(expireTime));
                    });
            })
            .catch(function (error) {
                console.log(error);
                dispatch(authFail(translate(error.code)));
            });
    };
};

export const authStateCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}