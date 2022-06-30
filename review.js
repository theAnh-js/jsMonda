//問1:
// Merge object - Hợp nhất, nối 2 hoặc nhiều object với nhau.
//const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください
// e.g{ a:'a', b:'b' }
var a = {a: 'a'};
var b = {b: 'b'};
var c = {c: 'c'};
var d = Object.assign({},a, b, c); // Cách 1 dùng Object.assign()
console.log(d)
var d = {...a, ...b, ...c};//cách 2 dùng toán tử giải Spread
console.log(d) 
// myIdea:
var ob1 = {
    name: 'the anh',
    age: 18
};
var ob2 = {
    hobby: 'sleep',
    eat: function(food){
        console.log(food);
    }
};
var mergeObject = Object.assign({}, ob1, ob2);
console.log(mergeObject);
var ob3 = {...ob1, ...ob2} 
console.log(ob3);


//問2:
// Copy và cắt mảng và trả về 1 mảng mới.
//const arry = ['aa','bb','cc','dd','ee','ff','gg'];
//のdd,ee,ffを新たな配列として返してください

var arry = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
console.log(arry.slice(3, 6)) // dùng để copy 1 phần trong mảng, các phần tử 
console.log(arry.slice(-4, -1)) ;console.log(arry)// trong mảng cũ arry ko bị delete 

console.log(arry.splice(3, 3, 'có thể chèn thêm')) // dùng để xóa đi phần tử trong mảng, lúc này mảng 
console.log(arry)            // mảng cũ sẽ mất đi các phần tử bị delete.
    

//問3
// Lọc lấy ra các elements trong mảng dưới dạng chuỗi.
//['a','b’] の要素をconsole出力してください e.g 'a'と'b'
var arry = ['a','b'];
console.log(arry[0], arry[1]); // cách 1
for(var i = 0; i < arry.length; i++){ // cách 2
    console.log(arry[i]); 
};
arry.forEach(function(element, index) { // cách 3
    console.log(element);  
})


//問4:
// Lấy ra element và index của element tương ứng.
//['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
var arry = ['a','b'];
arry.forEach(function(element, index){  // cách 1
    console.log(element + ' ' + index);
});

for(var i = 0; i < arry.length; i++){   // cách 2
    console.log(arry[i] + i)
}
 

//問5:
// Kiểm tra có phải Array hay không
//任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g true
var  arry2 = [1, 2];
console.log(Array.isArray(arry2));


// 問8：
// Lấy ra key và value của key trong Object.
// const obj = {
//     key: 'aa',
//     key2: 'bb'
//    }
//    の中のkeyとvalueを自身のプロパティのみ全て出力しなさい

var obj = {
    key: 'aa',
    key2: 'bb'
}
for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
        console.log(key, obj[key]); // cách 1
    }
}
console.log(Object.values(obj).join('-')); // cách 2 lấy ra các
console.log(Object.keys(obj).join('-'))// mảng chứa key và value
//rồi .join("") lấy ra chuỗi.


// 問9:
// Hợp tất cả elment trong mảng thành 1 và trả về dạng chuỗi
// こちらの ['a', 'b', 'c'] 配列の中の全ての要素を結合し、
//1つの文字列として出力してください。

var arr9 = ['a','b', 'c'];
var myMap = arr9.map(function(currenValue){ // cách 1
    return currenValue
})
console.log(myMap.join(''));
console.log(arr9.join('')); // cách 2

var str = '';
var count = arr9.length;
for(var i = 0; i < count; i++){// cách 3
    str += arr9[i]
}
console.log(str); 


// 問10
// こちら
// x = 43
// let y = 3
// の2つの変数。deleteできるのはどちらですか？
function result(){
// deleteは暗黙に定義された場合は変数は削除できるが、
// var(let) や function文中の変数はnon-configurableであり削除できない
};


