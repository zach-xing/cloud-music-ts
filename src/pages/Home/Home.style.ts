import { styled, keyframes } from "@mui/material/styles";

/**
 * 用作将每个音乐块 弹性布局
 */
export const MusicLine = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});


const move = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;
/**
 * 专为 For You 板块使用的（每日推荐）
 */
export const ForYoudiv = styled("div")({
  position: "relative",
  height: "240px",
  overflow: "hidden",
  borderRadius: "15px",
  cursor: "pointer",
  ".title": {
    position: "absolute",
    top: "50%",
    left: "50px",
    transform: "translateY(-50%)",
    fontSize: "50px",
    fontWeight: "bold",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "10px",
    zIndex: 1,
  },
  // 显示的图片滚动动画
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    animation: `${move} 36s infinite`,
    animationDirection: "alternate",
  },
});
