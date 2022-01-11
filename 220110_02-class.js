class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
}


var kim = new Person('kim', 10, 20);
console.log('kim', kim);





// new생성자 함수(constructor)가 하는 일
//  객체를 만든다.
// 객체의 초기 상태를 정의한다.

// ----------------------
// 객체가 생성될때 function함수 안쓰고 constructor함수를 클래스 내에서 구현.

// 자바스크립트는 객체를 생성할때 자동으로 constructor 함수를 호출합니다.
// 객체의 초기값 설정