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