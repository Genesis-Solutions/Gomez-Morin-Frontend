import React from "react";

/**
 * This is a component for a button.
 *
 * @param {string} text - The text the button will display.
 * @param {string} type - The type of the button.
 * @param {string} colorBg - The color of the background of the button. Example: bg-red-600
 * @param {string} colorHoverBg- The color of the background of the button when hover. Example: hover:bg-red-700
 * @param {function} action- The path that will navigate to.
 * @param {boolean} disabled - Boolean to enable/disable the button
 * @returns {JSX.Element} The JSX element displaying a button.
 */

const Button = ({ text, type, colorBg, colorHoverBg, action, disabled = false }) => {
  const styles = [
    "w-full",
    colorBg,
    "text-white",
    "text-sm",
    "p-2",
    "rounded-lg",
    `hover:${colorHoverBg}`,
  ];

  return (
    <button className={styles.join(" ")} type={type} onClick={action} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
