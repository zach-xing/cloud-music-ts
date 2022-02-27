import styled from "styled-components";

interface IBlockProps {
  width: string;
}

export const Block = styled("div")<IBlockProps>((props: IBlockProps) => ({
  width: props.width,
  borderRadius: "90%",
  marginBottom: "15px",
  img: {
    width: "100%",
    borderRadius: "90%",
    cursor: "pointer",
    ":hover": {
      boxShadow: "0 0 10px #fff",
    },
  },
  p: {
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
}));