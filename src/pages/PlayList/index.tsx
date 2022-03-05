import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlaylistDetail, fetchSongList } from "../../api/playlist";
import VList from "../../components/VList";
import { toDate } from "../../utils/format";
import { InfoStyleBlock } from "./playlist.style";

interface IPlaylist {
  name: string;
  imgUrl: string;
  createTime: string; // 时间戳转成了字符串
  description: string;
  tags: Array<any>;
  songs: Array<any>;
}

/**
 * 歌单组件
 */
function PlayList() {
  const params: any = useParams();
  const resizeRef = useRef<any>();
  const [state, setState] = useState<IPlaylist>();
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await fetchPlaylistDetail({ id: params.id });
      const str = data.playlist.trackIds.reduce(
        (prev: string & { id: string }, cur: { id: string }) =>
          `${prev.id || prev},${cur.id}`
      );
      const res = await fetchSongList({ ids: str });

      const tmp = {
        name: data.playlist.name,
        imgUrl: data.playlist.coverImgUrl,
        createTime: toDate(data.playlist.createTime),
        description: data.playlist.description,
        tags: data.playlist.tags,
        songs: res.data.songs,
      };
      setState(tmp);
    })();
  }, [params]);

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
      <InfoStyleBlock>
        <img src={state?.imgUrl} alt={state?.imgUrl} />
        <div className="details">
          <h1>{state?.name}</h1>
          <p>创建于{state?.createTime}</p>
          <p>{state?.description}</p>
          <button>播放</button>
        </div>
      </InfoStyleBlock>

      <div>{/* TODO:做表头或者写个搜索 */}</div>

      <VList
        containerHeight={listHeight}
        ItemElHeight={68}
        count={state?.songs.length || 0}
        lists={state?.songs || []}
      />
    </>
  );
}

export default PlayList;
