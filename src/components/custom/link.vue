<template>
    <div>
        <el-row class="row-title">
            <i class="el-icon-link icon-title"></i>
            <Label :title="title"></Label>
        </el-row>
        <div class="link-wrap">
            <template>
                <Select
                    :value="type"
                    :options="linkOptions"
                    title="链接"
                    @change="onChange(...arguments,'value','type')"
                ></Select>
                <Select
                    v-show="type === 1"
                    :value="c_page"
                    :options="pages"
                    title="页面"
                    @change="onChange(...arguments,'page','c_page')"
                ></Select>
                <Select
                    v-show="type === 2"
                    :value="c_value"
                    :options="pages"
                    title="页面"
                    @change="onChange(...arguments,'href')"
                ></Select>
                <Select
                    v-show="showSection"
                    :value="c_value"
                    :options="sections"
                    title="节"
                    @change="onChange(...arguments,'href')"
                ></Select>
                <Input
                    v-show="type === 0"
                    :value="c_value"
                    title="网址"
                    @change="onChange(...arguments,'href')"
                />
            </template>
            <Checkbox
                v-show="type === 2"
                title="传递参数"
                :value="isTransfer"
                @change="onChange(...arguments,'isTransfer','isTransfer')"
            ></Checkbox>
            <PageLink 
                v-show="isTransfer"
                :transferType="transferType"
                :transferValue="transferValue"
                :contentType="contentType"
                @change="onPageChange"
                @getContentType="onGetContentType"
                ></PageLink>
            <Checkbox
                title="在新窗口打开"
                :value="openInnew"
                @change="onChange(...arguments,'openInnew')"
            ></Checkbox>
        </div>
    </div>
</template>

<script>
import Input from '../base/input';
import Label from '../base/label';
import Select from '../base/select';
import PageLink from './pagelink';
import Checkbox from '../base/checkbox';

export default {
    props:{
        value:{
            type: Number,
            default: -1
        },
        title:{
            type: String,
            default: "设置链接"
        },
        href:{
            type: String,
            default: ""
        },
        page:{ //节－链接
            type: String,
            default: ""
        },
        openInnew:{
            type: Boolean,
            default: false
        },
        istransfer:{
            type: Boolean,
            default: false
        },
        transferType:{
            type: String,
            default: ""
        },
        transferValue:{
            type: String,
            default: ""
        },
        contentType:{
            type: String,
            default: ""
        }
    },
    data(){
        return {
            type: this.value,
            c_value: this.href,
            c_page: this.page,
            transfer: false,
            pages: [],
            sections: [],
            linkOptions: [
                {
                    "name": "选择类型",
                    "value": -1
                },
                {
                    "name": "跳转网址",
                    "value": 0
                },
                {
                    "name": "跳转到节",
                    "value": 1
                },
                {
                    "name": "跳转页面",
                    "value": 2
                }
            ]
        }
    },
    computed:{
        showSection: function(){
            return this.type === 1 && this.c_page;
        },
        isTransfer: {
            get:function(){
                return this.transfer;
            },
            set:function(val){
                this.transfer = val;
            }
        }
    },
    methods:{
        isArray: function(value){
            return Object.prototype.toString.apply(value) === `[object Array]` || false;
        },
        setPages: function(pages){
            if(!this.isArray(pages)) return;
            this.pages = pages;
        },
        setSections: function(sections){
            if(!this.isArray(sections)) return;
            this.sections = sections;
        },
        /**
         * val
         * oldVal
         * key: 传递值给外部的key
         * setKey: 组件内需要被修改值的key
         */
        onChange: function(val,oldVal,key,setKey){
            this.$emit('change',{
                [key]: val
            },{
                [key]: oldVal
            })
            if(setKey){
                this[setKey] = val;
            }
        },
        onPageChange: function(val,oldVal){
            this.$emit('change',val,oldVal);
        },
        onGetContentType: function(callback){
            this.$emit('getContentType',callback);
        }
    },
    mounted:function(){
        this.$emit('getPages',this.setPages);
    },
    watch:{
        c_page: function(val,oldVal){
            if(this.type === 1){
                this.$emit('getSections',this.setSections);
            }
        },
        type: function(){
            //清空选项
            this.c_value = '';
            this.c_page = '';
        }
    },
    components: {
        Checkbox,
        Input,
        Label,
        Select,
        PageLink
    }
}
</script>

<style>
.link-wrap{
    border: 1px solid rgb(138, 138, 138);
    border-style: solid;
    min-height: 20px;
    padding: 0px 10px 8px;
    border-color: rgb(138, 138, 138);
    justify-content: space-between;
    align-items: center;
    color: rgb(212, 212, 212);
    font-size: 12px;
}
.link-wrap .el-row{
    margin-top: 8px;
}
</style>