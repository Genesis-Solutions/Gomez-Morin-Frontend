import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

const Page = () => {
  return (
    <div>
      <div className="w-full h-full grid grid-cols-2 grid-rows-auto justify-between pt-10 mx-14">
        <h1>Hola prueba</h1>
      </div>
      <br/>
      <div className="w-64 mx-14">
        <ProfileCard nombre="Andrés Magaña Pérez"/>
      </div>
      <br></br>
      <div className="mx-14">
        <ProfileCard nombre="Andrés Magaña Pérez"/>
      </div>
      <br/>
      <Button className="w-full px-3 py-2 rounded-xl bg-gray-blue hover:text-white hover:bg-gray">Prueba</Button>
      <br/>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;