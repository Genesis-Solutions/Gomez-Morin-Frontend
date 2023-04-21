import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * This is a component for an input in a form using the hook 'Use Form'.
 * @param {string} label - The text that will appear above the input.
 * @param {string} name - The name of the value that will be sent by the form.
 * @param {string} type - The type of the input.
 * @param {string} placeholder - The text that will be shown on the input space.
 * @param {string} defaultValue - The value that will have by default.
 */

const InputForm = ({ label, name, type, placeholder, defaultValue }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold text-md py-1">
        {label}{" "}
      </label>
      <input
        {...register(name)}
        defaultValue={defaultValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

export default InputForm;