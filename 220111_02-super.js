class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second); //🎈super() 부모클래스의생성자
        this.third = third;
    }
    sum(){
        return super.sum()+this.third; //🎈super.부모클래스호출
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());


// 🎈super의 두 가지 용법
// super() 부모클래스의 생성자 super(name, first, second)
// super.  부모클래스 호출 super.sum()

// 🎈super가 없다면 어떤 불편함이 있을까? 있다면 어떤게 편리한가?
// 불필요하게 반복되는 코드가 줄고 간략해 진다.

// 🎈상속으로 인해서 생기는 단점을 super로 어떻게 보안했는가?
// 상속에서 부모클래스의 특징을 유지하되 수정, 추가할 사항이 있다면 자식클래스에서 다시 부모클래싀 특징을 적지 않고
// super라는 상속기능을 이용하면 
// 부모클래스를 유용하게 이용하며 자식클래스에서 간결하게 추가할 사항만 적는것이 가능해진다.