import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight} from "./design/Benefits"
import ClipPath from "../assets/svg/ClipPath";
function Benefits() {
  return (
    <Section id="features">
      <div className="max-w-[77.5rem] mx-auto px-9 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl "
          title="Chat Smarter , Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-[length:100%_100%] bg-no-repeat md:max-w-[24rem] z-2"
              key={item.id}
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="mb-5 text-2xl leading-normal ">
                  {item.title}
                </h5>
                <p className="font-light text-[1.2rem] leading-6 md:text-base  mb-6 text-[#ADA8C3]">
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} width={48} height={48} alt="" />
                  <p className="ml-auto text-xs font-bold text-n-1 uppercase tracking-wider ">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight/>}

              <div className="absolute inset-0.5 b-n-8" style={{clipPath:"url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
                  <ClipPath/>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
