import React from "react";
import RadioButton from "./RadioButton";

/**
 * A functional component that renders a question and a list of radio button options.
 *
 * @param question the text of the question to be displayed
 * @param options an array of objects representing the radio button options, with each object containing the label, name, and value properties
 * @returns a div element containing the question and radio button options
 */
const RadioButtonForm = ({ question, options }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <p className="font-semibold text-md py-1">{question}</p>
      {options.map((option, key) => (
        <RadioButton
          key={key}
          label={option.label}
          name={option.name}
          value={option.value}
          id={`${option.label}${option.name}`}
        />
      ))}
    </div>
  );
};

export default RadioButtonForm;
