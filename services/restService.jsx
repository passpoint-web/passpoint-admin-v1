import axios from "axios";

const restAgent = axios.create({
  baseURL: "https://webapi-dev.mypasspoint.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setConfig = () => {
  const token = getToken();
  // console.log(cookies.get('token'))
  const config = getRequestConfig();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

export const authenticate = {
  registerUser: (path, data) => {
    return restAgent.post(path, data);
  },
  checkBusinessName: (data) => {
    return restAgent.post("checkBusinessName", data);
  },

  verifyEmailOtp: (data) => {
    return restAgent.post("verifyUserOtp", data);
  },

  login: (data) => {
    return restAgent.post("login-admin", data);
  },

  forgotPassword: (data) => {
    return restAgent.post("forgotPassword", data);
  },

  resetPassword: (data) => {
    return restAgent.post("resetPassword", data);
  },

  resendOtp: (data) => {
    return restAgent.post("resendOtp", data);
  },
};
