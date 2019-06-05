/**
 * 规范化json
 */
const jsonConvert = (originJson)=>{
    return originJson.reduce((newJson, json)=>{
        const type = json.type;
        const constant = CONSTANT_TYPE_NAMES.find((constant)=>{return constant[0] === type});
        
        if(constant){
            const name = constant[1];
            const attrs = constant.slice(2,1);

            newJson.push({
                name,
                data:{
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
const CONSTANT_TYPE_NAMES = [
    ["switch","CSwitch"],
    ["spinbox","Slider",{showInput: true}],
    ["input","Input"],
    ["textarea","Input",{text: 'textarea', autoSize: {minRows:2, maxRows: 4}}],
    ["slider","Slider"],
    ["select","select"],
    ["more","Button"],
    ["split","Divider"],
    ["colorpicker","ColorPicker"],
    ["overlay","Overlay"],
    ["image","multiImage"]
]
