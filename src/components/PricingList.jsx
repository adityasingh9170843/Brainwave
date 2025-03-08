import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";
function PricingList() {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap ">
      {pricing.map((item, index) => (
        <div
          id={item.id}
          key={index}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-[#0E0C15] border-[#252134] rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:odd:text-[#AC6AFF] [&>h4]:even:text-[#FFC876] [&>h4]:last:text-[#FF776F] "
        >
          <h4 className="text-[2rem] leading-normal mb-4">{item.title}</h4>
          <p className="font-light text-[0.875rem] leading-6 md:text-base min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-[2rem] leading-normal md:text-[2.5rem]">$</div>
                <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
              </>
            )}
          </div>
          <Button className={"w-full mb-6"} white={!!!item.price}>Get Started</Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-[#252134]"
              >
                <img
                  src={check}  
                  width={24}
                  height={24}  
                  alt="check"
                />
                <p className="font-light text-[0.875rem] leading-6 md:text-base ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div> 
      ))}
    </div>
  );
}

export default PricingList;
