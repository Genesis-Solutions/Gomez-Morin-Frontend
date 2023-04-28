import React from "react";

/**
 * A button that renders a link to a specified URL.
 * @param {string} text - The text to display on the button.
 * @param {string} link - The URL to navigate to when the button is clicked.
 * @returns {JSX.Element} - A link with the specified text and URL.
 */
const TextButton = ({ text, path }) => {
  return (
    <a class="underline mx-14 text-lg text-gray-400" href={ path }>
      { text }
    </a>
  );
};

export default TextButton;
