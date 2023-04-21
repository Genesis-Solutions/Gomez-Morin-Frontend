import { Fragment } from "react";
import { Checkbox } from "@material-tailwind/react";

const Checkbox1 = ({ label }) => {
    return (
        <Fragment>
            <Checkbox id="ripple-on" label={label} ripple={true} />
        </Fragment>
    );
};

export default Checkbox1;