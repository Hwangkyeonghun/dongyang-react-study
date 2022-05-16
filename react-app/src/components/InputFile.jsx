import { useRef } from "react";

const InputFile = () => {
  const fileEl = useRef(null);

  return (
    <>
      <button onClick={() => fileEl.current.click()}>업로드</button>
      <input type="file" style={{ display: "none" }} ref={fileEl} />
    </>
  );
};

export default InputFile;

//값이 변하는데 랜더링과 상관 없을 떄
