import request from "../utils/request";

/**
 * 获取新专辑
 * @param area 专辑类别
 * @param limit 限制的个数
 * @returns 新专辑的信息
 */
export function fetchNewAlbum(area: string = "All", limit: number = 10) {
  return request<{ albums: Array<API.Album> }>({
    url: `/album/new?area=${area}&limit=${limit}`,
    method: "GET",
  });
}
