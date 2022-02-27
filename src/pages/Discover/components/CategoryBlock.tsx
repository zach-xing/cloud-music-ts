import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Tag from "../../../components/Tag";
import { CategoryStyleBlock } from "../discover.style";
import { fetchCategories } from "../../../api/discover";

interface IProps {
  categoryText: string;
  setCategoryText: Dispatch<SetStateAction<string>>;
}

/**
 * 歌单分类组件
 */
const CategoryBlock = (props: IProps) => {
  const [categoryInfo, setCategoryInfo] = useState<any>();

  useEffect(() => {
    (async () => {
      const { data } = await fetchCategories();

      const info = [];
      for (let index of Object.keys(data.categories)) {
        info.push({
          title: data.categories[index],
          sub: data.sub.filter((item: any) => item.category === ~~index),
        });
      }
      setCategoryInfo(info);
    })();
  }, []);

  const changeCategoryText = (name: string) => {
    props.setCategoryText(name);
  }

  return (
    <CategoryStyleBlock>
      {categoryInfo &&
        categoryInfo.map((item: any, index: number) => (
          <div key={index} className="line">
            <h2>{item.title}</h2>
            <div className="tagGroup">
              {item.sub.map((subItem: any) => (
                <Tag
                  key={subItem.name}
                  active={subItem.name === props.categoryText}
                  showText={subItem.name}
                  onClick={() => changeCategoryText(subItem.name)}
                />
              ))}
            </div>
          </div>
        ))}
    </CategoryStyleBlock>
  );
};

export default CategoryBlock;
