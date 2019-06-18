<template>
    <div>
        <el-row class="row-title">
            <i class="el-icon-s-flag icon-title"></i>
            <Label :title="title"></Label>
        </el-row>
        <el-row class="icon-wrap">
            <div class="icon-item">
                <i :class="c_value"></i>
            </div>
            <div>
                <i class="el-icon-refresh" @click="onUpload"></i>
            </div>
        </el-row>
    </div>
</template>

<script>
import Label from '../base/label';

export default {
    props:{
        value:{
            type: String,
            required: true
        },
        title:{
            type: String,
            default: '图标'
        },
        type:{
            type: String,
            default: 'contain'
        }
    },
    data(){
        return {
            c_value: this.value
        }
    },
    methods:{
        onUpload:function(){
            this.$emit('uploadIcon',this.uploadCallback);
        },
        uploadCallback:function(val){
            if(val) {
                this.c_value = val;
            }
        }
    },
    components: {
        Label
    }
}
</script>

<style>
.icon-wrap{
    border: 1px solid rgb(138, 138, 138);
    color: rgb(212, 212, 212);
    min-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px 8px;
    position: relative;
}
.image-wrap i{
    cursor: pointer;
    font-weight: 400;
}
.icon-item i{
    font-size: 20px;
}
</style>