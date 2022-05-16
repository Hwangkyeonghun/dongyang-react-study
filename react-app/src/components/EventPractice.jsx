import { useState } from "react";
const EventPractice = () => {
  //SyntheticEvent 로 웹브라우저의 Event 를 감싸는 객체이다.
  //비동기적으로 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야 합니다.
  //e.target 을 하게되면 이벤트가 발생한  HTML  DOM 요소에 접근할 수 있다.
  //   const [message, setMessage] = useState("");
  //   const [username, setUsername] = useState("");
  const defaultForm = { username: "", message: "" };
  const [form, setFrom] = useState(defaultForm);
  const [username, message] = form;

  const Event = () => {
    alert(username + " : " + message);
    setFrom(defaultForm);
  };
  const onCheckEnter = (e) => {
    //key: "Enter e.key === 눌러지는 키 말고 이벤트 키를 말함.
    console.log(e.key);
    if (e.key === "Enter") {
      Event();
    }
  };
  //비구조 할당 모 객체까지 접근한 뒤에 {} 안에 객체의 키값을 각각 적어주면 된다. ex) const {name,value,....} = props
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    // name 을 치면 name의 String  값이 들어옴으로 [name] 으로 키 값을 잡아준다.
    setFrom(newForm);
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        onKeyPress={onCheckEnter}
        name="username"
        type="text"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={username}
      />
      <input
        onKeyPress={onCheckEnter}
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message}
      />
      <button onClick={Event}>확인</button>
    </div>
  );
};

export default EventPractice;
