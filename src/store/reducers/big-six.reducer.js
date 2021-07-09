import * as actionTypes from '../action-types';

const initialState = {
    bigSix: [],
    error: false
}

const bigSixReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_BIG_SIX_SUCCESS:
            return {
                ...state,
                bigSix: action.payload
            }
        case actionTypes.FETCH_BIG_SIX_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default bigSixReducer;
