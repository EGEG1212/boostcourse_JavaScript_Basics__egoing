var kim = { name:'kim', first:10, second:20}
var lee = { name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}

console.log("sum.call(kim)", sum.call(kim, ': '));
console.log("sum.call(lee)", sum.call(lee, '=>'));
// sum.call(kim, ': ')
// 1)함수내부적의 this를 무엇으로 할것인가
// 2)prefix 파라미터에 들어갈 인자값
// 비슷한 친구 apply

var KimSum = sum.bind(kim, '-> ');
console.log('kimSum()', KimSum());

// 🎈call은 실행할때 함수의 this의 값을 바꾼다.
// 🎈bind는 함수의 내부적으로 this의 값을 영구적으로 고정하는 새로운 함수를 만든다.