import axios from "axios";
import { getToken } from "./localService";

const restAgent = axios.create({
  baseURL: "https://webapi-dev.mypasspoint.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// restAgent.interceptors.request.use((config) => {
//   const token = getToken();
//   config.headers["Authorization"] = `Bearer ${token}`;
//   return config;
// });

const getRequestConfig = () => {
  return {
    headers: {},
    params: {},
  };
};

export const setConfig = () => {
  const token = getToken();
  const config = getRequestConfig();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

export const authenticate = {
  verifyEmailOtp: (data) => {
    return restAgent.post("verifyUserOtp", data);
  },

  login: (data) => {
    return restAgent.post("login-admin", data);
  },

  changeAdminPassword: (data) => {
    return restAgent.post("changeAdminPassword", data, setConfig());
  },

  resetPassword: (data) => {
    return restAgent.post("resetPassword", data);
  },

  resendOtp: (data) => {
    return restAgent.post("resendOtp", data);
  },
};
