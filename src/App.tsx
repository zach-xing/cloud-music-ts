import React from "react";
import Header from "./Layout/Header";
import Container from "./Layout/Container";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container />
      </BrowserRouter>
    </>
  );
}

export default App;
