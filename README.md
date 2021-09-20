# cloud-music

## 开发过程

### 安装依赖
- 使用 `npx create-react-app cloud-music --template typescript` 快速生成项目（使用typescript）

- `npm install --save react-router-dom @types/react-router-dom`
- `npm install redux react-redux @types/react-redux --save`
这两个就不用介绍了

然后就是构建 [routes](https://github.com/ZiKng-Coding/cloud-music-ts/blob/master/src/routes/index.tsx) 和 store
之后在 `App.tsx` 中引入这两个

因为项目中使用的使用 scss，所以安装 `npm install -D node-sass`

使用 `npm install axios` 安装，这个也不用多说了

### 构建布局

在 src 下创建 layout 文件夹并创建 `BaseLayout.tsx` 并进行开发

### 首页的开发

- 首先开发轮播图 `npm install swiper -S`
如果还是不能使用就安装 `npm i --save-dev @types/swiper`


