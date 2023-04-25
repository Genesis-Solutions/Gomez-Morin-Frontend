import { Height } from "@mui/icons-material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 * A component for displaying a carousel of images.
 *
 * @param {string} title - The title of the carousel.
 * @param {string[]} images - An array of image URLs to display in the carousel.
 * @param {number} height - The height of the carousel in rem units.
 * @returns {JSX.Element} - The ImageCarousel component.
 */
const ImageCarousel = ({ title, images, height }) => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <div style={{ width: "100%", height: `${height}rem` }}>
            <img
              key={index}
              className="brightness-50 object-cover object-center w-full h-full"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Carousel>
      <h2 className="absolute font-bold text-white text-3xl">{title}</h2>
        
    </div>
  );
};

export default ImageCarousel;
