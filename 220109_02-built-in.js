console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));


// 자바스크립트 표준 내장 객체 👇
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects



//내가 직접 객체를 만들어보자 👌
var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(4.5)", MyMath.floor(4.5));
