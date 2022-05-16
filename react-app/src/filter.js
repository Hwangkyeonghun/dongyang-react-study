const filter = (cb) => {
  // cb 함수에  array1 이 넘어오고
  const array = [];

  for (let i = 0; i < this.length; i++) {
    // this[i] = 1일때 false 라서 array에 push 가 일어나지 않고  true 일때만 [] 에 들어간다.
    if (cb(this[i], i)) {
      array.push(this[i]);
    }
  }

  return array;
};

const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.filter((e) => {
  return e > 2;
});
