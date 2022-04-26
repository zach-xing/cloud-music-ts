import request from "../utils/request";

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
 * @param uid 用户id
 * @returns 歌单信息
 */
export function fetchUserPlaylists(params: { uid: number }) {
  return request<{
    playlist: Array<API.PlayListItem>;
  }>({
    url: "/user/playlist",
    method: "GET",
    params: params,
  });
}
