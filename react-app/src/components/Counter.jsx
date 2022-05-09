import { useEffect, useState } from "react";

const Counter = () => {
  //useState 함수의 반환값이 배열이기 떄문에  형태가 []  로 된다.
  const [number, setNumber] = useState(5);

  const handleClick = () => {
    console.log(number);
    //set 함수는 비동기 방식이다.
    setNumber(number + 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
