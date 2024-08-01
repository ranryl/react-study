#### 使用webpack、typescript创建项目流程
1. 项目初始化：npm init -y
2. 安装项目依赖包：npm i -D webpack webpack-cli typescript ts-loader html-webpack-plugin webpack-dev-server clean-webpack-plugin @babel/core @babel/preset-env babel-loader core-js
3. 编写webpack.config.js文件
4. 编写tsconfig.json文件
5. 在package.json 中添加build: webpack命令
6. 手动创建index.html入口文件，或者在webpack.config.js中配置html plugin自动生成index.html文件
7. 在src下面编写代码
8. 编译代码：npm run build