"use strict";
//类型断言:TS中的类型断言和其它编程语言的类型转换很像，可以将一种类型强制转换成另外一种类型。
let str = 'wzz666';
//方式一
let len = str.length;
console.log(len);
//方式二  在企业开发中推荐使用as 来进行转换使用。
let len2 = str.length;
console.log(len2);
