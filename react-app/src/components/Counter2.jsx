import { useEffect, useState } from "react";

const Counter2 = () => {
  //useState 함수의 반환값이 배열이기 떄문에  형태가 []  로 된다.
  const [number, setNumber] = useState(7);

  const handleClick = (i) => {
    console.log(number);
    //set 함수는 비동기 방식이다.
    setNumber(number + i);
  };

  return (
    <>
      <h1>현재 카운트 값은 {number}입니다.</h1>
      <button onClick={() => handleClick(3)}>+3</button>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(-1)}>-1</button>
    </>
  );
};

export default Counter2;
