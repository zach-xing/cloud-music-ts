# 一个仿音乐软件

仿 Github 中的 YesPlayMusic 开源项目进行编写，项目全部使用 styled-components 自己开发样式组件，包括歌词滚动、底部播放器组件等。

## 启动

```bash
yarn start # 启动 Web 端
```

## 使用的库

说一下用到了那些库吧

- styled-components（需要安装 @types/styled-components）
- react-router-dom（需安装 @types/react-router-dom）
- mobx 与 mobx-react-lite
- axios
- js-cookie（需要安装 @types/js-cookie）
<!-- - dayjs -->
## Features

- 基本音乐软件功能
- 全屏歌词滚动
- 底部播放器组件
- 虚拟列表（VList 组件，目前应用到歌单列表中）

## TODO

- 专辑页面
- 歌手页面
- Message 组件
- Dialog 组件
