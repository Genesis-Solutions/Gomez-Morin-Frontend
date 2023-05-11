import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import { FileCopy } from "@mui/icons-material";

/**
 * A React component that copies a given text to clipboard
 *
 * @param {string} textToCopy - The text to be copied to clipboard
 * @returns {JSX.Element} - A React JSX element representing a clipboard UI
 */
const Clipboard = ({ textToCopy, label }) => {
  const textRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  /**
   * Handles copying the text to clipboard when the copy button is clicked
   */
  const handleCopyToClipboard = () => {
    const text = textRef.current.textContent;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  /**
   * Resets the copy state to false when the copied text is clicked again
   */
  const handleResetCopyState = () => {
    setIsCopied(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <label className="font-semibold text-md py-1">
        {label}{" "}
      </label>
    <div className="border border-gray-400 rounded-md flex items-center px-4 py-2">
      <p
        ref={textRef}
        className="h-auto text-base flex-1 cursor-pointer select-none break-all "
        onClick={handleResetCopyState}
      >
        {textToCopy}
      </p>
      <Button
        aria-label="copiar"
        variant="outlined"
        size="small"
        onClick={handleCopyToClipboard}
        disabled={isCopied}
      >
        {isCopied ? "Copiado!" : <FileCopy />}
      </Button>
    </div>
    </div>
  );
};

export default Clipboard;
