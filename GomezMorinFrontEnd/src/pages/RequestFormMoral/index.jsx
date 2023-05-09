import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { createRequestMoral } from "../../queries/queryRequestFormMoral";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import guideLinesPdf from "../../assets/Lineamientos de uso y disfrute.pdf";

/**
 * The RequestAsMoral functional component represents a form for creating
 * a new moral request.
 */
const RequestAsMoral = () => {
  const methods = useForm();
  const navigate = useNavigate();
  
  const userId = useSelector((state) => state.auth.id);
  const [isChecked, setIsChecked] = useState(false);
  const today = new Date();
  const month = today.getMonth() + 1;
  const monthString = month < 10 ? `0${month}` : `${month}`;
  const day = today.getDate();
  const dayString = day < 10 ? `0${day}` : `${day}`;
  const year = today.getFullYear();
  const todayString = `${year}-${monthString}-${dayString}`;

  /**
   * The onSubmitRequestAsMoral function handles the form submission for
   * creating a new moral request.
   *
   * @param {Object} data - The form data.
   */
  const onSubmitRequestAsMoral = async (data) => {
    try {
      await createRequestMoral({ ...data, userId: userId, date: todayString });
      navigate("/request");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="grid grid-cols-6 w-screen h-screen">
      <div className="h-full col-span-1 bg-sideLeftBG bg-cover bg-center bg-no-repeat"></div>
      <div className="col-span-4 h-full flex justify-between">
        <div className="flex flex-col items-center w-full h-full px-16 py-14">
          <div className="py-3 w-full">
            <Header tittle="Nueva solicitud" />
          </div>
          <iframe src={guideLinesPdf} width="100%" height={"100%"} />
          <br />
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmitRequestAsMoral)}
              className="w-full"
            >
              <div>
                <div className="flex self-start mb-7">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onClick={() => {
                      setIsChecked(!isChecked);
                    }}
                    id="sign"
                    readOnly={true}
                  />
                  <label htmlFor="sign" className="pl-3">
                    Acepto los lineamientos de Gómez Morín
                  </label>
                </div>
              </div>
              <div>
                <InputForm
                  label="Sube tu carta membretada"
                  name="membretatedLetterDoc"
                  type="file"
                  placeholder="Documento.pdf"
                  defaultValue=""
                  accept="application/pdf"
                />
              </div>

              <div className="flex justify-center">
                <div className="w-1/3 pt-10">
                  <Button
                    text="Enviar"
                    type="submit"
                    colorBg={`${
                      isChecked
                        ? "bg-light-blue-500"
                        : "bg-gray-400 pointer-events-none"
                    }`}
                    colorHoverBg={`${isChecked ? "bg-light-blue-700" : ""}`}
                    disabled={!isChecked}
                  />
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
      <div className="h-full col-span-1 bg-sideRightBG bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default RequestAsMoral;
