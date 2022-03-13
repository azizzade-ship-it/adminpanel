import axios from "axios";

const BASE_URL = "https://api.hamrahamlak.ir/api";

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
    .post(BASE_URL + "/Auth/AdminLogin", {
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

const login = (userName, password,googleReCaptchaResponse) => {
  return axios
    .post(BASE_URL + "/login", {
      googleReCaptchaResponse,
      userName,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user_hamrah", JSON.stringify(response.data));
      }
      console.log("res",response)
      return response.data;
    });
};

const getData = (url) => {
  return axios.get(BASE_URL + url).then((response) => {
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
