import * as actionTypes from '../action-types';
import axios from "axios";
import {httpGetAllTrainings, httpAddTraining, httpGetTrainingsByDateRange} from '../../api/ironman/ironman';

export const fetchTrainingsStart = () => ({type: actionTypes.FETCH_TRAININGS_START});
export const fetchTrainingsSuccess = (trainings) => ({type: actionTypes.FETCH_TRAININGS_SUCCESS, trainings: trainings});
export const fetchTrainingsFail = (error) => ({type: actionTypes.FETCH_TRAININGS_FAIL, error: error});
export const trainingToShowHandler = (training) => ({
  type: actionTypes.TRAINING_TO_SHOW_HANDLER,
  trainingToShow: training
});
export const trainingsClearError = () => ({type: actionTypes.TRAININGS_CLEAR_ERROR});

export const getAllTrainings = () => {
  return async dispatch => {
    dispatch(fetchTrainingsStart());
    try {
      const trainings = await httpGetAllTrainings();
      dispatch(fetchTrainingsSuccess(trainings));
    } catch (error) {
      dispatch(fetchTrainingsFail(error.response.status));
    }
  };
};

export const addTraining = (training) => {
  return async dispatch => {
    dispatch(fetchTrainingsStart());
    try {
      await httpAddTraining(training);
      dispatch(trainingsClearError());
    } catch(error) {
      dispatch(fetchTrainingsFail(error));
    }
  };
};

export const editTrainingInStore = (training) => {
  return {
    type: actionTypes.EDIT_TRAINING_IN_STORE,
    payload: training
  }
};

export const editTrainingInApi = (token, training, id) => {
  return dispatch => {
    dispatch(fetchTrainingsStart());
    axios.post('https://ironman.coderaf.com/training/' + id, training, {
      headers: {
        'Access-Token': token
      },
    })
      .then(function (res) {
        dispatch(trainingsClearError());
        dispatch(editTrainingInStore(training));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchTrainingsFail(error));
      });
  };
};

export const trainingToDelete = (training) => {
  return {
    type: actionTypes.TRAINING_TO_DELETE,
    payload: training
  }
};

export const deleteTrainingFromApi = (id, token) => {
  return dispatch => {
    axios.delete('https://ironman.coderaf.com/training/' + id, {
      headers: {
        'Access-Token': token
      },
    })
      .then(function (res) {
        dispatch(trainingsClearError());
        dispatch(getAllTrainings());
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchTrainingsFail(error));
      });
  };
};
