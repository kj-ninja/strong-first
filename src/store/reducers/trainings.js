import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trainings: [],
    error: false,
    loading: true,
    trainingToShow: null,
    trainingToDelete: null
}

const trainingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRAININGS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_TRAININGS_SUCCESS:
            const trainingsToShow = [];
            if (action.trainings.length === 1) {
                trainingsToShow.push(...action.trainings);
            } else if (action.trainings[action.trainings.length - 1].date === action.trainings[action.trainings.length - 2].date) {
                trainingsToShow.push(action.trainings[action.trainings.length - 2]);
                trainingsToShow.push(action.trainings[action.trainings.length - 1]);
            } else {
                trainingsToShow.push(action.trainings[action.trainings.length - 1]);
            }
            return {
                ...state,
                trainingToShow: trainingsToShow,
                trainings: action.trainings,
                loading: false,
                trainingToDelete: trainingsToShow
            }
        case actionTypes.FETCH_TRAININGS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.TRAINING_TO_SHOW_HANDLER:
            return {
                ...state,
                trainingToShow: action.trainingToShow
            }
        case actionTypes.TRAININGS_CLEAR_ERROR:
            return {
                ...state,
                error: false
            }
        case actionTypes.EDIT_TRAINING_IN_STORE:
            const editTrainings = state.trainings.filter(training => training.id !== action.payload.id);
            return {
                ...state,
                trainings: editTrainings.concat(action.payload)
            }
        case actionTypes.DELETE_TRAINING_FROM_STORE:
            const newTrainings = state.trainings.filter(training => training.id !== action.payload);
            return {
                ...state,
                trainings: newTrainings
            }
        case actionTypes.TRAINING_TO_DELETE:
            return {
                ...state,
                trainingToDelete: action.payload
            }
        default:
            return state;
    }
};

export default trainingsReducer;