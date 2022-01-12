var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj); //표준화된방식 create()
subObj.subVal = 'sub';
// debugger;
console.log('subObj.subVal=>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal); //super
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);//걍 super

var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second)/2;
}
// var lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;

console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());//lee에 없으니 __proto__를따라 kim.sum()기능을 수행하게되고, 여기서의 this는 lee이다 👍
console.log('lee.avg() : ', lee.avg()); //lee혼자만의기능




// 🎈prototype
// cunstructor안이 아닌 밖에서 Method를 정의해 객체가 생성될 때마다 호출되는 것이 아니라 모든 객체들이 프로토타입을 같이 쓰는 방식.

// 🎈__proto__ 객체간의 상속을 정의해, 한 객체의 속성을 다른 객체가 상속받을 수 있게 함.
// Object.creat()