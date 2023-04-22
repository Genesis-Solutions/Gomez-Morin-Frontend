import React from "react";
import InputForm from "../components/InputForm";
import { useForm, FormProvider } from "react-hook-form";
import ButtonNavigation from "../components/ButtonNavigation";

const Page = () => {
  const methods = useForm();
  const methods2 = useForm();
  const reset = methods.reset;
  const reset2 = methods2.reset;
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-auto justify-between pt-10">
      <div className="md:col-span-1 col-span-2 w-full h-full p-12 ">
        <h1 className="text-2xl font-bold mb-3">Formulario General</h1>

        <FormProvider {...methods}>
          <form className="flex flex-col gap-6">
            <InputForm
              type="text"
              name="nameComida"
              label="¿Dirección del domicilio?"
              placeholder="Hamburguesa"
              defaultValue=""
            />
          </form>
        </FormProvider>
        <ButtonNavigation
          text={"Confirmar"}
          type={"button"}
          colorBg={"bg-blue-600"}
          colorHoverBg={"hover:bg-blue-700"}
          navigation={"/Prueba2"}
        ></ButtonNavigation>
      </div>
    </div>
  );
};

export default Page;
