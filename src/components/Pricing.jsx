import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import {LeftLine, RightLine} from "./design/Pricing";

function Pricing() {
  return (
    <Section id="pricing" className=" overflow-hidden ">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] pointer-events-none -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              alt="stars"
              className="w-full "
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          tag="get started with brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
            <PricingList/>
            <LeftLine/>
            <RightLine/>
        </div>
        <div className="flex justify-center mt-10">
            <a className="text-xs font-code uppercase tracking-wider" href="/pricing">See the full details</a>
        </div>
      </div>
    </Section>
  );
}

export default Pricing;
