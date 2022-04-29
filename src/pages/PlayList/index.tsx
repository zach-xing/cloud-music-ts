import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { fetchPlaylistDetail, fetchSongList } from "../../api/playlist";
import Button from "../../components/Button";
import VList from "../../components/VList";
import { StyleInfoBox } from "./style";

const PlayList = () => {
  const { id } = useParams();
  const resizeRef = useRef<any>();
  const [playListDetail, setPlayListDetail] = useState<API.PlayListDetail>();
  const [songs, setSongs] = useState<Array<API.Song>>();
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchPlaylistDetail({ id: id! });
      let str: string = "";
      data.playlist.trackIds.forEach((track, index: number) => {
        if (index === 0) {
          str += `${track.id}`;
        } else {
          str += `,${track.id}`;
        }
      });
      setPlayListDetail(data.playlist);
      const res = await fetchSongList({ ids: str });
      setSongs(res.songs);
    })();
  }, [id]);

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
    <div>
      <StyleInfoBox>
        <img src={playListDetail?.coverImgUrl} alt={playListDetail?.name} />
        <div className="details">
          <h1>{playListDetail?.name}</h1>
          <p>
            最后更新于{" "}
            {dayjs(playListDetail?.createTime).format("YYYY年MM月DD日")}-
            {songs?.length}首歌
          </p>
          <p>{playListDetail?.description}</p>
          <Button>播放</Button>
        </div>
      </StyleInfoBox>

      <VList
        containerHeight={listHeight}
        ItemElHeight={68}
        count={songs?.length || 0}
        lists={songs || []}
      />
    </div>
  );
};

export default PlayList;
