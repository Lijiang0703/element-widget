<template>
    <el-row>
        <Label
            :title="title"
        ></Label>
        <el-switch
            v-model="c_value"
        ></el-switch>
    </el-row>
</template>

<script>
import Label from './label';
export default {
    props:{
        value:{
            type:  [Boolean],
            default: true
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