const useState = (init) => {
  let state = init;
  //ex let state = init =5

  const setState = (val) => {
    // setState (val)  = val =Number
    state = val;
    //렌더링 작업
  };
  return [state, setState];
};

//mocking 대충 이렇게 생겼을 것이다
