import React from 'react';

/**
 * This component renders a container for a text element.
 * @param {string} text - The text content for the component.
 * @returns {JSX.Element} - The TextContainer component JSX element.
 */
const TextContainer = ({ text }) => {
  return (
    <div className="w-full h-full">
      <p className=" md:container md:mx-auto self-center ">
        { text }
      </p>
    </div>
  )
}

export default TextContainer; // Exporting TextContainer component as the default export.
