import request from "../utils/axios";

/**
 * 根据 id 获取歌词
 */
export function fetchLyric(id: number) {
  return request({
    url: `/lyric?id=${id}`,
    method: "GET",
  });
}
