## hexo-theme-fly

![](https://img.lovelu.top/2023/03/akilar_update1.png)

主题预览：[fly](https://blog.mxheo.com) || [akilar](https://akilar.top/)

这是一款基于`hexo-theme-butterfly`进行魔改的主题，参照于**糖果屋-方舟**

## ps

做这款主题，主要也是兴趣，觉得店长的设计思路很新颖，本主题所有设计元素均来自于[akilar](https://akilar.top/)，由于自身能力原因，代码质量不高(屎山)，甚至为了达到效果，很多写法比较粗暴，如果介意的话，可以不采用本主题

## 快速开始

## 安装hexo环境

创建文件夹(文件夹内没有其它文件)
执行hexo命令，初始化**hexo**
```sh
hexo init
```

## 主题安装

在hexo项目根目录下执行操作clone主题

``` sh
git clone -b master https://github.com/https-github-com-hexo-theme/hexo-theme-fly.git themes/fly
```

如果沒有 pug 以及 stylus 的渲染器，还需要下载，否则在项目运行时会报错：
``` sh
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

修改项目根目录下的_config.yml文件（称为站点配置文件），启用主题

``` sh
theme: fly
```

升级建议

为了減少升级主题带来的不便，我们还需要做以下操作：
把主题文件夹中的 _config.yml 复制到 Hexo 根目录下，同重命名为 _config.fly.yml

Hexo会自动合并主题中的_config.yml和 _config.fly.yml里的配置，如果存在同名配置，会使用_config.fly.yml的配置，其优先度较高。

由于本主题对**butterfly**原生主题进行改写，避免兼容性问题，建议将原插件卸载，按照以下命令，卸载和安装插件

- 卸载插件
``` sh
npm uninstall hexo-butterfly-footer-beautify --save
npm uninstall hexo-butterfly-swiper --save
npm uninstall hexo-butterfly-fcircle --save
```

- 安装插件

``` sh
npm install hexo-butterfly-tag-plugins-plus --save
npm install hexo-butterfly-envelope --save
npm install hexo-butterfly-categories-card --save
```

主题中有部分资源(图片、svg、icon等)来自于本人配置连接，建议修改为自己的地址，防止无法访问

以上步骤全部执行完毕后，运行`hexo server`即可

## 主题配置

由于本主题基于[butterfly](https://github.com/jerryc127/hexo-theme-butterfly)，主题配置项可参考原主题

其它配置建议直接看`_config_fly.yml`配置项，都有akilar的教程

## 写在最后

本主题目前还是半成品，很多东西还没完善好，**load_style**配置加载样式的，**ark**样式还未处理好，建议先不要使用

