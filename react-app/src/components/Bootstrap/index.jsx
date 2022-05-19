import Accodion from "./Accodion";
import { accordionData } from "../../datas/bootstrap";
import { CarouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import ModalName from "./ModalName";
import { useState } from "react";

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [name, setName] = useState("홍길동");

  return (
    <>
      <Accodion data={accordionData} isActive={true} />
      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      <div>{isShowDropdown && <Dropdown />}</div>
      <Carousel data={CarouselData} />

      <button onClick={() => setIsShowModalName(true)}>이름 바꾸기</button>
      <h1>이름 : {name}</h1>
      {isShowModalName && (
        <ModalName
          name={name}
          onClose={() => setIsShowModalName(false)}
          onSubmit={(val) => setName(val)}
        />
      )}
    </>
  );
};

export default Bootstrap;
