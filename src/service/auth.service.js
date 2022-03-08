import axios from "axios";

const BASE_URL = "/https://api.hamrahamlak.ir/api";

const signup = (
  mobile,
  nameFamily,
  cityId,
  provinceId,
  notificationToken,
  clientType,
  referralCode
) => {
  return axios
    .post(BASE_URL + "/Auth/RegisterationUser", {
      mobile,
      nameFamily,
      cityId,
      provinceId,
      notificationToken,
      clientType,
      referralCode,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user_hamrah", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (mobile, verifyCode, notificationToken, clientType) => {
  return axios
    .post(BASE_URL + "/login", {
      mobile,
      verifyCode,
      notificationToken,
      clientType,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user_hamrah", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user_hamrah");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user_hamrah"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
