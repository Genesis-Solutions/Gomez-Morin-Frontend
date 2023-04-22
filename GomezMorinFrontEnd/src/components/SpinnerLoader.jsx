// import react from React;
import { ColorRing } from 'react-loader-spinner';

const SpinnerLoader = ({ colorSpin }) => {
    return(
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#AFD135", {colorSpin}, {colorSpin}, {colorSpin}, {colorSpin}]}
        />
    );
};

export default SpinnerLoader;