<template>
    <el-row>
        <Label
            :title="title"
        ></Label>
        <el-select 
            v-model="c_value"
            @change="onChange"
        >
            <el-option></el-option>
        </el-select>
    </el-row>
</template>

<script>
import Label from './label';
export default {
    props:{
        value:{
            type:  [Number,String],
            default: '请选择'
        },
        title:{
            type: String
        },
        options:{
            type: Array,
            default: [],
            required: true
        }
    },
    data(){
        return {
            c_value: this.value
        }
    },
    method:{
        onChange:function(){

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