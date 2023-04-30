import { React, useState } from "react";
import InputForm from "../../components/InputForm";
import { useForm, FormProvider } from "react-hook-form";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import DropdownInput from "../../components/DropdownInput";
import TextArea from "../../components/TextArea";
import AltCheckbox from "../../components/Checkbox";
import CheckBoxInput from "../../components/CheckBoxInput";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    inauguracion: false,
    costo: false,
  });

  const handleCheckBoxChange = (name, isChecked) => {
    setFormData({
      ...formData,
      [name]: isChecked,
    });
  };

  const methods = useForm();
  const methods2 = useForm();
  const reset = methods.reset;
  const reset2 = methods2.reset;
  const navigate = useNavigate();
  const option = [
    { value: "Evento", _id: "1" },
    { value: "Taller", _id: "2" },
    { value: "Exposición", _id: "3" },
  ];
  const option2 = [
    { value: "Sí", _id: "1" },
    { value: "No", _id: "2" },
  ];

  return (
    <div className="w-full h-full flex justify-between pt-16 ">
      <div className="flex flex-col items-center py-10 w-full h-full p-12 ">
        <Header tittle={"Nueva Solicitud"} />
        <div className="py-12 w-full h-full p-12 sm:px-6 ">
          <FormProvider {...methods}>
            <form className="flex flex-col gap-6">
              <div className="md:flex flex-wrap sm:gap-14">
                <div className="flex-1">
                  <DropdownInput
                    name="tipoEvento"
                    label="Tipo de evento"
                    options={option}
                  />
                </div>

                <div className="flex-1">
                  <InputForm
                    type="text"
                    name="nombreEvento"
                    label="Nombre del Evento"
                    placeholder="Ejemplo: Taller de..."
                    defaultValue=""
                  />
                </div>
              </div>

              <TextArea
                type="text"
                name="descripcionGeneral"
                label="Descripción del evento"
                placeholder="Ejemplo: Descripción general del evento..."
                defaultValue=""
              />

              <div className="md:flex flex-wrap sm:gap-14">
                <div className="flex-1">
                  <InputForm
                    type="text"
                    name="diaInicio"
                    label="Dia de inicio del evento"
                    placeholder="Ejemplo: 04/24/2023"
                    defaultValue=""
                  />
                </div>

                <div className="flex-1">
                  <InputForm
                    type="text"
                    name="horaInicio"
                    label="Hora de inicio del evento"
                    placeholder="Ejemplo: 10:00pm"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="md:flex flex-wrap sm:gap-14">
                <div className="flex-1">
                  <InputForm
                    type="text"
                    name="diaFinal"
                    label="Dia de fin del evento"
                    placeholder="Ejemplo: 04/25/2023"
                    defaultValue=""
                  />
                </div>

                <div className="flex-1">
                  <InputForm
                    type="text"
                    name="horaFinal"
                    label="Hora de fin de evento"
                    placeholder="Ejemplo: 11:00pm"
                    defaultValue=""
                  />
                </div>
              </div>

              <div className="md:flex flex-wrap sm:gap-14">
                <div className="flex-1">
                  <div className="flex flex-col gap-4">
                    <CheckBoxInput
                      name="inauguracion"
                      label="¿Hay inauguración en tu evento?"
                      onChange={(isChecked) =>
                        handleCheckBoxChange("inauguracion", isChecked)
                      }
                    />
                    {formData.inauguracion && (
                      <InputForm
                        type="text"
                        name="autoridades"
                        label="Especifica las autoridades correspondientes"
                        placeholder="Ejemplo: Secretaría de cultura.."
                        defaultValue=""
                      />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <InputForm
                    type="text"
                    name="lugar"
                    label="Lugar del evento"
                    placeholder="Ejemplo: sala numero 3 de gomez morin"
                    defaultValue=""
                  />
                </div>
              </div>

              <div className="md:flex flex-wrap sm:gap-14">
                <div className="flex-1">
                  <div className="flex flex-col gap-4">
                    <CheckBoxInput
                      name="costo"
                      label="¿El evento tiene costo de admisión?"
                      onChange={(isChecked) =>
                        handleCheckBoxChange("costo", isChecked)
                      }
                    />
                    {formData.costo && (
                      <InputForm
                        type="number"
                        name="cuota"
                        label="Especifica el costo por acceso"
                        placeholder="Ejemplo: 1000.."
                        defaultValue=""
                      />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <InputForm
                    type="text"
                    name="publicoObjetivo"
                    label="Dirigido a"
                    placeholder="Ejemplo: Adultos mayores de 18 años"
                    defaultValue=""
                  />
                </div>
              </div>

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

                <div className="flex-1"></div>
              </div>
              <InputForm
                type="text"
                name="redesSociales"
                label="Redes sociales"
                placeholder="Ejemplo: instagram.com/JuanAlcantara.."
                defaultValue=""
              />
              <AltCheckbox
                label={
                  "Acepto el envio de la información presentada de la solicitud"
                }
              />

              <InputForm
                type="text"
                name="redesSociales"
                label="Redes sociales"
                placeholder="Ejemplo: instagram.com/JuanAlcantara.."
                defaultValue=""
              />

              <div className="md:flex flex-wrap sm:gap-14">
                <div className="flex-1">
                  <InputForm
                    type="file"
                    name="ine"
                    label="Sube la copia de tu INE"
                    placeholder="Buscar..."
                    defaultValue=""
                  />
                </div>

                <div className="flex-1">
                  <InputForm
                    type="file"
                    name="comprobanteDomicilio"
                    label="Sube la copia de tu comprobante de domicilio"
                    placeholder="Ejemplo: Buscar..."
                    defaultValue=""
                  />
                </div>
              </div>
              <InputForm
                type="file"
                name="curp"
                label="Sube la copia de tu curp"
                placeholder="Ejemplo: Buscar..."
                defaultValue=""
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
