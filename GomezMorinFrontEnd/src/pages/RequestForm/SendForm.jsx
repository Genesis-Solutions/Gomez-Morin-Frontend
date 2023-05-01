import React, { useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState, showSpecificForm } from "../../states/formSlice";

/**
 * Component for sending the form.
 * @returns {JSX.Element}
 */
const SendForm = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <div className="flex gap-3">
        <input type="checkbox" checked={isChecked} onClick={() => { setIsChecked(!isChecked) }} id="guideLines" readOnly={true} />
        <label htmlFor="">
          Acepto el envio de la información presentada de la solicitud
        </label>
      </div>

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
          colorBg={`${isChecked ? "bg-light-blue-500" : "bg-gray-400 pointer-events-none"}`}
          colorHoverBg={`${isChecked ? "bg-light-blue-700" : ""}`}
          action={() => {
            dispatch(setFormState("SubmitForm"));
          }}
          disabled={!isChecked}
        />
      </div>
    </>
  );
};

export default SendForm;
