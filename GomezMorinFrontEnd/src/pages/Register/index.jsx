import react from "react";
import InputForm from "../../components/InputForm";
import CheckBoxInput from "../../components/CheckBoxInput";
import Button from "../../components/Button";
import IconTitle from "../../components/IconTitle";
import hexagono from "../../../public/images/hexagono.png";
import { useForm, FormProvider } from "react-hook-form";

const Register = () => {
  const methods = useForm();
  const reset = methods.reset;

  const onSubmitUser = async (data) => {
    const response = await postUser(data);
  };

  return (
    <div className="w-full h-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className=" h-full grid grid-rows-7 mx-14 mt-4">
        <div className="flex justify-center ">
          <IconTitle image={hexagono} headerText="Registrarse" />
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitUser)}>
            <div className="">
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
              />
            </div>
            <div className=" mt-2">
              <InputForm
                label="Contraseña"
                name="passwordRegister"
                type="password"
                placeholder="Ingresa tu Contraseña"
                defaultValue=""
              />
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
            <div className="flex justify-center mb-20">
              <div className="w-1/2 mt-6 ">
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
      <div className="flex-1 bg-login bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default Register;
