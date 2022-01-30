import { useEffect, useState } from "react";
import { MusicLine } from "./Home.style";
import MusicBlock from "../../components/MusicBlock";
import { fetchPersonalized } from "../../api/home";

/** Props 类型 */
interface IProps {
  title: string;
}

/** 获取数据元素的类型 */
interface IResult {
  id: number;
  name: string;
  picUrl: string;
}

/** 推荐音乐 */
const PersonalizedBlock = (props: IProps) => {
  const [result, setResult] = useState<IResult[]>([]);

  useEffect(() => {
    fetchPersonalized().then((res) => {
      console.log(res.data.result);
      setResult(res.data.result);
    });
  }, []);

  return (
    <>
      <h2>{props.title}</h2>
      <MusicLine>
        {result.map((item) => {
          return (
            <MusicBlock key={item.id} name={item.name} picUrl={item.picUrl} />
          );
        })}
      </MusicLine>
    </>
  );
};

export default PersonalizedBlock;
