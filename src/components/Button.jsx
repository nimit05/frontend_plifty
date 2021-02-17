import React from "react";

export default function Button({children,onHandleClick }) {
  return (
    <button
      className= "uni_button_plifty"
      onClick={onHandleClick}
    >
      {children}
    </button>
  );
}
