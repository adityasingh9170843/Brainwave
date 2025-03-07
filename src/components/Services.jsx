import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1 } from "../assets";
import {brainwaveServices,brainwaveServicesIcons} from "../constants";
import Generating from "./Generating";
function Services() {
  return (
    <Section id="how-to-use">
      <div className="max-w-[77.5rem] mx-auto px-9 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI powered applications"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-[#FFFFFF]/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="h-full w-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="Smartest AI"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="text-[2rem] leading-normal mb-4 ">Smartest AI</h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-3 text-n-3 ">Brainwave unlocks the potential of AI powered applications</p>
                <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                    {brainwaveServices.map((item,index) => (
                        <li key={index} className="flex items-start py-4 border-t border-[#252134]">
                            <img width={24} height={24} src={check} alt="" />
                            <p className="ml-4">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Generating className={"absolute left-4 right-4 bottom-4 border-[#FFFFFF]/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 "}/>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Services;
