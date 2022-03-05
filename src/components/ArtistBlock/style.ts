import styled from "styled-components";

export const Block = styled("div")(({
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