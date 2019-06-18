<template>
    <div>
        <div v-for="(item, index) in data" 
            v-bind:is="item.name" 
            v-bind="item.data"
            @change="onChange(...arguments,index,isChildren)"
            @uploadImage="onUploadImage"
            @uploadIcon="onUploadIcon"
            @getPages="onGetPage"
            @getContentType="onGetContentType"
            @getCategory="onGetCategory"
            @getSections="onGetSection"
            :key="index"
        >
        <template v-if="item.execs && item.children" >
            <div v-for="(exec,key) in item.execs"
                :key="key"
                :slot="item.name"
            >
                <cmain v-if="item.value === key"
                    :elementJson="item.children[key]"
                    :isChildren="true"
                ></cmain>
            </div>
        </template>
        </div>
    </div>
</template>

<script>
import Button from "./components/base/button";
import CImage from "./components/custom/cimage";
import Colorpicker from "./components/base/colorpicker";
import CSwitch from "./components/base/switch";
import Divider from "./components/base/divider";
import Icon from "./components/custom/icon";
import Input from "./components/base/input";
import Link from "./components/custom/link";
import Overlay from "./components/custom/overlay";
import Select from "./components/base/select";
import Slider from "./components/base/slider";

export default {
    name: 'cmain',
    props:{
        elementJson:{
            type: Array,
            default: ()=>{
                return [];
            }
        },
        isChildren:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            data: this.elementJson
        }
    },
    mounted(){
        console.log(this.elementJson)
    },
    methods:{
        onChange(val, oldVal, index, isChildren){
            const isObject = Object.prototype.toString.apply(val) === `[object Object]` || false
            if(!isObject && !isChildren) {
                this.data[index].value = val;
            }
            this.$emit('change',val,oldVal,index,isChildren);
        },
        onUploadImage(callback){
            this.$emit('uploadImage',callback);
        },
        onUploadIcon(callback){
            this.$emit('uploadIcon',callback);
        },
        onGetPage(callback){
            this.$emit('getPages',callback);
        },
        onGetSection(callback){
            this.$emit('getSections',callback);
        },
        onGetContentType(callback){
            this.$emit('getContentType',callback);
        },
        onGetCategory(callback){
            this.$emit('getCategory',callback);
        }
    },
    components: {
        Button,
        CImage,
        Colorpicker,
        CSwitch,
        Divider,
        Icon,
        Input,
        Link,
        Overlay,
        Select,
        Slider
    }
}
</script>

<style>

</style>