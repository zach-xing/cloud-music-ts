import request from "../utils/request";

export function fetchAlbumById(params: { id: number }) {
  return request<{ album: API.Album; songs: Array<API.Song> }>({
    url: "/album",
    method: "GET",
    params,
  });
}

/**
 * 获取歌手的专辑
 * @param params.id 歌手 id
 * @param params.limit 取出数量, 默认为 30
 * @param params.offset 偏移数量, 用于分页，默认为 0
 * @returns 歌手的专辑信息
 */
export function fetchAlbum(params: {
  id: string;
  limit?: number;
  offset?: number;
}) {
  return request<{ hotAlbums: Array<API.Album> }>({
    url: "/artist/album",
    method: "GET",
    params,
  });
}

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
