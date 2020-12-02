function pear(name,price,origin,weight){
    this.name = name,
    this.price = price,
    this.origin = origin,
    this.weight = weight,
    this.printName = function (){
        console.log("this is pear" + this.name);
        
    }
}
pear.prototype.printName2 = function(){
    console.log("this is printName 2");
    
}
var p1 = new pear("一号梨子",12,"河南",10);
p1.printName();
p1.printName2();

console.log(p1.__proto__);
console.log(p1.__proto__.__proto__);
console.log(pear.prototype.__proto__.__proto__);

