import React, { useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState, showSpecificForm } from "../../states/formSlice";
import guideLinesPdf from "../../assets/Lineamientos de uso y disfrute.pdf";
import { ClipLoader } from "react-spinners";

/**
 * Component for sending the form.
 *
 * @returns {JSX.Element}
 */
const SendForm = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * The handlePdfLoad function handles the loading of the pdf.
   *
   * @returns {void}
   */
  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col w-full h-screen gap-5 items-center">
        <iframe
          src={guideLinesPdf}
          onLoad={handlePdfLoad}
          width="85%"
          height={"100%"}
        ></iframe>
        {isLoading && (
          <div className="text-center">
            <ClipLoader size={35} color="#000000" loading={isLoading} />
          </div>
        )}
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
          <label htmlFor="guideLines">Acepto los lineamientos de CECEQ</label>
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
