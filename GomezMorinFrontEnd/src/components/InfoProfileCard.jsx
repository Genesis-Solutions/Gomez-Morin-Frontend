import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputForm from "./InputForm";
import Button from "./Button";
import Checkbox from "./Checkbox";
import SpinnerLoader from "./SpinnerLoader";

/**
 * A component that displays user information and allows them to update their profile.
 * @param {string} Cookie.session.id - The ID of the user's session cookie.
 *
 * @returns {JSX.Element} The JSX element displaying the user's profile and profile editing form.
 */
const InfoProfileCard = (/*Cookie.session.id*/) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //UseEfect
  //query.findByID(cookie.session.id)
  //setUser
  //setLoading(false)

  const methods = useForm();
  const reset = methods.reset;

  /**
   * Handles submission of updated user information.
   * @param {Object} data - The updated user data to be submitted.
   */
  const onSubmitUser = async (data) => {
    const response = await updateUser(data); //Query importada
    setUser(response);
    reset();
  };

  return (
    <div className="w-full rounded-lg bg-gray drop-shadow-md">
      <div className="flex items-center">
        <div className="w-1/2 mx-6 my-1 text-left">
          {user.length === 1 ? (
            user.map((tempUser) => (
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmitUser)}>
                  <InputForm
                    label="Usuario"
                    name={tempUser.user} //Posible cambio
                    type="text"
                    placeholder="Escribe tu nuevo nombre de Usuario"
                    defaultValue={tempUser.user} //Posible cambio
                  />
                  <InputForm
                    label="Correo"
                    name={tempUser.mail} //Posible cambio
                    type="text"
                    placeholder="prueba"
                    defaultValue={tempUser.mail} //Posible cambio
                  />
                  <InputForm
                    label="Teléfono Celular"
                    name={tempUser.phone} //Posible cambio
                    type="number"
                    placeholder="prueba"
                    defaultValue={tempUser.phone} //Posible cambio
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
            <SpinnerLoader colorSpin="#AFD135" />
          ) : (
            <h1 className="font-bold text-2xl">No existe el usuario</h1>
          )}
        </div>
        <div className="w-1/2 mx-6 my-2 text-left">
          {user.length === 1 ? (
            user.map((tempUser) => (
              <div>
                <Checkbox
                  label={"Soy una persona moral"}
                  subLabel={"Este campo implica que eres una institución afiliada con Gómez Morín."}
                />
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
            ))
          ) : loading ? (
            <SpinnerLoader colorSpin="#AFD135" />
          ) : (
            <h1 className="font-bold text-2xl">No existe el usuario</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoProfileCard;
