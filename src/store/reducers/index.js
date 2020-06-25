import {combineReducers} from "redux";
import authReducer from './auth';
import trainingsReducer from './trainings'

export default combineReducers({
    auth: authReducer,
    trainings: trainingsReducer
});