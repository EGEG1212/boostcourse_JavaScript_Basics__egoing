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
        super(name, first, second); //πsuper() λΆλͺ¨ν΄λμ€μμμ±μ
        this.third = third;
    }
    sum(){
        return super.sum()+this.third; //πsuper.λΆλͺ¨ν΄λμ€νΈμΆ
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());


// πsuperμ λ κ°μ§ μ©λ²
// super() λΆλͺ¨ν΄λμ€μ μμ±μ super(name, first, second)
// super.  λΆλͺ¨ν΄λμ€ νΈμΆ super.sum()

// πsuperκ° μλ€λ©΄ μ΄λ€ λΆνΈν¨μ΄ μμκΉ? μλ€λ©΄ μ΄λ€κ² νΈλ¦¬νκ°?
// λΆνμνκ² λ°λ³΅λλ μ½λκ° μ€κ³  κ°λ΅ν΄ μ§λ€.

// πμμμΌλ‘ μΈν΄μ μκΈ°λ λ¨μ μ superλ‘ μ΄λ»κ² λ³΄μνλκ°?
// μμμμ λΆλͺ¨ν΄λμ€μ νΉμ§μ μ μ§νλ μμ , μΆκ°ν  μ¬ν­μ΄ μλ€λ©΄ μμν΄λμ€μμ λ€μ λΆλͺ¨ν΄λμ νΉμ§μ μ μ§ μκ³ 
// superλΌλ μμκΈ°λ₯μ μ΄μ©νλ©΄ 
// λΆλͺ¨ν΄λμ€λ₯Ό μ μ©νκ² μ΄μ©νλ©° μμν΄λμ€μμ κ°κ²°νκ² μΆκ°ν  μ¬ν­λ§ μ λκ²μ΄ κ°λ₯ν΄μ§λ€.