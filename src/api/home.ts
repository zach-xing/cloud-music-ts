import request from "../utils/request";

/**
 * 获取个性化推荐音乐
 */
export function fetchPersonalized() {
  return request<API.Personalized>({
    url: "/personalized?limit=10",
    method: "GET",
  });
}