import React from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState } from "../../states/formSlice";

/**
 * A React functional component that renders a form for collecting user information.
 * @returns The JSX element that renders the user info form.
 */
const UserInfoForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="text"
            name="nameRequester"
            label="Nombre del solicitante"
            placeholder="Ejemplo: Juan Alcántara.."
            defaultValue=""
          />
        </div>

        <div className="flex-1">
          <InputForm
            type="number"
            name="cellphone"
            label="Número de telefono del solicitante"
            placeholder="Ejemplo: 777123443.."
            defaultValue=""
          />
        </div>
      </div>

      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="email"
            name="email"
            label="Correo del solicitante"
            placeholder="Ejemplo: Juan@gmail.com.."
            defaultValue=""
          />
        </div>
      </div>
      <InputForm
        type="file"
        name="ineDoc"
        label="Sube la copia de tu INE"
        placeholder="Buscar..."
        defaultValue=""
      />

      <InputForm
        type="file"
        name="addressDoc"
        label="Sube la copia de tu comprobante de domicilio"
        placeholder="Ejemplo: Buscar..."
        defaultValue=""
      />

      <InputForm
        type="file"
        name="curpDoc"
        label="Sube la copia de tu CURP"
        placeholder="Ejemplo: Buscar..."
        defaultValue=""
      />

      <InputForm
        type="file"
        name="extraDoc"
        label="Sube algún documento extra que creas necesario"
        placeholder="Ejemplo: Buscar..."
        defaultValue=""
        required={false}
      />

      {/* Form Navigation */}
      <div className="flex justify-end">
        <Button
          text="Siguiente"
          type=""
          colorBg="bg-light-blue-500"
          colorHoverBg="bg-light-blue-600"
          action={() => {
            dispatch(setFormState("InitialForm"));
          }}
        />
      </div>
    </>
  );
};

export default UserInfoForm;
