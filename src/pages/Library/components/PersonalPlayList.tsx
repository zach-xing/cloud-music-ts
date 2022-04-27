import React, { useState } from "react";
import styled from "styled-components";
import Box from "../../../components/Box";
import GridLayout from "../../../components/GridLayout";

const SectionTwo = styled.div`
  select {
    font-size: 18px;
    color: #e4e4e4;
    background-color: #4a4949;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 15px 0;
  }
`;

interface IProps {
  playLists: Array<API.PlayListItem>;
}

/**
 * 个人歌单
 * @returns
 */
const PersonalPlayList: React.FC<IProps> = (props) => {
  const [curStatus, setCurStatus] = useState("all");

  // 切换 select {全部歌单、创建的歌单、收藏的歌单}
  const handleChangePlaylist = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurStatus(e.target.value);
  };

  return (
    <SectionTwo>
      <select onChange={handleChangePlaylist}>
        <option value="all">全部歌单</option>
        <option value="created">创建的歌单</option>
        <option value="subscribed">收藏的歌单</option>
      </select>
      <GridLayout>
        {props.playLists
          ?.filter((item) => {
            if (curStatus === "subscribed") {
              return item.subscribed === true;
            } else if (curStatus === "created") {
              return item.subscribed === false;
            } else {
              return true;
            }
          })
          .map((item) => (
            <Box
              id={item.id}
              key={item.id}
              name={item.name}
              picUrl={item.coverImgUrl}
            />
          ))}
      </GridLayout>
    </SectionTwo>
  );
};

export default PersonalPlayList;
