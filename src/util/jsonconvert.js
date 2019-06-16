/**
 * 规范化json
 */
const jsonConvert = (originJson)=>{
    return originJson.reduce((newJson, json)=>{
        const type = json.type;
        const constantEqual = CONSTANT_EQUAL_TYPE_NAMES.find((constant)=>{return constant[0] === type});
        const constantContain = CONSTANT_CONTAIN_TYPE_NAMES.find((constant)=>{return type.indexOf(constant[0]) !== -1});
        const constant  = constantEqual || constantContain;

        if(constant){
            const name = constant[1];
            const attrs = constant.slice(2,3)[0] || {};

            newJson.push({
                name, //组件的name
                data:{ //组件内部的数据
                    ...attrs,
                    value: json.value
                },
                ...json
            })
        }
        return newJson;
    },[])
}
export default jsonConvert;
//常量定义, [type,name,attr]
const CONSTANT_CONTAIN_TYPE_NAMES = [
    ["button","Button"],
    ["spinbox","Slider",{showInput: true}],
    ["input","Input"],
    ["link","Link"],
    ["textarea","Input",{text: 'textarea', autoSize: {minRows:2, maxRows: 4}}],
    ["slider","Slider"],
    ["select","select"],
    ["more","Button"],
    ["colorpicker","ColorPicker"],
    ["overlay","Overlay"],
    ["image","CImage"]
]
const CONSTANT_EQUAL_TYPE_NAMES = [
    ["switch","CSwitch"],
    ["split","Divider"]
]
