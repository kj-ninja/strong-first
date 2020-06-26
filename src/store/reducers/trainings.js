import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trainings: null,
    error: false,
    loading: true,
    trainingToShow: null
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
                trainings: false,
                loading: false,
                error: action.error
            }
        case actionTypes.TRAINING_TO_SHOW_HANDLER:
            return {
                ...state,
                trainingToShow: action.trainingToShow
            }
        default:
            return state;
    }
};

export default trainings;