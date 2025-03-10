import React from "react";
import { companyLogos } from "../constants";

function CompanyLogo({ className }) {
  return (
    <div className={` ${className || ""}`}>
      <h5 className="tagline mb-6 text-center text-[#FFFFFF]/50">
        Helping companies around the world at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={logo} alt="company" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyLogo;
