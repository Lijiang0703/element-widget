<template>
    <div>
        <el-slider
            v-model="value"
            min="min"
            max="max"
            step="step"
        ></el-slider>
    </div>
</template>

<script>
    export default {
        data(){
            const { value, min = 0, max = 1, step = 1 } = this.props;
            return {
                value,
                min,
                max,
                step
            }
        }
    }
</script>

<style>

</style>