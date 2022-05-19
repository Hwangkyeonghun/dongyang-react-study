import styled from "styled-components";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const linkList = [
  {
    link: "/",
    name: "메인",
  },
  {
    link: "/movie",
    name: "영화",
  },
  {
    link: "/book",
    name: "책",
  },
];

const TopNav = () => {
  //   const { pathname } = useLocation();
  //   const [isShow, setIsShow] = useState(true);
  //   useEffect(() => {
  //     const isMain = pathname === "/";
  //     setIsShow(!isMain);
  //   }, [pathname]);

  //   if (!isShow) return <></>;

  return (
    <>
      <Container>
        <Nav>
          {linkList.map(({ link, name }) => (
            <Link key={link} to={link}>
              <BtnLink>{name}</BtnLink>
            </Link>
          ))}
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #ddd;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const BtnLink = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
`;
// NavLink를 상속받아 Link를 한다.
// &.자기자신이 active를 가지고 있을 때 &.띄워쓰기 하면 자식요소로 바뀐다.
const Link = styled(NavLink)`
  &.active {
    ${BtnLink} {
      background: black;
      color: white;
    }
  }
`;

export default TopNav;
