import axios, { AxiosRequestConfig } from "axios";

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

// instance.interceptors.request.use(
//   (config) => {},
//   () => {}
// );

const request = async <T = any>(
  config: AxiosRequestConfig
): Promise<T> => {
  const { data } = await instance.request<T>(config);
  console.log("utils/request", data);

  return data;
};

export default request;
