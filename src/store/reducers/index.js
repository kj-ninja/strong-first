import {combineReducers} from "redux";
import authReducer from './auth.reducer';
import trainingsReducer from './trainings.reducer'
import addTrainingFormReducer from './add-training.reducer';
import bigSixReducer from './big-six.reducer';

export default combineReducers({
    auth: authReducer,
    trainings: trainingsReducer,
    addTrainingForm: addTrainingFormReducer,
    bigSix: bigSixReducer
});
