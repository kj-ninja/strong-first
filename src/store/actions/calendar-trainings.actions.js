import * as actionTypes from '../action-types';
import {
  httpGetTrainingsByDateRange,
  httpAddTraining,
  httpEditTraining,
  httpDeleteTraining
} from '../../api/ironman/ironman';
import {getCalendarInitialData, mapTrainingsToCalendar} from "./calendar.actions";
import {getFirstDayOfMonth} from "../../pages/diary/helpers";

export const loading = () => ({type: actionTypes.LOADING});
export const getTrainingsSuccess = () => ({type: actionTypes.GET_TRAININGS_SUCCESS});
export const getTrainingsFail = (error) => ({type: actionTypes.GET_TRAININGS_FAIL, error: error});

export const initCalendar = (date) => {
  return async (dispatch, getState) => {
    dispatch(loading());
    try {
      dispatch(getCalendarInitialData(date));

      const firstDayOfMonth = getFirstDayOfMonth(date);
      const monthIndex = getState().calendar.calendarStructure.findIndex((item) => {
        return item.month === firstDayOfMonth;
      });
      const calendarDates = getState().calendar.calendarStructure[monthIndex].dates;

      const dates = {
        dateFrom: calendarDates[0].date,
        dateTo: calendarDates[calendarDates.length -1].date,
      };

      const trainings = await httpGetTrainingsByDateRange(dates);
      dispatch(mapTrainingsToCalendar({trainings, calendarIndex: monthIndex}));
      dispatch(getTrainingsSuccess());
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
    } catch (error) {
      dispatch(getTrainingsFail(error));
    }
  };
};

export const deleteTraining = (id) => {
  return async dispatch => {
    try {
      await httpDeleteTraining(id);
    } catch (error) {
      dispatch(getTrainingsFail(error));
    }
  };
};
