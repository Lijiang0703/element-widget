<template>
    <el-collapse v-model="c_value" class="collapse-wrap">
        <el-collapse-item>
            <template slot="title">
                {{title}}
            </template>
            <slot name="Collapse"></slot>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
import Label from "./label";
export default {
    props:{
        value:{
            type: Array,
            default: function(){
                return [];
            }
        },
        disabled:{
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            default: '折叠面板'
        }
    },
    data(){
        return {
            c_value: this.value
        }
    },
    methods:{
    },
    watch:{
        c_value: function(val, oldVal){
            // this.$emit('change', val, oldVal);
        }
    },
    components: {
        Label
    }
}
</script>

<style>

</style>