//箭头函数

var a5 = (x,y)=>{
    console.log(x+y);
    
}
a5(5,4);
console.log(typeof a5);

var a6 = function apple6(){
    console.log('apple5');
    return 100;
}() //加括号立即执行函数

console.log(a6);

//闭包
(function(x,y){
    console.log("江西软件大学")
    console.log(x+y);
    
})(3,6) //括号可以传参

//原型
function Furit(){
    console.log("this is furit");
    
}
Furit.prototype.apple = function apple(){
    console.log('apple');
    
}
var a88 = new Furit();
console.log(a88.apple());

