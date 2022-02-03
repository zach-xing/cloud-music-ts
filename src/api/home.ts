import request from "../utils/axios";

/**
 * 获取个性化推荐音乐
 */
export function fetchPersonalized() {
  return request({
    url: "/personalized?limit=10",
    method: "GET",
  });
}

/**
 * 获取热门歌手
 */
export function fetchHotArtists() {
  return request({
    url: "/top/artists?limit=6",
    method: "GET",
  });
}

/**
 * 获取全部新碟
 */
export function fetchAlbum() {
  return request({
    url: "/album/new?area=ALL&limit=10",
    method: "GET",
  });
}

/**
 * 获取排行榜信息
 */
export function fetchTopList() {
 return request({
   url: "/toplist",
   method: "GET",
 });
}