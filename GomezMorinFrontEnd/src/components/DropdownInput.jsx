import React, {useState} from "react";
import { useFormContext } from "react-hook-form";

/**
 * A dropdown input component that uses react-hook-form for form management.
 *
 * @param {string} name - The name of the input.
 * @param {string} label - The label for the input.
 * @param {string} id - The ID for the input.
 * @param {Array<Object>} options - An array of options for the dropdown.
 * @param {string} defaultValue - The default value for the dropdown.
 * @param {string} pattern - The regex pattern for the input.
 * @returns {JSX.Element} - The DropdownInput component
 */
const DropdownInput = ({ name, label, id, options, defaultValue, pattern}) => {
  const { register } = useFormContext();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <label className="font-semibold text-md py-1" htmlFor={id}>
        {label}
      </label>
      <select
        {...register(name, { pattern: { value: pattern } })}
        className="px-4 py-2.5 border-gray-400 rounded-lg border focus:ring-blue-500 focus:border-blue-500 text-sm "
        name={name}
        id={id}
      >
        <option key={""} value={defaultValue}>
          {defaultValue ? defaultValue : "- Selecciona -"}
        </option>
        {options.map((option) => {
          if (option.value === defaultValue) return <div></div>;
          return (
            <option key={option._id} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
      {errorMessage && (
        <p className="font-semibold text-red-400 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default DropdownInput;
