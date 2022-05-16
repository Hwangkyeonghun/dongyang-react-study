import { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (e) => {
    //이미지의 display : none 여부를 map의 index activeIndex 비교해서 적용
    // ButPrev 누르면 activeIndex 1감소
    // ButNext 누르면 activeIndex 1증가 0~3
    //이전
    // let 을 써서 하면 가독성이 높아진다.
    const number =
      e > 0
        ? activeIndex === data.length - 1
          ? 0
          : activeIndex + e
        : activeIndex === 0
        ? data.length - 1
        : activeIndex + e;
    setActiveIndex(number);

    //이후
  };

  return (
    <Container>
      <List>
        {data.map(({ id, image }, index) => (
          <Image isActive={index === activeIndex} key={id} src={image} />
        ))}
      </List>
      <ButPrev onClick={() => handleClick(-1)}>이전</ButPrev>
      <ButNext onClick={() => handleClick(1)}>이후</ButNext>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 960px;
  height: 768px;
`;
// opacity 는 투명도이다 1->0으로 서서히 사라지게 만들어주는 효과가 있다. opacity 1s 는 1초가 걸리며 -> 1에서 투명도를 0으로 서서히 만들어 페이드인 효과를 준다.
const List = styled.div``;
const Image = styled.img`
  opacity: ${({ isActive }) => !isActive && "0"};
  transition: opacity 1s;
  position: absolute;
  width: 960px;
  height: 768px;
`;
const ButPrev = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
const ButNext = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export default Carousel;
