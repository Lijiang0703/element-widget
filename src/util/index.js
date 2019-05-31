/**
 * 用来处理入口和出口数据和事件
 * 
 */
import Vue from "../app"

class widgetUtil {
    constructor({el, data, events}){
        this.el = el;
        this.data = data;
        this.events = events;
    }
    init(){    
        const app = new Vue({
            el: this.el,
            template: tpl
        })
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