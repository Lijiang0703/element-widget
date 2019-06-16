<template>
    <el-row>
        <Label
            :title="title"
        ></Label>
        <el-color-picker
            v-model="c_value"
            :show-alpha="showAlpha"
            :predefine="predefine"
            :size="size"
            @change="onChange"
            @active-change="onActiveChange"
        ></el-color-picker>
    </el-row>
</template>

<script>
import Label from "./label";
export default {
    props:{
        value:{
            type: String,
            default: "#000"
        },
        disabled:{
            type: Boolean,
            default: false
        },
        showAlpha:{
            type: Boolean,
            default: false
        },
        predefine:{
            type: Array,
            default: function(){
                return []
            }
        },
        size:{
            type: String,
            default: "mini"
        },
        title:{
            type: String,
            default: '颜色'
        }
    },
    data(){
        return {
            c_value: this.value
        }
    },
    methods:{
        onChange(){
            //可用于预定值的更新
        },
        onActiveChange(){

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

</style>