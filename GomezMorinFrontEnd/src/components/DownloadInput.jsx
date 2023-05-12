import React from "react";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

/**
 * A React component that downloads a file
 *
 * @param {string} text - Title of file
 * @returns {JSX.Element} - A React JSX element representing a clipboard UI
 */
const DownloadInput = ({ text, label, action }) => {
  
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <label className="font-semibold text-md py-1">
        {label}{" "}
      </label>
    <div className="border border-gray-400 rounded-md flex items-center px-4 py-2">
      <p
        className="h-auto text-base flex-1 cursor-pointer select-none break-all "
      >
        {text}
      </p>
      <Button
        aria-label="copiar"
        variant="outlined"
        size="small"
        onClick = {action}
      >
      <Download />
      </Button>
    </div>
    </div>
  );
};

export default DownloadInput;
