import request from "../utils/request";

type MVVideo = {
  artistId: number;
  artistName: string;
  brs: {
    br: number; // 码率
  }[];
  name: string;
  cover: string;
  publishTime: string;
};

/**
 * 获取 mv 数据
 * 说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 ,
 * 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
 * - 调用例子 : /mv/detail?mvid=5436712
 * @param {number} mvid mv 的 id
 */
export function fetchMVDetail(params: { mvid: number }) {
  return request<{ data: MVVideo }>({
    url: "/mv/detail",
    method: "GET",
    params,
  });
}

/**
 * mv 地址
 * 说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址
 * - id: mv id
 * - 调用例子 : /mv/url?id=5436712 /mv/url?id=10896407&r=1080
 * @param {Object} params
 * @param {number} params.id
 */
export function fetchMVURL(params: { id: number; r: number }) {
  return request({
    url: "/mv/url",
    method: "GET",
    params,
  });
}

/**
 * 获取用户收藏的 MV 和视频列表（需登录）
 */
export function fetchCollectMVs() {
  return request<{ data: Array<API.Video> }>({
    url: "/mv/sublist",
    method: "GET",
  });
}
