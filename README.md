**demo**: [https://taylorchen709.github.io/vue-admin/](https://taylorchen709.github.io/vue-admin/)

# To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

```

# Folder structure
* build - webpack config files
* config - webpack config files
* dist - build
* src -your app
    * api

      * api.js 公共变量
      * index.js 导入api.js
    * assets

      * theme-darkblue 样式模块
      * theme-green 样式模块
    * common

      * 工具类
        * util.js 工具类
    * components - your vue components
    * mock 数据模拟配置

      *  data
         * user.js 模拟用户登录数据
      *  index.js  导入mock.js
      *  mock.js 生成模拟数据配置
    * styles
      * vars.scss 样式管理
    * views - your pages
    * vuex
      * KPI  KPI模块
      * nav1
    * App.vue 入口文件
    * main.js - main file
    * routes.js 路由配置
* static - static assets

# Theme
You can change theme by 
1. Generate theme packages by [https://elementui.github.io/theme-preview/#/](https://elementui.github.io/theme-preview/#/)
2. Put theme packages in src/assets/theme/
3. Edit src/main.js 
``` bash
   import 'element-ui/lib/theme-default/index.css'
   to
   import './assets/theme/your-theme/index.css'
```
4. Edit src/styles/vars.scss

![theme-blue](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/rec-demo.gif)
![theme-green](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/theme-green.png)

# Browser support

Modern browsers and IE 10+.

# License
[MIT](http://opensource.org/licenses/MIT)
