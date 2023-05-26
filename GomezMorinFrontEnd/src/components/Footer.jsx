import React from "react";

/**
 * A React component that displays the footer of a webpage. It includes the Gomez Morin logo,
 * phone number, and address. The component is fixed at the bottom of the page.
 *
 * @return {JSX.Element} The JSX code that displays the footer.
 */
const Footer = () => {
  return (
    <div className="flex w-full h-16 justify-between items-center bg-gray-blue-500 drop-shadow-lg">
      <div className="px-4 md:pt-2">
        <img
          className="object-scale-down h-12 md:h-12"
          src="/images/gomez_morin_blanco.png"
        />
      </div>
      <div className="md:px-3 md:pt-2 text-white">
        <p className="text-[#ffffff] text-xs md:text-lg">(442) 251 9600 Ext. 9613</p>
      </div>
      <div className="px-3 pt-2">
        <p className="text-white text-xs md:text-lg">
          Av. Constituyentes Esq. Luis Pasteur S/N Col. Villa del Sur,
          C.P.76000. Santiago de Querétaro.
        </p>
      </div>
      <div className=" hidden md:px-4 md:pt-2">
        <img
          className="object-scale-down h-12"
          src="/images/gomez_morin_blanco.png"
        />
      </div>
    </div>
  );
};

export default Footer;
