import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * This is a component for an input in a form using the hook 'Use Form'.
 *
 * @param {string} label - The text that will appear above the input.
 * @param {string} name - The name of the value that will be sent by the form.
 * @param {string} type - The type of the input.
 * @param {string} placeholder - The text that will be shown on the input space.
 * @param {string} defaultValue - The value that will have by default.
 * @returns {JSX.Element} The JSX element representing a input form UI.
 */

const CheckBoxInput = ({ label, name, onChange, subLabel }) => {
  const { register } = useFormContext();
  const handleOnChange = (event) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <div className="grid grid-rows-2 items-center">
      <div className="w-full">
        <input
          {...register(name)}
          className="h-5 w-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="checkbox"
          id={name}
          onChange={handleOnChange}
        />
        <label htmlFor={name} className="font-semibold text-md py-1 ml-6">
          {label}
        </label>
      </div>
      <div className="w-full">
        <p className="text-sm italic font-thin thin mb-2 text-gray-500">
          {subLabel}
        </p>
      </div>
    </div>
  );
};

export default CheckBoxInput;
