import {combineReducers} from "redux";
import authReducer from './auth';
import trainingsReducer from './trainings'
import addTrainingReducer from './addTraining';

export default combineReducers({
    auth: authReducer,
    trainings: trainingsReducer,
    addTrainingForm: addTrainingReducer
});