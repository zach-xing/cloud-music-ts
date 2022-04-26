declare namespace API {
  /**
   * 个人信息
   */
  type Profile = {
    userId: number;
    nickname: string;
    gender: number; // 1为男
    avatarUrl: string;
    signature: string;
    playlistCount: number; //歌单数
    follows: number; // 关注的人
    followeds: number; // 粉丝
    eventCount: number; // 动态
  };

  /** 个性推荐 中的子项 */
  type PersonalizedItem = {
    id: number;
    name: string;
    picUrl: string;
    canDislike: boolean; // 是否喜欢
    playCount: number; // un-know
    trackCount: number; // un-know
    trackNumberUpdateTime: number; // un-know
    type: number; // un-know
  };

  /** 个性推荐 */
  type Personalized = {
    category: number; // 不知道是啥，之后补充
    result: Array<PersonalizedItem>;
  };

  /** 歌手信息（艺术家信息） */
  type Artist = {
    id: number;
    name: string;
    picUrl: string;
  };

  /** 专辑信息 */
  type Album = {
    id: number;
    name: string;
    picUrl: string;
    size: 2; // un-know
    publishTime: number;
    artist: Artist;
  };

  /** 排行榜每项的信息 */
  type TopListItem = {
    id: number;
    name: string;
    description: string;
    coverImgUrl: string;
    updateFrequency: string; // 更新频率
  };

  /** 分类信息 */
  type CategoryInfo = {
    title: string;
    sub: {
      name: string;
      hot: boolean;
    }[];
  };

  /** 歌单信息项 */
  type PlayListItem = {
    id: number;
    name: string;
    description: string;
    coverImgUrl: string;
    playCount: number; // 播放次数
    createTime: number;
    subscribed?: boolean; // 是否是用户已收藏
    // creator
  };
}
