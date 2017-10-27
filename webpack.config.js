module.exports = {
    entry:'./src/main.js', //入口文件
    output: {
        path: __dirname, //输出位置
        filename: 'dist/all.js' //输入文件
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015','react']
            }
          }
        }
      ]
    },
    watch:true
}
