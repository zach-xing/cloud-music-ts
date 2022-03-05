import { ChangeEvent, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { fetchUserPlaylists } from "../../api/library";
import useStores from "../../store";
import MusicLine from "../../components/MusicLine";
import MusicBlock from "../../components/MusicBlock";
import { ProfileBlock, Select } from "./library.style";

const Library = observer(() => {
  const history = useHistory();
  const [playlist, setPlayList] = useState<any[]>([]);
  const [curPlaylist, setCurrentPlaylist] = useState<any[]>([]);
  const { userStore } = useStores();
  const profile: any = userStore.profile;
  console.log("library", profile);

  useEffect(() => {
    (async () => {
      const { data } = await fetchUserPlaylists({ uid: profile.userId });
      const arr = data.playlist.slice(1);
      setPlayList(arr);
      setCurrentPlaylist(arr);
    })();
  }, [profile.userId]);

  // 改变选定的歌单情况
  const handleChangePlaylist = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "subscribed":
        setCurrentPlaylist(
          playlist.filter((item: any) => item.subscribed === true)
        );
        break;
      case "created":
        setCurrentPlaylist(
          playlist.filter((item: any) => item.subscribed === false)
        );
        break;
      default:
        setCurrentPlaylist(playlist);
    }
  };
  // 进入喜欢歌曲界面
  const handleLoveSongs = () => {
    history.push("/library/lovesongs");
  };

  return (
    <>
      <ProfileBlock>
        {/* 用户名称 */}
        <h1>[ {profile.nickname} ]的音乐库</h1>
        <div className="song">
          <div className="love" onClick={handleLoveSongs}>
            <h2>我喜欢的音乐</h2>
            {/* TODO:歌的数量 */}
            <span>256首</span>
          </div>
        </div>
      </ProfileBlock>

      <Select name="select" id="select" onChange={handleChangePlaylist}>
        <option value="all">全部歌单</option>
        <option value="created">创建的歌单</option>
        <option value="subscribed">收藏的歌单</option>
      </Select>
      <MusicLine>
        {curPlaylist &&
          curPlaylist.map((item: any) => (
            <MusicBlock
              key={item.id}
              id={item.id}
              name={item.name}
              picUrl={item.coverImgUrl}
            />
          ))}
      </MusicLine>
    </>
  );
});

export default Library;
