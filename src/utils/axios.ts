import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 请求拦截器
server.interceptors.request.use(
  (config) => {
    console.log(config);
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default server;
