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



// ๐จ๋ญ์...๐จ
// ๐prototype
// constructor๋ก ์์ฑ๋ ๋ชจ๋  ๊ฐ์ฒด๊ฐ ๊ณตํต์ ์ผ๋ก ์ฌ์ฉํ๋ ์์ฑ๊ณผ ํจ์๋ฅผ ๋ง๋ค๊ณ  ์ถ์ ๋ ์ฌ์ฉ.
// prototype์์ ํจ์๋ฅผ ์ ์ํ๋ฉด constructor๊ฐ ์คํ ๋  ๋ ๋ง๋ค ํจ์๊ฐ ์์ฑ๋์ง ์๊ณ , ํ ๋ฒ๋ง ์ ์๋๊ธฐ ๋๋ฌธ์ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ์ ์ฝํ  ์ ์๋ค.
// prototype์ sum์ด๋ผ๋ ํจ์๊ฐ ์๋๋ผ๋ 
// ๊ฐ์ฒด์ sumํจ์๋ฅผ ์ ์ํ๋ฉด ๊ฐ์ฒด์ ์ง์ ๋ ํจ์๊ฐ ํธ์ถ๋๋ค.

// ๐new constructor 
// ๊ฐ์ฒด๊ฐ ๋ง๋ค์ด์ง๊ธฐ ์ง์ ์ ์คํ๋จ.
// ๊ฐ์ฒด์ ์ด๊ธฐ์ํ๋ฅผ ์ง์ ํ๊ธฐ ์ํ ํจ์์ ์ด๋ฆ

// ๐class
// ๊ฐ์ฒด๋ฅผ ์ฐ์ด๋ด๋ ๊ธฐ๋ฅ
// class์์ constructor ์ต์ดํธ์ถ=์ด๊ธฐ๊ฐ์ค์ 