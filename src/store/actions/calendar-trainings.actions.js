import * as actionTypes from '../action-types';
import {
  httpGetTrainingsByDateRange,
  httpAddTraining,
  httpEditTraining,
  httpDeleteTraining,
} from '../../api/ironman/ironman';
import {getCalendarInitialData, mapTrainingsToCalendar, setPickedDate} from "./calendar.actions";
import {setAddTrainingFormEditOption, resetForm} from "./add-training.actions";
import {getFirstDayOfMonth} from "../../pages/diary/helpers";

export const loading = () => ({type: actionTypes.LOADING});
export const getTrainingsSuccess = () => ({type: actionTypes.GET_TRAININGS_SUCCESS});
export const getTrainingsFail = (error) => ({type: actionTypes.GET_TRAININGS_FAIL, error: error});
export const deleteTrainingFromCalendar = (training) => ({type: actionTypes.DELETE_TRAINING, payload: training});
export const editTrainingInCalendar = (training) => ({type: actionTypes.EDIT_TRAINING, payload: training});
export const addTrainingToCalendar = (payload) => ({type: actionTypes.ADD_TRAINING_TO_CALENDAR, payload: payload});

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
        dateTo: calendarDates[calendarDates.length - 1].date,
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
  return async (dispatch, getState) => {
    dispatch(loading());
    try {
      const {id: trainingId} = await httpAddTraining(training);
      const trainingToAdd = {...training, id: trainingId};

      const firstDayOfMonthAddedTraining = getFirstDayOfMonth(training.date);
      const pickedMonth = getFirstDayOfMonth(getState().calendar.pickedMonth);

      if (firstDayOfMonthAddedTraining === pickedMonth) {
        dispatch(addTrainingToCalendar({
          training: trainingToAdd,
          sharedDate: '',
        }));
      } else {
        let sharedDate;
        getState().calendar.calendarStructure.forEach(calendar => {
          calendar.dates.forEach(day => {
            if (day.date.includes(training.date)) {
              sharedDate = day.date;
            }
          })
        });

        if (sharedDate) {
          dispatch(addTrainingToCalendar({
            training: trainingToAdd,
            sharedDate,
          }));
        }

        await dispatch(initCalendar(firstDayOfMonthAddedTraining));
        dispatch(setPickedDate(trainingToAdd.date));
      }
    } catch (error) {
      dispatch(getTrainingsFail(error));
    } finally {
      dispatch(resetForm());
    }
  };
};

export const editTraining = (training) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await httpEditTraining(training);
      dispatch(editTrainingInCalendar(training));
    } catch (error) {
      dispatch(getTrainingsFail(error));
    } finally {
      dispatch(setAddTrainingFormEditOption(false));
      dispatch(resetForm());
    }
  };
};

export const deleteTraining = (training) => {
  return async dispatch => {
    try {
      await httpDeleteTraining(training.id);
      dispatch(deleteTrainingFromCalendar(training));
    } catch (error) {
      dispatch(getTrainingsFail(error));
    }
  };
};
