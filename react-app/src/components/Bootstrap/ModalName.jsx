import { useState } from "react";
import styled from "styled-components";

const ModalName = ({ onClose, onSubmit, name }) => {
  const [username, setUsername] = useState(name);

  const submit = (e) => {
    if (e.key === "Event") onSubmit(username);
    onClose();
  };

  const handleChange = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  return (
    <>
      <Backdrop onClick={() => onClose()} />
      <Container>
        <h2>이름 바꾸기</h2>
        <input
          name="username"
          type="text"
          placeholder="이름을 입력하세요."
          onChange={handleChange}
          value={username}
        />
        <button onClick={submit}>확인</button>
      </Container>
    </>
  );
};
// back Drop은 기본속성이다.
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
`;

export default ModalName;
