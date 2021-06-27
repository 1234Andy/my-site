## Avatar

![](http://mdrs.yuanjin.tech/img/20201130153821.png)

#### 属性

| 属性名 |        含义        |  类型  | 必填 | 默认值 |
| :----: | :----------------: | :----: | :--: | :----: |
|  url   |    头像图片路径    | String |  是  |   无   |
|  size  | 头像尺寸，宽高相等 | Number |  否  |  100   |



## Icon

图标来源于阿里巴巴矢量库	

有效图标如下

![](http://mdrs.yuanjin.tech/img/20201130155542.jpg)

| 属性名 |   含义   |  类型  | 必填 | 默认值 |
| :----: | :------: | :----: | :--: | :----: |
|  type  | 图标类型 | String |  是  |   无   |



## pager

分页组件

![](C:\Users\MI\AppData\Roaming\Typora\typora-user-images\1624243065821.png)

| 属性名  |   含义   |  类型  | 必填 | 默认值 |
| :-----: | :------: | :----: | :--: | :----: |
| current |  当前页  | Number |  否  |   1    |
|  total  |   总页   | Number |  否  |   1    |
| viewNum | 显示页数 | Number |  是  |   无   |

#### 事件

|   事件名   |   含义   | 事件参数 | 参数类型 |
| :--------: | :------: | :------: | :------: |
| pageChange | 页码变化 | 新的页码 |  Number  |



## Empty 

该组件需要在外层容器中横向垂直居中

<img src="http://mdrs.yuanjin.tech/img/20201130165011.png" alt="image-20201130165011681" style="zoom:50%;" />

该组件需要在外层容器中横向垂直居中

#### 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ---------- | ------ | ---- | -------- |
| text   | 显示的文字 | String | 否   | "无数据" |



## ImageLoader

该组件用于原图片为加载出来时的过渡

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif)

#### 属性

| 属性名      | 含义                     | 类型   | 必填 | 默认值 |
| ----------- | ------------------------ | ------ | ---- | ------ |
| src         | 源图片的路径             | String | 是   | 无     |
| placeholder | 加载时显示的图片         | String | 是   | 无     |
| duration    | 加载完成后过渡动画的时间 | NUmber | 否   | 500    |

#### 事件

| 事件名  |             含义             | 事件参数 | 参数类型 |
| :-----: | :--------------------------: | :------: | :------: |
| imgLoad | 图片完全加载显示后的回调函数 |    无    |    无    |



## Contact

<img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" alt="iShot2020-11-30下午04.55.47" style="zoom:40%;" />

该组件需要横向撑满容器



## Menu

<img src="http://mdrs.yuanjin.tech/img/20201130195147.png" alt="image-20201130195147086" style="zoom:33%;" />

该组件需要横向撑满容器，背景色透明

每个菜单的信息如下：

> **首页**
>
> 链接地址：/
>
> 选中条件：路径等于 /
>
> **文章**
>
> 链接地址：/blog
>
> 选中条件：路径以`/blog`开头
>
> **关于我**
>
> 链接地址：/about
>
> 选中条件：路径等于`/about`
>
> **项目&效果**
>
> 链接地址：/project
>
> 选中条件：路径等于`/project`
>
> **留言板**
>
> 链接地址：/message
>
> 选中条件：路径等于`/message`



## SiteAside

<img src="http://mdrs.yuanjin.tech/img/20201130200148.png" alt="image-20201130200148681" style="zoom:33%;" />

网站侧边栏

宽度和高度撑满外层容器