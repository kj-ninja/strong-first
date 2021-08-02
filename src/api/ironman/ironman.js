import ironman from "./base";

const TRAINING_URL = '/training';

export const httpGetTrainingsByDateRange = async ({ dateFrom, dateTo }) => {
  const {data} = await ironman.get(`${TRAINING_URL}?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  return data;
};

export const httpAddTraining = async (params) => {
  const {data} = await ironman.post(TRAINING_URL, params);
  return data;
};

export const httpEditTraining = async (training) => {
  const {data} = await ironman.post(`${TRAINING_URL}/${training.id}`, training);
  return data;
};

export const httpDeleteTraining = async (id) => {
  const {data} = await ironman.delete(`${TRAINING_URL}/${id}`);
  return data;
};
