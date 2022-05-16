import { useReducer, useState } from "react";

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <h1>현재 카운트 값은 {state.value}입니다.</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </>
  );
};

export default Counter3;

//dispatch  action 이 발생하였을 경우  function reducer 가  action값에 따라 어떻게 될지 정해준다.   switch 케이스는 상수라서 대문자를 쓴다.
//flux 패턴에서 dispatch action -> store
