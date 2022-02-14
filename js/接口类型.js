"use strict";
let obj = {
    firstName: 'Jon',
    lastName: 'Lee'
};
//需求：要求定义一个函数输出一个人完整的姓名，这个人的姓必须是字符串，这个人的名也必须是一个字符串
function say({ firstName, lastName }) {
    console.log(`我的姓名是${firstName}_${lastName}`);
}
//注意点:如果使用接口来限定变量或者形参，参数必须要一模一样
say(obj);
//注意点：但是在企业开发中可以多一个或 少一个，那时会怎么做
//需求：如果传递了middleName就输出完整名称，如果没有传递middleName那么就输出FisrtName和LASTnAME
