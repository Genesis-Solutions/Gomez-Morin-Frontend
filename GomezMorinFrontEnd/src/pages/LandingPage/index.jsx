import React from "react";
import Header from "../../components/Header.jsx";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import Carousel1 from "../../../public/images/image_carousel_1.jpg";
import Carousel2 from "../../../public/images/image_carousel_2.jpeg";
import Carousel3 from "../../../public/images/image_carousel_3.jpg";
import Carousel4 from "../../../public/images/image_carousel_4.jpg";
import Carousel5 from "../../../public/images/image_carousel_5.png";
//import guideLinesPdf from "../../assets/Lineamientos de uso y disfrute.pdf";

const LandingPage = () => {
  const arrImg = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];
  return (
    <div className="">
      <div>
        <ImageCarousel
          title="Centro Educativo y Cultural del Estado de Querétaro"
          images={arrImg}
          height={10}
        />
      </div>
      <div className="flex flex-col w-full px-14">
        {/*<div className="py-10">
          <Header tittle="Lineamientos" />
        </div>
        <iframe src={guideLinesPdf} width="100%" height={"100%"} /> */}
        <div className="mt-6 pb-6 md:pb-16">
          <Header tittle="Conócenos" />
        </div>
        <div className="flex-1 h-full items-center mb-20">
          {/* Esta imagen en despliegue no se visualiza por la falta de dominio
          <div className="col-span-1 place-self-center">
            <a href="http://gomezmorin.queretaro.gob.mx/">
              <img
                className="object-contain h-48 w-96"
                src="../../../public/images/hexagono_cuadrado_LP.png"
              />
            </a>
          </div>*/}
          <div className="flex justify-center items-center">
            <iframe
              className="w-full md:w-3/4 lg:w-1/2  h-56 md:h-96"
              src="https://www.youtube.com/embed/gtyzXECIwnc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              autoplay
            />
          </div>
        </div>
        <div className="pb-16">
          <Header tittle="Galería de fotos" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12 mb-12">
          <div className="col-span-1 place-self-center">
            <img
              className="object-cover h-48 w-96 shadow-xl rounded-lg"
              src={Carousel1}
            />
          </div>
          <div className="col-span-1 place-self-center">
            <img
              className="object-cover h-48 w-96 shadow-xl rounded-lg"
              src={Carousel2}
            />
          </div>
          <div className="col-span-1 place-self-center">
            <img
              className="object-cover h-48 w-96 shadow-xl rounded-lg"
              src={Carousel3}
            />
          </div>
          <div className="col-span-1 place-self-center">
            <img
              className="object-cover h-48 w-96 shadow-xl rounded-lg"
              src={Carousel4}
            />
          </div>
          <div className="col-span-1 place-self-center">
            <img
              className="object-cover h-48 w-96 shadow-xl rounded-lg"
              src={Carousel5}
            />
          </div>
          <div className="col-span-1 place-self-center">
            <img
              className="object-cover h-48 w-96 shadow-xl rounded-lg"
              src={Carousel1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
