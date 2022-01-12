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

class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2;
    }
}

var kim = new PersonPlus('kim', 10, 20);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

// 🎈상속이란 무엇인가?
// 기존class의 속성을 이어받아 중복없이 필요한 부분만 추가작성하면 됨
// 🎈상속이 없으면 어떤 점이 불편한가?
// 중복된 코드로 인해 실행할 때마다 필요없는 메소드들도 같이 실행되어 메모리 공간을 낭비하게되며 수정도 어려워진다. 더불어 함께 사용하는 라이브러리를 마음대로 수정해 버리면 나중에 다른 사람이 사용할 때 어디가 바뀌었는지 모를 수도 있다.
// 🎈상속받는 자식클래스를 구현하려면 어떻게 해야 하나?
// class 새클래스명 extends 기존클래스명{ 추가코드 }