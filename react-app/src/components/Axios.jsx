import { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // IIFE  즉시 실행함수. ()괄호로 감싸면 즉시실행 함수가 실행된다. 익명함수로 실행가능.
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    })();
  }, []);

  const onClick = () => {};
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default Axios;
