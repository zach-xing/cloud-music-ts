import request from "../utils/axios";

/**
 * 获取用户喜欢的音乐
 */
export function fetchLoveSongs(params: { uid: number }) {
  return request({
    url: "/likelist",
    method: "GET",
    params: params,
  });
}

/**
 * 获取用户歌单
 * @param params 传入 { uid: number}
 * @returns 
 */
export function fetchUserPlaylists(params: { uid: number }) {
  return request({
    url: "/user/playlist",
    method: "GET",
    params: params,
  });
}