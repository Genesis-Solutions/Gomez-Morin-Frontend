import React from "react";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import CheckBoxInput from "../../components/CheckBoxInput";
import TextArea from "../../components/TextArea";
import RadioButtonForm from "../../components/RadioButtonForm";
import { useDispatch, useSelector } from "react-redux";
import { setFormState, showInitialForm } from "../../states/formSlice";
import DropdownInput from "../../components/DropdownInput";

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

const electricOptions = [
  {
    label: "220 Voltios",
    name: "selfEquipment",
    value: "220 Voltios",
  },
  {
    label: "110 Voltios",
    name: "selfEquipment",
    value: "110 Voltios",
  },
];

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

const mountingTypes = [
  { value: "Auditorio", _id: "1" },
  { value: "Escuela", _id: "2" },
  { value: "Mesa Rusa", _id: "3" },
  { value: "Herradura Tipo U", _id: "3" },
];

const SpecificForm = () => {
  const dispatch = useDispatch();
  const typeEvent = useSelector((state) => state.form.typeEventForm);

  return (
    <>
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
            type="text"
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
