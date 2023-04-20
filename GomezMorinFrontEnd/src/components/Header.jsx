import React from "react";

const Header = ({tittle}) => {
  return (
    <div className="text-center w-full">   
        <h1 className="Gobold text-black text-6xl ">{tittle}</h1>
    </div>
  );
};

export default Header;