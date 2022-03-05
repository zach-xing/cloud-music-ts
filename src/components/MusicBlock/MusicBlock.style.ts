import styled from "styled-components";

export const Block = styled("div")(({
  borderRadius: "15px",
  marginBottom: "15px",
  img: {
    width: "100%",
    borderRadius: "15px",
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
