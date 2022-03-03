import request from "../utils/axios";

/**
 * 获取用户喜欢的音乐
 */
export function fetchLoveSongs(params: { id: number }) {
  return request({
    url: "/likelist",
    method: "GET",
    params: params,
  });
}
