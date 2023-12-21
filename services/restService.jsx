import axios from "axios";
import { getToken } from "./localService";

const restAgent = axios.create({
  baseURL: "https://webapi.mypasspoint.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

const restAgentMVP = axios.create({
  baseURL: "https://webapi-dev.mypasspoint.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

restAgentMVP.interceptors.response.use(undefined, (error) => {
  const statusCode = error.response ? error.response.status : null;
  if (
    statusCode &&
    statusCode === 401
    // ||
    // (statusCode && statusCode === 403)
  ) {
    if (!window.location.pathname.includes("/auth/login")) {
      window.location.href = `/auth/login?fallBackUrl=${window.location.pathname}`;
    }
  }
  return Promise.reject(error);
});

export const registerUser = (path, data) => {
  return restAgentMVP.post(path, data);
};

const getRequestConfig = () => {
  return {
    headers: {},
    params: {},
  };
};

export const setConfigOld = () => {
  const config = getRequestConfig();
  return config;
};

export const setConfig = () => {
  const token = getToken();
  const config = getRequestConfig();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

export const authenticate = {
  verifyEmailOtp: (data) => {
    return restAgentMVP.post("verifyUserOtp", data);
  },

  login: (data) => {
    return restAgentMVP.post("login-admin", data);
  },

  changeAdminPassword: (data) => {
    return restAgentMVP.post("changeAdminPassword", data, setConfig());
  },

  resetPassword: (data) => {
    return restAgentMVP.post("resetPassword", data);
  },

  resendOtp: (data) => {
    return restAgentMVP.post("resendOtp", data);
  },
};

export const kyc = {
  getKycDetails: () => {
    return restAgentMVP.get("getKycDetails", setConfigOld());
  },
  getKycDashboardStats: () => {
    return restAgentMVP.get("kycStats", setConfigOld());
  },
  getUnapprovedUsers: () => {
    return restAgentMVP.post("getUnapprovedUsers", setConfigOld());
  },
  getKycSingleDetails: (userId) => {
    return restAgentMVP.post(
      "getKycSingleDetails",
      { userId: Number(userId) },
      setConfigOld()
    );
  },
  approveKYC: (userId) => {
    return restAgentMVP.post("approveKyc", { userId }, setConfigOld());
  },
  rejectKYC: (userId) => {
    return restAgentMVP.post("rejectKyc", { userId }, setConfigOld());
  },
};
