import * as actionTypes from '../action-types';
import {
  httpGetTrainingsByDateRange,
  httpAddTraining,
  httpEditTraining,
  httpDeleteTraining
} from '../../api/ironman/ironman';
import {getCalendarInitialData, mapTrainingsToCalendar} from "./calendar.actions";
import {setAddTrainingFormEditOption, resetForm} from "./add-training.actions";
import {getFirstDayOfMonth} from "../../pages/diary/helpers";

export const loading = () => ({type: actionTypes.LOADING});
export const getTrainingsSuccess = () => ({type: actionTypes.GET_TRAININGS_SUCCESS});
export const getTrainingsFail = (error) => ({type: actionTypes.GET_TRAININGS_FAIL, error: error});
export const setPickedTrainings = (trainings) => ({type: actionTypes.SET_PICKED_TRAININGS, payload: trainings});
export const deleteTrainingFromCalendar = (training) => ({type: actionTypes.DELETE_TRAINING, payload: training});
export const editTrainingInCalendar = (training) => ({type: actionTypes.EDIT_TRAINING, payload: training});
export const addTrainingToCalendar = (training) => ({type: actionTypes.ADD_TRAINING, payload: training});

export const initCalendar = (date) => {
  return async (dispatch, getState) => {
    dispatch(loading());
    try {
      console.log('get calendar inital data ', date);
      dispatch(getCalendarInitialData(date));

      const firstDayOfMonth = getFirstDayOfMonth(date);
      const monthIndex = getState().calendar.calendarStructure.findIndex((item) => {
        return item.month === firstDayOfMonth;
      });
      console.log('mam index ', monthIndex);

      const calendarDates = getState().calendar.calendarStructure[monthIndex].dates;
      const dates = {
        dateFrom: calendarDates[0].date,
        dateTo: calendarDates[calendarDates.length - 1].date,
      };

      console.log('i daty');

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

      const firstDayOfMonth = getFirstDayOfMonth(training.date);
      const monthIndex = getState().calendar.calendarStructure.findIndex((item) => {
        return item.month === firstDayOfMonth;
      });

      if (monthIndex === -1) {
        dispatch(initCalendar(firstDayOfMonth));
      } else {
        dispatch(addTrainingToCalendar(trainingToAdd));
      }

      // dodac metoda ktora sprawdza najpierw czy w strukturze kalendarza znajduje sie miesiac na ktory chcemy dodac
      // trening, jesli nie ma to nie robimy nic czy moze inicjujemy kalendarz z tym miesiacem i ustawiamy wybrany
      // trening w podsumowaniu?
      // jesli mamy taki miesiac to mapujemy trening do danego miesiaca i dnia nastepnie wyswietlamy ten trening
      // i miesiac?
    } catch (error) {
      dispatch(getTrainingsFail(error));
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
