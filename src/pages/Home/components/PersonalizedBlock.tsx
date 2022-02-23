import { useEffect, useState } from "react";
import { MusicLine } from "../Home.style";
import MusicBlock from "../../../components/MusicBlock";
import { fetchPersonalized } from "../../../api/home";

/** 获取数据元素的类型 */
interface IResult {
  id: number;
  name: string;
  picUrl: string;
}

/** 热门推荐音乐 */
const PersonalizedBlock = () => {
  const [result, setResult] = useState<IResult[]>([]);

  useEffect(() => {
    fetchPersonalized().then((res) => {
      setResult(res.data.result);
    });
  }, []);

  return (
    <>
      <h2>推荐音乐</h2>
      <MusicLine>
        {result.map((item) => {
          return (
            <MusicBlock
              key={item.id}
              blockWidth={"18%"}
              name={item.name}
              picUrl={item.picUrl}
              isround="false"
            />
          );
        })}
      </MusicLine>
    </>
  );
};

export default PersonalizedBlock;
