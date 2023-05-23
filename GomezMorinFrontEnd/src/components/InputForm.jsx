import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

/**
 * This is a component for an input in a form using the hook 'Use Form'.
 *
 * @param {string} label - The text that will appear above the input.
 * @param {string} name - The name of the value that will be sent by the form.
 * @param {string} type - The type of the input.
 * @param {string} placeholder - The text that will be shown on the input space.
 * @param {string} defaultValue - The value that will have by default.
 * @param {string} pattern - The pattern that the input will have to follow.
 * @param {bool} required - The bool to decide if its a required input
 * @param {int} min - The int to decide the min length of the input
 * @param {int} max - The int to decide decide if its a required input
 * @returns {JSX.Element} The JSX element representing a input form UI.
 */

const InputForm = ({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  pattern,
  required = false,
  accept,
  minLength,
  maxLength,
  min,
  max
}) => {
  const { register } = useFormContext();
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedExtensions = /(\.pdf)$/i;

    if (!allowedExtensions.test(file.name)) {
      setErrorMessage("Solo se permiten archivos PDF.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <label htmlFor={name} className="font-semibold text-md py-1">
        {label}{" "}
      </label>
      <input
        {...register(name, { pattern: { value: pattern } })}
        defaultValue={defaultValue}
        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
        accept={accept}
        minLength={minLength}
        maxLength={maxLength}
        min = {min}
        max = {max}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputForm;
