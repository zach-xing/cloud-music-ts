import request from "../utils/request";

/**
 * 根据 id 获取歌词
 */
export function fetchLyric(id: number) {
  return request<{ lrc: { lyric: string } }>({
    url: `/lyric?id=${id}`,
    method: "GET",
  });
}
