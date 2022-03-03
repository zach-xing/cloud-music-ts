import React from "react";
import playerStore from "./playerStore";
import userStore from "./userStore";

export const stores = {
  playerStore: new playerStore(),
  userStore: new userStore(),
};

export const StoresContext = React.createContext(stores);

const useStores = () => React.useContext(StoresContext);

export default useStores;
