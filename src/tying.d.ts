declare module "*.svg";

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
    musicSize?: number; //歌曲数量
    albumSize?: number; // 专辑数量
    mvSize?: number; // mv 数量
    briefDesc?: string; // 简单描述
  };

  /** 专辑信息 */
  type Album = {
    id: number;
    name: string;
    picUrl: string;
    size: 2; // un-know
    publishTime: number;
    artist: Artist;
    description: string;
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
    subscribed: boolean; // 是否是用户已收藏
    // creator
  };

  /** 一个歌单的详细信息 */
  type PlayListDetail = PlayListItem & {
    trackIds: {
      id: string;
    }[];
  };

  /** 歌曲信息 */
  type Song = {
    id: number;
    name: string; // 歌曲名
    dt?: number; // 时长
    // 歌手列表
    ar?: Array<Artist>;
    artists?: Array<Artist>;
    // 专辑信息
    al?: Album;
    album?: Album;
  };

  /** 歌词信息 */
  type Lyric = {
    lyc: string;
    time: string;
  }[];

  /** MV 信息 */
  type MV = {
    id: number;
    name: string;
    artistName: string;
    imgurl: string;
    publishTime: string;
    // artist: Artist;
  };
}
