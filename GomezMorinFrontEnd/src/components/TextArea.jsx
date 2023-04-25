import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * A component for rendering a textarea input field.
 * 
 * @param {string} label - The label text for the textarea.
 * @param {string} name - The name of the textarea input field.
 * @param {string} placeholder - The placeholder text for the textarea.
 * @param {string} defaultValue - The default value for the textarea.
 * @returns {JSX.Element} - The rendered component.
 */
const TextArea = ({ label, name, placeholder, defaultValue }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="comment" className="font-semibold text-md">
        {" "}{label}
      </label>
      <textarea
        {...register(name)}
        defaultValue={defaultValue}
        className="p-1 rounded-md shadow-md ring-1 ring-gray-200 w-full h-20 px-3"
        id={name}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

export default TextArea;
