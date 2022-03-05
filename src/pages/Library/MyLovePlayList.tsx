import { useEffect, useRef, useState } from "react";
import { fetchLoveSongs } from "../../api/library";
import { fetchSongList } from "../../api/playlist";
import VList from "../../components/VList";
import useStores from "../../store";

/**
 * 我喜欢的音乐
 */
const MyLovePlayList = () => {
  const titleRef = useRef<any>();
  const resizeRef = useRef<any>();
  const { userStore } = useStores();
  const profile: any = userStore.profile;
  const [itemElHeight, setItemElHeight] = useState(0);
  const [playlist, setPlaylist] = useState<any[]>([]);
  
  useEffect(() => {
    const { bottom } = titleRef.current.getBoundingClientRect();
    setItemElHeight(window.innerHeight - 68 - bottom - 20);
    resizeRef.current = () => {
      setItemElHeight(window.innerHeight - 68 - bottom - 20);
    };
    window.addEventListener("resize", resizeRef.current);
    return () => {
      window.removeEventListener("resize", resizeRef.current);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await fetchLoveSongs({ uid: profile.userId });
      const res = await fetchSongList({ ids: data.ids.join(",") });
      setPlaylist(res.data.songs);
    })();
  }, [profile.userId]);

  return (
    <>
      <h1 style={{ marginBottom: "20px" }} ref={titleRef}>
        我喜欢的音乐
      </h1>
      <VList
        containerHeight={itemElHeight}
        ItemElHeight={68}
        count={playlist.length}
        lists={playlist}
      />
    </>
  );
};

export default MyLovePlayList;
