class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : ' + (this.first+this.second);
    }
}


var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : ' + (this.first+this.second);
}

var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());



// 😨뭔솔...😨
// 🎈prototype
// constructor로 생성된 모든 객체가 공통적으로 사용하는 속성과 함수를 만들고 싶을 때 사용.
// prototype에서 함수를 정의하면 constructor가 실행 될 때 마다 함수가 생성되지 않고, 한 번만 정의되기 떄문에 메모리를 절약할 수 있다.
// prototype에 sum이라는 함수가 있더라도 
// 객체에 sum함수를 정의하면 객체에 지정된 함수가 호출된다.

// 🎈new constructor 
// 객체가 만들어지기 직전에 실행됨.
// 객체의 초기상태를 지정하기 위한 함수의 이름

// 🎈class
// 객체를 찍어내는 기능
// class안의 constructor 최초호출=초기값설정