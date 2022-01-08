//반복문과 배열은 넘나 중요한것 👍

var memberArray = ['egoing', 'graphittie','leezche'];
console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(memberArray[i]);
    i+=1;
}
console.groupEnd('array loop');
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
console.group('object loop');
for(var name in memberObject ){
    //console.log(name); //key 값을 가져옴
    console.log(name, memberObject[name]); //[]괄호로 넣어줘야 value를 가져온다.

}
console.groupEnd('object loop');