import request from "../utils/request";

/**
 * 根据 keywords 获取歌曲数据
 * @param params.keywords 关键字
 * @returns
 */
export function fetchSearchSongs(params: { keywords: string; limit: number }) {
  return request<{ result: { songs: Array<API.Song> } }>({
    url: "/cloudsearch",
    method: "GET",
    params,
  });
}

/**
 * 根据 keywords 获取专辑数据
 * @param params.keywords 关键字
 * @returns
 */
export function fetchSearchAlbums(params: { keywords: string; limit: number }) {
  return request<{ result: { albums: Array<API.Album> } }>({
    url: "/search",
    method: "GET",
    params: {
      ...params,
      type: 10,
    },
  });
}

/**
 * 根据 keywords 获取歌手数据
 * @param params.keywords 关键字
 * @returns
 */
export function fetchSearchArtists(params: {
  keywords: string;
  limit: number;
}) {
  return request<{ result: { artists: Array<API.Artist> } }>({
    url: "/search",
    method: "GET",
    params: {
      ...params,
      type: 100,
    },
  });
}

/**
 * 根据 keywords 获取歌单数据
 * @param params.keywords 关键字
 * @returns
 */
export function fetchSearchPlayList(params: {
  keywords: string;
  limit: number;
}) {
  return request<{ result: { playlists: Array<API.PlayListItem> } }>({
    url: "/search",
    method: "GET",
    params: {
      ...params,
      type: 1000,
    },
  });
}

/**
 * 根据 keywords 获取歌单数据
 * @param params.keywords 关键字
 * @returns
 */
export function fetchSearchMV(params: { keywords: string; limit: number }) {
  return request<{ result: { mvs: Array<API.MV> } }>({
    url: "/search",
    method: "GET",
    params: {
      ...params,
      type: 1004,
    },
  });
}
