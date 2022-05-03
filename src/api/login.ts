import request from "../utils/request";

/**
 * 手机号登录
 */
export function loginWithPhone(phone: string, password: string) {
  return request<{
    code: number;
    cookie: string;
    token: string;
    profile: API.Profile;
  }>({
    url: `/login/cellphone?phone=${phone}&password=${password}`,
    method: "POST",
  });
}

/**
 * 发送退出登录的请求
 */
export function logout() {
  return request({
    url: `/logout`,
    method: "POST",
  })
}