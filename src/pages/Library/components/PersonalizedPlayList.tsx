import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchPersonalizedNewSongs } from "../../../api/personalized";
import Box from "../../../components/Box";

const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  .text {
    font-size: 1.2rem;
    writing-mode: vertical-lr;
    letter-spacing: 2px;
  }
  .grid_layout {
    display: grid;
  }
`;

/**
 * 推荐的歌单
 * @returns
 */
const PersonalizedPlayList = () => {
  const [newSongs, setNewSongs] = useState<Array<API.Song>>();

  useEffect(() => {
    (async () => {
      const data = await fetchPersonalizedNewSongs();
      console.log(data);
      const arr: Array<API.Song> = [];
      data.result.forEach((item) => {
        arr.push(item.song);
      });
      setNewSongs(arr);
    })();
  }, []);

  return (
    <StyleDiv>
      <div className="text">推荐新音乐单曲</div>
      <div className="grid_layout">
        {newSongs?.map((item) => (
          <>
            {item.name}
            {/* <img src={data.al && data.al.picUrl} alt={data.name} />
            <div className="info">
              <div className="songName">{data.name}</div>
              <div className="name">{data.ar && data.ar[0].name}</div>
            </div>
            <div style={{ flex: 1 }}>{data.al && data.al.name}</div>
            <div>{dayjs(data.dt).format("mm:ss")}</div> */}
          </>
        ))}
      </div>
    </StyleDiv>
  );
};

export default PersonalizedPlayList;
