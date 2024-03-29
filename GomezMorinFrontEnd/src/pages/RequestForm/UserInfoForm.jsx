import React from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setFormState } from "../../states/formSlice";
import InputFileLabel from "../../components/InputFileLabel";
import { useAccordion } from "@material-tailwind/react";

/**
 * A React functional component that renders a form for collecting user information.
 *
 * @returns The JSX element that renders the user info form.
 */

const handleFileChange = (event) => {
  if (event.target.files) {
    const file = event.target.files[0];
    const allowedExtensions = /(\.pdf)$/i;

    if (!allowedExtensions.test(file.name)) {
      setErrorMessage("Solo se permiten archivos PDF.");
    } else {
      setErrorMessage("");
    }
  }
  return;
};

const UserInfoForm = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
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
            required={true}
          />
        </div>

        <div className="flex-1">
          <InputForm
            type="number"
            name="cellphone"
            label="Celular del solicitante"
            placeholder="Ejemplo: 777123443.."
            defaultValue=""
            min={1000000000}
            max={9999999999}
            required={true}
          />
        </div>
        <div className="flex-1">
          <InputForm
            type="number"
            name="telephone"
            label="Teléfono fijo del solicitante"
            placeholder="Ejemplo: 777123443.."
            defaultValue=""
            min={1000000000}
            max={9999999999}
            required={true}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="email"
            name="email"
            label="Correo del solicitante"
            placeholder={userEmail}
            required={true}
          />
        </div>
      </div>
      <InputForm
        type="file"
        name="ineDoc"
        label="Sube la copia de tu INE"
        placeholder="Buscar..."
        defaultValue=""
        accept=".pdf"
        onChange={handleFileChange}
        required={true}
      />
      <InputFileLabel />

      <InputForm
        type="file"
        name="addressDoc"
        label="Sube la copia de tu comprobante de domicilio"
        placeholder="Ejemplo: Buscar..."
        defaultValue=""
        accept=".pdf"
        onChange={handleFileChange}
        required={true}
      />
      <InputFileLabel />

      <InputForm
        type="file"
        name="curpDoc"
        label="Sube la copia de tu CURP"
        placeholder="Ejemplo: Buscar..."
        defaultValue=""
        accept=".pdf"
        onChange={handleFileChange}
        required={true}
      />
      <InputFileLabel />

      <InputForm
        type="file"
        name="extraDoc"
        label="Sube algún documento extra que creas necesario"
        placeholder="Ejemplo: Buscar..."
        defaultValue=""
        required={false}
        onChange={handleFileChange}
        accept=".pdf"
      />
      <InputFileLabel />

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
