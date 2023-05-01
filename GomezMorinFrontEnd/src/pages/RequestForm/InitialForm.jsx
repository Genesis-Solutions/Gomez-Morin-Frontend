import React, { useState } from "react";
import DropdownInput from "../../components/DropdownInput";
import TextArea from "../../components/TextArea";
import CheckBoxInput from "../../components/CheckBoxInput";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState, showUserForm } from "../../states/formSlice";

const InitialForm = () => {
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

  const option = [
    { value: "Evento", _id: "1" },
    { value: "Taller", _id: "2" },
    { value: "Exposición", _id: "3" },
  ];

  const dispatch = useDispatch()

  return (
    <>
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
              onChange={(isChecked) => handleCheckBoxChange("costo", isChecked)}
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

      <InputForm
        type="text"
        name="redesSociales"
        label="Redes sociales"
        placeholder="Ejemplo: instagram.com/JuanAlcantara.."
        defaultValue=""
      />
      <div className="flex justify-end gap-5">
        <Button
          text="Anterior"
          type=""
          colorBg="bg-gray-400"
          colorHoverBg="bg-gray-600"
          action = {() => { dispatch(showUserForm()) }}
        />
        <Button
          text="Siguiente"
          type="submit"
          colorBg="bg-light-blue-500"
          colorHoverBg="bg-light-blue-700"
          action = {() => { dispatch(setFormState("SpecificForm")) }}
        />
      </div>
    </>
  );
};

export default InitialForm;
