import { useState, useMemo, useRef, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const inputEl = useRef(null);
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  //useCallback 으로 감싸게 되면 값이 바뀔 때만 할당이 된다.
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      console.log(number);
      setList(nextList);
      inputEl.current.focus();
      setNumber("");
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}> 등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;

// useRef 값을 접근할때는
