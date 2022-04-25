import { useEffect, useState } from "react";
import styled from "styled-components";
import Tag from "../../../components/Tag";
import { fetchPlayCatlist } from "../../../api/playlist";

const StyleBox = styled.div`
  width: 100%;
  background-color: #323232;
  border-radius: 20px;
  padding: 20px 10px;
  margin-bottom: 30px;
  .line {
    display: flex;
    margin: 20px 0;
    h2 {
      color: #bdbdbd;
      width: 5%;
      margin: 0 20px;
    }
    .group {
      width: 94%;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

interface IProps {
  selectedText: string;
  setSelectedText: (value: string) => void;
}

/**
 * 显示类别Box
 */
const CategoryBox = (props: IProps) => {
  const [list, setList] = useState<Array<API.CategoryInfo>>();

  useEffect(() => {
    (async () => {
      const playlistCatlist = await fetchPlayCatlist();
      const arr = [];
      for (let index of Object.keys(playlistCatlist.categories)) {
        arr.push({
          title: playlistCatlist.categories[index],
          sub: playlistCatlist.sub.filter(
            (item: any) => item.category === +index
          ),
        });
      }
      setList(arr);
    })();
  }, []);

  const handleClick = (name: string) => {
    if (name === props.selectedText) {
      props.setSelectedText("全部");
    } else {
      props.setSelectedText(name);
    }
  };

  return (
    <StyleBox>
      {list?.map((item) => (
        <div key={item.title} className="line">
          <h2>{item.title}</h2>
          <div className="group">
            {item.sub.map((subItem, index: number) => (
              <Tag
                key={index}
                active={props.selectedText === subItem.name}
                onClick={() => handleClick(subItem.name)}
              >
                {subItem.name}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </StyleBox>
  );
};

export default CategoryBox;
