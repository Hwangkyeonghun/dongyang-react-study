import { useState, useRef } from "react";
import styled from "styled-components";
import Item from "./Item";
import Form from "./Form";
const todoListState = [
  {
    id: 1,
    text: "리액트 기초 알아보기",
    isDone: true,
  },
  {
    id: 2,
    text: "리액트 기초2 알아보기",
    isDone: true,
  },
];
const Todo = () => {
  const [todoList, setTodoList] = useState(todoListState);
  const number = useRef(todoListState.length + 1);

  const handleAdd = (text) => {
    const newTodoList = [
      ...todoList,
      { id: number.current, text, isDone: true },
    ];
    setTodoList(newTodoList);
    number.current = number.current += 1;
  };
  const handleDelete = (deleteId) => {
    console.log("todoList:" + todoList.id);
    const newList = todoList.filter((e) => e.id !== deleteId);
    setTodoList(newList);
  };
  const handleChecked = (id) => {
    // id로  item 찾아서 isDone을 반대로 바꿔주기
    const newList2 = todoList.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    //   if (item !== id) {
    //     return item;
    //   } else {
    //     const newItem = { ...item, isDone: !item.isDone };
    //     return newItem;
    //   }
    // });
    // setTodoList(newList2);
    setTodoList(newList2);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onAdd={handleAdd} />
        <Body>
          <List>
            {todoList.map((item, i) => (
              <Item
                key={item.id}
                data={item}
                onDelete={handleDelete}
                onChecked={handleChecked}
              />
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

const Body = styled.div`
  background: #dfd1d1; //rgb(75, 64, 64)
  min-height: 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default Todo;
