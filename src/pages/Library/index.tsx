import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import useStores from "../../store";
import { ProfileHeader, SectionOne } from "./style";
import PersonalPlayList from "./components/PersonalPlayList";
import { fetchUserPlaylists } from "../../api/user";

/**
 * 音乐库
 */
const Library = observer(() => {
  const navigate = useNavigate();
  const [playLists, setPlayLists] = useState<Array<API.PlayListItem>>();
  const [loveList, setLoveList] = useState<API.PlayListItem>();
  const { userStore } = useStores();
  const profile: API.Profile = userStore.profile;
  console.log("re-render");

  useEffect(() => {
    (async () => {
      const data = await fetchUserPlaylists({ uid: profile.userId });
      setPlayLists(data.playlist.slice(1)); // 将我喜欢的音乐去除
      setLoveList(data.playlist[0]);
      console.log(data.playlist[0]);
      
    })();
  }, [profile.userId]);

  // 跳转至我喜欢的音乐
  const jumpToLikedSongs = () => {
    navigate(`/library/liked-songs?pid=${loveList?.id}`);
  };

  return (
    <>
      <ProfileHeader>
        <div className="avatar">
          <img src={profile.avatarUrl} alt={profile.nickname} />
          <h1>{profile.nickname}的音乐库</h1>
        </div>
        <div className="info">
          <div>
            {profile.eventCount}
            <p>动态</p>
          </div>
          <div>
            {profile.follows}
            <p>关注</p>
          </div>
          <div>
            {profile.followeds}
            <p>粉丝</p>
          </div>
        </div>
      </ProfileHeader>

      <SectionOne>
        <div className="liked-songs" onClick={jumpToLikedSongs}>
          <h2>我喜欢的音乐</h2>
        </div>
        <div className="songs">待。。。</div>
      </SectionOne>

      <PersonalPlayList playLists={playLists!} />
      <Outlet />
    </>
  );
});

export default Library;
