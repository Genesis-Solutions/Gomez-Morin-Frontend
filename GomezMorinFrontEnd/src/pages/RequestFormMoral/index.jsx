import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import guideLinesPdf from "../../assets/Lineamientos de uso y disfrute.pdf";

const RequestAsMoral = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const onSubmitRequestAsMoral = async (data) => {
    try {
      //to do: Endpoint, Redirect
    } catch (err) {
      //to do: error
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
          <iframe src={guideLinesPdf} width="100%" height={"100%"}/>
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
                            id="guideLines"
                            readOnly={true}
                        />
                        <label htmlFor="guideLines" className="pl-3">
                            Acepto los lineamientos de Gómez Morín
                        </label>
                    </div>
                </div>
            <div>
                <InputForm
                  label="Sube tu carta membretada"
                  name="fileMembretada"
                  type="file"
                  placeholder="Documento.pdf"
                  defaultValue=""
                />
              </div>

              <div className="flex justify-center">
                <div className="w-1/3 pt-10">
                  <Button
                    text="Subir Solicitud"
                    type="submit"
                    colorBg="bg-light-blue-500"
                    colorHoverBg="hover:bg-light-blue-700"
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
