import React from 'react';
import ThemeStore from "./themeStore";

const storesContext = React.createContext({
  themeStore: new ThemeStore(),
});

export const useStores = () => React.useContext(storesContext);