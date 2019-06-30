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
                        change: (val,oldVal,index,isChildren,subIndex,key)=>{
                            const isObject = Object.prototype.toString.apply(val) === `[object Object]` || false;
                            let result = {};
                            for(let i=0;i<this.elementJson.length;i++){
                                const json = this.elementJson[i];
                                if(index === i){
                                    if(isChildren){ //collapse
                                        if(subIndex !== undefined){
                                            let children = json.children;
                                            let data = {};
                                            if(key){
                                                data = children[key][subIndex] || {};
                                            }else{
                                                data = children[subIndex] || []
                                            }
                                            if(!isObject){
                                                data = {
                                                    ...data,
                                                    value: val, 
                                                }
                                            }else {
                                                data = {
                                                    ...data,
                                                    ...val
                                                };
                                            }
                                            result = data;
                                        }
                                    }else {
                                        if(!isObject){
                                            result = {
                                                ...json,
                                                value: val, 
                                            }
                                        }else {
                                            result = {
                                                ...json,
                                                ...val
                                            };
                                        }
                                    }
                                    break;
                                }
                            };
                            // this.elementJson = result;
                            this.$emit('change',result);
                            console.log(result)
                            self.onChange();
                        },
                        uploadImage: (callback)=>{
                            this.$emit('uploadImage',callback);
                        },
                        uploadIcon: (callback)=>{
                            this.$emit('uploadIcon',callback);
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