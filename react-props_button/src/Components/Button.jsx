import React from "react";

function Button({ color, disabled, text, onEventName }) {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      disabled={disabled}
      onClick={onEventName}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
