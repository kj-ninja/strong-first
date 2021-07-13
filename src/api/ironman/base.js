import axios from "axios"
import { getToken } from "../../helpers/getToken";

const ironmanEndpoint = 'https://ironman.coderaf.com';

axios.interceptors.request.use(
  req => {
    req.headers = { "Access-Token": getToken() }

    return req
  },
  error => {
    return Promise.reject(error)
  }
);

const ironmanApi = {
  get: (path) => {
    return axios.get(`${ironmanEndpoint}${path}`);
  },
  post: (path, params) => {
    return axios.post(`${ironmanEndpoint}${path}`, params);
  },
  delete: (path, params) => {
    return axios.delete(`${ironmanEndpoint}${path}`, params);
  },
};

export default ironmanApi;
