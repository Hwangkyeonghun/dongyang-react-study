import styled from "styled-components";

const BookList = ({ data }) => {
  // 책 정보를 가져와서  list 를 돌려  map 함수를 넣어준다.

  return (
    <List>
      <Item>
        <Title>책 제목</Title>
        <Content>내용:</Content>
      </Item>
    </List>
  );
};

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Item = styled.img``;

const Title = styled.p``;

const Content = styled.a``;

export default BookList;
