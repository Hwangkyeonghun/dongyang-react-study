import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <h1>영화&책 검색</h1>
      <Layout>
        <Link to="/movie">
          <BtnLink>영화</BtnLink>
        </Link>
        <Link to="/book">
          <BtnLink>책</BtnLink>
        </Link>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnLink = styled.button`
  width: 300px;
  height: 120px;
  font-size: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
`;

export default Main;
