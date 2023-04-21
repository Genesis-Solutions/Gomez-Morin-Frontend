import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import InfoProfileCard from "../components/InfoProfileCard";

const Page = () => {
  return (
    <div>
      <div className="mx-14">
        <br/>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div class="col-span-1">
            <ProfileCard nombre="Andrés Magaña Pérez"/>
          </div>
          <div class="col-span-2">
            <InfoProfileCard/>
          </div>
        </div>
        
        <br></br>
        <div className="w-full">
          <ProfileCard nombre="Andrés Magaña Pérez"/>
        </div>
        <br/>
        <p className="text-base">Prueba texto base</p>
        <br/>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Page;