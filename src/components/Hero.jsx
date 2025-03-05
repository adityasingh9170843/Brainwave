import React from "react";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogo from "./CompanyLogo";
function Hero() {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[5rem] -mt-[5.rem]  "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative"
        ref={parallaxRef}
      >
        <div className="relative z-1 max-w-[62rem] mx-[auto] text-center mb-[4rem] md:mb-20 lg:mb:[6rem] lg:text-center">
          <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] text-4xl mb-6">
            Explore the Possibilites of&nbsp;AI chatting with BrainwaveCurve
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
          <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto mt-7 mb-6 text-[#CAC6DD] lg:mb-8">
            Unleash the power of AI within Brainwave. upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white className="p-2.5">
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem]  mx-auto md:max-w-5xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] bg-cover bg-center w-full h-full ">
            <div className="relative bg-[#150c0c] rounded-[1rem]">
              <div className="h-[1.4rem] bg-[#43435C] rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-{1.7} translate-y-[8%] md:scale-[1] md:translate-y-[10%] lg:-translate-y-[23%]"
                  alt="AI"
                  width={1024}
                  height={490}
                />
                <Generating
                  className={`absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2`}
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-[#474060]/40 backdrop-blur border border-[#FFFFFF]/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="code Generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[240%] -translate-x-1/2 md:-top-[46%] md:w-[138%]  lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogo className="hidden relative z-10 mt-20 lg:block"/>
      </div>
      
    </Section>
  );
}

export default Hero;