// 問11
// Sắp xếp các element trong mảng theo thứ tự tăng dần.
// let arry =[
//   {id:1,name:'morita'},
//   {id:2,name:'kenji'},
//   {id:4,name:'uro'},
//   {id:3,name:'ken'}
//   ];
// をid番号が若い順にソートしたオブジェクトを含む配列を
// 出力してください

var arry11 =[
    {id:1,name:'morita'},
    {id:2,name:'kenji'},
    {id:4,name:'uro'},
    {id:3,name:'ken'}
];
arry11.sort((a, b) =>{
    return a.id - b.id;                 //cách 1
});
console.log(arry11)

var newArry11 = arry11.sort((a, b) =>{ 
    if(a.id > b.id) return 1;           //cách 2
    if(a.id < b.id) return -1;
})
console.log(newArry11);


// 問12
// Gán lại giá trị cho các biến đã được định nghĩa mặc định.
// a, bの変数はデフォルトとしてaは5、bは7を持ち、aに1を
//代入してconsole出力してください。
var [a = 5, b = 7] =[2];   // với mảng
console.log(a,b)  // output: 2,7
var {a = 5, b = 7} ={a:22, b:33}    // với chuỗi
console.log(a,b) // output: 22, 33


// 問13
// next()を実行しただけ返り値が1増える関数を定義してください
function setUp() {
    var count = 0;
    return function (){
        return count += 1;
    }
};
var next = setUp(); //関数カウントは、その外部で定義された変数を
console.log(next())//保持できます。これはクロージャ(closure)と呼ばれます。
console.log(next())//JavaScriptでもよく使われています。


//問14
//fun(1,2,3)を実行したら引数が全て配列で返る関数funを定義しなさい
function fun(...argument){  // cách 1
    return argument ;
}
console.log(fun(1,2,3))

function fun2(){
    return Array.from(arguments)  // cách 2
}
console.log(fun2(1,2,3))


// 問15
// Cắt các element trong mảng và chèn thêm vào.
// 配列 const array = ['a1','a2','a3','a4','a5']
// の0〜2番目の要素をそれぞれ red, green, yellow
// に置き換えて配列にしてください。
//また実行した際の返り値を教えてください.

var array15 = ['a1','a2','a3','a4','a5'];
var spliceArray = array15.splice(0, 3, 'red', 'green', 'yellow');
console.log(spliceArray); // các element bị cắt
console.log(array15); // mảng cũ thay đổi sau khi cắt và chèn.


// 問16
// const array = ['a1','a2','a3','a4','a5']
// のインデックス2〜4の要素を取り出し、 配列として出力しなさい。 
// 実行された後のarrayの要素を教えてください
var array16 =  ['a1','a2','a3','a4','a5'];
var array16Slice = array16.slice(2, 4);
console.log(array16Slice); // các element bị cắt 
console.log(array16); // mảng cũ vẫn được dữ nguyên.


// 問17
// const array = ['a1','a2','a3','a4','a5']
// の全ての要素を"/"で結合した文字列を出力し、
//さらにその文字列を'/'区切りで配列に直してください

var array17 = ['a1','a2','a3','a4','a5'];
var array17Join = array17.join('/');
console.log(array17Join); 
var strToArray = array17Join.split('/');
console.log(strToArray);


// 問18
// 配列の要素が
// ランダムに出力される関数を書いてください。
// (配列に要素が追加される事を仮定してたものにしてください)

var array18 = ['おはよう','こんにちは','おやすみなさい'];
var newArray = array18[Math.floor(Math.random()*array18.length)];
console.log(newArray)
// Chú ý: floor là làm tròn dưới. và random()*5 sẽ trả về
// các số ngẫu nhiên từ 0 đến 4.
console.log(Math.floor(Math.random()*5))


// 問19
// Tạo object bằng Object.create
// Object.createで空のオブジェクトを作成し、
// 値が1のプロパティpを出力してください
var obj = Object.create({}, {p: {value: 1}, n: {value:2}});
console.log(obj.p)


