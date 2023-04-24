import { Checkbox } from "@material-tailwind/react";

/**
 * A Material Tailwind checkbox component with a label and optional sub-label.
 * @param label The text for the checkbox label.
 * @param subLabel An optional sub-label to display below the checkbox label.
 * 
 * @return {JSX.Element} The Checkbox1 component.
 */
const AltCheckbox = ({ label, subLabel }) => {
  return (
    <div>
      <Checkbox
        color="green"
        ripple={true}
        label={label}
        defaultChecked
      />
      <p className="text-sm italic font-thin mb-2">{subLabel}</p>
    </div>
    
  );
};

export default AltCheckbox;
