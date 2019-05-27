# React

## 需要先安装node.js 其中自带了npm包管理工具

## 安装Create React App

- `npm i Create React App -g` 全局安装
- 终端位置调到桌面 输入 `reate react app my-app` 创建了`my-app`文件夹
- 下载Create React App 并且初始化下载依赖包
   + `npm i Create React App`
   + `npm init -y`
   + `npm i`

## 异步请求axios

- 使用npm
   +`$ npm install axios`
- 模拟get请求

```javascript
const axios = require('axios');
// Make a request for a user with a given ID
axios.get('/data')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  ```

## 插件

- 间接了解插件mockjs，模拟后端借口，拦截ajax请求
- 安装
   + `npm install mockjs`
   + `Mock.mock( rurl, template )`

```javascript
var Mock = require('mockjs')
var obj = ["hello",'world','good'];
//上面axios发出的ajax get 请求会被mock拦截 发送obj回去
Mock.mock('/data', obj);
```
