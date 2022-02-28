import request from "../utils/axios";

/**
 * 手机号登录
 */
export function loginWithPhone(phone: string, password: string) {
  return request({
    url: `/login/cellphone?phone=${phone}&password=${password}`,
    method: "POST",
  });
}
