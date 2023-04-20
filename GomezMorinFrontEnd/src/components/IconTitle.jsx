import React, { useEffect, useRef, useState } from "react";

function IconTitle({ image, altText, headerText }) {
  const headerRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState("");

  useEffect(() => {
    if (headerRef.current) {
      const headerWidth = headerRef.current.offsetWidth;
      setMaxWidth(`max-w-${Math.floor(headerWidth / 2)}`);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className={`lg:w-1/2 ${maxWidth}`}>
        <img src={image} alt={altText} className="w-full object-contain order-last lg:order-first" />
      </div>
      <div className="lg:w-1/2" ref={headerRef}>
        <h1 className=" text-4xl ">{headerText}</h1>
      </div>
    </div>
  );
}

export default IconTitle;