import React, { useEffect, useRef } from "react";

interface IProps {
  url: string;
  alt: string;
  onClick?: React.MouseEventHandler;
  onDoubleClick?: React.MouseEventHandler;
}

/**
 * 自定义 img 组件（图片懒加载）
 */
const LazyLoadImg: React.FC<IProps> = (props) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const observeRef = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, intersectionRatio } = entry;
        if (intersectionRatio > 0) {
          const _target = target as HTMLImageElement;
          _target.src = _target.dataset["src"] ?? "";
          observeRef.current.unobserve(_target); // 当加载出图片后就移除监听
        }
      });
    })
  );

  useEffect(() => {
    const imgEl = imgRef.current;
    observeRef.current.observe(imgEl!);
  }, []);

  return (
    <img
      ref={imgRef}
      src=""
      data-src={props.url}
      alt={props.alt}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
    />
  );
};

export default LazyLoadImg;
