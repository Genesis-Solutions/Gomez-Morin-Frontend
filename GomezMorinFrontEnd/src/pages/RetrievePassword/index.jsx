import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import IconTitle from "../../components/IconTitle";
import TextButton from "../../components/TextButton";
import hexagono from "../../../public/images/hexagono.png";
import { useForm, FormProvider } from "react-hook-form";
import { useLoginUser } from "../../queries/queryAuth";
import { useNavigate } from "react-router-dom";

const RetrievePass = () => {
  const methods = useForm();

  return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
      <div className=" h-full  mx-14 mt-4">
        <div className=" flex lg:justify-start md:justify-center sm:justify-start lg:ml-32 ml-32 md:ml-5 mt-8">
          <IconTitle image={hexagono} headerText="Recuperar Contraseña" />
        </div>
        <FormProvider {...methods}>
          <form
            className="w-full max-w-md mx-auto"
          >
            <div className="mt-2">
              <InputForm
                label="Usuario"
                name="userName"
                type="text"
                placeholder="Ingresa tu usuario"
                defaultValue=""
              />
            </div>

            <div className="mt-6">
              <InputForm
                label="Correo"
                name="email"
                type="text"
                placeholder="Ingresa tu correo"
                defaultValue=""
              />
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-full max-w-xs">
                <Button
                  text="Enviar correo"
                  type="submit"
                  colorBg="bg-light-blue-500"
                  colorHoverBg="hover:bg-light-blue-600"
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="lg:flex-1 lg:bg-login lg:bg-cover lg:bg-center lg:bg-no-repeat lg:h-screen"></div>
    </div>
    
  );
};

export default RetrievePass;