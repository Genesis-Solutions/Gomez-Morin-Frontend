import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import IconTitle from "../../components/IconTitle";
import TextButton from "../../components/TextButton";
import hexagono from "../../../public/images/hexagono.png";
import { useForm, FormProvider } from "react-hook-form";
import { useLoginUser } from "../../queries/queryAuth";
import { useNavigate } from "react-router-dom";

/**
 *A functional component that renders a login form with user input fields and validation.
 *
 *@returns {JSX.Element} The Login form UI with user input fields and validation.
 */

const Login = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const login = useLoginUser();
  const [password, setPassword] = useState("");

  const onChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitUser = async (data) => {
    const newData = { userName: data.userName, password: password };
    try {
      await login(newData);
      navigate("/");
      // reload page
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
      <div className=" h-full  mx-14 mt-4">
        <div className=" flex lg:justify-start md:justify-center sm:justify-start lg:ml-32 ml-32 md:ml-5 mt-8">
          <IconTitle image={hexagono} headerText="Iniciar Sesión" />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmitUser)}
            className="w-full max-w-md mx-auto"
          >
            <div className="mt-2">
              <InputForm
                label="Usuario o correo"
                name="userName"
                type="text"
                placeholder="Ingresa tu usuario o correo"
                defaultValue=""
              />
            </div>

            <div className="mt-6">
              <InputForm
                label="Contraseña"
                name="password"
                type="password"
                onChange={onChangeHandler}
                placeholder="Ingresa tu contraseña"
                defaultValue=""
              />
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-full max-w-xs">
                <Button
                  text="Iniciar Sesión"
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
            <div className="flex justify-center mt-6">
              <div className="w-full max-w-xs flex justify-center">
                <TextButton
                  text="¿Olvidaste tu contraseña?"
                  path={"/retrievepass"}
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

export default Login;
