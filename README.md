# boostcourse네이버커넥트재단_JavaScript_Basics__egoing생활코딩
2022.01.03~ boostcourse_JavaScript_Basics <br>
1.7배의 이고잉님을 좋아합니다.🥰


---
객체를 만들어내는 공장, 설계도 **class** <br>
만들어진 **object**

`function Person() {}` <br>
`var Person = new Function();` 함수도 객체이기 때문에 프로퍼티를 가질 수 있다. <br>


class에서 상속을 하기위해서는 **extends**를 사용한다. <br>
class에서 부모의 속성과 함수를 호출하기 위해 **super**를 사용한다.<br><br>

**객체상속에 대한 설명**<br>
javascript에서는 class뿐만 아니라 객체간에도 상속을 정의할 수 있다.<br>
객체에서 상속을 정의하는 것을 prototype link라고 한다.<br>
prototype link를 정의하기 위해 __proto__를 사용하면 된다. <br>
__proto__ 객체가 가지고 있지 않은 함수나 값을 찾으려고 할때 찾아보는 속성의 이름이다.<br>
javascript에서 객체는 클래스 또는 객체에 종속될수도 있지만 독립적인 개체가 될수도있다.<br>
**call()** 함수를 호출할 때 this값을 바꾸기 위한 함수이다.<br>
**bind()** 는 함수에 this를 고정하기 위한 함수이다.<br><br>

new키워드를 이용하여 객체로 만들 때 같이 생성되는 객체는. prototype객체 이다. 동일한 함수를 이용하여 생성객체가 모두 공유하여 사용하는 객체의 이름이다.<br><br>

객체를 상속받기 위한 코드는, `var subObj = Object.create(superObj);`<br>
생성자함수를 통해 상속받기 위한 코드는, `PersonPlus.prototype.__proto__ = Person.prototype;` <br><br>

**같은코드1**<br>
`function Person(name){ this.name = name; }` <br>
`function PersonPlus(name, age){Person.call(this, name); this.age = age;}` <br>
**같은코드2**<br>
`PersonPlus.prototype.__proto__ = Person.prototype;` <br>
`PersonPlus.prototype = Object.creat(Person.prototype);` <br>

---

|:-----:|:-----:|
|![boostcource_egoing](https://github.com/EGEG1212/boostcourse_JavaScript_Basics__egoing/blob/main/boostcourse_egoing%20(en).jpg)|
![boostcource_egoing](https://github.com/EGEG1212/boostcourse_JavaScript_Basics__egoing/blob/main/boostcourse_egoing%20(ko).jpg)|
