import { AboutData } from "@/data/aboutdata";
import Image from "next/image";
import React from "react";
import Skills from "./Skills";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 my-16 md:my-32 mx-4">
      <Skills />
      <div className="w-fit border-2 border-white shadow-2xl p-4 md:p-10">
        <h1 className="text-sm sm:text-lg md:text-3xl font-light px-2">
          My name is Naltu Alexandru , I am 18 years old, I like drawing,exercise and building websites.I have a good eye for
          design as I myself am an artist (my drawings are on my Instagram profile).I live in Germany and as expected I finished
          school here. My career path started at the beggining of this year, and I really enjoy learning new stuff about building
          and maintaining websites.My only goal is to improve on this path and to get my first job.I finished a 5 months training
          course at{" "}
          <span className="text-purple-500">
            <Link href="https://itschool.ro/">itschool.ro</Link>
          </span>
          .I can speak German (B1-B2),English(C2) and Romanian(Mother-language)
        </h1>
      </div>
    </div>
  );
}

export default AboutMe;
