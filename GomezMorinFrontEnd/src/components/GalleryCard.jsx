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
    <div className="w-full h-full ">
      <div className="grid grid-cols-3  mx-14 flex justify-items-center ">
        <div className=" mr-3 ml-3 self-center">
          <CardImage icon={icon1} /> {/* Rendering the first CardImage component */}
        </div>
        <div className=" mr-3 ml-3 self-center">
          <CardImage icon={icon2} /> {/* Rendering the second CardImage component */}
        </div>
        <div className=" mr-3 ml-3 self-center">
          <CardImage icon={icon3} /> {/* Rendering the third CardImage component */}
        </div>
      </div>
    </div>
  )
}

export default GalleryCard; // Exporting GalleryCard component as the default export.

