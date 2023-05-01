import React from "react";
import { useSelector } from "react-redux";

const ButtonOptionForm = ({ text, active }) => {
  const activeClass = "bg-light-blue-400 text-white "

  return (
    <div
      className={`${active ? activeClass : undefined } bg-white border shadow-lg border-gray-50 flex flex-grow items-center font-bold justify-center`}
    >
      {text}
    </div>
  );
};

export default ButtonOptionForm;
