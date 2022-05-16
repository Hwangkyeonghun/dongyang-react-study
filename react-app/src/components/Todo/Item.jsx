import styled, { css } from "styled-components";

const Item = ({ data, onDelete, onChecked }) => {
  const { id, text, isDone } = data;

  const handleChange = () => {
    // 1. data의 현재 isDone값을 반대로
    // 2. input의 useDebugValue(체크여부)를 넣어주는 방법.
    onChecked(id);
  };

  return (
    <Container key={id}>
      <label>
        <input type="checkbox" checked={isDone} onChange={handleChange} />
        <Content isDone={isDone}>{text}</Content>
      </label>
      <BtnDelete onClick={() => onDelete(id)}>삭제</BtnDelete>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  & + & {
    border-top: 1px solid #dfd1d1;
  }
`;
const Content = styled.span`
  color: ${(props) => props.isDone && "#ddd"};
  text-decoration: ${({ isDone }) => isDone && "line-through"};
  // 상하 내용은 동일하다. props에 isDone값을 가져와서 트루일 경우 묶어서 스타일링을 한다.
  ${({ isDone }) =>
    isDone &&
    css`
      color: #ddd;
      text-decoration: line-through;
    `}
`;
const BtnDelete = styled.button``;

export default Item;
