import React from "react";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import RadioButtonForm from "../../components/RadioButtonForm";
import { useDispatch, useSelector } from "react-redux";
import { setFormState, showInitialForm } from "../../states/formSlice";
import DropdownInput from "../../components/DropdownInput";

/**
 * An array of equipment options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
const equipmentOptions = [
  {
    label: "Si",
    name: "selfEquipment",
    value: true,
  },
  {
    label: "No",
    name: "selfEquipment",
    value: false,
  },
];

/**
 * An array of electric options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the voltage value of the option.
 */
const electricOptions = [
  {
    label: "220 Voltios",
    name: "electricInstallation",
    value: "220 Voltios",
  },
  {
    label: "110 Voltios",
    name: "electricInstallation",
    value: "110 Voltios",
  },
];

/**
 * An array of software options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
const softwareOptions = [
  {
    label: "Si",
    name: "softEquipment",
    value: true,
  },
  {
    label: "No",
    name: "softEquipment",
    value: false,
  },
];

/**
 * An array of public type options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
const publicType = [
  {
    label: "Público",
    name: "publicEvent",
    value: true,
  },
  {
    label: "Privado",
    name: "publicEvent",
    value: true,
  },
];

/**
 * An array of mounting types.
 *
 * Each option is an object containing a value and an id.
 * The value represents the text to display and the id represents the identifier of the option.
 */
const mountingTypes = [
  { value: "Auditorio", _id: "1" },
  { value: "Escuela", _id: "2" },
  { value: "Mesa Rusa", _id: "3" },
  { value: "Herradura Tipo U", _id: "4" },
];

/**
 * An array of sound options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
const soundOptions = [
  {
    label: "Si",
    name: "sound",
    value: true,
  },
  {
    label: "No",
    name: "sound",
    value: false,
  },
];

/**
 * An array of microphone options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
const microphoneOptions = [
  {
    label: "Si",
    name: "microphone",
    value: true,
  },
  {
    label: "No",
    name: "microphone",
    value: false,
  },
];

/**
 * A React component for displaying the Specific Form.
 * @returns The JSX element that renders the initial information form.
 */
const SpecificForm = () => {
  const dispatch = useDispatch();
  const typeEvent = useSelector((state) => state.form.typeEventForm);

  console.log(typeEvent)
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
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="number"
            name="phoneEmergency"
            label="Teléfono de emergencia"
            placeholder="4441234566"
            defaultValue=""
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="text"
            name="direction"
            label="Dirección del solicitante"
            placeholder="Av. Parque Tecnológico #468"
            defaultValue=""
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <InputForm
            type="number"
            name="postalCode"
            label="Código Postal"
            placeholder="76123"
            defaultValue=""
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
            defaultValue=""
          />
        </div>
        <div className="col-span-2">
          <TextArea
            type="text"
            name="specificDescription"
            label="Descripción detallada del evento"
            placeholder="Se mostrarán diferentes bandas en rondas"
            defaultValue=""
          />
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
                defaultValue=""
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="text"
                name="ages"
                label="Rango de edades del público"
                placeholder="18 - 25"
                defaultValue=""
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="text"
                name="equipment"
                label="Equipo requerido de Gómez Morín"
                placeholder="Computadoras, pantallas, proyectores, etc.."
                defaultValue=""
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
                defaultValue=""
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
                name="requireSpace"
                label={`Espacio requerido para el ${typeEvent === "Evento" ? "evento" : "exposición"}`}
                placeholder="5"
                defaultValue=""
              />
            </div>
          </>
        )}

        {/* Questions of Exposicion */}
        {(typeEvent === "Exposición") && (
          <>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="date"
                name="openingDayDate"
                label="Fecha de inauguración"
                defaultValue=""
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <InputForm
                type="string"
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
