import { makeAutoObservable } from "mobx";

class playerStore {
  public songId: number = 1436910205; // 歌曲id
  private isPlayerFull: boolean = false; // 是否全屏显示
  private isPlay: boolean = false; // 是否正在播放
  constructor() {
    makeAutoObservable(this);
  }
  /**
   * 更改 songId
   */
  setSongId(songId: number) {
    this.songId = songId;
  }
  // 获取 songId
  getSongId() {
    return this.songId;
  }

  /**
   * 设置是否全屏
   */
  setIsPlayerFull(isPlayerFull: boolean) {
    this.isPlayerFull = isPlayerFull;
  }
  /**
   * 返回全屏状态
   */
  getIsPlayerFull() {
    return this.isPlayerFull;
  }

  /**
   * 设置是否正在播放
   */
  public setIsPlay(isPlay: boolean) {
    this.isPlay = isPlay;
  }
  /**
   * 返回是否正在播放
   */
  public getIsPlay() {
    return this.isPlay;
  }
}

export default playerStore;
