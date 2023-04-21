import { useState } from "react";
import IconTitle from "./IconTitle"
import TextContainer from "./TextContainer"


const DropdownText = ({ leftText, rightText, headerIcon, headerText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <button
        className="w-full text-black rounded-md focus:outline flex items-center justify-center"
        onClick={toggleDropdown}
      >
          <IconTitle image={headerIcon} headerText={headerText}/>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-white shadow-lg z-10">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-1/2 px-4 py-8 text-center "><TextContainer text={leftText}/></div>
            <div className="w-full lg:w-1/2 px-4 py-8 text-center"><TextContainer text={rightText}/></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownText;