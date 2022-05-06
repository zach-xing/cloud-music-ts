import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMV } from "../../api/search";
import Button from "../../components/Button";
import GridLayout from "../../components/GridLayout";
import MVComp from "../../components/MVComp";
import { MoreDiv } from "./style";

/**
 * 搜索后的 MV 页面
 */
const SearchMVs = () => {
  const [params] = useSearchParams();
  const keywords = params.get("word") || "陈奕迅"; // 万一有人乱搞，总得给他显示点东西吧
  const [mvs, setMVs] = useState<Array<API.MV>>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchSearchMV({ keywords, limit: 30, offset });
      setMVs([...mvs, ...data.result.mvs]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords, offset]);

  return (
    <>
      <h1>搜索 专辑 “{keywords}”</h1>
      <GridLayout>
        {mvs.length
          ? mvs.map((item) => (
              <MVComp
                key={item.id}
                id={item.id}
                name={item.name}
                artistName={item.artistName}
                imgurl={item.cover!}
                publishTime={item.publishTime}
              />
            ))
          : null}
      </GridLayout>
      {mvs.length >= 30 + offset ? (
        <MoreDiv>
          <Button onClick={() => setOffset(offset + 30)}>加载更多</Button>
        </MoreDiv>
      ) : null}
    </>
  );
};

export default SearchMVs;
