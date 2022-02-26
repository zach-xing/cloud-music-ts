import request from "../utils/axios";

/**
 * 获取歌单分类
 */
export function fetchCategories() {
  return request({
    url: "/playlist/catlist",
    method: "GET",
  });
}

/**
 * 获取网友精选碟歌单
 * @param cat 分类标签，比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部"
 */
export function fetchCategoryPlaylists(cat: string = "全部") {
  return request({
    url: `/top/playlist?cat=${cat}&limit=40`,
    method: "GET",
  });
}
