const path = require("path");
/* const { VueLoaderPlugin } = require('vue-loader'); */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
   // devtool:"eval-source-map",
    devtool:"source-map",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        // 指定生成的文件名
        filename: "js/bundle.js",
        // 指定存放的目录
        path: path.resolve(__dirname, "./dist"),
        //内存中寻找生成的文件的地址，默认是空，浏览器一般会自动添加/ 防止浏览器不会添加，所以这个地方设置成/
        publicPath: "/"
    },
    devServer: {
        //首次打包瀏覽器
        open: true,
        port: 8081,
        // contentBase: __dirname, -- 请注意，这种写法已弃用
        // 告诉服务器从哪里提供内容。只有在你希望提供静态文件时才需要这样做。
        static: {
            directory: path.join(__dirname, "/"),
        },
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
            { test: /\.jpg|jpeg|png|gif$/i, use: 'url-loader?limit=50000000' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: "babel-loader"
            }
            /* {
                // *.vue
                test: /\.vue$/,
                loader: 'vue-loader',
              },
              {
                // `*.vue` 文件中的 `<style>` 块以及普通的`*.css`
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
              }, */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // Also generate a test.html
            title:"new html",
            filename: 'index.html',
            template: './src/index.html'
        })
        //new VueLoaderPlugin(),
    ],
}