import styled from "styled-components";
import { useState } from "react";
const Form = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };
  return (
    <Container onSubmit={handleSubmit}>
      <InputText onChange={(e) => setText(e.target.value)} />
      <BtnSubmit>추가</BtnSubmit>
    </Container>
  );
};
const Container = styled.form`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

export default Form;

// on 은 props  handle은 컴포넌트 내에서 쓴다. 규칙
