<template>
    <div>
        <div v-for="(item, index) in elementJson" 
            v-bind:is="item.name" 
            v-bind="item.data"
            @change="onChange"
            @uploadImage="onUploadImage"
            :key="index"
        ></div>
        <Button @click="updateImage"></Button>
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
        onChange(val, oldVal){
            this.$emit('change',{val,oldVal});
        },
        onUploadImage(){
            this.$emit('uploadImage');
        },
        updateImage(){

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