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
            const sortedTrainings = action.trainings.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);

                return dateA - dateB;
            })

            if (sortedTrainings.length === 1) {
                trainingsToShow.push(...action.trainings);
            } else if (sortedTrainings[sortedTrainings.length - 1].date === sortedTrainings[sortedTrainings.length - 2].date) {
                trainingsToShow.push(sortedTrainings[sortedTrainings.length - 2]);
                trainingsToShow.push(sortedTrainings[sortedTrainings.length - 1]);
            } else {
                trainingsToShow.push(sortedTrainings[sortedTrainings.length - 1]);
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
                trainingToShow: action.trainingToShow,
                trainingToDelete: action.trainingToShow
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