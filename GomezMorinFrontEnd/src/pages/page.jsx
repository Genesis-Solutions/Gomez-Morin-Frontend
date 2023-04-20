import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div>
      <div className="w-full h-full grid grid-cols-2 grid-rows-auto justify-between pt-10">
        <h1>Hola prueba</h1>
      </div>
      <br/>
      <div className="bottom-0">
        <Footer/>
      </div>
    </div>
  );
};

export default Page;