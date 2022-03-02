import React from "react";
import playerStore from "./playerStore";
import userStore from "./userStore";

const storesContext = React.createContext({
  playerStore: new playerStore(),
  userStore: new userStore(),
});

const useStores = () => React.useContext(storesContext);

export default useStores;
