import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * This is a component for a button.
 * @param {string} text - The text the button will display.
 * @param {string} type - The type of the button.
 * @param {string} colorBg - The color of the background of the button. Example: bg-red-600
 * @param {string} colorHoverBg- The color of the background of the button when hover. Example: hover:bg-red-700
 * @param {string} navigation- The path that will navigate to.
 */
const Button = ({ text, type, colorBg, colorHoverBg, action}) => {
  const styles = [
    "w-full",
    colorBg,
    "text-white",
    "text-sm",
    "p-2",
    "rounded-lg",
    colorHoverBg,
  ];

//   const navigate = useNavigate();


  return (
    <button className={styles.join(" ")} type={type} onClick={action}>
      {text}
    </button>
  );
};

export default Button;