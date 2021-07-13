# vue-project-template

vue 项目模板
[vue 官方文档](https://cn.vuejs.org/v2/guide/)
[vuetify 官方文档](https://vuetifyjs.com/zh-Hans/getting-started/quick-start)

## 目录

1. [npm 命令说明](#npm-scripts-intro)
1. [路径别名](#path-alias)
1. [路由](#route)
1. [状态管理器 vuex, 模块化](#state-manager)
1. [icon](#icon)
1. [前后端文件交互](#file)
1. [cm 创建模块脚本](#cm)
1. [mock](#mock)
1. [theme，主题控制](#theme)
1. [权限控制](#auth)
1. [开源工具库](#open-source)
1. [本地工具库](#local-gongju)
1. [UI 框架使用规范](#ui-rule)

## <a id='npm-scripts-intro'>npm 命令说明</a>

1. dev 开发
1. mock 启动 mock 服务
1. build:dev 打包开发环境包
1. build:prd 打包生产环境包
1. cm 模块模板创建脚本
1. cc 组件模板创建脚本, 新增的组件文件会放在/src/components 下面，需要手动移动到/base 或者/business 文件夹下
1. mock:cc 创建 nest controller 模板，规范使用如下模式
   ```node
   npm run mock:cc controller/*** // 其中***是你要新建的文件夹名字
   // 示例如下
   npm run mock:cc controller/user // 那么就会在mock-server/src/controller 下新建一个user的文件夹，在其中编写mock数据即可
   ```

## <a id='path-alias'>路径别名</a>

1. @ => src
1. @base => ./src/components/base
1. @biz => ./src/components/business

## <a id='route'>路由</a>

1. 路由配置在 src/route 中
2. 应全部都使用懒加载
3. 二级子路由也应放在此处，方便整个项目路由的统一维护

## <a id='state-manager'>状态管理器 vuex, 模块化</a>

1. 详情参见[vuex 官网](https://vuex.vuejs.org/zh/)

## <a id='icon'>icon</a>

1. 内置的 icon 可以在[mdi](https://materialdesignicons.com/)上查看
   - 比如你在上面找到个叫 history 的 icon 那么代码应该是下面这样
     `html <!-- 需要添加mdi-前缀 --> <v-icon>mdi-history</v-icon>`
1. icon 样本在./src/assets/font/demo_index.html 中
1. 切换到**Font class**菜单
   ![icon-list](./doc/images/icon-list.png)
1.  发现 icon 的 class 名称是 zxr-help
   ```html
   <!-- 最终代码如下 -->
   <v-icon>zxr-help</v-icon>
   ```

## <a id='file'>前后端文件交互</a>

### 文件上传

[文件上传组件](./src/components/business/FileUpload/readme.md)

### 文件删除需要调用接口

- 文件删除需要调用接口删除
- 删除方法在 http/file 下的 fileDelete 方法，参数直接传入 fileId 即可

### 文件下载

- **文件 get 下载方法**在 http/file 下的 getFileUrl,参数直接传入 fileId 即可获取文件 get 下载地址
- **文件 post 下载方法**在 http/file 的默认 axios 请求实例， 调用即可下载

### 图片预览，同文件 get 方式下载

## <a id='cm'>cm 创建模块脚本</a>

**建议使用此命令**

1. 创建模块脚本放在/scripts/create-module
2. 模块的模板放在/scripts/create-module/templates 中，可以自行添加自己需要的模板
3. 在模板中定义的 modulename 字符串，在模块自动生成后会自动替换为模块名
4. 例如用户新建 aa-bb-cc/list 模块，选择了 base 模板，那么 base 模板中的所有 modulename 字符串都会被替换为 aaBbCcList 字符

## <a id='mock'>mock</a>

1. mock 服务器使用的是 nestjs 框架，需要先安装依赖才能运行
   ```typescript
   cd ./mock-server
   yarn // 或者npm i
   ```
2. mock 服务器，设计是部分接口可以 mock，部分接口走正常后台，具体配置在**mock-server/src/proxy/** 下
3. mock-server/src/proxy/api/\*表示，你编写的 mock api 列表
4. mock-server/src/proxy/mock.ts 配置你需要哪些 API 需要 mock，以及 mock 总开关
5. mock-server/src/proxy/config.ts 配置 mock 服务的请求 url 前缀、不走 mock 时的服务器地址
6. 使用`npm run mock:cc`命令  创建 controller

## <a id='theme'>theme，主题控制</a>

- 参见 vuetify 官网

## <a id='auth'>权限控制</a>

1. 权限控制 自定义指令，待实现

## <a id='open-source'>开源工具库</a>

1. 国际化[vue-i18n](https://www.npmjs.com/package/vue-i18n)
1. 基础工具函数[lodash](https://www.npmjs.com/package/lodash)
1. 计算库[bignumber.js](https://www.npmjs.com/package/bignumber.js)
1. 金额处理库[numeral.js](https://www.npmjs.com/package/numeral)
1. 时间处理库[dayjs](https://www.npmjs.com/package/dayjs)
1. 颜色处理库[color](https://www.npmjs.com/package/color)
1. 对象 key 值转换[convert-key](https://www.npmjs.com/package/convert-key)\*\*此工具可以做前后端的接口数据隔离，建议将接口适配放

## <a id='local-gongju'>本地工具库 src/utils</a>

1. index.js 存放常用的工具方法，包括金额格式化，日期格式化等
1. regExps.js 存放常用的正则
1. validator.js 存放数据校验函数工具

## <a id='ui-rule'>UI 框架使用规范</a>

1. 本项目使用**vuetify**作为主要的 UI 框架
