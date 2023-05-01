import React, { useState } from "react";
import DropdownInput from "../../components/DropdownInput";
import TextArea from "../../components/TextArea";
import CheckBoxInput from "../../components/CheckBoxInput";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState, showUserForm } from "../../states/formSlice";
import { typeEvent } from "../../utils/RequestForm/options";

/**
 * A React functional component that renders a form for collecting initial information about an event.
 *
 * @returns The JSX element that renders the initial information form.
 */
const InitialForm = () => {
  /**
   * A state hook that holds the form data for the component.
   *
   * @type {[object, function]} An array containing the form data object and a function to update it.
   */
  const [formData, setFormData] = useState({
    inauguracion: false,
    costo: false,
  });

  /**
   * A function that handles changes to the checkbox inputs in the form and updates the form data accordingly.
   *
   * @param {string} name - The name of the checkbox input.
   * @param {boolean} isChecked - The new checked state of the checkbox input.
   */
  const handleCheckBoxChange = (name, isChecked) => {
    setFormData({
      ...formData,
      [name]: isChecked,
    });
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <DropdownInput
            name="typeEvent"
            label="Tipo de evento"
            options={typeEvent}
          />
        </div>

        <div className="flex-1">
          <InputForm
            type="text"
            name="nameEvent"
            label="Nombre del Evento"
            placeholder="Ejemplo: Taller de..."
            defaultValue=""
          />
        </div>
      </div>

      <TextArea
        type="text"
        name="generalDescription"
        label="Descripción del evento"
        placeholder="Ejemplo: Descripción general del evento..."
        defaultValue=""
      />

      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="date"
            name="startDay"
            label="Dia de inicio del evento"
            placeholder="Ejemplo: 04/24/2023"
            defaultValue=""
          />
        </div>

        <div className="flex-1">
          <InputForm
            type=""
            name="startTime"
            label="Hora de inicio del evento"
            placeholder="Ejemplo: 10:00pm"
            defaultValue=""
          />
        </div>
      </div>
      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="date"
            name="endDay"
            label="Dia de fin del evento"
            placeholder="Ejemplo: 04/25/2023"
            defaultValue=""
          />
        </div>

        <div className="flex-1">
          <InputForm
            type="text"
            name="endTime"
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
              name="inauguration"
              label="¿Hay inauguración en tu evento?"
              onChange={(isChecked) =>
                handleCheckBoxChange("inauguracion", isChecked)
              }
            />
            {formData.inauguracion && (
              <InputForm
                type="text"
                name="authorities"
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
            name="place"
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
              name="cost"
              label="¿El evento tiene costo de admisión?"
              onChange={(isChecked) => handleCheckBoxChange("costo", isChecked)}
            />
            {formData.costo && (
              <InputForm
                type="number"
                name="fee"
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
            name="targetAudience"
            label="Dirigido a"
            placeholder="Ejemplo: Adultos mayores de 18 años"
            defaultValue=""
          />
        </div>
      </div>

      <InputForm
        type="text"
        name="socialNetwork"
        label="Redes sociales"
        placeholder="Ejemplo: instagram.com/JuanAlcantara.."
        defaultValue=""
      />

      {/* Form Navigation */}
      <div className="flex justify-end gap-5">
        <Button
          text="Anterior"
          type=""
          colorBg="bg-gray-400"
          colorHoverBg="bg-gray-600"
          action={() => {
            dispatch(showUserForm());
          }}
        />
        <Button
          text="Siguiente"
          type="submit"
          colorBg="bg-light-blue-500"
          colorHoverBg="bg-light-blue-700"
          action={() => {
            dispatch(setFormState("SpecificForm"));
          }}
        />
      </div>
    </>
  );
};

export default InitialForm;
