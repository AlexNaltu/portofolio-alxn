import { WebsiteData } from "@/data/websitedata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Website() {
  return (
    <div>
      <div>
        {WebsiteData.map((web, index) => {
          return (
            <div key={index}>
              <div className="flex justify-center gap-4 my-5">
                <div className="flex flex-col gap-2 max-w-[300px] m-3">
                  <h1 className="bg-purple-500 text-white text-4xl font-bold w-full py-16 text-center transition hover:scale-105 duration-500 ease-in-out cursor-pointer px-3">
                    {web.name}
                  </h1>
                  <Link
                    href={web.link}
                    className="font-black text-lg text-purple-700 flex gap-2 items-center hover:text-purple-950 ease-in"
                  >
                    <IoIosArrowForward size={30} />
                    {web.title}
                  </Link>
                  <p className="font-extralight">{web.description}</p>
                </div>
                <Image
                  src={web.image}
                  alt="/"
                  width={500}
                  height={100}
                  className="hidden md:inline-flex xl:hidden p-5 m-3 bg-purple-50"
                />
                <Image
                  src={web.bigImage}
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

export default Website;
