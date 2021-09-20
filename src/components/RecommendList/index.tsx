import React from "react";
import "./style.scss";

interface IProp {
  recommendList: any[];
}

const RecommendList: React.FC<IProp> = (props) => {
  return (
    <div className="listWrapper">
      <h2 className="title">推荐歌单</h2>
      {/* 推荐歌单 list */}
      <div className="list">
        {props.recommendList.map((item, index) => {
          return (
            <div className="listItem" key={item.id + index}>
              <div className="imgWrapper">
                <div className="decorate"></div>
                <img
                  src={item.picUrl + "?param=300x300"}
                  width="100%"
                  height="100%"
                  alt="music"
                />
                <div className="playCount">
                  <i>hhh</i>
                  <span>9999</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendList;
