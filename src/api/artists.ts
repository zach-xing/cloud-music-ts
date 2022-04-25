import request from "../utils/request";

/**
 * 获取热门歌手
 * @param limit 限制个数
 * @returns 热门歌手信息（数组）API.Artist
 */
export function fetchHotArtists(limit: number = 5) {
  return request<{ artists: API.Artist[] }>({
    url: `/top/artists?limit=${limit}`,
    method: "GET",
  });
}
