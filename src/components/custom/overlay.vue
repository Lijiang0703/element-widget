<template>
    <div class="overlay-wrap">
        <CSwitch 
            :value="c_value"
            @change="onSwitchChange"
            :title="title"
        ></CSwitch>
        <ColorPicker
            v-show="c_value"
            :value="c_color"
            :title="colorTitle"
            @change="onColorChange"  
        ></ColorPicker>
        <Slider
            v-show="c_value"
            :value="c_alpha"
            :min="min"
            :max="max"
            :step="step"
            :title="alphaColor"
            @change="onAplhaChange"
        ></Slider>
    </div>
</template>

<script>
import ColorPicker from '../base/colorpicker';
import CSwitch from '../base/switch';
import Slider from '../base/slider';
export default {
    props:{
        value:{
            type: [Boolean,Number],
            default: false,
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
        color:{
            type: String,
            default: "#000"
        },
        opacity:{
            type: Number,
            default: 1
        }
    },
    data(){
        return {
            c_value: this.value ? true : false,
            title: '显示蒙板',
            colorTitle: '背景色',
            alphaColor: '透明度',
            c_color: this.color,
            c_alpha: this.opacity
        }
    },
    methods:{
        onAplhaChange(val){
            this.$emit('change', {
                opacity: val
            },{});
        },
        onColorChange(val){
            this.$emit('change', {
                color: val
            },{});
        },
        onSwitchChange(val,oldVal){
            this.$emit('change', val, oldVal);
            this.c_value = val;
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