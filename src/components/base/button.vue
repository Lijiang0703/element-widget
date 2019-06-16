<template>
    <el-row>
        <el-button
            :type="type"
            :size="size"
            :disabled="disabled"
            @click="onChange"
        >{{ title }}</el-button>
    </el-row>
</template>

<script>
export default {
    props:{
        type:{
            type: String,
            default: "primary"
        },
        size:{
            type: String,
            default: "medium"
        },
        disabled:{
            type: [Number,Boolean],
            default: false
        },
        title:{
            type: String,
            default: "Button"
        }
    },
    data(){
        return {
            c_value: this.value
        }
    },
    methods:{
        onChange(){
            this.$emit('change');
        }
    }
}
</script>

<style>

</style>