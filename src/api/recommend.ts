import Api from '../utils/axios';

// 获取推荐歌单
export const fetchRecommendList = (params: object) => {
  return Api({
    method: "GET",
    url: "/personalized",
    params: params,
  });
};