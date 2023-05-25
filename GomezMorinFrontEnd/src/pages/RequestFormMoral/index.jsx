import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { createRequestMoral } from "../../queries/queryRequestFormMoral";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import guideLinesPdf from "../../assets/Lineamientos de uso y disfrute.pdf";
import { ClipLoader } from "react-spinners";
import InputFileLabel from "../../components/InputFileLabel";

/**
 * The RequestAsMoral functional component represents a form for creating
 * a new moral request.
 */
const RequestAsMoral = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
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
      alert(err.message);
    }
  };

  /**
   * The handlePdfLoad function handles the loading of the pdf.
   *
   * @returns {void}
   */
  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 w-screen md:h-screen">
      <div className="lg:h-full lg:col-span-1 lg:bg-sideLeftBG lg:bg-cover lg:bg-center lg:bg-no-repeat"></div>
      <div className="lg:col-span-4 w-full h-full flex justify-between">
        <div className="flex flex-col items-center w-full h-full px-6 lg:px-10 xl:px-16 py-3">
          <div className="py-3 pb-6 w-full">
            <Header tittle="Nueva solicitud" />
          </div>

          <iframe
            src={guideLinesPdf}
            onLoad={handlePdfLoad}
            width="100%"
            height={"100%"}
          />
          {isLoading && (
            <div className="text-center">
              <ClipLoader size={35} color="#000000" loading={isLoading} />
            </div>
          )}

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
                    Acepto los lineamientos de CECEQ
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
                  accept=".pdf"
                />
                <div className="pt-3">
                <InputFileLabel />
                </div>
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
      <div className="lg:h-full lg:col-span-1 lg:bg-sideRightBG lg:bg-cover lg:bg-center lg:bg-no-repeat"></div>
    </div>
  );
};

export default RequestAsMoral;
