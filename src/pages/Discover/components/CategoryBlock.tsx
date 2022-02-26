import { useEffect, useState } from "react";
import Tag from "../../../components/Tag";
import { fetchCategories } from "../../../api/discover";
import { CategoryStyleBlock } from "../discover.style";

interface ICategoryInfo {
  all: any;
  categories: any;
  sub: any[];
}

/**
 * 歌单分类组件
 */
const CategoryBlock = () => {
  const [categoryInfo, setCategoryInfo] = useState<ICategoryInfo | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetchCategories();
      console.log(res.data);

      setCategoryInfo(res.data);
    })();
  }, []);

  return (
    <CategoryStyleBlock>
      <div className="line">
        <h3>语法</h3>
      </div>
    </CategoryStyleBlock>
  );
};

export default CategoryBlock;
