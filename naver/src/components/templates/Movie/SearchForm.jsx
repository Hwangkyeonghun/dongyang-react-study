import styled from "styled-components";
import { useEffect, useState } from "react";
import { countryList } from "../../../datas";
const SearchForm = ({ onChange }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: text });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <select
        onChange={(e) => onChange({ name: "country", value: e.target.value })}
      >
        <option value="ALL">전체</option>
        {countryList.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <InputText onChange={(e) => setText(e.target.value)} />
      <BtnSubmit>검색</BtnSubmit>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  padding: 20px;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button`
  margin-left: 10px;
`;
export default SearchForm;
