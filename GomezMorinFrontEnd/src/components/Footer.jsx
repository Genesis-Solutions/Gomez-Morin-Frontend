import React from "react";

/**
 * A React component that displays the footer of a webpage. It includes the Gomez Morin logo,
 * phone number, and address. The component is fixed at the bottom of the page.
 *
 * @return {JSX.Element} The JSX code that displays the footer.
 */
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:flex justify-items-center w-full h-auto text-center bg-gray-blue-500 drop-shadow-lg">
      <div className="px-4 pt-2 justify-self-auto">
        <img
          className="object-scale-down h-12 md:h-12"
          src="/images/gomez_morin_blanco.png"
        />
      </div>
      <div className="px-3 pt-2 text-white">
        <p className="text-[#ffffff] text-xs md:text-base">(442) 251 9600 Ext. 9613</p>
      </div>
      <div className="px-3 pt-2">
        <p className="text-white text-xs md:text-base">
          Av. Constituyentes Esq. Luis Pasteur S/N Col. Villa del Sur,
          C.P.76000. Santiago de Querétaro.
        </p>
      </div>
      <div className="text-xs md:text-base italic text-white py-3">
        <p>"Este programa es público, ajeno a cualquier partido político. Queda prohibido el uso para ﬁnes distintos a los establecidos en el programa"</p>
      </div>
      <div className="px-4 pt-2">
        <img
          className="object-scale-down h-12"
          src="/images/Contigo.png"
        />
      </div>
    </div>
  );
};

export default Footer;
