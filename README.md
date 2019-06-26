# ElemenWidget

## Links

* Start
* Component type
* Events

### Start

```
npm i element-widget
```

```
import elementWidegt from 'element-widget'

const app = new elementWidget({
    el: '#app',
    data: [
        {
            type: '..',
            ...
        }
    ],
    events: {
        onWidgetChange,
        ...
    }
})
const { vm } = app;
```
### Component type

目前相对完善的组件类型：

* (widgetName, type)
* button
* checkbox
* colorpicker
* divider - split
* input - input/textarea
* select
* slider - slider/spinbox
* switch
* link
* icon
* overlay
* image

组件需要的参数详见 src/components/

其中type类型为 icon、switch、split 的组件，type定义要求全等，其他都是包含。

switch 和select组件的高级语法嵌套目前已能成功展示，数据通信逻辑还有待梳理。

为了兼容，在 util/jsonconver.js中做了简单的数据处理。

```
...

```

### Events

* uploadImage (imge,上传图片,string)
* uploadIcon (icon,上传icon,string)
* getPages (link,获取页面,array)
* getContentType (link,获取内容类型,array)
* getCategory (link,获取分类,array)
* change (all,值变更) 不要与onWidgetChange同用

组件内部主要以回调函数的方式与外部交互

调用方式: 

```
vm.$on(event,(callback)=>{
    const val = ....;

    callback(val);
})
```