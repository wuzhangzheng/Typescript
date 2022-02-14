"use strict";
//Never 表示永不存在的值，一般用于抛出异常或根本不可能有返回值的函数
function demo() {
    throw new Error("报错了");
}
// demo();
//object
let o;
// o=123;
o = { name: 'wzz', age: 456 };
console.log(o);
