import * as actionTypes from './actionTypes';
import firebase from "../../api/firebase";
import {translate} from "../../functions/translate";

export const authStart = () => ({type: actionTypes.AUTH_START});
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
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

                        localStorage.setItem('token', res.token);
                        dispatch(authSuccess(res.token), res.claims.user_id);
                        dispatch(checkAuthTimeout(expireTime));
                    });
            })
            .catch(function (error) {
                dispatch(authFail(translate(error.code)));
            });
    };
};