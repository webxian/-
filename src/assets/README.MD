# 游记网

### 项目要求

+ 严禁抄袭（两人都零分）

+ bootstrap（不强制） ==>   覆盖原生样式  ==>  加深框架的使用

+ swiper ==>  样式生成回调

+ Jquery UI   时间插件  ==>  回忆日历插件如何使用

+ 样式布局、css的盒子模型

+ PHP  数据库操作   PHP文件上传

  ​

### 游记网  （30% ==> -10%）

+ 类似博客系统 ==> 具有一定主题的文章
+ 用户留言和评论
+ 结伴  ==>  用户的线上发布 线下组团
+ 时效性 ==> 页面中数据显示 超时的结伴 不能显示



+ 游记
  + 游记展示
  + 游记详情
  + 游记发布
  + 留言
+ 结伴
  + 结伴展示
  + 结伴详情
  + 结伴发布
  + 报名
+ 用户设置
  + 注册
  + 登录
  + 密码修改
  + 信息完善








### 搭建项目框架

#### 1、创建Angular项目

```
ng new tournote --routing
cd tournote
cnpm install
```

#### 2、安装必要的第三方依赖

```
cnpm i bootstrap --save
cnpm i jquery --save
cnpm i @types/bootstrap --save-dev
cnpm i @types/jquery --save-dev
```

#### 3、添加相应配置文件

```
proxy.cfg.json
```

#### 4、配置package.json文件

```
  "start": "ng serve --proxy-config proxy.cfg.json",
```

#### 5、cli文件

```
"styles": [
        "styles.css",
        "../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.css"
      ],
      "scripts": [
        "../node_modules/_jquery@3.2.1@jquery/dist/jquery.js",
        "../node_modules/_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.js"
      ],
```

#### 6、配置app.module.ts

```
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
```



#### 7、分析项目结构

```
项目
|---src
	|---app
		|---components
		|---services
			|---tournote.service.ts
					findByPage:首页查询
		|---extras
```



每个页面对应一个组件







### 和UEditor集成 

安装

```
npm install ngx-ueditor --save
```

导入模块

app.module.ts

```
import { UEditorModule,UEditorConfig } from 'ngx-ueditor';
imports:[
  UEditorModule
],
providers:[
  UEditorConfig
]
```

使用：

```html
<!--cfg 对应ts中的json对象，用于ueditor的config配置-->
<ueditor [config]="cfg" ></ueditor>
```







