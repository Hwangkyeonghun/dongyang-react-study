import { useState, useRef } from "react";
import styled from "styled-components";

const todoListState = [
  {
    id: 1,
    text: "리액트 기초 알아보기",
  },
  {
    id: 2,
    text: "리액트 기초2 알아보기",
  },
];
const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState(todoListState);
  const number = useRef(todoListState.length + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [...todoList, { id: number.current, text: text }];
    setTodoList(newTodoList);
    setText("");
    number.current = number.current += 1;
  };

  const handleDelete = (deleteId) => {
    console.log("todoList:" + todoList.id);
    const newList = todoList.filter((e) => e.id !== deleteId);
    setTodoList(newList);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onSubmit={handleSubmit}>
          <InputText onChange={(e) => setText(e.target.value)} />
          <BtnSubmit>추가</BtnSubmit>
        </Form>
        <Body>
          <List>
            {todoList.map((todo) => (
              <Item key={todo.id}>
                <label>
                  <input type="checkbox" />
                  <Content>{todo.text}</Content>
                </label>
                <BtnDelete onClick={() => handleDelete(todo.id)}>
                  삭제
                </BtnDelete>
              </Item>
            ))}
          </List>
        </Body>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #d5dfe9;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
`;

const Title = styled.div`
  background: #22b8cf;
  text-align: center;
  color: #dfd1d1;
  padding: 10 px;
`;
const Form = styled.form`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

const Body = styled.div`
  background: #dfd1d1; //rgb(75, 64, 64)
  min-height: 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  & + & {
    border-top: 1px solid #dfd1d1;
  }
`;
const Content = styled.span``;
const BtnDelete = styled.button``;

export default Todo;
