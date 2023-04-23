import { ColorRing } from "react-loader-spinner";

/**
* This component creates a spinner loader using the ColorRing component from "react-loader-spinner".
* @param {string} colorSpin - The color of the spinner, passed as a prop to the component.
*
* @returns {JSX.Element} - Returns a JSX element that displays the spinner loader with the specified color.
*/
const SpinnerLoader = ({ colorSpin }) => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={[
        "#AFD135",
        { colorSpin },
        { colorSpin },
        { colorSpin },
        { colorSpin },
      ]}
    />
  );
};

export default SpinnerLoader;
