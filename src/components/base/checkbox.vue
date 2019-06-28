<template>
    <el-row>
        <el-checkbox
            class="el-form-title"
            v-model="c_value"
        >{{title}}</el-checkbox>
    </el-row>
</template>

<script>
export default {
    props:{
        value:{
            type:  Boolean,
            default: false
        },
        title:{
            type: String,
            default: '单选框'
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
    }
}
</script>

<style>

</style>