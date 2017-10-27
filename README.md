# Reactjs

# 第一部分：
## 搭建环境：

应用核心技术：webpack ES2015 Reactjs

> webpack 目前已经有3的版本，本文使用webpack2最新的版本 2.6.1

1、 项目初始化：

    npm init

2、安装webpack到开发依赖：

    cnpm install webpack@2.6.1 --save-dev

3、安装babel：翻译ES6 JSX

    cnpm install babel-core --save-dev
    # babel-loader 依赖babel-core
    cnpm install babel-loader --save-dev
    cnpm install babel-preset-es2015 --save-dev

    # 以上3句执行一句：
    cnpm install babel-core babel-loader babel-preset-es2015 --save-dev

3-1、webpack中配置babel-loader：

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        }
      ]
    }
4、安装 react到开发依赖：

    cnom install react --save-dev
    cnom install react-dom --save-dev

    # 整合成一句：
    cnpm install react react-dom --save-dev

4-1、此时要修改webpack.config.js 配置文件，添加babel的presets项目，编译react中的jsx语法：

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
        }
    }

4-2、安装babel对react的编译依赖：

    cnpm install babel-preset-react --save-dev

4-3、webpack 配置文件中加上 watch 属性：作用是监听编译的文件，如果文件有变化，则会实时编译：

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

# 第二部分
## Hello world:

1、首先要清楚react的一些规则：

- 组件化开发，组件的名字首字母必须大写
- 组件在react中被称为类class，一个组件即一个抽象的对象，必须继承一个类，与python中声明一个类相似

1-1、App.js称为react项目中的一个组件：

    import React from 'react';

    class App extends React.Component {
        render(){
          return <h1>Hello world</h1>;
        }
    }
    export default App;

1-2、main.js中：

    import React from 'react';
    import {render} from 'react-dom';
    import App from './App.js';

    render(
      <App></App>,
      document.getElementById('app')
    )

>注意： document.getElementById('app') 后面一定不要加分号，因为这是传一个实参传递到render函数中。
