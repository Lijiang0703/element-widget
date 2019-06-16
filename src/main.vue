<template>
    <div>
        <div v-for="(item, index) in elementJson" 
            v-bind:is="item.name" 
            v-bind="item.data"
            @change="onChange(...arguments,index)"
            @uploadImage="onUploadImage"
            @getPages="onGetPage"
            @getContentType="onGetContentType"
            @getCategory="onGetCategory"
            @getSections="onGetSection"
            :key="index"
        ></div>
    </div>
</template>

<script>
import Button from "./components/base/button";
import CImage from "./components/custom/cimage";
import Colorpicker from "./components/base/colorpicker";
import CSwitch from "./components/base/switch";
import Divider from "./components/base/divider";
import Input from "./components/base/input";
import Link from "./components/custom/link";
import Overlay from "./components/custom/overlay";
import Select from "./components/base/select";
import Slider from "./components/base/slider";

export default {
    props:{
        elementJson:{
            type: Array,
            default: ()=>{
                return [];
            }
        }
    },
    data(){
        return {
        }
    },
    mounted(){
        console.log(this.elementJson)
    },
    methods:{
        onChange(val, oldVal, index){
            this.$emit('change',val,oldVal,index);
        },
        onUploadImage(callback){
            this.$emit('uploadImage',callback);
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