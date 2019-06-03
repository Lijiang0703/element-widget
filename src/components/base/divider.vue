<template>
    <el-divider
        :direction="direction"
        :content-position="align"
    >{{ title }}</el-divider>
</template>

<script>
export default {
    props:{
        direction:{
            type: String,
            default: "horizontal"
        },
        title:{
            type: String,
            default: ""
        },
        align:{
            type: String,
            default: "center"
        }
    }
}
</script>

<style>

</style>