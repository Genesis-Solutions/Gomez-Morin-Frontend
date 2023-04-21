import React from "react";

const ProfileCard = ({ nombre }) => {
  return (
    <div className="w-full rounded-lg bg-gray drop-shadow-md">
        <div className="flex flex-col items-center">
            <div className="p-2 mt-4 mx-3"><img className="object-scale-down h-12" src="/img/hexagono.png"/></div>
            <div className="p-2 mx-3"><p className="text-xl font-Gobold font-bold">Mi Perfil</p></div>
            <div className="p-2 mb-4 mx-3 font-Gobold">{nombre}</div>
        </div>
    </div> 
  );
};

export default ProfileCard;