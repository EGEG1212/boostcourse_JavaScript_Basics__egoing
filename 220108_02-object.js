var memberArray = ['egoing', 'graphittie','leezhe'];
console.log(memberArray[0]);

var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhe'
}

// 객체란, 서로연관된, 변수와 함수를, 그룹핑하고, 이름을 붙인것.
memberObject.designer = 'leezche'; //수정, 추가
console.log("memberObject.designer", memberObject.designer); //.또는[]로 읽을수있다.
console.log("memberObject['designer']", memberObject['designer']);//.또는[]로 읽을수있다.
delete memberObject.manager //삭제
console.log("after delete memberObject.manager", memberObject.manager);