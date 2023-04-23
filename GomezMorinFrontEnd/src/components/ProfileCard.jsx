import React from "react";

/**
* This component creates a profile card that displays a user's name and profile picture.
* @param {string} nombre - The user's name, passed as a prop to the component.
* @param {string} sourceImage - The source of the user's profile picture, passed as a prop to the component.
*
* @returns {JSX.Element} - Returns a JSX element that displays the user's name and profile picture in a card format.
*/
const ProfileCard = ({ nombre, sourceImage }) => {
  return (
    <div className="w-full rounded-lg bg-gray drop-shadow-md">
      <div className="flex flex-col items-center">
        <div className="p-2 mt-4 mx-3">
          <img className="object-scale-down h-12" src={sourceImage} />
        </div>
        <div className="p-2 mx-3">
          <p className="text-xl font-Gobold font-bold">Mi Perfil</p>
        </div>
        <div className="p-2 mb-4 mx-3 font-Gobold">{nombre}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
