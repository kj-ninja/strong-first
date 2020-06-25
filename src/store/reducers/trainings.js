import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trainings: [],
    error: false,
    loading: true,
    trainingToShow: []
}

const trainings = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRAININGS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_TRAININGS_SUCCESS:
            return {
                ...state,
                trainings: action.trainings,
                loading: false
            }
        case actionTypes.FETCH_TRAININGS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.TRAINING_TO_SHOW:
            return {
                ...state,
                trainingToShow: action.trainingToShow
            }
        default:
            return state;
    }
};

export default trainings;