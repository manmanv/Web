var watermelon = function(){
    console.log("watermelon");
    return function pear(){
        console.log("pear");
        
    }
}
watermelon()()  //会把return的内容打印出来

