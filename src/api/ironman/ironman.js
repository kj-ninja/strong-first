import ironman from "./base";

const TRAINING_URL = '/training';

export const httpGetAllTrainings = async () => {
  const {data} = await ironman.get(TRAINING_URL);
  return data;
};

export const httpGetTrainingsByDateRange = async ({ from, to }) => {
  const {data} = await ironman.get(`${TRAINING_URL}?dateFrom=${from}&dateTo=${to}`);
  return data;
};

export const httpAddTraining = async (params) => {
  const {data} = await ironman.post(TRAINING_URL, params);
  console.log(data);
  return data;
};

export const httpEditTraining = async (id, training) => {
  const {data} = await ironman.post(`${TRAINING_URL}/${id}`, training);
  console.log(data);
  return data;
};

export const httpDeleteTraining = async (id) => {
  const {data} = await ironman.delete(`${TRAINING_URL}/${id}`);
  console.log(data);
  return data;
};
