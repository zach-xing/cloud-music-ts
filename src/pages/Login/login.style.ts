import styled from "styled-components";

export const Main = styled.div`
  height: calc(100vh - 64px - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * 登录组件
 */
export const Signup = styled.div`
  text-align: center;
  margin-top: -150px;
  input {
    display: block;
    width: 20rem;
    height: 2.4rem;
    padding-left: 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin: 1rem 0;
    color: white;
    background-color: #404040;
    :focus {
      color: black;
      background-color: #bbcdff;
    }
  }
  button {
    width: 20rem;
    height: 2.4rem;
    margin-top: 20px;
    background-color: #bbcdff;
    border-radius: 10px;
    border: none;
    outline: none;
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.2);
    }
    :active {
      transform: scale(0.9);
    }
  }
  img {
    width: 100px;
  }
`;
