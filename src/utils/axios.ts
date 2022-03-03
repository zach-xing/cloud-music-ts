import axios from "axios";
import { getCookie } from "./auth";

const service = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 15000,
  withCredentials: true,
});

service.interceptors.request.use(
  function (config) {
    if (!config.params) config.params = {};
    // 发送请求时携带 cookie
    config.params.cookie = `MUSIC_U=${getCookie("MUSIC_U")};`;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default service;
