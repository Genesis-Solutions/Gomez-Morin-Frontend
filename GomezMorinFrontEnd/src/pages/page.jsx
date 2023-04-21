import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import InfoProfileCard from "../components/InfoProfileCard";

const Page = () => {
  return (
    <div>
      <div className="mx-14">
<<<<<<< HEAD
        <ProfileCard nombre="Andrés Magaña Pérez"/>
      </div>
      <br/>
      <Button className="w-full px-3 py-2 rounded-xl bg-gray-blue hover:text-white hover:bg-gray">Prueba</Button>
      <br/>
      <div>
        <Footer/>
=======
        <br/>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div class="col-span-1">
            <ProfileCard nombre="Andrés Magaña Pérez"/>
          </div>
          <div class="col-span-2 ">
            <InfoProfileCard/>
          </div>
        </div>
        
        <br/>
        <p className="text-base">Prueba texto base</p>
        <br/>
        
>>>>>>> dcb0561485fbadf060ea4cfe7d65eef9e27062a5
      </div>
      <Footer/>
    </div>
  );
};

export default Page;