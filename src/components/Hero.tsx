import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="my-17 mx-2 sm:my-28">
      <div className="flex flex-col gap-2 items-center mb-10 text-center">
        <h1 className="text-xl sm:text-4xl lg:text-6xl font-bold">Successful Front-end Development</h1>
        <p className="text-xs sm:text-sm md:text-xl lg:text-3xl font-extralight">
          Hi I am Alex a Junior Front-end Developer with 6 months experience.
          <br />I am 18 Years old. I finished 5 months training course at
          <span className="font-black text-purple-500 hover:text-purple-950 ease-in">
            <Link href="https://itschool.ro/">ITSCHOOL.</Link>
          </span>
          <br />
          I can work with JavaScript and TypeScript. <br /> I speak English,German and Romanian.
        </p>
      </div>
      <div className="flex flex-col gap-3 text-center bg-purple-100/20 w-fit p-6 mx-auto">
        <Image
          src="/phone.png"
          alt="/"
          width={400}
          height={100}
        />
        <h2 className="text-2xl font-bold">Front-end development</h2>
        <p className="font-extralight text-lg">
          Responsive websites built for an <br /> optimal user experience that <br /> achieves your business goals
        </p>
      </div>
    </div>
  );
}

export default Hero;
