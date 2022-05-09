import MyComponent from "./MyComponent";
const Parents = () => {
  const name = "nodejs";
  return (
    <div>
      Parent
      <MyComponent name="리액트" name2={name} />
      <MyComponent name="뷰">
        <h1>안녕하세요!</h1>
      </MyComponent>
      <MyComponent name="앵귤러" />
    </div>
  );
};
export default Parents;
