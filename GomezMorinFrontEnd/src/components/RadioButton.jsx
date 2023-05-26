import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * A functional component that renders a radio button input and label
 * 
 * @param {object} props - The props object containing the following properties:
 * @param {string} props.label - The label text to display alongside the radio button
 * @param {string} props.name - The name attribute for the radio button input
 * @param {string} props.value - The value attribute for the radio button input
 * @param {string} props.id - The id attribute for the radio button input
 * @returns {JSX.Element} - The rendered component
 */
const RadioButton = ({ label, name, value, id }) => {
  const { register } = useFormContext();
  return (
    <div className="flex w-full gap-3  h-full">
      <input
        {...register(name)}
        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        type="radio"
        id={id}
        required
        value={value}
      />
      <label htmlFor={id} className="font-medium text-sm py-1">
        {label}{" "}
      </label>
    </div>
  );
};

export default RadioButton;
