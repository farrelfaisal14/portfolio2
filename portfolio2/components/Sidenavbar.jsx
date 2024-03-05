import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { RxHome } from "react-icons/rx";
import { MdOutlineContactMail } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function SideNavbar() {
  return (
    <div className="p-6 flex flex-col justify-start items-center bg-white z-20">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="flex flex-col justify-start items-center gap-4 mt-6">
          <Image
            src="/fotoprofil.png"
            width={150}
            height={150}
            className="mx-auto"
          />
          <h1 className="text-2xl text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full mt-2">
            Mohammed Farrel Faisal
          </h1>
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <IoCloudDownloadOutline className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-xs text-gray-800 group-hover:text-white font-semibold ">
              Download CV
            </h3>
          </div>
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FaInstagram className="text-2xl text-gray-600 group-hover:text-white " />
            <CiLinkedin className="text-2xl text-gray-600 group-hover:text-white " />
            <BsTwitterX className="text-2xl text-gray-600 group-hover:text-white " />
          </div>
          <div className=" my-4 border-b border-gray-100 pb-4">
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Profile
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <RxHome className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Home
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                About
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <GiSkills className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Skills
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <GrProjects className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Projects
              </h3>
            </div>
          </div>
          {/* setting  */}
          <div className=" my-4 border-b border-gray-100 pb-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineContactMail className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Contact
              </h3>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
