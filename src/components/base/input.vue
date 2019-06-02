<template>
    <el-row>
        <Label
            :title="title"
        ></Label>
        <el-input
            v-model.lazy="c_value"
        ></el-input>
    </el-row>
</template>

<script>
import Label from './label';
export default {
    props:{
        value:{
            type:  Number,
            default: 1,
            required: true
        },
        type:{
            type: String,
            default: 'text'
        },
        title:{
            type: String
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