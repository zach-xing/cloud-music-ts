import React, { useEffect, useState } from "react";
import { fetchCollectAlbums } from "../../../api/album";
import { fetchCollectArtists } from "../../../api/artists";
import { fetchCollectMVs } from "../../../api/mv";
import Box from "../../../components/Box";
import BoxSinger from "../../../components/BoxSinger";
import Empty from "../../../components/Empty";
import GridLayout from "../../../components/GridLayout";
import MVComp from "../../../components/MVComp";
import Tag from "../../../components/Tag";

const texts = ["专辑", "艺人", "MV"];

/**
 * 个人收藏的专辑、艺人、MV
 */
const PersonalCollect = () => {
  const [curText, setCurText] = useState("专辑");
  const [collectAlbums, setCollectAlbums] = useState<Array<API.Album>>([]);
  const [collectArtists, setCollectArtists] = useState<Array<API.Artist>>([]);
  const [collectMVs, setCollectMVs] = useState<Array<API.Video>>([]);
  let renderElement: React.ReactElement | null = null;

  useEffect(() => {
    (async () => {
      const arr = await Promise.all([
        fetchCollectAlbums(),
        fetchCollectArtists(),
        fetchCollectMVs(),
      ]);
      setCollectAlbums(arr[0].data);
      setCollectArtists(arr[1].data);
      setCollectMVs(arr[2].data);      
    })();
  }, []);

  // 渲染指定组件
  if (curText === texts[0]) {
    renderElement = (
      <>
        {collectAlbums.length !== 0 ? (
          <GridLayout>
            {collectAlbums.map((item) => (
              <Box
                key={item.id}
                id={item.id}
                name={item.name}
                picUrl={item.picUrl}
              />
            ))}
          </GridLayout>
        ) : (
          <Empty />
        )}
      </>
    );
  } else if (curText === texts[1]) {
    renderElement = (
      <>
        {collectArtists.length !== 0 ? (
          <GridLayout>
            {collectArtists.map((item) => (
              <BoxSinger
                key={item.id}
                id={item.id}
                name={item.name}
                picUrl={item.picUrl}
              />
            ))}
          </GridLayout>
        ) : (
          <Empty />
        )}
      </>
    );
  } else {
    renderElement = (
      <>
        {collectMVs.length !== 0 ? (
          <GridLayout>
            {collectMVs.map((item) => (
              <MVComp
                key={item.vid}
                id={item.vid}
                name={item.title}
                artistName={item.creator[0].userName}
                imgurl={item.coverUrl}
                publishTime={`播放 ${item.playTime} 次`}
              />
            ))}
          </GridLayout>
        ) : (
          <Empty />
        )}
      </>
    );
  }

  return (
    <>
      <h2 style={{ marginTop: "50px" }}>我的收藏</h2>
      <div style={{ display: "flex", margin: "20px 0" }}>
        {texts.map((item) => (
          <Tag
            key={item}
            style={{ marginRight: "10px" }}
            active={item === curText}
            onClick={() => setCurText(item)}
          >
            {item}
          </Tag>
        ))}
      </div>

      {renderElement}
    </>
  );
};

export default PersonalCollect;
