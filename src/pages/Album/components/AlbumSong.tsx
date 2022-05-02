import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const StyleAlbumItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 5px;
  border-radius: 10px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;
  }
  .info {
    flex: 1;
    .songName {
      font-size: 18px;
      font-weight: bold;
      cursor: default;
    }
    .name {
      font-size: 14px;
      margin-right: 5px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  :hover {
    background-color: rgba(34, 34, 34, 0.86);
  }
`;

/**
 * 专辑中的歌曲样式
 */
const AlbumSong: React.FC<{ data: API.Song }> = (props) => {
  const navigate = useNavigate();
  const { data } = props;

  const playMusic = () => {
    localStorage.setItem("player", JSON.stringify(data));
  };

  const jumpToArtist = (id: number | undefined) => {
    if (id === undefined || id === 0) return;
    navigate(`/artist/${id}`);
  };

  return (
    <StyleAlbumItem onDoubleClick={playMusic}>
      <img src={data.al && data.al.picUrl} alt={data.name} />
      <div className="info">
        <div className="songName">
          {data.name}
        </div>
        {data.ar &&
          data.ar.map((item) => (
            <span
              className="name"
              key={item.id}
              onClick={() => jumpToArtist(item.id)}
            >
              {item.name}
            </span>
          ))}
      </div>
      <div>{dayjs(data.dt).format("mm:ss")}</div>
    </StyleAlbumItem>
  );
};

export default AlbumSong;
