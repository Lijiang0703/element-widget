<template>
    <div>
        <el-row class="row-title">
            <i class="el-icon-picture icon-title"></i>
            <Label :title="title"></Label>
        </el-row>
        <el-row class="image-wrap">
            <el-image
                :src="c_value"
                :fit="type"
                class="image-item"
            >
                <div slot="placeholder" class="image-holder-slot"></div>
                <div slot="error" class="image-error-slot"></div>
            </el-image>
            <div>
                <i class="el-icon-upload2" @click="onUpload"></i>
                <i class="el-icon-delete-solid" @click="onDelete"></i>
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
            default: '图片'
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
            this.$emit('uploadImage',this.uploadCallback);
        },
        onDelete:function(){
            this.c_value = "";
        },
        uploadCallback:function(val){
            if(val) {
                this.c_value = val;
            }
        }
    },
    watch:{
        c_value:function(val, oldVal){
            this.$emit('change', val, oldVal);
        }
    },
    components: {
        Label
    }
}
</script>

<style>
.image-wrap{
    border: 1px solid rgb(138, 138, 138);
    color: rgb(212, 212, 212);
    min-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 8px;
    position: relative;
}
.image-wrap i{
    cursor: pointer;
}
.image-item{
    width: 80px;
    height: 80px;
}
.image-holder-slot{
    background-color: rgb(87, 87, 87);
}
.image-error-slot{
    background-color: rgb(87, 87, 87);
}
</style>