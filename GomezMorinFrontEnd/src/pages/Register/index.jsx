import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import CheckBoxInput from "../../components/CheckBoxInput";
import Button from "../../components/Button";
import IconTitle from "../../components/IconTitle";
import hexagono from "../../../public/images/hexagono.png";
import { useForm, FormProvider } from "react-hook-form";
import { postUser } from "../../queries/queryAuth.js";
import { useNavigate } from "react-router-dom";

/**
 * The Register component is a user registration form that allows users to create a new account.
 *
 * @returns {JSX.Element} The JSX code that renders the Register component.
 */
const Register = () => {
  const methods = useForm();
  const errors = methods.formState.errors;
  const [passwordValidator, setPasswordValidator] = useState(false);
  const [emailValidator, setEmailValidator] = useState(false);
  const navigate = useNavigate();

  /**
   * Handles form submission for user registration.
   *
   * @async
   * @param {Object} data - The data submitted through the form.
   * @returns {Promise} A promise that resolves with the response from the server.
   */
  const onSubmitUser = async (data) => {
    if (data.passwordRegister !== data.password2Register) {
      setPasswordValidator(true);
      return;
    } else {
      setPasswordValidator(false);
    }
    if (data.mailRegister !== data.mailRegister2) {
      setEmailValidator(true);
      return;
    } else {
      setEmailValidator(false);
    }
    try {
      await postUser(data);
      navigate("/login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb-6">
      <div className="h-full grid grid-rows-7 mx-14 mt-4">
        <div className="flex justify-center ">
          <IconTitle image={hexagono} headerText="Registrarse" />
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitUser)}>
            <div>
              <CheckBoxInput
                label="Soy persona moral"
                name="isMoralRegister"
                subLabel="Este campo implica que eres una institución afiliada con Goméz Morín"
              />
            </div>
            <div className="mt-2">
              <InputForm
                label="Usuario"
                name="userRegister"
                type="text"
                placeholder="Ingresa tu Usuario"
                defaultValue=""
              />
            </div>
            <div className=" mt-2">
              <InputForm
                label="Correo"
                name="mailRegister"
                type="email"
                placeholder="Ingresa tu Correo"
                defaultValue=""
                pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
              />
              <p className="text-sm italic font-thin thin mb-2 text-gray-500">
                Asegúrate de tener acceso al correo que registres, la
                comunicación será por este medio.
              </p>
              {errors.mailRegister && (
                <p className="text-red-500">
                  El correo debe tener un formato válido
                </p>
              )}
            </div>
            <div className=" mt-2">
              <InputForm
                label="Confirmar correo"
                name="mailRegister2"
                type="email"
                placeholder="Ingresa tu Correo"
                defaultValue=""
                pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
              />
            </div>
            <div className=" mt-2">
              <InputForm
                label="Contraseña"
                name="passwordRegister"
                type="password"
                placeholder="Ingresa tu Contraseña"
                defaultValue=""
                pattern={
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&()_+}{"':;?\/>.<,|=-]).{8,15}$/
                }
              />
              {errors.passwordRegister && (
                <p className="text-red-500">
                  La contraseña debe tener al menos 8 caracteres, una mayúscula,
                  una minúscula, un número y un caracter especial
                </p>
              )}
            </div>
            <div className=" mt-2">
              <InputForm
                label="Confirmar contraseña"
                name="password2Register"
                type="password"
                placeholder="Ingresa tu Contraseña"
                defaultValue=""
              />
            </div>
            {passwordValidator && (
              <div className="w-full bg-red-400 drop-shadow-md mt-7 rounded-lg flex flex-col items-center">
                <p className="text-gray-500 py-2">¡Contraseñas no coinciden!</p>
              </div>
            )}
            {emailValidator && (
              <div className="w-full bg-red-400 drop-shadow-md mt-7 rounded-lg flex flex-col items-center">
                <p className="text-gray-500 py-2">
                  ¡Los correos no coinciden!
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <div className="w-1/2 mt-6">
                <Button
                  text="Registrar"
                  type="submit"
                  colorBg="bg-green-primary"
                  colorHoverBg="hover:bg-green-600"
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

export default Register;
