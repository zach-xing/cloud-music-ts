import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlaylistDetail, fetchSongList } from "../../api/playlist";
import List from "../../components/List";
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
  const [state, setState] = useState<IPlaylist>();

  useEffect(() => {
    (async () => {
      const { data } = await fetchPlaylistDetail({ id: params.id });
      const str = data.playlist.trackIds.reduce(
        (prev: string & { id: string }, cur: { id: string }) =>
          `${prev.id || prev},${cur.id}`
      );
      const res = await fetchSongList({ ids: str });
      console.log(res);
      
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

      <List songs={state?.songs || []} />
    </>
  );
}

export default PlayList;
