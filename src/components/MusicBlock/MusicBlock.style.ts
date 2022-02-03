import { styled } from "@mui/material/styles";

interface IBlockProps {
  width: string;
  isround: boolean;
}

export const Block = styled("div")<IBlockProps>((props: IBlockProps) => ({
  width: props.width,
  borderRadius: props.isround ? "90%" : "15px",
  marginBottom: "15px",
  img: {
    width: "100%",
    borderRadius: props.isround ? "90%" : "15px",
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
