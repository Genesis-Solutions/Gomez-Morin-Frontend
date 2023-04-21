import React from 'react';
import CardImage from "./CardImage";

/**
 * This component renders a gallery card containing three CardImage components.
 * @param {string} icon1 - The url of the first image.
 * @param {string} icon2 - The url of the second image.
 * @param {string} icon3 - The url of the third image.
 * @returns {JSX.Element} - The GalleryCard component JSX element.
 */
const GalleryCard = ({icon1, icon2, icon3}) => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 gap-4 mt-10 mb-10 ml-10 mr-10">
        <div className="mr-8">
          <CardImage icon={icon1} /> {/* Rendering the first CardImage component */}
        </div>
        <div className="mr-8">
          <CardImage icon={icon2} /> {/* Rendering the second CardImage component */}
        </div>
        <div className="mr-8">
          <CardImage icon={icon3} /> {/* Rendering the third CardImage component */}
        </div>
      </div>
    </div>
  )
}

export default GalleryCard; // Exporting GalleryCard component as the default export.

