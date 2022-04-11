
//require是node中遵循CommonJS规范的模块化解决方案。
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    // 热部署
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 9000,
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'rd平台',
        template: './src/index.html', // 源模板文件
        filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
        showErrors: true,
        inject: 'body',
        chunks: ["common", 'index']
    }), new VueLoaderPlugin()],
    module: {
        rules: [
            //要注意loader加载器的顺序 style-loader css-loader less-loader
            {
                test: /\.css$/i,//test() 方法是一个正则表达式方法。
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                // *.vue
                test: /\.vue$/,
                loader: 'vue-loader',
              },
              {
                // `*.vue` 文件中的 `<style>` 块以及普通的`*.css`
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
              },
        ]
    }
}