// 問20
// コンストラクタWhoの初期化時に'morita'(String)を渡し
// インスタンスプロパティnameに代入、 
// インスタンスメソッドgetNameの返り値が
// Who.prototype.name値になるいわゆる「classのようなもの」を
// 作成してください ※インスタンスメソッドは
// prototypeに代入してください

function Who(name){
    this.name = name;
}
Who.prototype.getName = function(){
    console.log('My name is ' + this.name)
}
var person1 = new Who('The Anh');
person1.getName();


// 問21
// 浅いコピー(shallow copy)と深いコピー(deep copy)の違いを
// 説明してください
var arr = [{x: 2}];
var arr2 = [].concat(arr);
arr[0].x = 3;  // gán lại
console.log(arr[0].x);//value của cả arr và arr2 đều thay đổi=3
console.log(arr2[0].x);


// 問21
// 下記
// let array = ['e','a','k','B','c'];
// array.sort();
// を実行した結果を答えてください

var array21 = ['e','a','k','B','c'];
console.log(array21.sort())
// Output: ['B', 'a', 'c', 'e', 'k']
//note 順番は文字エンコーディングによって決まる
//要素に数値があった場合文字列に置き換えられる


// 問22
// 上記の配列を大文字小文字区別なく順番通りにしてください。
// 期待する値['a','B','c', 'e','k']

var array22 = ['e','a','k','B','c'];
var result22 = array22.sort(function(a,b) {
    return a.toUpperCase() > b.toUpperCase() ? 1 : -1;
});
console.log(result22)


// 問23
// このような[20,100,3,35,0]
// 比較する配列の要素が数値の場合、「降順」にsortしてください 
// 期待する結果[100, 35, 20, 3, 0]

var array23 = [20,100,3,35,0];
var result23 = array23.sort(function(a,b) {
   return  b - a;
})
console.log(array23)


// 問24
// 文字列 '10'をNumber型にし、型判定し、数値かどうか評価後、
// 文字列に変換してください
var string24 = '10';
var toNumber = Number(string24);
console.log(typeof toNumber === 'number' ? String(toNumber) : toNumber)


// 問25
// カーリー化されたadd(1)(2)もしくはadd(1,2) を
// 実行した際両方とも返り値3になる関数を定義しなさい.
function add(x, y) {
    if(typeof y === 'undefined'){
        return function(y){
            return x + y;
        }
    }
    return x + y;
}
console.log(add(1, 2));
console.log(add(1)(2));



// 問26
// クロージャーを使ったファクトリー関数。
// var fafa = Factory('morita');
// fafa.introduce()
// //'morita'
// 上記のような実行をしたら渡したname(ここではmorita)
// が表示されるメソッドintroduceを持つファクトリー関数を
// 定義しなさい。

function Factory(name){
    this.name = name;
};
Factory.prototype.introduce = function(){
   console.log(this.name)
}
var fafa = new Factory('morita');
fafa.introduce()


function Factory2(name){
    function getName(){
        return name;
    }
    return {
        introduce: function(){
            console.log(getName());
        }
    }
}
var fafa = Factory2('morita');
fafa.introduce() // fafa lúc này là 1 object
   

// 問27 
// 関数sayHiに自分の名前を引数で渡した際にhello!yourname、
// 何も渡さない場合hello! と返す関数を作成し、
// それをapplyで実行してください。また applyの第一引数にnullを
// 渡す場合とオブジェクトを渡す場合のそれぞれのthisは
// 何を指しますか答えてください.

var sayHi = function(name){
    return 'hello!' + (name ? name : '');
}
console.log(sayHi('the anh'))
console.log(sayHi())


// LeetCode: tìm 2 số có tổng bằng target trong mảng nums,
// trả về indices của 2 số đó.
var nums = [1,2,3,4,5,6,7]
var target = 8
function myFunction(nums, target){
    for(var i = 0; i < nums.length - 1; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return ([i, j])
            }
        }
    }
}
console.log(myFunction(nums, target))


