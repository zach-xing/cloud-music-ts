import request from "../utils/request";

/**
 * 获取推荐歌单
 * @param limit 限制个数
 * @returns 推荐歌单信息
 */
export function fetchPersonalized(limit: number = 10) {
  return request<API.Personalized>({
    url: `/personalized?limit=${limit}`,
    method: "GET",
  });
}

/**
 * 获取推荐新音乐
 * @param limit 限制个数
 * @returns 推荐新音乐信息
 */
export function fetchPersonalizedNewSongs(limit: number = 12) {
  return request<{
    result: Array<{ id: number; name: string; song: API.Song }>;
  }>({
    url: `/personalized/newsong?limit=${limit}`,
    method: "GET",
  });
}
