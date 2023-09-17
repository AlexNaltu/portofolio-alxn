import { PortofolioData } from "@/data/portofoliodata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

function PortofolioWebsite() {
  return (
    <div>
      <div>
        {PortofolioData.map((portofolio, index) => {
          return (
            <div key={index}>
              <div className="flex justify-center gap-4 my-20">
                <div className="flex flex-col gap-2 w-fit m-3">
                  <h1 className="bg-purple-500 text-white text-4xl font-bold w-full py-16 text-center transition hover:scale-105 duration-500 ease-in cursor-pointer px-3">
                    {portofolio.name}
                  </h1>
                  <Link
                    href={portofolio.link}
                    className="font-black text-lg text-purple-700 flex gap-2 items-center hover:text-purple-950 ease-in"
                  >
                    <IoIosArrowForward size={30} />
                    {portofolio.title}
                  </Link>
                  <Link href={portofolio.githubLink} className="flex items-center gap-2 bg-purple-500 w-fit p-3 font-bold text-white">
                    <AiFillGithub size={20} />{portofolio.github}
                  </Link>
                  <p className="font-extralight">{portofolio.description}</p>
                </div>
                <Image
                  src={portofolio.image}
                  alt="/"
                  width={400}
                  height={100}
                  className="hidden sm:inline-flex xl:hidden p-5 m-3 bg-purple-50"
                />
                <Image
                  src={portofolio.bigImage}
                  alt="/"
                  width={1000}
                  height={10}
                  className="hidden xl:inline-flex p-5 m-3 bg-purple-50"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortofolioWebsite;
