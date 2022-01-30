import axios from "axios";

const service = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 5000,
});

service.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
})

service.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  return Promise.reject(err);
});

export default service;