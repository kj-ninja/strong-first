import * as actionTypes from './actionTypes';
import firebase from "../../api/firebase";
import {translate} from "../../functions/translate";
import {registerUser} from "../../api/ironman";
import axios from "axios";

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

const getExpirationDate = (res) => {
    const expireTime = res.claims.exp - res.claims.auth_time;
    return new Date(new Date().getTime() + expireTime * 1000);
};

export const login = (values) => {
    return dispatch => {
        dispatch(authStart());

        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then(res => {
                res.user.getIdTokenResult()
                    .then(res => {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('expirationDate', getExpirationDate(res));
                        dispatch(authSuccess(res.token));
                        dispatch(checkAuthTimeout(res.claims.exp - res.claims.auth_time));
                    });
            })
            .catch(function (error) {
                dispatch(authFail(translate(error.code)));
            });
    };
};

export const register = (values) => {
    return dispatch => {
        dispatch(authStart());

        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then(res => {
                res.user.getIdTokenResult()
                    .then(res => {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('expirationDate', getExpirationDate(res));
                        dispatch(authSuccess(res.token));
                        dispatch(checkAuthTimeout(res.claims.exp - res.claims.auth_time));
                    });
                firebase.auth().currentUser.getIdToken()
                    .then((token) => {
                        console.log(token);
                        axios.post('https://ironman.coderaf.com/user', {
                            username: 'Andrzej' + (Math.floor(Math.random() * 666) + 1),
                            email: values.email,
                            externalId: res.user.uid
                        }, {
                            headers: {
                                'Access-Token': token
                            },
                        })
                            .then(function (res) {
                                console.log('user zarejestrowany');
                            })
                            .catch(error => {
                                dispatch(authFail(translate(error.code)));
                            });
                    })
            })
            .catch(function (error) {
                // Handle Errors here.
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
};

export const authClearError = () => ({type: actionTypes.AUTH_CLEAR_ERROR});