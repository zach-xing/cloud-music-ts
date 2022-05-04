import { makeAutoObservable } from "mobx";

/**
 * 播放器管理
 */
class PlayerStore {
  public curPlaySong: API.Song | null = null; // 当前正在播放的音乐
  private playQueue: API.Song[] = []; // 播放列表，可用来切换上/下一首播放
  private curPlayIndex: number = -1; // 当前真正播放音乐的下标

  constructor() {
    makeAutoObservable(this);
    const tmp = localStorage.getItem("player-queue");
    if (tmp === null) {
      // 若没有 player-queue 这项的话，则初始化为空数组
      localStorage.setItem("player-queue", JSON.stringify([]));
    } else {
      this.playQueue = JSON.parse(tmp);
      this.curPlaySong = this.playQueue[0];
    }
  }
  /**
   * 是否存在当前播放列表中
   * @return 若找到则返回下标，否则返回 -1
   */
  private hasCurPlayQueue(song: API.Song): number {
    return this.playQueue.findIndex((item) => item.id === song.id);
  }

  /** 更换播放列表 */
  public setplayQueue(songs: Array<API.Song>) {
    this.playQueue = songs;
    localStorage.setItem("player-queue", JSON.stringify(songs));
    this.curPlayIndex = 0;
    this.curPlaySong = songs[0];
  }

  /** 临时播放当前音乐 */
  public playCurSong(song: API.Song) {
    const index = this.hasCurPlayQueue(song);
    if (index !== -1) {
      // 若存在当前播放列表中，则播放列表中对应的歌曲
      this.curPlayIndex = index;
    } else {
      // 若不存在播放列表中，则加到列表的最后并播放
      this.playQueue.push(song);
      localStorage.setItem("player-queue", JSON.stringify(this.playQueue));
      this.curPlayIndex++;
    }
    this.curPlaySong = song;
  }

  /** 上一首 */
  prevSong() {
    this.curPlayIndex =
      (this.curPlayIndex - 1 + this.playQueue.length) % this.playQueue.length;
    this.curPlaySong = this.playQueue[this.curPlayIndex];
  }
  /** 下一首 */
  nextSong() {
    this.curPlayIndex = (this.curPlayIndex + 1) % this.playQueue.length;
    this.curPlaySong = this.playQueue[this.curPlayIndex];
  }
}

export default PlayerStore;
