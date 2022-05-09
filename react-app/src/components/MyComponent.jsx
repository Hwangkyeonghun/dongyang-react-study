const MyComponent = ({ name, name2, children }) => {
  return (
    <div>
      {children}
      안녕하세요, 제 이름은 {name}입니다..{name2}
      {children}
    </div>
  );
};
export default MyComponent;
