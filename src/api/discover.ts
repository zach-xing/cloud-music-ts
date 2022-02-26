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
