import React from "react";

/**
 * A React component that displays the footer of a webpage. It includes the Gomez Morin logo,
 * phone number, and address. The component is fixed at the bottom of the page.
 *
 * @return {JSX.Element} The JSX code that displays the footer.
 */
const Footer = () => {
  return (
    <div className="sticky -bottom-1/2 w-full h-16 bg-gray-blue-500 drop-shadow-lg">
      <div className="flex justify-between items-center">
        <div className="px-4 pt-2">
          <img
            className="object-scale-down h-12"
            src="/images/gomez_morin_blanco.png"
          />
        </div>
        <div className="px-3 pt-2 text-white">
          <p className="text-[#ffffff]">(442) 251 9600 Ext. 9613</p>
        </div>
        <div className="px-3 pt-2">
          <p className="text-white">
            Av. Constituyentes Esq. Luis Pasteur S/N Col. Villa del Sur,
            C.P.76000. Santiago de Querétaro.
          </p>
        </div>
        <div className="px-4 pt-2">
          <img
            className="object-scale-down h-12"
            src="/images/gomez_morin_blanco.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
