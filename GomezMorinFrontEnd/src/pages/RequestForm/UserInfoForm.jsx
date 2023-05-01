import React from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState } from "../../states/formSlice";
import { useRef } from "react";

const UserInfoForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="text"
            name="nombreContacto"
            label="Nombre del solicitante"
            placeholder="Ejemplo: Juan Alcántara.."
            defaultValue=""
          />
        </div>

        <div className="flex-1">
          <InputForm
            type="number"
            name="telContacto"
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
            name="correoContacto"
            label="Correo del solicitante"
            placeholder="Ejemplo: Juan@gmail.com.."
            defaultValue=""
          />
        </div>
      </div>
      <div className="flex-1">
        <InputForm
          type="file"
          name="ine"
          label="Sube la copia de tu INE"
          placeholder="Buscar..."
          defaultValue=""
        />

        <InputForm
          type="file"
          name="comprobanteDomicilio"
          label="Sube la copia de tu comprobante de domicilio"
          placeholder="Ejemplo: Buscar..."
          defaultValue=""
        />
      </div>

      <InputForm
        type="file"
        name="curp"
        label="Sube la copia de tu curp"
        placeholder="Ejemplo: Buscar..."
        defaultValue=""
      />

      <div className="flex justify-end">
        <Button
          text="Siguiente"
          type=""
          colorBg="bg-light-blue-500"
          colorHoverBg="bg-light-blue-600"
          action = {() => {
            dispatch(setFormState("InitialForm"))
          }}
        />
      </div>
    </>
  );
};

export default UserInfoForm;
