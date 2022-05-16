import styled from "styled-components";
import { useState } from "react";
const Accodion = ({ data, isOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    //이미 열려있는거 클릭하면 모두 닫기.
    const nextIndex = index === activeIndex ? -1 : index;
    setActiveIndex(nextIndex);
  };
  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id}>
          <Header onClick={() => handleClick(index)}>{title}</Header>
          <Body isActive={index === activeIndex}>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  border: 1px solid #ddd;
  margin: 100px;
  border-radius: 4px;
`;
const Item = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Header = styled.div`
  padding: 10px;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  font-size: 12px;
  display: ${({ isActive }) => !isActive && "none"};
`;
//div display 기본 값이 block

export default Accodion;
