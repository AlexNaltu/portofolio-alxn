import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
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
            <li className="hover:text-purple-950 ease-in">About</li>
          </Link>
          <Link href="#">
            <li className="hover:text-purple-950 ease-in bg-purple-400 p-4 text-white">Get in Touch</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
