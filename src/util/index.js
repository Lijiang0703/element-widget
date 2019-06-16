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
        const self = this;
        this.app = new Vue({
            data(){
                return {
                    elementJson: json
                }
            },
            render: function(h){
                return h(Main,{
                    props:{
                        elementJson: this.elementJson
                    },
                    data(){
                        return {
                            val: this.elementJson
                        }
                    },
                    on: {
                        change: (val,oldVal,index,isChildren)=>{
                            const isObject = Object.prototype.toString.apply(val) === `[object Object]` || false;
                            const result = this.elementJson.reduce((json,item,i)=>{
                                json[i] = {
                                    ...this.elementJson[i]
                                }
                                if(index === i && !isChildren){
                                    if(!isObject){
                                        json[i] = {
                                            ...json[i],
                                            value: val, 
                                        }
                                    }else {
                                        json[i] = {
                                            ...json[i],
                                            ...val
                                        };
                                    }
                                }
                                
                                return json;
                            },[]);
                            this.elementJson = result;
                            this.$emit('change',result);
                            self.onChange();
                        },
                        uploadImage: (callback)=>{
                            this.$emit('uploadImage',callback);
                        },
                        getPages: (callback)=>{
                            this.$emit('getPages',callback);
                        },
                        getSections: (callback)=>{
                            this.$emit('getSections',callback);
                        },
                        getContentType: (callback)=>{
                            this.$emit('getContentType',callback);
                        },
                        getCategory: (callback)=>{
                            this.$emit('getCategory',callback);
                        }
                    }
                })
            },
            methods:{
                getJson:function(){
                    return this.elementJson;
                }
            },
            mounted: this.onMounted
        }).$mount(this.el);

        return this;
    }
    getJSON(){
        this.app.getJson();
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