import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 * A component that renders a carousel of images with a title.
 * @param {string} title - The title to display above the carousel.
 * @param {Array<string>} images - An array of image URLs to display in the carousel.
 * @returns {JSX.Element} - A React component that renders the image carousel.
 */
const ImageCarousel = ({ title, images }) => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {/* Map over the images array and render each image in a carousel slide */}
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="brightness-50 object-cover"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Carousel>
      {/* Render the title as an absolute element over the carousel */}
      <h2 className="absolute font-bold text-white text-3xl">{title}</h2>
        
    </div>
  );
};

export default ImageCarousel;
