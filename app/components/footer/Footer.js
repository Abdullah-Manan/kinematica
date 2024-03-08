import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerlogo from "../../../public/assets/footer/footer-logo.svg";
import insta from "../../../public/assets/footer/insta.png";
import linkedin from "../../../public/assets/footer/linkedin.png";
import facebook from "../../../public/assets/footer/facebook.png";
import youtube from "../../../public/assets/footer/youtube.png";

function Footer() {
  const footerdata = {
    kinematica: [
      {
        name: "Werkstrasse 7 c- d",
        link: "/",
      },
      {
        name: "6102 Malters",
        link: "/",
      },
      {
        name: "Switzerland",
        link: "/",
      },
      {
        name: "info@kinematica.ch",
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
    ambassador: [
      {
        name: "Log In",
        link: "/",
      },
    ],
    aboutUs: [
      {
        name: "History",
        link: "/",
      },
      {
        name: "Missions / Value",
        link: "/",
      },
      {
        name: "Team",
        link: "/",
      },
      {
        name: "Newsroom",
        link: "/",
      },
      {
        name: "Jobs",
        link: "/",
      },
    ],
    contact: [
      {
        name: "Locations",
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
    contact: [
      {
        name: "Locations",
        link: "/",
      },
      {
        name: "Contact Form",
        link: "/",
      },
    ],
    fqa: [],
  };

  return (
    <div className=" ">
      <div className=" w-full h-3.5  flex s">
        <div className="flex-grow h-3.5  bg-cyan-500" />
        <div className="flex-grow h-3.5  bg-yellow-500" />
        <div className="flex-grow h-3.5  bg-zinc-500" />
        <div className="flex-grow h-3.5  bg-red-600" />
      </div>
      <div className="w-full  px-24 py-10 bg-cyan-950  gap-10 md:justify-between md:flex-row md:items-start flex flex-col justify-center items-center flex-grow">
        <div className="">
          <Link href="/" className="">
            <Image src={footerlogo} alt="logo" className="h-11 w-11" priority />
          </Link>
          <div className="flex flex-col mt-4">
            <Link
              href="/"
              className="text-white text-lg font-semibold font-inherit"
            >
              Kinematica AG
            </Link>
            <div className="flex  flex-col gap-1">
              {footerdata.kinematica.map((kinematica) => (
                <Link
                  href={kinematica.link}
                  key={kinematica.name}
                  className="text-white text-[17px] font-light font-inherit  "
                >
                  {kinematica.name}
                </Link>
              ))}
            </div>
          </div>

          <div className=" flex gap-1  mt-4">
            <Link href="/">
              <Image src={facebook} alt="facebook" priority />
            </Link>
            <Link href="/">
              <Image src={linkedin} alt="linkedin" priority />
            </Link>
            <Link href="/">
              <Image src={youtube} alt="youtube" priority />
            </Link>
            <Link
              href="/"
              className=" w-8 rounded-2xl bg-[#FFF] flex justify-center  items-center"
            >
              <Image src={insta} alt="instagram" priority />
            </Link>
          </div>
        </div>
        <div className=" w-1/2  gap-4 justify-between hidden lg:flex">
          <div className=" flex flex-col gap-2">
            <div className="">
              <div className="flex flex-col">
                <Link
                  href="service"
                  className="text-white text-lg font-semibold font-inherit uppercase"
                >
                  Service
                </Link>
                <div className="flex  flex-col gap-1">
                  {footerdata.services.map((services) => (
                    <Link
                      href={services.link}
                      key={services.name}
                      className="text-white text-[17px] font-light font-inherit  "
                    >
                      {services.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <Link
                  href="/science"
                  className="text-white text-lg font-semibold font-inherit uppercase"
                >
                  Science
                </Link>
                <div className="flex  flex-col gap-1">
                  {footerdata.science.map((science) => (
                    <Link
                      href={science.link}
                      key={science.name}
                      className="text-white text-[17px] font-light font-inherit  "
                    >
                      {science.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-white text-lg font-semibold font-inherit uppercase"
              >
                Industries
              </Link>
              <div className="flex  flex-col gap-1">
                {footerdata.industries.map((industries) => (
                  <Link
                    href={industries.link}
                    key={industries.name}
                    className="text-white text-[17px] font-light font-inherit  "
                  >
                    {industries.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-white text-lg font-semibold font-inherit uppercase"
              >
                Ambassador
              </Link>
              <div className="flex  flex-col gap-1">
                {footerdata.ambassador.map((ambassador) => (
                  <Link
                    href={ambassador.link}
                    key={ambassador.name}
                    className="text-white text-[17px] font-light font-inherit  "
                  >
                    {ambassador.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-white text-lg font-semibold font-inherit uppercase"
              >
                About Us
              </Link>
              <div className="flex  flex-col gap-1">
                {footerdata.aboutUs.map((aboutUs) => (
                  <Link
                    href={aboutUs.link}
                    key={aboutUs.name}
                    className="text-white text-[17px] font-light font-inherit  "
                  >
                    {aboutUs.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-white text-lg font-semibold font-inherit uppercase"
              >
                Contact
              </Link>
              <div className="flex  flex-col gap-1">
                {footerdata.contact.map((contact) => (
                  <Link
                    href={contact.link}
                    key={contact.name}
                    className="text-white text-[17px] font-light font-inherit  "
                  >
                    {contact.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-white text-lg font-semibold font-inherit uppercase"
              >
                Faq
              </Link>
            </div>
          </div>
        </div>
        <div className="  ">
          <div className="flex flex-col gap-3">
            <p className="w-44 h-6 text-white text-base font-semibold font-inherit leading-relaxed">
              Choose your language
            </p>
            <select className="w-80 h-10 px-4 py-px border border-white focus:outline-none text-white text-[17px] font-bold    bg-[#00404C] justify-center items-center gap-64 ">
              <option
                value="english"
                className=" text-white text-[17px] font-light"
              >
                English
              </option>
              <option
                value="english"
                className=" text-white text-[17px] font-light"
              >
                German
              </option>
              <option
                value="english"
                className=" text-white text-[17px] font-light"
              >
                Chinese
              </option>
              <option
                value="english"
                className=" text-white text-[17px] font-light"
              >
                USA
              </option>
            </select>
            <button className="uppercase  w-80 h-10 text-center bg-white text-cyan-950 text-base font-bold font-inherit  ">
              Want to Become anAmbassador ?
            </button>
          </div>
          <div className=" md:flex flex-col mt-36  hidden">
            <Link
              href="/"
              className="w-28 h-6 text-white text-base font-bold font-inherit uppercase"
            >
              SALES TERMS
            </Link>
            <Link
              href="/"
              className="w-48 h-6 text-white text-base font-bold font-inherit uppercase"
            >
              IMPRINT / DISCLAIMER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
