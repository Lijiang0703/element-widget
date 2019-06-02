/**
 * 用来处理入口和出口数据和事件
 * 
 */
import Vue from "../app"
import Main from "../main"

class widgetUtil {
    constructor({el, data, events}){
        this.el = el;
        this.data = data || {};
        this.events = events || {};
        return this.init();
    }
    init(){    
        const app = new Vue({
            render: h=>h(Main)
        }).$mount(this.el)
        return app.$el;
    }
    getJSON(){
        
    }
    /**
     * 实例创建
     */
    onMounted(){

    }
    /**
     * widget change事件
     */
    onChange(){
        const { onWidgetChange } = this.events;
        onWidgetChange && onWidgetChange();
    }
    /**
     * 实例销毁
     */
    onDestroy(){

    }
}
export default widgetUtil;