import React from "react";
import Button from "../../components/Button";
import AltCheckbox from "../../components/Checkbox";
import { useDispatch } from "react-redux";
import { setFormState, showSpecificForm } from "../../states/formSlice";

const SendForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AltCheckbox
        label={"Acepto el envio de la información presentada de la solicitud"}
      />
      <div className="flex justify-end gap-5">
        <Button
          text="Anterior"
          type=""
          colorBg="bg-gray-400"
          colorHoverBg="bg-gray-600"
          action={() => {
            dispatch(showSpecificForm());
          }}
        />
        <Button
          text="Enviar"
          type="submit"
          colorBg="bg-light-blue-500"
          colorHoverBg="bg-light-blue-700"
          action={() => {
            dispatch(setFormState("SubmitForm"));
          }}
        />
      </div>
    </>
  );
};

export default SendForm;
