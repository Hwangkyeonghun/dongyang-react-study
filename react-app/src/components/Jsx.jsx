const Jsx = () => {
  const name = "리액트";
  // ||  0, "",false ,null, undefined, NaN 다 걸림
  // ?? 는 undefined or null 일경우에만 걸림.

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div style={style}>{name}</div>

      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>

      {name === "리액트" ? (
        <h1>리액트가 맞습니다.</h1>
      ) : name === "뷰" ? (
        <h1>뷰입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}

      {name === "리액트" && <h1>리액트입니다.</h1>}

      {name || " 이름이 없습니다."}
      {name ?? " 이름이 없습니다."}
    </>
  );
};

export default Jsx;
//그냥 export 할때는 정확한 이름을 적어줘야 한다.
// const a = 1;
// export { a };
//import { a } from "./components/Jsx"이런식으로 가져와야 쓸수 있다.
