//let const
//1. 유효범위 (scope)
//var는 함수 단위 scope
//let, const :블록단위
//2. 재할당 가능
//  var, let : 가능
// const  :  불가능

for (var i = 0; i < 5; i++) {
  console.log(" 안쪽" + i);
}
console.log("바깥쪽" + i);

for (var j = 0; j < 5; j++) {
  console.log(" 안쪽" + j);
}
console.log("바깥쪽" + j);

//hoisting
//tdz 들어가게 됨

// es 6에서는

console.log(a);
var a = 5;
console.log(a);

// const : 재할당 불가능
// let : 재할당 가능
// hoisting  가능
//함수 선언식 ()
add(3, 4);
function add(a, b) {
  return a + b;
}

// 함수 표현식 (표현식은 )
minus(3, 4);
const minus = function (a, b) {
  return a - b;
};
// 화살표 함수 표현식
//default paramter (a,b) 파리메타가 넘어왔는데 a에 값이 있고없을때 b=5라고 하면 .
const minus2 = (a, b) => {
  return a - b;
};
// 리턴 화살표 문
const minus3 = (a, b) => a - b;

// 비구조 할당
const person1 = {
  name: "json",
  age: 20,
  major: "Computer",
};

const locationInfo = {
  country: "Korea",
  city: "Seoul",
};
const subMajor = "Math";

// 복사할때 name1 은 앞에 있으면  poerson1 에 덮어 씌워지게 된다.
const person2 = {
  name1: "peter",
  ...person1,
  age: 24,
  ...locationInfo,
  subMajor,
};

const { name, age, major } = person1;

// const {name}  = person1;
// const {age} = person1;
// const {major} = person1;

// 템플릿 리터럴 `` 백틱
console.log(`이름은${name}입니다.`);
console.log(`나이는${age}입니다.`);
console.log(`전공은${major}입니다.`);

const arr1 = [1, 2, 3, 4];
// const first = arr1[0]
// const second = arr1[1]
const [first, second] = arr;

const arr2 = [0, ...arr1, 5];
