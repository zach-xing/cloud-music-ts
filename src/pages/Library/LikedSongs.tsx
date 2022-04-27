import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchPlaylistDetail, fetchSongList } from "../../api/playlist";
import VList from "../../components/VList";

/**
 * 我喜欢的音乐-页面
 * @returns
 */
const LikedSongs = () => {
  const { search } = useLocation();
  const pid = search.split("=")[1];
  const resizeRef = useRef<any>();
  const [listHeight, setListHeight] = useState(0);
  const [songs, setSongs] = useState<Array<API.Song>>();

  useEffect(() => {
    (async () => {
      const data = await fetchPlaylistDetail({ id: pid });
      let str: string = "";
      data.playlist.trackIds.forEach((track, index: number) => {
        if (index === 0) {
          str += `${track.id}`;
        } else {
          str += `,${track.id}`;
        }
      });
      const res = await fetchSongList({ ids: str });
      setSongs(res.songs);
    })();
  }, [pid]);

    useEffect(() => {
      setListHeight(window.innerHeight - 68 - 20);
      resizeRef.current = () => {
        setListHeight(window.innerHeight - 68 - 20);
      };
      window.addEventListener("resize", resizeRef.current);
      return () => {
        window.removeEventListener("resize", resizeRef.current);
      };
    }, []);

  return (
    <>
      <h1>我喜欢的音乐</h1>
      <VList
        lists={songs!}
        containerHeight={listHeight}
        ItemElHeight={68}
        count={songs?.length || 0}
      />
    </>
  );
};

export default LikedSongs;
