var myChar = ["f", "e", "d", "c", "b", "a"];
myChar.sort(); // sắp xếp tăng dần của alphabet
console.log(myChar);
myChar.reverse(); // đảo ngược mảng đã sắp xếp.
console.log(myChar);

// Với số ta cần truyền 1 function vào hàm sort.
var myNumber = ["-12", "23", "773", "488", "50", "6"];
// Đổi mảng myNumber thành mảng chứa số.
var newArr = [];
myNumber.forEach((number) => {
  return newArr.push(parseFloat(number));
});
console.log(newArr);

// Xếp loại mảng số theo thứ tự tăng dần.
var newNumber = newArr.sort(function (a, b) {
  // có thể viết : return a - b
  return a > b ? 1 : -1;
});
console.log(newNumber);

// Xếp loại mảng số theo thứ tự giảm dần.
var newNumber2 = newArr.sort(function (a, b) {
  // có thể viết : return -a + b
  return a > b ? -1 : 1;
});
console.log(newNumber2);

// Find MaxNumber
console.log(Math.max.apply(Math, newNumber));

//Find MinNumber
console.log(Math.min.apply(Math, newNumber));

// closure
function ii() {
  var me = "my";
  return function (something) {
    console.log(me + " " + something);
  };
}
var myFunc = ii();
myFunc("home");

// Date
var now = new Date();
console.log(now);
var nowTime =
  now.getHours() +
  ":" +
  now.getMinutes() +
  ":" +
  now.getSeconds() +
  ":" +
  now.getMilliseconds();
console.log(nowTime);

//Create an object calculator with three methods:

let calculator = {
  v1: 0,
  v2: 0,
  read() {
    prompt1 = prompt("firstValue is:");
    prompt2 = prompt("secondValue is:");
    if (Number(prompt1) && Number(prompt2)) {
      this.v1 = prompt1;
      this.v2 = prompt2;
    } else {
      this.v1 = 0;
      this.v2 = 0;
    }
  },

  sum() {
    return Number(this.v1) + Number(this.v2);
  },

  mul() {
    return Number(this.v1) * Number(this.v2);
  },
};
calculator.read();
console.log("saved valuas are: ", calculator.v1, calculator.v2);
alert(calculator.sum());
alert(calculator.mul());
