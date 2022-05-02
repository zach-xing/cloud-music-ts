import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumById } from "../../api/album";
import Button from "../../components/Button";
import AlbumSong from "./components/AlbumSong";
import { StyleInfoBox } from "./style";

/**
 * 专辑页面
 */
const Album = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState<API.Album>();
  const [songs, setSongs] = useState<Array<API.Song>>();

  useEffect(() => {
    (async () => {
      const data = await fetchAlbumById({ id: +id! });
      console.dir(data);
      setAlbum(data.album);
      setSongs(data.songs);
    })();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <StyleInfoBox>
        {" "}
        <img src={album?.picUrl} alt={album?.name} />
        <div className="details">
          <h1>{album?.name}</h1>
          <p>
            Album By <b>{album?.artist.name}</b>
          </p>
          <p>
            最后更新于 {dayjs(album?.publishTime).format("YYYY年MM月DD日")}- 共
            {songs?.length}首歌
          </p>
          <p>{album?.description}</p>
          <Button>播放</Button>
        </div>
      </StyleInfoBox>

      <>
        {songs?.map((item) => (
          <AlbumSong key={item.id} data={item} />
        ))}
      </>
    </>
  );
};

export default Album;
