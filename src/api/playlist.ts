import request from "../utils/request";

/**
 * 获取歌单分类,包含 category 信息
 */
export function fetchPlayCatlist() {
  return request({
    url: "/playlist/catlist",
    method: "GET",
  });
}

/**
 * 获取网友精选碟歌单
 * @param cat 分类标签，比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部"
 */
export function fetchTopPlaylists(cat: string = "全部", limit: number = 40) {
  return request<{ playlists: Array<API.PlayListItem> }>({
    url: `/top/playlist?cat=${cat}&limit=${limit}`,
    method: "GET",
  });
}
