<template>
    <div>
        <div v-for="(item, index) in elementJson" 
            v-bind:is="item.type" 
            v-bind="item.data"
            @change="onChange"
            :key="index"
        ></div>
    </div>
</template>

<script>
import Overlay from "./components/custom/overlay";
import Slider from "./components/base/slider";
import CSwitch from "./components/base/switch";

export default {
    data(){
        return {
            elementJson: []
        }
    },
    methods:{
        onChange(){

        }
    },
    components: {
        CSwitch,
        Overlay,
        Slider
    }
}
</script>

<style>

</style>