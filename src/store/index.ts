import React from "react";
import playerStore from "./playerStore";

const storesContext = React.createContext({
  playerStore: new playerStore(),
});

const useStores = () => React.useContext(storesContext);

export default useStores;
