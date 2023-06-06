import React, { useState } from "react";
import DropdownInput from "../../components/DropdownInput";
import TextArea from "../../components/TextArea";
import CheckBoxInput from "../../components/CheckBoxInput";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { setFormState, showUserForm } from "../../states/formSlice";
import { typeEvent } from "../../utils/RequestForm/options";
import { useFormContext } from "react-hook-form";

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

  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const dispatch = useDispatch();

  const handleNext = handleSubmit(() => {
    dispatch(setFormState("SpecificForm"));
  });

  const [characterCount, setCharacterCount] = useState(0);
  const currentDate = new Date().toISOString().split("T")[0];
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");

  const handleStartDayChange = (event) => {
    const selectedStartDay = event.target.value;
    setStartDay(selectedStartDay);
    setEndDay(""); // Reiniciar el valor de endDay cuando se cambia startDay
  };

  const handleEndDayChange = (event) => {
    setEndDay(event.target.value);
  };

  /** A function that handles changes to the textArea inputs in the form and updates the Character counter accordingly.
   * @param {event} event - The event of the textArea input.
   */
  const handleTextAreaChange = (event) => {
    const text = event.target.value;
    //console.log(text.length);
    setCharacterCount(text.length);
  };

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
            required={true}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="date"
            label="Dia de inicio del evento"
            id="startDay"
            name="startDay"
            placeholder="Ejemplo: 04/24/2023"
            required={true}
            min={currentDate}
            value={startDay}
            onChange={handleStartDayChange}
          />
        </div>
        <div className="flex-1">
          <InputForm
            type="time"
            name="startTime"
            label="Hora de inicio del evento"
            placeholder="Ejemplo: 10:00pm"
            defaultValue=""
            maxLength="5"
            required={true}
          />
        </div>
      </div>
      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <InputForm
            type="date"
            id="endDay"
            label="Dia de fin del evento"
            name="endDay"
            placeholder="Ejemplo: 04/25/2023"
            required={true}
            min={startDay} // Utiliza startDay como el límite mínimo para endDay
            value={endDay}
            onChange={handleEndDayChange}
            disabled={!startDay} // Deshabilita endDay hasta que se seleccione startDay
          />
        </div>

        <div className="flex-1">
          <InputForm
            type="time"
            name="endTime"
            label="Hora de fin de evento"
            placeholder="Ejemplo: 11:00pm"
            defaultValue=""
            required={true}
          />
        </div>

        <div className="flex-1">
          <InputForm
            type="text"
            name="weekDays"
            label="Días del evento"
            placeholder="Ejemplo: Lunes, Miércoles, Viernes"
            pattern={
              /^(lunes|martes|miércoles|jueves|viernes|sábado|domingo)(\s*,\s*(lunes|martes|miércoles|jueves|viernes|sábado|domingo))*$/i
            }
            defaultValue=""
            required={true}
          />
          {errors.weekDays && (
            <p className="text-red-500">
              Por favor, ingresa días de la semana separados con comas (,).
            </p>
          )}
        </div>
      </div>

      <div className="md:flex flex-wrap sm:gap-14">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <CheckBoxInput
              name="openingDay"
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
                min={1}
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
            required={true}
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
            handleNext();
          }}
        />
      </div>
    </>
  );
};

export default InitialForm;
