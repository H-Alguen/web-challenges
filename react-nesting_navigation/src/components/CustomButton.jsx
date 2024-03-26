import React from "react";

function CustomButton({ type, onClick, ariaLabel, children }) {
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default CustomButton;
