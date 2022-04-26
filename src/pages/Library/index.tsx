import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useStores from "../../store";
import { ProfileHeader, SectionOne } from "./style";
import { fetchLoveSongs } from "../../api/user";
import PersonalPlayList from "./components/PersonalPlayList";

/**
 * 音乐库
 */
const Library = observer(() => {
  const { userStore } = useStores();
  const profile: API.Profile = userStore.profile;
  console.log("re-render");

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchLoveSongs({ uid: profile.userId });
  //     console.log(data);
  //   })();
  // }, [profile.userId]);

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
        <div className="liked-songs">
          <h2>我喜欢的音乐</h2>
        </div>
        <div className="songs">待。。。</div>
      </SectionOne>
      
      <PersonalPlayList profile={profile} />
    </>
  );
});

export default Library;
