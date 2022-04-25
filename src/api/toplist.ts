import request from "../utils/request";

/**
 * 获取排行榜信息
 * @returns 排行榜信息数据
 */
export function fetchTopList() {
  return request<{ list: Array<API.TopListItem> }>({
    url: "/toplist",
    method: "GET",
  });
}
