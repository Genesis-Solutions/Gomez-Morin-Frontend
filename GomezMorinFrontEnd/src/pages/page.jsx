import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import InfoProfileCard from "../components/InfoProfileCard";

const Page = () => {
  return (
    <div className="my-16">
      <div className="mx-14">
        <br/>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="col-span-1">
            <ProfileCard nombre="Andrés Magaña Pérez"/>
          </div>
          <div className="col-span-2 ">
            <InfoProfileCard/>
          </div>
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