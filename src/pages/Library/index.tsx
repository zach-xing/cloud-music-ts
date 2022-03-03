import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { fetchLoveSongs } from "../../api/library";
import useStores from "../../store";
import { ProfileBlock } from "./library.style";

const Library = observer(() => {
  const { userStore } = useStores();
  const profile: any = userStore.getProfile();

  useEffect(() => {
    (async () => {
      const { data } = await fetchLoveSongs(profile.userId);
      console.log(data);
    })();
  }, [profile.userId]);

  return (
    <ProfileBlock>
      {/* 用户名称 */}
      <h1>[ {profile.nickname} ]的音乐库</h1>
      <div className="song">
        <div className="love">
          <h2>我喜欢的音乐</h2>
          {/* TODO:歌的数量 */}
          <span>256首</span>
        </div>
        <div className="songs"></div>
      </div>
    </ProfileBlock>
  );
});

export default Library;
