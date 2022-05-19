import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Book from "./components/pages/Book";
import Movie from "./components/pages/Movie";
import TopNav from "./components/organisms/TopNav";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 여기있는 path 들이 프로젝트의 maping을 해  root  랑 엮어준다 ccc_cc_201 이런 느낌 */}
        <Route path="/" element={<Main />} />
        <Route path="/" element={<TopNav />}>
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// https://brunch.co.kr/@ultra0034/63 아토믹 디자인
// pages 하나하나의 컴포넌트를 뜻한다.
// Templates 는 쪼개진거
// 재사용하는 컴포넌트를 크기 별로 나눈거 ATOMS -> MOLECULES -> ORGANISMS EX)  버튼 폼  인풋 등등..

// topNav에 url 값이 / 가 들어가면 영화랑 book이 안보이게

//pagination
//dynamicRoute
