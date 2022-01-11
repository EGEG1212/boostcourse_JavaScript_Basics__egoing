var kim = {
    name: 'kim',
    first:10,
    second:20,
    sum: function(){
        return this.first + this.second;
    }
}
var lee = {
    name: 'lee',
    first:10,
    second:10,
    sum: function(){
        return this.first + this.second;
    }
}


console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2022-1-9');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()+1);//0부터 세다보니...😒

console.log('Date', Date); //Date(){[native code]}
//-------------Date와 같은 함수. 생성자constructor을 만들어보자.🏃‍♀️변경해야할 부분이 부분부분🏃‍♂️
function Person(name, first, second, third){
    this.name = name;
    this.first= first;
    this.second=second;
    this.third=third;
    this.allsum= function(){
        return this.first + this.second + this.third;
    }
}
console.log('Person()', Person()) //undefined 걍함수
console.log('new Person()', new Person()); //new를 붙임으로써 객체생성자constructor가 되었다.!!! Person {name: 'kim', first: 10, second: 20, third: 20, sum: ƒ}

var kim = new Person('kim', 30, 30, 30);
var lee = new Person('lee', 40, 40, 40 );
//console.log("kim.Person()", kim.Person()); //❌이렇게부르면안된다! 에러남
console.log("kim.allsum()",kim.allsum());
console.log("lee.allsum()",lee.allsum());

//💪new생성자 함수(constructor)가 하는 일
//  1.객체를 만든다.
//  2.객체의 초기 상태를 정의한다.
