<template>
    <el-row>
        <Label
            :title="title"
        ></Label>
        <el-input
            v-model.lazy="c_value"
            :type="type"
            :rows="rows"
            :autoSize="autoSize"
        ></el-input>
    </el-row>
</template>

<script>
import Label from './label';
export default {
    props:{
        value:{
            type:  [Number,String],
            default: ''
        },
        type:{
            type: String,
            default: 'text'
        },
        title:{
            type: String
        },
        rows:{
            type: Number,
            default: 2
        },
        autoSize:{
            type: Object,
            default: function(){
                return {minRows:2, maxRows: 4}
            }
        }
    },
    data(){
        return {
            c_value: this.value
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