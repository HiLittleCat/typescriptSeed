# Typescript种子项目 
使用routing-controllers框架，仓库地址 https://github.com/typestack/routing-controllers， 底层基于koa，自动注入路由、session、请求参数等信息。

### 生成文档，使用apidoc

#### 官网 http://apidocjs.com

#### 安装
```
npm install apidoc -g
```

#### 生成文档命令
```
apidoc
```

### 热启动命令
```
gulp watch
```
### 直接启动方式

#### 编译
```
gulp compile
```

#### 开发环境启动
```
node dist/boot/development.js  
```

#### 测试环境启动
```
node dist/boot/testing.js
```

#### 生产环境启动
```
node dist/boot/production.js  
```

#### 测试命令
```
mocha test/**/*.js
```