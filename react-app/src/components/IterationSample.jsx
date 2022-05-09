const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람", "눈"];

  return (
    <>
      {/* <ul>{[<li>눈사람</li>, <li>얼음</li>, <li>눈</li>, <li>바람</li>]}</ul> */}
      <ul>
        {/* map 함수의 첫번째 인자는 val  두번째 인자는 index  */}
        {names.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
