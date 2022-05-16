import { useState, useRef } from "react";
const defaultNames = [
  {
    id: 1,
    text: "눈사람",
  },
  {
    id: 2,
    text: "눈",
  },
  {
    id: 3,
    text: "바람",
  },
  {
    id: 4,
    text: "눈",
  },
  {
    id: 5,
    text: "눈",
  },
];
const IterationSample = () => {
  const [names, setNames] = useState(defaultNames);
  const [text, setText] = useState("");
  //next id를 가지고와서  set해준다.
  const number = useRef(defaultNames.length + 1);
  const click = (value) => {
    alert(value);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  //엔터키를 칠떄 이벤트를 useRef 를 사용해서 넣어준다.
  const onCheckEnter = (e) => {
    //key: "Enter e.key === 눌러지는 키 말고 이벤트 키를 말함.
    if (!text) return;
    console.log(e.key);
    if (e.key === "Enter") {
      const newNames = [...names, { id: number.current, text }];
      click(text);
      setText("");
      // Enter 를 치는 시점에서 set을 해준다음 그 객체를 setNames에 넣어준다.
      setNames(newNames);
      console.log(newNames);
      number.current = number.current += 1;
    }
  };
  //Ref 를 사용하게 되면 current객체에 들어가게 된다.

  const handleDelete = (deleteId) => {
    // names 중에서 id가 deleteId와 다른 item만 뽑아서 newNames만들기
    const newNameList = names.filter((e) => e.id !== deleteId);
    setNames(newNameList);
  };

  return (
    <>
      {/* <ul>{[<li>눈사람</li>, <li>얼음</li>, <li>눈</li>, <li>바람</li>]}</ul> */}
      <input
        name="input"
        type="text"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange} // changeEvent 가 발생하였을 경우 (e) => setText(e.target.value) 이벤트를 받아서 바로 리턴을 해준다.
        onKeyPress={onCheckEnter}
        value={text}
      />
      <button onClick={() => click(text)}>추가</button>
      <ul>
        {/* map 함수의 첫번째 인자는 val  두번째 인자는 index  li는 html dom 이기때문에 직접 누르면 호출이 ondoubleclick이라는 이벤트가 호출가능  */}
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => handleDelete(name.id)}>
            {" "}
            {name.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
