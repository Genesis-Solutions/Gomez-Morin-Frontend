import React from "react";

/**
 * This is a component for a button.
 * @param {string} text - The text the button will display.
 * @param {string} type - The type of the button.
 * @param {string} colorBg - The color of the background of the button.
 * @param {string} colorHoverBg- The color of the background of the button when hover.
 * @param {onclick action} onClick - The action the onclick button will do.
 */
const Button = ({ text, type, colorBg, colorHoverBg, onClick }) => {
  console.log(colorBg);
  return (
    <button
      className={`w-full bg-${colorBg} text-white text-sm p-2 rounded-lg hover:bg-${colorHoverBg}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
