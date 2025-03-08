import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

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
              <p className="font-light text-[0.875rem] leading-6 md:text-base mb-3 text-n-3 ">
                Brainwave unlocks the potential of AI powered applications
              </p>
              <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-[#252134]"
                  >
                    <img width={24} height={24} src={check} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className={
                "absolute left-4 right-4 bottom-4 border-[#FFFFFF]/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 "
              }
            />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border-[#FFFFFF]/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object=cover "
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-[#0E0C15]/0 to [#0E0C15]/90 lg:p-15">
                <h4 className="text-[2rem] leading-normal mb-4 ">
                  Photo Editing
                </h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-3 text-n-3 ">
                  Brainwave unlocks the potential of AI powered applications
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-[2rem] leading-normal mb-4 ">
                  Video Generation
                </h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[2rem] text-[#ADA8C3] ">
                  The world's most advanced video generator
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={` rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-[0.1rem] bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] rounded-2xl md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex h-10 w-10 bg-[#252134] md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index == 2
                            ? "flex items-center justify-center w-full h-full bg-[#15131D] rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-20rem bg-[#0E0C15] rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="robott"
                />
                <VideoChatMessage/>
                <VideoBar/>
              </div>
            </div>
          </div> 
          <Gradient/>
        </div>
      </div>
    </Section>
  );
}

export default Services;
