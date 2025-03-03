import React from "react";
import Section from "./Section";
import { curve } from "../assets";
function Hero() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className=" relative">
        <div className="relative z-1 max-w-[62rem] mx-[auto] text-center mb-[4rem] md:mb-20 lg:mb:[6rem] lg:text-center">
          <h1 className="h1 text-4xl mb-6">
            Explore the Possibilites of AI chatting with Brainwave
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p></p>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
