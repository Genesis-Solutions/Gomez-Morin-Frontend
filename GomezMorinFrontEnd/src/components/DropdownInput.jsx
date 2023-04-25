import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * A dropdown input component that uses react-hook-form for form management.
 *
 * @param {string} name - The name of the input.
 * @param {string} label - The label for the input.
 * @param {string} id - The ID for the input.
 * @param {Array<Object>} options - An array of options for the dropdown.
 * @returns {JSX.Element} - The DropdownInput component
 */
const DropdownInput = ({ name, label, id, options }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <label className="font-semibold text-md py-1" htmlFor={id}>
        {label}
      </label>
      <select
        {...register(name)}
        className="px-4 py-2.5 border-gray-400 rounded-lg border focus:ring-blue-500 focus:border-blue-500 text-sm "
        name={name}
        id={id}
      >
        <option key={""}>- Select -</option>
        {options.map((option) => (
          <option key={option._id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
