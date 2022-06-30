/**
 * 問252
このようなobjがあります。
var obj = {
 'prop1': 'value1',
 'prop2': 'value2',
 'prop3': 'value3'
}
JSON.stringifyを使って
"{
	"prop1": "value1",
	"prop2": "value2"
}"  ように出力されるようにしてください(prop3が出力されていない。1タブ分インデントされていることに注意)*/
var obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};
const str = JSON.stringify(obj, ["prop1", "prop2"], "\t");
console.log(str);
