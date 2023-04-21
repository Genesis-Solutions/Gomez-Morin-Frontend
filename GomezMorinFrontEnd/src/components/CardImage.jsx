import React from 'react';

/**
 * This component renders an image inside a card element.
 * @param {string} icon - The icon image url.
 * @returns {JSX.Element} - The CardImage component JSX element.
 */
const CardImage = ({icon}) => {
  return (
    <div>
      <img className="w-full h-full" src={icon} /> {/* Rendering the icon image */}
    </div>
  )
}

export default CardImage; // Exporting CardImage component as the default export.