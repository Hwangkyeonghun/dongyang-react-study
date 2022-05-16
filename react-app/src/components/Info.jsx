import useInputs from "../hooks/useInputs";
//훅의 기능을 분리해 놓은게 커스텀 훅이다..  훅은 기본적으로 이름이 use로 시작한다.
const Info = () => {
  const [state, onChange] = useInputs({ name: "", nickName: "" });
  const { name, nickName } = state;
  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");
  // useEffect(() => {
  //   console.log("mount");
  //   console.log({ name, nickName });
  //   // 해당하는 랜더링이 종료 직전에 실행된다.   remove 리스너할때 쓰인다.
  //   return () => {
  //     console.log("unmount");
  //     console.log(name);
  //   };
  // }, []);

  return (
    <>
      <div>
        <input name="name" type="text" onChange={onChange} value={name} />
        <input
          name="nickName"
          type="text"
          onChange={onChange}
          value={nickName}
        />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName}</h1>
    </>
  );
};

export default Info;

//정형화된 상태를 관리하는 function reducer(state, action) { }

// useCallback 은  랜더링 될때마다 선언 하는 것을 막아준다. usecallback ((e)=>{
// },[list,number ]); <- 바뀌는 함수 callback 함수에 의존성 list, number를 넣어준다.

//const avg = useMemo(()=> getAverage(list),[list]) <- 유즈메모도 list가 변경이 있을 때만 Average가 작동한다.

// e.target 과 current 는  DOM요소이다.
