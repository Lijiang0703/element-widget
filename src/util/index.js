/**
 * 用来处理入口和出口数据和事件
 * 
 */
import Vue from "../app";
import Main from "../main";
import jsonConvert from "./jsonConvert";

class widgetUtil {
    constructor({el, data, events}){
        this.el = el;
        this.data = data || [];
        this.events = events || {};
        return this.init();
    }
    init(){
        const json = jsonConvert(this.data);
        
        this.app = new Vue({
            render: function(h){
                return h(Main,{
                    props:{
                        elementJson: json
                    },
                    on: {
                        change: function({val, oldval}){
                            console.log(val)
                        },
                        uploadImage: (callback)=>{
                            this.$emit('uploadImage',callback)
                        }
                    }
                })
            },
            mounted: this.onMounted
        }).$mount(this.el);

        return this;
    }
    getJSON(){
        
    }
    /**
     * 实例创建
     */
    onMounted(){
        console.log('mounted')
    }
    /**
     * widget change事件
     */
    onChange(){
        const { onWidgetChange } = this.events;
        onWidgetChange && onWidgetChange();
    }
    /**
     * 触发销毁
     */
    destroy(){
        this.app.destroy();
    }
    /**
     * 实例销毁
     */
    onDestroyed(){

    }
}
export default widgetUtil;