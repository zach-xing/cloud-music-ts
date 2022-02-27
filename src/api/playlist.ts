import request from "../utils/axios";

/**
 * 获取歌单的信息
 * @param params 包含歌单id
 */
export function fetchPlaylistDetail(params: { id: string }) {
  return request({
    url: "/playlist/detail",
    method: "GET",
    params: params,
  });
}

/**
 * 获取歌曲列表
 * @param params 歌曲的id，用逗号分隔
 */
export function fetchSongList(params: { ids: string }) {
  return request({
    url: "/song/detail",
    method: "GET",
    params: params,
  });
}
