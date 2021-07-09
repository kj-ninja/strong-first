import * as actionTypes from '../action-types';
import axios from "axios";

export const fetchBigSixSuccess = (exercises) => ({type: actionTypes.FETCH_BIG_SIX_SUCCESS, payload: exercises});
export const fetchBigSixFail = (error) => ({type: actionTypes.FETCH_BIG_SIX_FAIL, payload: error});

export const fetchBigSix  = (token) => {
    return dispatch => {
        axios.get(
            'https://ironman.coderaf.com/workout-program/big-six',
            {
                'headers': {'Access-Token': token}
            })
            .then(function (response) {
                // handle success
                dispatch(fetchBigSixSuccess(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(fetchBigSixFail(error.response.status));
            })
    };
};
