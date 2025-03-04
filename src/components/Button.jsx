import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

function Button({ className, href, onClick, children, px, white }) {
  const classes = ` ${className || ""} button relative  items-center justify-center h-11 transition-colors hover:text-[#AC6AFF] cursor-pointer ${
    px || "px-7"
  } ${white ? "text-[#0E0C15]" : "text-[#FFFFFF]"} `;
  const spanClasses = "relative z-10";

  
  if (href) {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
}

export default Button;
