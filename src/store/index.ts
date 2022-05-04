import React from "react";
import playerStore from "./playerStore";
import userStore from "./userStore";

export const stores = {
  userStore: new userStore(),
  playerStore: new playerStore(),
};

const StoresContext = React.createContext(stores);

/**
 * 对外使用的状态管理 hook
 */
const useStores = () => React.useContext(StoresContext);

export default useStores;
