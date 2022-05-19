import { useState, useEffect } from "react";
import { getMovies } from "../../apis";
import MovieList from "../templates/Movie/List";
import SearchForm from "../templates/Movie/SearchForm";

const Movie = () => {
  const [params, setParams] = useState({
    query: "",
    country: "ALL",
  });
  const { query, country } = params;
  const [items, setItems] = useState([]);

  useEffect(() => {
    refreshList();
  }, [country, query]);
  //pending 되어 있기 때문에 async로 만든 함수는 무조건 async로 받야왿ㅁ

  const refreshList = async (e) => {
    if (!query) return;
    const params = {
      query: query,
    };
    if (country !== "ALL") {
      params.country = country;
    }
    const { items } = await getMovies(params);
    setItems(items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>영화</h1>
      <SearchForm onChange={handleChange} />
      <MovieList data={items} />
    </>
  );
};

export default Movie;

//<Title dangerouslySetInnerHTML={{ __html: title }} />
// 예를들어 `<div onclick="alert("해킹")">안녕하세요^^</div>` 변경해서

// 예를 들어 네이버에서 검색한 내용을 다음에서 보거나 할수 있는건 그 도메인에 검색 api를 받아서 붙여넣기를 한 것이다.
