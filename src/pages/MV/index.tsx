import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import { useParams } from "react-router-dom";
import { fetchMVDetail, fetchMVURL } from "../../api/mv";
import "../../assets/css/plyr.css";
import { StyleMVInfoDiv } from "./style";

/**
 * MV 页面
 */
const MV = () => {
  const { id } = useParams();
  const [MVInfo, setMVInfo] = useState<any>();
  const videoPlayerEl = useRef<HTMLVideoElement>(null); // VideoElement

  useEffect(() => {
    // 初始化 Plyr 实例
    let tmp = new Plyr(videoPlayerEl.current!, {
      settings: ["quality"],
      autoplay: false,
      quality: {
        default: 1080,
        options: [1080, 720, 480, 240],
      },
    });

    // 获取数据
    (async () => {
      const { data } = await fetchMVDetail({ mvid: +id! });
      const promiseArr = data.brs.map((item) =>
        fetchMVURL({ id: +id!, r: item.br })
      );
      Promise.all(promiseArr).then((results) => {
        let sources = results.map((result) => {
          return {
            src: result.data.url.replace(/^http:/, "https:"),
            type: "video/mp4",
            size: result.data.r,
          };
        });

        tmp.source = {
          type: "video",
          title: data.name,
          sources: sources,
          poster: data.cover.replace(/^http:/, "https:"),
        };
      });
      setMVInfo(data);
    })();
  }, [id]);

  return (
    <div>
      <video ref={videoPlayerEl}></video>
      <StyleMVInfoDiv>
        <h3>{MVInfo?.name}</h3>
        <div className="info">
          {MVInfo?.artistName} -{" "}
          {MVInfo?.playCount.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")}{" "}
          次播放 - 发布于 {MVInfo?.publishTime}
        </div>
      </StyleMVInfoDiv>
    </div>
  );
};

export default MV;
