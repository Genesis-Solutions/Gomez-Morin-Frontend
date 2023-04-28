import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import IconTitle from "../../components/IconTitle";
import TextButton from "../../components/TextButton";
import hexagono from "../../../public/images/hexagono.png";
import { useForm, FormProvider } from "react-hook-form";
import { loginUser } from "../../queries/queryLogin.js";

/**
 *
 *A functional component that renders a login form with user input fields and validation.
 *
 *@returns {JSX.Element} The Login form UI with user input fields and validation.
 */

const Login = () => {
  const methods = useForm();
  const errors = methods.formState.errors;
  const [passwordValidator, setPasswordValidator] = useState(false);
  return (
    <div className="w-full h-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className=" h-full  mx-14 mt-4">
        <div className=" flex justify-start mt-8 ml-32">
          <IconTitle image={hexagono} headerText="Iniciar Sesión" />
        </div>
        <FormProvider {...methods}>
          <form className="w-full max-w-md mx-auto">
            <div className="mt-2">
              <InputForm
                label="Usuario"
                name="userRegister"
                type="text"
                placeholder="Ingresa tu Usuario"
                defaultValue=""
              />
            </div>

            <div className="mt-6">
              <InputForm
                label="Contraseña"
                name="passwordRegister"
                type="password"
                placeholder="Ingresa tu Contraseña"
                defaultValue=""
              />
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-full max-w-xs">
                <Button
                  text="Registrar"
                  type="submit"
                  colorBg="bg-light-blue-500"
                  colorHoverBg="hover:bg-light-blue-600"
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <div className="w-full max-w-xs flex justify-center">
                <TextButton text="Crear una Cuenta" path={"/register"} />
              </div>
            </div>

            
          </form>
        </FormProvider>
      </div>
      <div className="flex-1 bg-login bg-cover bg-center bg-no-repeat h-screen"></div>
    </div>
  );
};

export default Login;
