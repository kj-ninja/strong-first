import * as actionTypes from '../action-types';
import {
  httpGetTrainingsByDateRange,
  httpAddTraining,
  httpEditTraining,
  httpDeleteTraining
} from '../../api/ironman/ironman';
import {getCalendarInitialData, wrapCalendarWithTrainings} from "./calendar.actions";

export const loading = () => ({type: actionTypes.LOADING});
export const getTrainingsSuccess = (trainings) => ({type: actionTypes.GET_TRAININGS_SUCCESS, trainings: trainings});
export const getTrainingsFail = (error) => ({type: actionTypes.GET_TRAININGS_FAIL, error: error});
export const trainingToShowHandler = (training) => ({
  type: actionTypes.TRAINING_TO_SHOW_HANDLER,
  trainingToShow: training
});
export const trainingsClearError = () => ({type: actionTypes.TRAININGS_CLEAR_ERROR});
export const editTrainingInStore = (training) => ({type: actionTypes.EDIT_TRAINING_IN_STORE, payload: training});
export const trainingToDelete = (training) => ({type: actionTypes.TRAINING_TO_DELETE, payload: training});

export const initCalendar = (today) => {
  return async (dispatch, getState) => {
    dispatch(loading());
    try {
      dispatch(getCalendarInitialData(today));

      const calendarDates = getState().calendar.calendarStructure[0].dates;
      const dates = {
        dateFrom: calendarDates[0].date,
        dateTo: calendarDates[calendarDates.length -1].date,
      };

      const trainings = await httpGetTrainingsByDateRange(dates);
      dispatch(wrapCalendarWithTrainings(trainings));

      dispatch(getTrainingsSuccess(trainings));
    } catch (error) {
      dispatch(getTrainingsFail(error.response.status));
    }
  };
};

export const addTraining = (training) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await httpAddTraining(training);
      dispatch(trainingsClearError());
    } catch (error) {
      dispatch(getTrainingsFail(error));
    }
  };
};

export const editTraining = (id, training) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await httpEditTraining(id, training);
      dispatch(trainingsClearError());
      dispatch(editTrainingInStore(training));
    } catch (error) {
      dispatch(getTrainingsFail(error));
    }
  };
};

export const deleteTraining = (id) => {
  return async dispatch => {
    try {
      await httpDeleteTraining(id);
      dispatch(trainingsClearError());
      // dispatch(getAllTrainings());
    } catch (error) {
      dispatch(getTrainingsFail(error));
    }
  };
};
