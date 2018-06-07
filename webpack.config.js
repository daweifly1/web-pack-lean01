const path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
    entry:{
        bundle : __dirname + '/src/sourceFile.js'
    },
    output:{
        path: __dirname + '/dist',
        filename: '[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
		        include: [path.resolve(__dirname, 'src')],
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: __dirname + '/dist/html/index.html',
            template: __dirname + '/html/test.html',
            inject: 'body',
            date:new Date()
        }),
        new CleanWebpackPlugin(
            ['dist/bundle-*.js'],　//匹配删除的文件
            {
                root: __dirname,       　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　//启用删除文件
            }
        )
    ]
}