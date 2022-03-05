import { useCallback, useMemo, useRef, useState } from "react";
import VListItem from "../VListItem";
import { Container } from "./style";

interface IProps {
  lists: any[];
  containerHeight: number;
  ItemElHeight: number;
  count: number;
}

/**
 * 虚拟列表渲染
 */
const VList = (props: IProps) => {
  const containerRef = useRef<any>();
  const [startIndex, setStartIndex] = useState(0);

  // 真实高度
  const trueHeight = useMemo(
    () => props.count * props.ItemElHeight,
    [props.ItemElHeight, props.count]
  );

  // 可视区域最多显示的条数
  const visibleCount = useMemo(
    () => Math.ceil(props.containerHeight / props.ItemElHeight),
    [props.ItemElHeight, props.containerHeight]
  );

  // 可视区域的最后一个索引
  const endIndex = useMemo(
    () => Math.min(startIndex + visibleCount, props.count - 1),
    [props.count, startIndex, visibleCount]
  );

  // 处理滚动
  const handleSrcoll = useCallback(
    (e) => {
      if (e.target !== containerRef.current) return;
      const curIndex = Math.floor(e.target.scrollTop / props.ItemElHeight);
      if (curIndex !== startIndex) {
        setStartIndex(curIndex);
      }
    },
    [props.ItemElHeight, startIndex]
  );

  // 渲染组件
  const render = useCallback(() => {
    const elementArr = [];
    for (let i = startIndex; i <= endIndex; i++) {
      elementArr.push(
        <VListItem
          key={i}
          index={i}
          data={props.lists[i]}
          style={{
            width: "100%",
            height: `${props.ItemElHeight}px`,
            position: "absolute",
            top: `${i * props.ItemElHeight}px`,
            left: 0,
            right: 0,
          }}
        />
      );
    }
    return elementArr;
  }, [endIndex, props.ItemElHeight, props.lists, startIndex]);

  return (
    <Container
      height={props.containerHeight}
      ref={containerRef}
      onScroll={handleSrcoll}
    >
      <div style={{ height: trueHeight + "px", position: "relative" }}>
        {render()}
      </div>
    </Container>
  );
};

export default VList;
