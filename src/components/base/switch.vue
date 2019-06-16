<template>
    <el-row>
        <Label
            :title="title"
        ></Label>
        <el-switch
            :width="width"
            :active-color="activeColor"
            :inactive-color="inActiveColor"
            v-model="c_value"
        ></el-switch>
    </el-row>
</template>

<script>
import Label from './label';
export default {
    props:{
        value:{
            type:  [Boolean,Number],
            default: true
        },
        title:{
            type: String
        },
        width:{
            type: Number,
            default: 40
        },
        activeColor:{
            type: String,
            default: '#1D73C2'
        },
        inActiveColor:{
            type: String,
            default: 'rgb(94,94,94)'
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