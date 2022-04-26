import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "./auth";

// interface MyResponseType<T = any> {
//   status: number;
//   statusText: string;
//   data: T;
// }

const instance = axios.create({
  baseURL: "http://127.0.0.1:8989",
  timeout: 15000,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    if (!config.params) config.params = {};
    // 发送请求时携带 cookie
    config.params.cookie = `MUSIC_U=${getCookie("MUSIC_U")};`;
    return config;
  },
  () => {}
);

const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const { data } = await instance.request<T>(config);
  console.log("utils/request", data);

  return data;
};

export default request;
