<template>
    <div>
        <el-row>
            <i class="el-icon-link"></i>
            <Label :title="title"></Label>
        </el-row>
        <div>
            <Select 
                v-for="item in selectList" 
                :key="item.value" 
                :value="item.value"
                :options="item.options"
                :title="item.label"
                @change="onSelectChange"
            ></Select>
            <el-checkbox-group 
                v-model="checkedList"
                @change="onCheckboxChange"
            >
                <el-checkbox 
                    v-for="item in checkBoxList" 
                    :label="item.c_value"
                    :key="item.c_value"
                >{{item.label}}</el-checkbox> 
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
import Input from '../base/input';
import Label from '../base/label';
import Select from '../base/select';

export default {
    props:{
        selectList:{
            type: Array,
            default: []
        },
        checkBoxList:{
            type: Array,
            default: []
        },
        checkedList: {
            type: Array,
            default: []
        },
        title:{
            type: String,
            default: '设置链接'
        },
    },
    data(){
        return {
            c_value: this.value,
            checkeList: this.list
        }
    },
    methods:{
        onSelectChange: function(){

        },
        onCheckboxChange: function(val){
            console.log(val);
        }
    },
    components: {
        Input,
        Label,
        Select
    }
}
</script>

<style>
</style>