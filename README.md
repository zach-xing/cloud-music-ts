# 一个仿音乐软件

仿 Github 中的 [YesPlayMusic](https://github.com/qier222/YesPlayMusic) 开源项目进行编写，项目全部使用 **styled-components** 自己开发样式组件，包括歌词滚动、底部播放器组件等。

后端数据采用 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 提供的服务。

## 启动

```bash
yarn # 安装依赖包

yarn start # 启动 Web 端
```

## 使用的库

说一下用到了那些库吧

- styled-components（需要安装 @types/styled-components）
- react-router-dom（需安装 @types/react-router-dom）
- mobx 与 mobx-react-lite
- axios
- js-cookie（需要安装 @types/js-cookie）
- dayjs

## Features

- 基本音乐软件功能
- 全屏歌词滚动
- 底部播放器组件
- 虚拟列表（VList 组件，目前应用到歌单列表中）

## TODO

- Message 组件
- Dialog 组件

## 项目部分截图

> 以下部分 UI 还会更改

首页

![](./docs/img/img01.png)

发现

![](./docs/img/img02.png)

音乐库

![](./docs/img/img03.png)
