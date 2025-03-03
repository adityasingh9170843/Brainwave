import React from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";


function Header() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if(openNavigation) {
    setOpenNavigation(false);
    }
    else{
      setOpenNavigation(true);
    }
  }

  const handleClick = () => {
    setOpenNavigation(!openNavigation);
  }
  return (
    <div className={`fixed top-0 left-0 z-50 w-full border-b border-[#252134] lg:bg-[#0E0C15]/90 lg:backdrop-blur-sm ${openNavigation ? "bg-[#F45500]" : "bg-[#0E0C15]/90 backdrop:-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={50} />
        </a>
        <nav className={` fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0E0C15] lg:static lg:flex lg:mx-auto lg:bg-transparent ${openNavigation ? "flex" : "hidden"}`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-[#FFFFFF] transition-colors hover:text-[#AC6AFF] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-[#FFFFFF]"
                    : "lg:text-[#FFFFFF]/50"
                } lg:leading-5 lg:hover:text-[#FFFFFF] xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          {openNavigation && <HamburgerMenu />}
        </nav>
        <a
          href="#singup"
          className="button hidden mr-8 text-[#FFFFFF]/50 transition-colors hover:text-[#FFFFFF] lg:block "
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden  " px="px-3" onClick={toggleNavigation} >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
