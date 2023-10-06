import { AboutData } from "@/data/aboutdata";
import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div className="flex items-start bg-purple-200 p-8 shadow-2xl border-2 border-purple-200">
      <div className="flex flex-col gap-5 w-[200px]">
        <h1 className="font-black text-sm sm:text-base md:text-xl">MY SKILLS</h1>
        <div>
          {AboutData.map((about, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 my-3"
              >
                <Image
                  src={about.image}
                  alt="/"
                  width={20}
                  height={20}
                />
                <p className="font-extralight text-xs sm:text-base md:text-lg">{about.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-black text-sm sm:text-base md:text-md">CONTACT ME AT:</h1>
        <p className="text-slate-400">naltuok@gmail.com</p>
        <p className="text-slate-400">+49 01515 7491907</p>
      </div>
    </div>
  );
}

export default Skills;
