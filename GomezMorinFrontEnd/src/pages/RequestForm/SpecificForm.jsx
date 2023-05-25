import React, {useState} from "react";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import RadioButtonForm from "../../components/RadioButtonForm";
import { useDispatch, useSelector } from "react-redux";
import { setFormState, showInitialForm } from "../../states/formSlice";
import DropdownInput from "../../components/DropdownInput";
import {
  equipmentOptions,
  electricOptions,
  softwareOptions,
  publicType,
  mountingTypes,
  soundOptions,
  microphoneOptions,
} from "../../utils/RequestForm/options";

/**
 * A React component for displaying the Specific Form.
 *
 * @returns The JSX element that renders the initial information form.
 */
const SpecificForm = () => {
  const dispatch = useDispatch();
  const typeEvent = useSelector((state) => state.form.typeEventForm);
  const currentDate = new Date().toISOString().split('T')[0]; 
  const [characterCount, setCharacterCount] = useState(0);

  /** A function that handles changes to the textArea inputs in the form and updates the Character counter accordingly. 
    * @param {event} event - The event of the textArea input.
   */
   const handleTextAreaChange = (event) => {
    const text = event.target.value;
    console.log(text.length);
    setCharacterCount(text.length);
  };

  return (
    <>
      {/* Shared Questions from Specific Form */}
      <div className="grid grid-cols-2 gap-x-14 gap-y-6">
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="date"
            name="requestDate"
            label="Fecha de solicitud"
            defaultValue=""
            required = {true}
			min={currentDate} 
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="number"
            name="phoneEmergency"
            label="Teléfono de emergencia"
            placeholder="4441234566"
            minLength="10"
            defaultValue=""
            min = "1000000000"
            max = "9999999999"
            required = {true}
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="text"
            name="direction"
            label="Dirección del solicitante"
            placeholder="Av. Parque Tecnológico #468"
            defaultValue=""
            required = {true}
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="number"
            name="postalCode"
            label="Código Postal"
            placeholder="76123"
            defaultValue=""
            min = "10000"
            max = "99999"
            required = {true}
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="text"
            name="street"
            label="Calle del solicitante"
            placeholder="Bernardo Quintana"
            defaultValue=""
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="text"
            name="colony"
            label="Colonia del solicitante"
            placeholder="El Sol"
            defaultValue=""
            required = {true}
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <RadioButtonForm question={"Tipo de público"} options={publicType} />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="number"
            name="chairNumber"
            label="Número de sillas"
            placeholder="10"
            min = "0"
            defaultValue="0"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            type="text"
            name="specificDescription"
            label="Descripción detallada del evento"
            placeholder="Se mostrarán diferentes bandas en rondas"
            defaultValue=""
            min="300"
            required = {true}
            onChange={handleTextAreaChange}
          />
           <p className="text-sm text-gray-600 font-bold" >Caracteres Ingresados: {characterCount} Min:300 </p>
        </div>

        {/* Shared Between Evento and Taller Specific Questions */}
        {(typeEvent === "Evento" || typeEvent === "Taller") && (
          <>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="number"
                name="assistance"
                label="Número aproximado de asistentes"
                placeholder="25"
                defaultValue="1"
                min = "1"
                required = {true}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="text"
                name="ages"
                label="Rango de edades del público"
                placeholder="18 - 25"
                defaultValue=""
                required = {true}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="text"
                name="equipment"
                label="Equipo requerido de Gómez Morín"
                placeholder="Computadoras, pantallas, proyectores, etc.."
                defaultValue=""
                required = {true}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <RadioButtonForm
                question={"¿Usará equipo propio?"}
                options={equipmentOptions}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <RadioButtonForm
                question={"Instalación de software"}
                options={softwareOptions}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <RadioButtonForm
                question={"Instalación eléctrica"}
                options={electricOptions}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <DropdownInput
                name="mounting"
                label="Tipo de montaje"
                options={mountingTypes}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="number"
                name="tableNumber"
                label="Número de mesas"
                placeholder="5"
                defaultValue="0"
                min = "0"
              />
            </div>
          </>
        )}

        {/* Shared Between Evento and Exposición Specific Questions */}
        {(typeEvent === "Evento" || typeEvent === "Exposición") && (
          <>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="text"
                name="requiredSpace"
                label={`Espacio requerido para el ${
                  typeEvent === "Evento" ? "evento" : "exposición"
                }`}
                placeholder="50 mts"
                defaultValue=""
              />
            </div>
          </>
        )}

        {/* Questions of Exposicion */}
        {typeEvent === "Exposición" && (
          <>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="date"
                name="openingDayDate"
                label="Fecha de inauguración"
                defaultValue=""
				min={currentDate}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="time"
                name="openingDayTime"
                label="Hora de inauguración (Formato 24hrs)"
                placeholder="13:00"
                defaultValue=""
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <RadioButtonForm
                question={"Requiere sonido"}
                options={soundOptions}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <RadioButtonForm
                question={"Requiere microfono"}
                options={microphoneOptions}
              />
            </div>
          </>
        )}

        {/* Form Navigation */}
        <div className="col-span-2 flex justify-end gap-5">
          <Button
            text="Anterior"
            type=""
            colorBg="bg-gray-400"
            colorHoverBg="bg-gray-600"
            action={() => {
              dispatch(showInitialForm());
            }}
          />
          <Button
            text="Siguiente"
            type=""
            colorBg="bg-light-blue-500"
            colorHoverBg="bg-light-blue-700"
            action={() => {
              dispatch(setFormState("SendForm"));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SpecificForm;
