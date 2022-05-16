const map = function (cb) {
  const array = [];
  // cb 값은 (e) => e *2 가 되고  this 는 배열이 된다
  // this[i] index 값을 가져와서 실행후 빈 배열에 push 후 리턴해준다.
  for (let i = 0; i < this.length; i++) {
    const result = cb(this[i], i, this); //  3번째 인자로 this자체를 넣기도 한다.
    array.push(result);
  }

  return array;
};

const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.map((e) => e * 2);

// 화살표 함수와 function 의 차이
// const arr2 = arr1.map((e) => e * 2).bind(arr1); <-- 이렇게 해줘야 this 생성자가  할당되어 this[i]로 map을 실행할수 있게 된다.

// 명령형  -> 선언형 프로그래밍
// 함수형 프로그래밍

//p164 1.input에 입력된 값을 배열에 추가   2.배열에서 제거
