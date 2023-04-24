import React, { useEffect, useRef, useState } from "react";

/**
 * This component renders a header section with an icon and a title.
 * @param {string} image - The icon image url.
 * @param {string} headerText - The text content for the header.
 * @returns {JSX.Element} - The IconTitle component JSX element.
 */
function IconTitle({ image, headerText }) {
  const headerRef = useRef(null); // Creating a ref object to reference the header element
  const [maxWidth, setMaxWidth] = useState(""); // Defining maxWidth state variable with initial value of ""

  useEffect(() => {
    if (headerRef.current) {
      // Checking if headerRef is defined and not null
      const headerWidth = headerRef.current.offsetWidth; // Getting the header element width
      setMaxWidth(`max-w-${Math.floor(headerWidth / 2)}`); // Calculating and setting the max width for the icon element
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center w-1/4 h-1/4 mt-4 mb-4">
      <div className={`lg:w-1/2 mr-4 ${maxWidth}`}>
        <img
          src={image}
          className="w-full object-contain order-last lg:order-first "
        />{" "}
        {/* Rendering the icon image */}
      </div>
      <div className="lg:w-1/2" ref={headerRef}>
        <h1 className="text-3xl whitespace-nowrap text-center">{headerText}</h1>{" "}
        {/* Rendering the header text */}
      </div>
    </div>
  );
}

export default IconTitle; // Exporting IconTitle component as the default export.
