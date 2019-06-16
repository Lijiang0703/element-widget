<template>
    <div>
        <Select
            :value="type"
            :options="transferTypes"
            title="参数类型"
            @change="onTypeChange"
        ></Select>
        <div v-show="isContentType">
            <Select
                :value="contentType"
                :options="contentTypes"
                title="内容类型"
                @change="onContentTypeChange"
            ></Select>
            <Select 
                :value="c_value"
                :options="categories"
                title="参数值"
                @change="onValueChange"
            ></Select>
        </div>
        <div v-show="type && !isContentType">
            <Input
                title="参数值"
                :value="c_value"
                @change="onValueChange"
            />
        </div>
    </div>
</template>

<script>
import Input from '../base/input';
import Label from '../base/label';
import Select from '../base/select';

export default {
    props:{
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
            c_value: this.transferValue,
            type: this.transferType,
            contentTypes: [],
            categories: [],
            transferTypes: [
                {
                    name: "请选择",
                    value: ""
                },
                {
                    name: "分类",
                    value: "0"
                },
                {
                    name: "tag",
                    value: "1"
                },
                {
                    name: "关键词",
                    value: "2"
                },
                {
                    name: "ID类型",
                    value: "3"
                }
            ],
        }
    },
    computed:{
        isContentType:function(){
            return this.type === '0';
        }
    },
    methods:{
        typeCheck: function(value,type){
            return Object.prototype.toString.apply(value) === `[object ${type}]` || false;
        },
        onTypeChange: function(val){
            this.type = val;
            this.$emit('change',{
                transferType: val
            },{});
        },
        onContentTypeChange: function(val){
            this.$emit('change',{
                contentType: val
            },{});
            this.$emit('getCategory',this.setCategories); //get categories
        },
        onValueChange: function(val){
            this.$emit('change',{
                transferValue: val
            },{});
        },
        setContentTypes: function(types){
            if(!this.typeCheck(types,'Array')) return;
            this.contentTypes = [
                {
                    name: "请选择",
                    value: ""
                },
                ...types
            ];
        },
        setCategories: function(categories){
            if(!this.typeCheck(categories,'Array')) return;
            this.categories = [
                {
                    name: "请选择",
                    value: ""
                },
                ...types
            ];
        }
    },
    mounted:function(){
        this.$emit('getContentType',this.setContentTypes); //get contentTypes  
    },
    watch:{},
    components: {
        Input,
        Label,
        Select
    }
}
</script>

<style>
</style>