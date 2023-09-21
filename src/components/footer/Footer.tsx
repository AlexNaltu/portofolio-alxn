import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-gradient-to-t from-purple-400 to-purple-800 flex justify-center mt-12">
      <div className="flex flex-col gap-4 p-8 text-white">
        <div className="flex flex-col sm:flex-row gap-2 max-w-lg items-center text-center sm:text-start">
          <Image
            src="/me.jpg"
            alt="/"
            width={150}
            height={100}
          />
          <h1 className="font-extralight">
            I am a Front-end Developer with no working experience .I finished a 5 months training course and now I am looking for
            my first job.I create cool websites that are fast and easy to use.
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Contact me at:</h1>
            <p className="text-lg">naltuok@gmail.com</p>
            <p className="text-lg">+49 01515 7491907</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">
              <Link
                href=""
                className="flex gap-3 items-center"
              >
                <AiOutlineInstagram size={20} />
                INSTAGRAM
              </Link>
            </p>
            <p>Follow me on Instagram</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">
              <Link
                href="https://github.com/AlexNaltu?tab=repositories"
                className="flex gap-3 items-center"
              >
                <AiFillGithub size={20} />
                GITHUB
              </Link>
            </p>
            <p>Watch the source codes from my projects</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">
              <Link
                href="https://www.linkedin.com/in/alex-naltu-14445b28b/"
                className="flex gap-3 items-center"
              >
                <AiFillLinkedin size={20} />
                LINKEDIN
              </Link>
            </p>
            <p>My LinkedIn Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
