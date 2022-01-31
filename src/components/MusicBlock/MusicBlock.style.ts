import { styled } from "@mui/material/styles";

interface IBlockProps {
  width: string;
}

export const Block = styled("div")<IBlockProps>((props: IBlockProps) => ({
  width: props.width,
  borderRadius: "15px",
  marginBottom: "15px",
  img: {
    width: "100%",
    borderRadius: "15px",
    cursor: "pointer",
    ":hover": {
      boxShadow: "0 0 20px #fff",
    },
  },
  p: {
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
}));
