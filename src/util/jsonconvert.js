/**
 * 规范化json
 */
const jsonConvert = (originJson)=>{
    return originJson.reduce((newJson, json)=>{
        const type = json.type;
        if(!type) return newJson;
        const constantEqual = CONSTANT_EQUAL_TYPE_NAMES.find((constant)=>{return constant[0] === type});
        const constantContain = CONSTANT_CONTAIN_TYPE_NAMES.find((constant)=>{return type.indexOf(constant[0]) !== -1});
        const constant  = constantEqual || constantContain;

        if(constant){
            const name = constant[1];
            const attrs = constant.slice(2,3)[0] || {};
            let result = {
                name, //组件的name
                data:{ //组件内部的数据
                    ...attrs,
                    ...json,
                    options: json.values || json.options || [],
                    title: json.title || json.display,
                    value: json.value
                },
                ...json
            }
            if(json.children){
                const children = json.children;
                const isArray = Object.prototype.toString.apply(children) === `[object Array]` || false;
                if(isArray){
                    result.children = jsonConvert(children) || [];
                }else{       
                    let _children = {};
                    for(let key in children){
                        _children[key] = jsonConvert(children[key]);
                    }
                    if(Object.keys(children).length) {
                        result.children = _children;
                    }
                }
            }
            newJson.push(result)
        }
        return newJson;
    },[])
}
export default jsonConvert;
//常量定义, [type,name,attr]
const CONSTANT_CONTAIN_TYPE_NAMES = [
    ["button","Button"],
    ["checkbox","Chexkbox"],
    ["spinbox","Slider",{showInput: true}],
    ["input","Input"],
    ["link","Link"],
    ["textarea","Input",{type: 'textarea'}],
    ["slider","Slider"],
    ["select","Select"],
    ["more","Button"],
    ["colorpicker","ColorPicker"],
    ["overlay","Overlay"],
    ["image","CImage"]
]
const CONSTANT_EQUAL_TYPE_NAMES = [
    ["collapse","Collapse"],
    ["icon","Icon"],
    ["switch","CSwitch"],
    ["split","Divider"]
]
