function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second); //부모를 호출했을 뿐..ㅋ 앞전에 했었던 같은 내용 super(name, first, second); 
    this.third = third;
}

// PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;// 완전 정확하고 강력한 리플레이스하는 방법이긴하나.. 🧐아래코드가 위로올라가버리면 avg기능이 지워져버림... (순서중요)

PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}
var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor);


// 이것보다는 class.js를 참고하세요 ㅋㅋㅋ