// git hub 백업 주소

// https://github.com/jackiehoon/dongyang-react-study

// 자바스크립드 deep dive
//모던 자바스크립트 Deep Dive 책 추천
// front 면접 질문 (개념 학습하기)

//let const
//1. 유효범위 (scope)
//var는 함수 단위 scope
//let, const :블록단위
//2. 재할당 가능
//  var, let : 가능
//  const  :  불가능

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

//gitignore 를 써서 진짜 필요한 파일 소스만 받아서 사용할 수 있게 만든다. 예를 들어서 공통에서 소스 배포를 할시에 build된 파일을 구분적으로 ingnore를 해제해

//index.js 배포할경우 import를 번들링 해서 배포를 해주어야 한다.

// webpack : 번들러
// babel  : 구버전 브라우저를 위해서 최신문법 -> 예전 문법으로 변형  ex) 화살표 함수
// polyfill : 구브라우저에 없는 함수를 채워줌 함수

//immutable 객체도 불변성 유지가 필요하다. 그래서 객체를 복사할경우 객체의 주소 참조가 아닌 값을 ... 스프레드 연산자로 복제를 해야 불변성 유지가 쉽다.

// build 할때 npm build 를 한 파일을 통으로 배포하면 된다. version update 등 여러가지 기능을 수행함.

// JSX를 리턴한다.

//name 이 바뀔때 실행된다. retrun은 랜더링이 되기 직전에 return값을 반환한다.

// useEffect(()=>{
//   console.log("asdf")

//   return () => {
//     console.log("cleanup");
//   }
// },[name])

// ssr csr  차이점   https://d2.naver.com/helloworld/7804182

//redux mobx  recoil 전역상태 관리 useContext -> hooks  Context를 따로 빼서  다른곳에 있는 함수도 호출가능하다.
// recoil 을 쓰면 전역상태로 관리가 가능하다.

//함수형 선언형

// youtube  event loop 유튜브로 보기

// stack 이 다 비워진 후에 event loop 가 stack으로 올라간다..  web Api

//콜 스택

// 쓰로틀링 (클릭후 1초동안 버튼이 작동하지 않게하는 것..)  ex) 연관검색어  키인되고 자동으로 찾아주는 것 그런데 한글자한글자가 아니라 시간으로  최초입력 시간으로 api를 호출함.
