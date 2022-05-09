const useState = (init) => {
  let state = init;
  const setState = (val) => {
    state = val;
    //렌더링 작업
  };
  return [state, setState];
};

//mocking 대충 이렇게 생겼을 것이다
