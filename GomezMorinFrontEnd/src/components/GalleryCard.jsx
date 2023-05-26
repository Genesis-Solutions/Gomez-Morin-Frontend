import React from "react";
import CardImage from "./CardImage";

/**
 * This is a React component that represents a gallery card with multiple images/icons.
 * It renders a div element with a set of CardImage components, each displaying an icon.
 * @param {Array} icons - An array of icons to be displayed in the gallery card.
 * @returns {JSX.Element} A JSX element representing the gallery card.
 */

const GalleryCard = ({ icons }) => {
  /**
   * Renders a set of CardImage components with the given icons.
   * @returns {JSX.Element} A JSX element representing the CardImage components with the given icons.
   */
  const renderCardImages = () => {
    return icons.map((icon) => (
      <div className="mr-3 ml-3 self-center" key={icon}>
        <CardImage icon={icon} />
      </div>
    ));
  };

  return (
    <div className="w-full h-full">
      <div className="mx-14 flex justify-items-center">
        {renderCardImages()}
      </div>
    </div>
  );
};

export default GalleryCard;

