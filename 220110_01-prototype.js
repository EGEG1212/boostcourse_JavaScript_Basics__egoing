// 프로토타입 객체 이해하기
// https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes
function Person(name, first, second, third){
    this.name = name;
    this.first= first;
    this.second=second;
    this.third=third;
    }

//✨Person 함수의 프로토타입. 원형 함수 sum을 정한다
Person.prototype.allsum= function(){
    return 'prototype : ' + (this.first + this.second + this.third);
}
//장점1. 한번만 실행되기 때문에  성능절약, 메모리절약
//장접2. 재사용성


var kim = new Person('kim', 30, 30, 30);
kim.allsum = function(){
    return 'this :' + (this.first + this.second);
}
//장점3. 일억개중 요 하나만 함수변경 가능. (자신 속성을 먼저 실행하고 종료.)
var lee = new Person('lee', 40, 40, 40 ); // 본인에 안들어가있지 않으니.. Person.prototype.allsum을 실행.
console.log("kim.allsum()",kim.allsum());
console.log("lee.allsum()",lee.allsum());



// 1.prototype이란, Person객체 밖에서  원형함수 sum을 정한다
// 2.prototype을 사용하지 않고 생성자 함수 안에서 메소드나 속성을 정의했을 떄, 어떤 문제가 발생하는가?  🗝객체 생성때마다 매번 실행되고 매번 정의되기 때문에 성능, 메모리 낭비. 함수내용 한개만 수정할 수 없다.
// 3.prototype으로 어떻게 해결했나? 🗝함수를 prototype으로 선언하여 함수가 한 번만 생성될 수 있게 하고, 수정이 용이하게 함.
