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

/**
 * 获得歌手部分信息和热门歌曲
 * @param id 歌手id
 * @returns 歌手部分信息和热门歌曲数据
 */
export function fetchArtist(id: string) {
  return request<{ artist: API.Artist; hotSongs: Array<API.Song> }>({
    url: `/artists?id=${id}`,
    method: "GET",
  });
}

/**
 * 获取歌手 mv
 * 说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064
 * @param {number} params.id 歌手 id, 可由搜索接口获得
 * @param {number} params.offset
 * @param {number} params.limit
 */
export function fetchArtistMVs(params: {
  id: string;
  offset?: number;
  limit?: number;
}) {
  return request<{ mvs: Array<API.MV> }>({
    url: "/artist/mv",
    method: "GET",
    params,
  });
}

/**
 * 相似歌手
 * 说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手
 * - id: 歌手 id
 * @param {number} id
 */
export function fetchSimilarArtists(id: string) {
  return request<{ artists: Array<API.Artist> }>({
    url: "/simi/artist",
    method: "GET",
    params: { id },
  });
}

/**
 * 获取用户收藏的歌手列表（需登录）
 */
export function fetchCollectArtists() {
  return request<{ data: Array<API.Artist> }>({
    url: "/artist/sublist",
    method: "GET",
  });
}
