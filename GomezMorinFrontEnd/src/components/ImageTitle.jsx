import React from "react";

/**
 * A component that displays an image with a title overlay.
 *
 * @param {string} image - The URL of the image to display.
 * @param {string} title - The title to display on top of the image.
 * @returns {JSX.Element} - The ImageTitle component.
 */
const ImageTitle = ({ image, title }) => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <img
        className="object-cover brightness-50 w-full h-full opacity-40"
        src={image}
        alt={``}
      />
      <h2 className="absolute text-4xl text-gray-blue-600 font-gobold">{title}</h2>
    </div>
  );
};

export default ImageTitle;

//
