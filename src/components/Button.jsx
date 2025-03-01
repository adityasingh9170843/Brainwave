import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import "./button.css";

function Button({ className, href, onClick, children, px, white }) {
  
  return (
    <button className="button">
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
}

export default Button;
