<template>
    <el-row>
        <CSwitch 
            :value="c_value"
            @onChange="onSwitchChange"
        ></CSwitch>
        <ColorPicker
            v-show="c_value"
            :title="colorTitle"
            @change="onColorChange"  
        ></ColorPicker>
        <Slider
            v-show="c_value"
            :value="c_value"
            :min="min"
            :max="max"
            :step="step"
            :title="alphaColor"
            @change="onAplhaChange"
        ></Slider>
    </el-row>
</template>

<script>
import ColorPicker from '../base/colorpicker';
import CSwitch from '../base/switch';
import Slider from '../base/slider';
export default {
    props:{
        value:{
            type:  [Number,Boolean],
            default: 1,
            required: true
        },
        min:{
            type: Number,
            default: 0
        },
        max:{
            type: Number,
            default: 1
        },
        step:{
            type: Number,
            default: 0.1
        },
        title:{
            type: String
        },
    },
    data(){
        return {
            c_value: this.value,
            title: '显示蒙板',
            colorTitle: '背景色',
            alphaColor: '透明度'
        }
    },
    methods:{
        onAplhaChange(){

        },
        onColorChange(){

        },
        onSwitchChange(){

        }
    },
    watch:{
        value: function(val, oldVal){
            this.$emit('change', val, oldVal);
        }
    },
    components: {
        ColorPicker,
        CSwitch,
        Slider
    }
}
</script>

<style>

</style>