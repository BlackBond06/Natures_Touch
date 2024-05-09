"use client";
import { Icon } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import SearchBox from "../SearchBox/SearchBox";
import Sidebar from "../Sidebar/Sidebar";
import { SearchBarInput } from "../InputEl/InputEl";
import useColorMode from "../../hooks/useColorMode";
import './Navbar.css';
type Props = {};
const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [colorMode, setColorMode] = useColorMode(); 
  // const [search, setSearch] = useState('');
  return (
    <>
      <SearchBox
        isOpen={open} 
        onClose={() => setOpen(false)}
        colorMode={colorMode}
      />
      <Sidebar
        isOpen={openSidebar} 
        onClose={() => setOpenSidebar(false)}
        colorMode={colorMode}
      />
      <div className="h-10 overflow-x-hidden dark:bg-[#0e0e1c]">
        <div className="flex flex-nowrap whitespace-nowrap min-w-full h-full border-b border-[#e7e7e9]">
          <div className="flex text-[#080808] dark:text-white items-center m-w-full sm:w-full text-xs sm:justify-around animate-wiggle gap-20">
            <span>*Natures Touch - Bespoke Tailoring At It's Finest.</span>
            <span>*Follow Us On Social Media @Natures_Touch</span>
            <span>*Free Delivery On All Orders Within Abuja.</span>
            </div>
          </div>
      </div>
      <div className="h-[157.5px] dark:bg-[#0e0e1c] shadow-md">
        <div className="min-h-24 flex items-center px-4 py-0 sm:px-8">
          <div className="flex items-center w-[100%] sm:w-1/4 dark:text-white">
            <div
              onClick={() => setOpenSidebar(true)}
              className="flex items-center justify-center cursor-pointer"
            >
              <HamburgerIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  marginRight: "50px",
                }}
              />
            </div>
            <div className="flex items-center relative w-[100%]">
              <div className="w-[50px] h-[50px]">
                <img src="./Assets/logo.png" alt="logo" />
              </div>
              <p className="text-xs italic absolute left-11 bottom-3 dark:text-white text-black">atures Touch</p>
            </div>
          </div>
          <div className="w-1/2 min-h-[56px] relative flex justify-end sm:justify-start">
            <SearchBarInput
              ref={inputRef}
              setOpen= {setOpen}
              placeholder="Search products"
            />
          </div>
          <div className="flex flex-1 justify-end gap-5 sm:gap-8 dark:text-white">
            <div className="hover:cursor-pointer">
              <Icon
                as={FaUser}
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
            <div className="relative hover:cursor-pointer dark:text-white">
              <Icon
                as={FaShoppingBag}
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <div className=" flex items-center justify-center w-6 h-6 bg-[#808080] absolute top-[-12px] left-3 rounded-full text-white">
                0
              </div>
            </div>
            <div className="hover:cursor-pointer dark:text-white">
              {colorMode === 'light' ? (
                <SunIcon
                  onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                  sx={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              
              ): (
                <MoonIcon
                  onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                  sx={{
                    width: "20px",
                    height: "20px",
              
                  }}
               />
              )}
            </div>
          </div>
        </div>
        <div className="items-center dark:text-white flex gap-12 justify-center  sm:text-base text-sm mt-4">
          <div className="hover-border-b relative cursor-pointer">SHOP MEN</div>
          <div className="hover-border-b relative cursor-pointer">SHOP WOMEN</div>
          <div className="hover-border-b relative cursor-pointer">SHOP KIDS</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
