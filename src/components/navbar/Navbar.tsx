"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function Navbar() {
  const [nav, SetNav] = useState(false);

  const handleNav = () => {
    SetNav(!nav);
  };

  return (
    <div>
      <div className="mx-3 my-7 flex justify-between text-purple-700 font-black items-center transition ">
        <h2 className="text-xl md:text-3xl hover:text-purple-950 ease-in">NALTU ALEX</h2>
        <ul className="hidden sm:inline-flex text-xs lg:text-xl gap-6 items-center cursor-pointer">
          <Link href="/">
            <li className="hover:text-purple-950 ease-in">Home</li>
          </Link>
          <Link href="/portofolio">
            <li className="hover:text-purple-950 ease-in">Projects</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-purple-950 ease-in bg-purple-400 p-4 text-white">About Me</li>
          </Link>
        </ul>
        <div
          onClick={handleNav}
          className="block sm:hidden"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        {/* Mobile Menu*/}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex w-[50%] h-screen bg-white bg-cover bg-no-repeat bg-center text-left ease-in duration-300 z-[2]"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex  w-full h-screen  bg-cover bg-no-repeat bg-center text-left ease-in duration-300"
          }
        >
          <ul className={` text-xl m-5 flex flex-col gap-5`}>
            <li className=" hover:text-purple-950 ease-in">
              <Link href="/">Home</Link>
            </li>
            <li className=" hover:text-purple-950 ease-in0">
              <Link href="/portofolio">Projects</Link>
            </li>
            <li className=" hover:text-purple-950 ease-in">
              <Link href="/about">About Me</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
