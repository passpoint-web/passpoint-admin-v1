export const saveToken = (val) => {
  if (val) {
    localStorage.setItem("token", JSON.stringify(val));
  } else {
    localStorage.removeItem("token");
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token !== "undefined") {
      return JSON.parse(token);
    }
  }
};

export const saveCredentials = (credentials) => {
  localStorage.setItem("registration_cr3dentials", JSON.stringify(credentials));
};

export const getCredentials = () => {
  if (typeof window !== "undefined") {
    const credentials = localStorage.getItem("registration_cr3dentials");
    if (credentials !== "undefined") {
      return JSON.parse(credentials);
    }
  }
};

export const setLogout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    // cookies.remove("token", "");
    localStorage.removeItem("registration_cr3dentials");
  }
};

export const setSelectedUser = (val) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("selectedUser", JSON.stringify(val));
  }
};

export const getSelectedUser = () => {
  if (typeof window !== "undefined") {
    const val = localStorage.getItem("selectedUser");
    if (val !== "undefined") {
      return JSON.parse(val);
    }
    return null;
  }
};
