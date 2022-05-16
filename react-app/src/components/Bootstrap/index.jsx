import Accodion from "./Accodion";
import { accordionData } from "../../datas/bootstrap";
import { CarouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import { useState } from "react";

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <>
      <Accodion data={accordionData} isActive={true} />
      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      <div>{isShowDropdown && <Dropdown />}</div>
      <Carousel data={CarouselData} />
    </>
  );
};

export default Bootstrap;
