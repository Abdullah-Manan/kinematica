"use client";
import React, { useState } from "react";
import logo from "../../../public/assets/bottom-navbar/logo.svg";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ResponsiveNavbar from "./ResponsiveNavbar";

function BottomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showServiceInfo, setServiceInfo] = useState(false);
  const [showIndustreisInfo, setIndustriesInfo] = useState(false);
  const [showScienceInfo, setScienceInfo] = useState(false);
  const [showMediaInfo, setMediaInfo] = useState(false);

  const hoverData = {
    product: [
      {
        name: "POLYTRON® Batch Dispersers",
        link: "/",
      },
      {
        name: "MEGATRON® Inline Dispersers - Production",
        link: "/",
      },
      {
        name: "MEGATRON® Inline Dispersers - Lab",
        link: "/",
      },
      {
        name: "REACTRON® Highly Scalable Reactors",
        link: "/",
      },
      {
        name: "BIOTRONA® Highly Turbulent Mixers",
        link: "/",
      },
      {
        name: "POLYMIX® Mills and Stirrers",
        link: "/",
      },
      {
        name: "MICROTRON® Mixers and Blenders",
        link: "/",
      },
      {
        name: "ATOMIX® High Pressure Homogenizer",
        link: "/",
      },
      {
        name: "SONOMECHANICS® Ultrasonic Homogenizing",
        link: "/",
      },
    ],
    services: [
      {
        name: "Service / Repair",
        link: "/",
      },
      {
        name: "Warranty",
        link: "/",
      },
      {
        name: "Prototyping Request",
        link: "/",
      },
      {
        name: "Contact Form",
        link: "/",
      },
      {
        name: "Become an Ambassador",
        link: "/",
      },
    ],
    industries: [
      {
        name: "Pharma",
        link: "/",
      },
      {
        name: "Chemical",
        link: "/",
      },
      {
        name: "Cosmetics",
        link: "/",
      },
      {
        name: "Food",
        link: "/",
      },
      {
        name: "Life Science",
        link: "/",
      },
    ],

    science: [
      {
        name: "Science",
        link: "/",
      },
      {
        name: "Projects",
        link: "/",
      },
      {
        name: "Contact",
        link: "/",
      },
      {
        name: "Case Studies",
        link: "/",
      },
    ],
    mediacenter: [
      {
        name: "Download Center",
        link: "/",
      },
      {
        name: "Video Center",
        link: "/",
      },
    ],
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="w-full h-24 bg-white shadow sticky  top-0 z-10 ">
        <div className="bg-white h-24 flex justify-between items-center lg:px-20 px-10">
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" className=" h-64 w-64" priority />
            </Link>
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="relative">
              <div className=" flex flex-col gap-[3px]">
                {menuOpen ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-xl font-thin"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-xl font-thin"
                  />
                )}
              </div>
            </button>
          </div>

          <div className="  h-24 lg:block hidden">
            <div className="gap-8 flex h-24">
              <div className="group text-cyan-950 h-24 flex items-center text-base font-bold font-['Inter']  tracking-wide  relative  hover:text-red-500  cursor-pointer">
                <Link href="/products" className="uppercase ">
                  Products
                </Link>
                <div className=" bg-red-600 px-4 pb-4 pt-6 absolute top-[6rem]   flex flex-col gap-1 invisible group-hover:visible">
                  {hoverData.product.map((product) => (
                    <div className="flex flex-col gap-1 w-[26rem]">
                      <Link
                        href={product.link}
                        className=" text-white text-[16px] font-medium font-inherit hover:font-bold "
                      >
                        {product.name}
                      </Link>
                      <div className="bg-[#FFF] h-[1px]"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group cursor-pointer text-cyan-950 h-24 flex items-center text-base font-bold font-['Inter']  leading-relaxed tracking-wide relative hover:text-red-500 ">
                <Link href="/service" className="uppercase ">
                  Service
                </Link>
                <div className=" bg-red-600 px-4 pb-4 pt-6 absolute top-[6rem]   flex flex-col gap-1 invisible group-hover:visible">
                  {hoverData.services.map((service) => (
                    <div className="flex flex-col gap-1">
                      <Link
                        href={service.link}
                        className=" text-white text-[14px] font-medium font-inherit w-48 hover:font-bold "
                      >
                        {service.name}
                      </Link>
                      <div className="bg-[#FFF] h-[1px]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="group cursor-pointer text-cyan-950 h-24 flex items-center text-base font-bold font-['Inter']  leading-relaxed tracking-wide hover:text-red-500 ">
                <Link href="/industries" className="uppercase ">
                  Industries
                </Link>
                <div className=" bg-red-600 px-4 pb-4 pt-6 absolute top-[6rem]    flex flex-col gap-1 invisible group-hover:visible">
                  {hoverData.industries.map((industries) => (
                    <div className="flex flex-col gap-1">
                      <Link
                        href={industries.link}
                        className=" text-white text-[14px] font-medium font-inherit w-36 hover:font-bold "
                      >
                        {industries.name}
                      </Link>
                      <div className="bg-[#FFF] h-[1px]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="group cursor-pointer text-cyan-950 h-24 flex items-center text-base font-bold font-['Inter']  leading-relaxed tracking-wide hover:text-red-500">
                <Link href="/science" className="uppercase ">
                  Science
                </Link>
                <div className=" bg-red-600 px-4 pb-4 pt-6 absolute top-[6rem]   flex flex-col gap-1 invisible group-hover:visible">
                  {hoverData.science.map((science) => (
                    <div className="flex flex-col gap-1">
                      <Link
                        href={science.link}
                        className=" text-white text-[14px] font-medium font-inherit w-36  hover:font-bold"
                      >
                        {science.name}
                      </Link>
                      <div className="bg-[#FFF] h-[1px]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="group cursor-pointer text-cyan-950 h-24 flex items-center text-base font-bold font-['Inter']  leading-relaxed tracking-wide hover:text-red-500">
                <Link href="/media-center" className="uppercase ">
                  Media Center
                </Link>
                <div className=" bg-red-600 px-4 pb-4 pt-6 absolute top-[6rem]   flex flex-col gap-1 invisible group-hover:visible">
                  {hoverData.mediacenter.map((mediacenter) => (
                    <div className="flex flex-col gap-1">
                      <Link
                        href={mediacenter.link}
                        className=" text-white text-[14px] font-medium font-inherit hover:font-bold "
                      >
                        {mediacenter.name}
                      </Link>
                      <div className="bg-[#FFF] h-[1px]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className="absolute top-[6rem] left-0 w-[100%] lg:hidden">
          <ResponsiveNavbar />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default BottomNavbar;
