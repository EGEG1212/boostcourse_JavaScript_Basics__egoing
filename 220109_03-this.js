var kim = {
    name: 'kim',
    first:10,
    second:20,
    sum: function(){
        return this.first + this.second;
    }
}

console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
//단점: 이미 알고있는데 왜 또 언급하누.. kim.first kim.second
//sum() 함수부분 수정
// this 👈 이 this가 속해있는 "메소드"가 속해있는 "객체"를 가르키도록 약속~~
console.log("kim.sum()", kim.sum());