import React, { useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState, showSpecificForm } from "../../states/formSlice";
import guideLinesPdf from "../../assets/Lineamientos de uso y disfrute.pdf";

/**
 * Component for sending the form.
 *
 * @returns {JSX.Element}
 */
const SendForm = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full h-screen gap-5 items-center">
        <iframe src={guideLinesPdf} width="85%" height={"100%"}></iframe>
        <div className="flex gap-3 self-start">
          <input
            type="checkbox"
            checked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            id="guideLines"
            readOnly={true}
          />
          <label htmlFor="guideLines">
            Acepto los lineamientos de Gómez Morín
          </label>
        </div>
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
          colorBg={`${
            isChecked ? "bg-light-blue-500" : "bg-gray-400 pointer-events-none"
          }`}
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
