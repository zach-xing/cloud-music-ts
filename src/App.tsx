import React from "react";
import Header from "./Layout/Header";
import Container from "./Layout/Container";

function App() {
  var originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, newValue) {
    var setItemEvent: any = new Event("setItemEvent");
    setItemEvent.newValue = newValue;
    originalSetItem.apply(this, [key, newValue]);
    window.dispatchEvent(setItemEvent);
  };

  return (
    <>
      <Header />
      <Container />
    </>
  );
}

export default App;
