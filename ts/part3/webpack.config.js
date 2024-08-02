const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
    // 入口文件
    entry: "./src/index.ts",

    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: "bundle.js",
        // environment: {
        //     arrowFunction: false, // 关闭webpack使用箭头函数
        // }
    },
    mode: "production",
    // 知道哪个webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                //     // 配置babel
                //     {
                //         // 指定加载器
                //         loader: "babel-loader",
                //         // 设置babel
                //         options: {
                //             // 设置预定义的环境
                //             presets: [
                //                 [
                //                     // 指定环境的插件
                //                     "@babel/preset-env",
                //                     // 配置信息
                //                     {
                //                         // 要兼容的目标浏览器
                //                         targets: {
                //                             "chrome": "58",
                //                             "ie": "11",
                //                         },
                //                         "corejs": "3",
                //                         // 使用corejs的方式, usage: 按需加载
                //                         "useBuiltIns": "usage",
                //                     }
                //                 ]
                //             ]
                //         },
                //     },
                    'ts-loader',
                ],
                exclude: /node-modules/,
            }
        ]
    },
    plugins: [
        // 自动生成html并引入相关资源
        // 在dist目录下生成index.html，并在其中引入bundle.js
        new HTMLWebpackPlugin({
            title: "自定义title",
            // 自定模板
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.js', '.ts'],
    },
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, "/"),
    //     }
    // }
};