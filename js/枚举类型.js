"use strict";
/*
枚举类型是TS为JS扩展的一种类型，在原生的JS中是没有枚举清爽型的，
枚举用于表示固定的几个取值
例如：一年只有四季、人的性别只能是男或女
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Femal"] = 1] = "Femal";
})(Gender || (Gender = {}));
let val;
val = Gender.Male;
console.log(val);
//注意点:TS中的枚举底层实现的本质其实就是数值类型，所以赋值一个数值不会报错
