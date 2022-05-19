import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-ID": "WNxdKaVV8EYBvyoTLARt",
    "X-Naver-Client-Secret": "8bhfLwZHPy",
  },
});

export const getMovies = async (params) => {
  const config = {
    method: "GET",
    url: "/v1/search/movie.json",
    params: params,
  };
  const result = await instance(config);
  // result.data.items 가 객체로 들어옴.
  return result.data;
};

export const getBooks = async (params) => {
  const config = {
    method: "GET",
    url: "/v1/search/book.json",
    params: params,
  };
  const result = await instance(config);
  // result.data.items 가 객체로 들어옴.
  return result.data;
};

//instance 동일한  아이디나 비번을 쓰면 instance를 만들어서 사용하면 공유가 가능하다.
// 폭 넓게 쓸 수 있다.
