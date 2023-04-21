import { Fragment } from "react";
import { Checkbox } from "@material-tailwind/react";

const Checkbox1 = ({ label,  }) => {
  return (
    <div class="flex">
      <div class="flex items-center h-5">
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
    </div>
  );
};

export default Checkbox1;
