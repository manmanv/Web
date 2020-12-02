function Object2(){
    this.__proto2__ = Object2.prototyoe2

}
Object2.prototyoe2 = {
    __proto2__:null

};
var obj1 = new Object2()
console.log(obj1.__proto2__.__proto2__);
