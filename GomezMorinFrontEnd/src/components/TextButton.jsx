import React from 'react';

/**
 * A button that renders a link to a specified URL.
 * @param {string} text - The text to display on the button.
 * @param {string} link - The URL to navigate to when the button is clicked.
 * @returns {JSX.Element} - A link with the specified text and URL.
 */
const TextButton = ({ text, link }) => {
  return (
    <a href={link}>
      {text}
    </a>
  );
};

export default TextButton;
