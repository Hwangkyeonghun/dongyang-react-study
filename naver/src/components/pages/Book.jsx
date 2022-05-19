import { useState, useEffect } from "react";

import BookList from "../templates/Book/List";
import BookSearchForm from "../templates/Book/SearchForm";

const Book = () => {
  // const [params, setPrams] = useState({});
  // const { query } = params;

  return (
    <>
      <h1>책</h1>
      <BookSearchForm />
      <BookList />
    </>
  );
};

export default Book;
