import React from "react";

/**
 * Componente para mostrar el encabezado de la página.
 * 
 * @param {string} tittle - Título del encabezado.
 * @returns {JSX.Element} Elemento JSX que representa el encabezado.
 */
const Header = ({ tittle }) => {
  return (
    <div className="text-center w-full">
      <h1 className="Gobold text-black text-6xl ">{tittle}</h1>
    </div>
  );
};

export default Header;
