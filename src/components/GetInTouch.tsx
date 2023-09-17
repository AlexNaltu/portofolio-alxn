import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function GetInTouch() {
  return (
    <div className="flex flex-col gap-3 items-center my-10">
      <Link
        href="#"
        className="flex items-center text-lg sm:text-2xl font-bold bg-purple-600 w-fit p-4 text-white"
      >
        Get In Touch
        <IoIosArrowForward size={30} />
      </Link>
      <Link
        href="/portofolio"
        className="underline text-purple-700"
      >
        View all my Projects
      </Link>
    </div>
  );
}

export default GetInTouch;
