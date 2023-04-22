import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputForm from "./InputForm";
import Button from "./Button";
import Checkbox from "./Checkbox";
import SpinnerLoader from "./SpinnerLoader";

const InfoProfileCard = (/*Cookie.session.id*/) => {
  const [usuario, setUsuario] = useState([]);
  const [loading, setLoading] = useState(true);

  //UseEfect
  //query.findByID(cookie.session.id)
  //setUsuario
  //setLoading(false)

  const methods = useForm();
  const reset = methods.reset;

  const onSubmitUsuario = async (data) => {
    const response = await updateUsuario(data); //Query importada
    setUsuario(response);
    reset();
  };

  return (
    <div className="w-full rounded-lg bg-gray drop-shadow-md">
      <div className="flex items-center">
        <div className="w-1/2 mx-6 my-1 text-left">
          {usuario.length === 1 ? (
            usuario.map((tempUsuario) => (
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmitUsuario)}>
                  <InputForm
                    label="Usuario"
                    name={tempUsuario.usuario} //Posible cambio
                    type="text"
                    placeholder="Escribe tu nuevo nombre de Usuario"
                    defaultValue={tempUsuario.usuario} //Posible cambio
                  />
                  <InputForm
                    label="Correo"
                    name={tempUsuario.correo} //Posible cambio
                    type="text"
                    placeholder="prueba"
                    defaultValue={tempUsuario.correo} //Posible cambio
                  />
                  <InputForm
                    label="Teléfono Celular"
                    name={tempUsuario.celular} //Posible cambio
                    type="number"
                    placeholder="prueba"
                    defaultValue={tempUsuario.celular} //Posible cambio
                  />
                  <div className="flex justify-center items-center w-2/3 my-3">
                    <Button
                      text="Guardar Cambios"
                      type="submit"
                      colorBg="bg-teal-500"
                      colorHoverBg="bg-teal-500"
                      navigation=""
                    />
                  </div>
                </form>
              </FormProvider>
            ))
          ) : loading ? ( 
            <SpinnerLoader colorSpin="#AFD135"/>
          ) : (
            <h1 className="font-bold text-2xl">No existe el usuario</h1>
          )}
        </div>
        <div className="w-1/2 mx-6 my-2 text-left">
          <Checkbox label="Soy una persona moral" />
          <p className="text-sm italic font-thin mb-2">
            Este campo implica que eres una institución afiliada con Gómez
            Morín.
          </p>
          <div className="mt-3">
            <label className="font-bold">Contraseña</label>
          </div>
          <div className="mt-3">
            <Button
              text="Cambiar Contraseña"
              type="submit"
              colorBg="bg-pink-red"
              colorHoverBg="bg-rose-800"
              navigation=""
            />
          </div>
          <div className="mt-3">
            <label className="font-bold">Cuenta</label>
          </div>
          <div className="my-3">
            <Button
              text="Eliminar Cuenta"
              type="submit"
              colorBg="bg-pink-red"
              colorHoverBg="bg-rose-500"
              navigation=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProfileCard;
