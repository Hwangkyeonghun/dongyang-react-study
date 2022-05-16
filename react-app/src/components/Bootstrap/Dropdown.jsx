import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
//버튼 누를때 마다 메뉴 토글 (나왔다 안나왔다.) 1.조건부 렌더링 2.display: none  3.UseState : isShow 선언

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const buttonel = useRef(null);

  useEffect(() => {
    const onClcik = (e) => {
      //클린하게 버튼이 아닐때 false 로 만들기
      //   console.log("target" + e.target);
      //   console.log("button" + buttonel.current);
      if (e.target !== buttonel.current) {
        setIsShow(false);
      }

      console.log("click");
    };
    document.body.addEventListener("click", onClcik);
    // body의 이벤트리스너를 추가했을때 return에 onClick 을 붙여서 remove 해준다. cleanup 함수 return 문 안에 넣어주면 마운트가 끝날때 실행이 된다. 랜더링후 맨마지막에 remove해서 리스너를 1개만 만들어준다.

    // 클린업 함수는 update 가 끝나고 unmount 되기 직전에 실행이 된다.
    // 페이지를 종료할때 cont를 세고 넘기면 각 화면마다 방문횟수를 알아낼 수 있다.
    return () => {
      document.body.removeEventListener("click", onClcik);
    };
  }, []);

  return (
    <Container>
      <Button ref={buttonel} onClick={() => setIsShow(!isShow)}>
        dropdown
      </Button>
      {isShow && (
        <Menu>
          <Item>item #1</Item>
          <Item>item #2</Item>
          <Item>item #3</Item>
          <Item>item #4</Item>
        </Menu>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px;

  cursor: pointer;
`;
const Menu = styled.ul`
  /* display: ${({ isShow }) => !isShow && "none"}; isShow={isShow} */
  top: 45px;
  background: white;
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 120px;
`;
const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background-color: #9e7979;
  }
`;

export default Dropdown;
