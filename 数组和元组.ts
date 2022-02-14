//数组
//方式一
let arr1:Array<number>;
arr1=[5,6];
console.log(arr1);
//方式二
let arr2:string[];
arr2=['a','b','c'];
console.log(arr2);
//联合类型
let arr3:(number|string|boolean)[];
arr3=['c',5,true];
console.log(arr3);

//任意类型
let arr4:any[];
arr4=['da',456,false]
console.log(arr4);

//元组类型：对数组类型的扩展,用于保存定长类型的数据
let arr5:[number,string,boolean];
// arr5=[5,'gf',false];
arr5=[5,'gf',false];
console.log(arr5);

