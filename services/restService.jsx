import axios from "axios";
import { getToken } from "./localService";

const restAgent = axios.create({
  baseURL: "https://webapi.mypasspoint.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

const restAgentLive = axios.create({
  baseURL: "https://webapi.mypasspoint.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

restAgentLive.interceptors.response.use(undefined, (error) => {
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
  return restAgentLive.post(path, data);
};

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

export const kyc = {
  getKycDetails: () => {
    return restAgentLive.get("getKycDetails", setConfigOld());
  },
  getKycDashboardStats: () => {
    return restAgentLive.get("kycStats", setConfigOld());
  },
  getUnapprovedUsers: () => {
    return restAgentLive.post("getUnapprovedUsers", setConfigOld());
  },
  getKycSingleDetails: (userId) => {
    return restAgentLive.post(
      "getKycSingleDetails",
      { userId: Number(userId) },
      setConfigOld()
    );
  },
  approveKYC: (userId) => {
    return restAgentLive.post("approveKyc", { userId }, setConfigOld());
  },
  rejectKYC: (userId) => {
    return restAgentLive.post("rejectKyc", { userId }, setConfigOld());
  },
};
