import { makeAutoObservable } from "mobx";

// interface 主题颜色
interface ITheme {
  backgroundColor: string;
  color: string;
}

// 预先定义好要用的主题色
const customTheme = [
  {
    backgroundColor: "rgba(34,34,34,0.86)",
    color: "#000",
  },
  {
    backgroundColor: "rgba(255,255,255,0.86)",
    color: "#FFF",
  },
];

class ThemeStore {
  theme: ITheme = {
    backgroundColor: "rgba(34,34,34,0.86)",
    color: "#000",
  };
  themeIndex = 1;

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = customTheme[this.themeIndex % 2];
  }
}

export default ThemeStore;
