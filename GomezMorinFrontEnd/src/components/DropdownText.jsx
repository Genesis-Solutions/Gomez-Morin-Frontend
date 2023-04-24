/**
 * This component renders a dropdown text section that displays a header and two text containers that can be toggled on click.
 * @param {string} leftText - The text content for the left text container.
 * @param {string} rightText - The text content for the right text container.
 * @param {string} headerIcon - The icon image url for the header.
 * @param {string} headerText - The text content for the header.
 * @returns {JSX.Element} - The dropdown text component JSX element.
 */
import { useState } from "react";
import IconTitle from "./IconTitle";
import TextContainer from "./TextContainer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropdownText = ({ leftText, rightText, headerIcon, headerText }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * This function toggles the dropdown text display on click.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      {/* Add flex justify-center to center the button */}
      <div className="flex justify-center">
        <button
          className="w-full max-w-lg flex items-center"
          onClick={toggleDropdown}
        >
          <div className="flex-shrink-0">
            <IconTitle image={headerIcon} headerText={headerText} />
          </div>
          <div>
            <ArrowDropDownIcon fontSize="large" />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-white shadow-lg z-10">
          {/* Add justify-center to center the text containers */}
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-1/2 px-4 py-8 text-center h-1/2">
              <TextContainer text={leftText} />
            </div>
            <div className="w-full lg:w-1/2 px-4 py-8 text-center h-1/2">
              <TextContainer text={rightText} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownText;
