import { useEffect, useState } from "react";

const Counter = () => {
  //useState 함수의 반환값이 배열이기 떄문에  형태가 []  로 된다.
  const [number, setNumber] = useState(5);

  const handleClick = () => {
    //set 함수는 비동기 방식이다.
    setNumber((prev) => prev + 1);
    //prev 예전 값을 가지고 더하면 덧셈이 가능하다.

    console.log(number);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
