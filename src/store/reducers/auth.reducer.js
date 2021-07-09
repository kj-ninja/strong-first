import * as actionTypes from '../action-types';

const initialState = {
    token: null,
    error: null,
    loading: false
};

const auth = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                error: null,
                loading: false
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null
            };
        case actionTypes.AUTH_CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export default auth;
