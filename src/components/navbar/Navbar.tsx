import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="mx-3 my-7 flex justify-between text-purple-700 font-black items-center transition ">
        <h2 className="text-xl md:text-3xl hover:text-purple-950 ease-in">NALTU ALEX</h2>
        <ul className="hidden sm:inline-flex text-xs lg:text-xl gap-6 items-center cursor-pointer">
          <li className="hover:text-purple-950 ease-in">Home</li>
          <li className="hover:text-purple-950 ease-in">Portofolio</li>
          <li className="hover:text-purple-950 ease-in">About</li>
          <li className="hover:text-purple-950 ease-in">Articles</li>
          <li className="hover:text-purple-950 ease-in bg-purple-400 p-4 text-white">Get in Touch</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
