<template>
    <el-row>
        <Label
            :title="title"
        ></Label>
        <el-slider
            class="c-slider"
            v-model="c_value"
            :min="min"
            :max="max"
            :step="step"
            :show-input="showInput"
            :show-tooltip="showTooltip"
            @change="onChange"
        ></el-slider>
    </el-row>
</template>

<script>
import Label from './label';
export default {
    props:{
        value:{
            type:  Number,
            default: 0
        },
        min:{
            type: Number,
            default: 0
        },
        max:{
            type: Number,
            default: 10
        },
        step:{
            type: Number,
            default: 1
        },
        title:{
            type: String
        },
        showInput:{
            type: Boolean,
            default: false
        },
        showTooltip:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            c_value: this.value
        }
    },
    methods:{
        onChange: function(val){
            this.c_value = val;
        }
    },
    watch:{
        c_value: function(val, oldVal){
            this.$emit('change', val, oldVal);
        }
    },
    components: {
        Label
    }
}
</script>

<style>
.c-slider .el-slider__runway.show-input{
    margin-right: 110px;
}
.c-slider .el-slider__input{
    width: 100px;
}
.c-slider input{
    border: 2px solid rgb(110, 110, 110);
    border-radius: 2px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px inset;
    color: #fff;
    padding: 0px 25px 0px 7px;
    background-color: rgb(96, 96, 96);
    height: 25px;
    line-height: 25px;
    margin: 0px;
}
.c-slider .el-input-number__decrease{
    background: transparent;
    border-color: rgb(110, 110, 110);
}
.c-slider .el-input-number__increase{
    background: transparent;
    border-color: rgb(110, 110, 110);
}
</style>