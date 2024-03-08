"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TopNavbar() {
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const data = {
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
        name: "team",
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
  };

  const hanldeSearch = () => {
    setSearch(!search);
  };
  return (
    <>
      <div className="w-full h-10  bg-[#ebebeb]  items-center  hidden lg:flex">
        <div className="   w-full h-10 bg-gray-200  flex justify-between lg:px-24 md:px-16 ">
          <div className=" h-10 items-center justify-center  flex gap-6 ">
            <div className=" h-6 text-[#00404C] text-base font-light font-inherit  ">
              <Link href="/">Deutsch</Link>
            </div>

            <div className=" h-6 text-[#00404C] text-base font-light font-inherit ">
              <Link href="/">English</Link>
            </div>
            <div className=" h-6 text-[#00404C] text-base font-light font-inherit ">
              <Link href="/">中國</Link>
            </div>
            <div className=" h-6 text-[#00404C] text-base font-light  font-inherit ">
              <Link href="/">USA</Link>
            </div>
          </div>
          <div className=" h-10 justify-center items-center gap-4 flex">
            <div className=" h-10  flex items-center group cursor-pointer hover:text-red-700 text-cyan-950 text-base font-light font-['Inter'] leading-relaxed tracking-wide relative">
              <Link href="/">Ambassador</Link>
              <div className=" bg-red-600 z-20 px-4 pb-4 pt-6 absolute top-[2.5rem] flex flex-col gap-1 invisible group-hover:visible ">
                {data.ambassador.map((ambassador) => (
                  <div className="flex flex-col gap-1 z-50">
                    <Link
                      href={ambassador.link}
                      className=" text-white text-[14px] w-44 font-medium font-inherit hover:font-bold "
                    >
                      {ambassador.name}
                    </Link>
                    <div className="bg-[#FFF] h-[1px]"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" h-10 flex items-center hover:text-red-700 group cursor-pointer text-cyan-950 text-base font-light font-['Inter'] leading-relaxed tracking-wide">
              <Link href="/">About us</Link>
              <div className=" bg-red-600 z-20  px-4 pb-4 pt-6 absolute top-[2.5rem] flex flex-col gap-1 invisible group-hover:visible ">
                {data.aboutUs.map((aboutUs) => (
                  <div className="flex flex-col gap-2 z-50">
                    <Link
                      href={aboutUs.link}
                      className=" text-white text-[14px] w-44 font-medium font-inherit hover:font-bold "
                    >
                      {aboutUs.name}
                    </Link>
                    <div className="bg-[#FFF] h-[1px]"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" h-10 flex items-center hover:text-red-700 group cursor-pointer text-cyan-950 text-base font-light font-['Inter'] leading-relaxed tracking-wide">
              <Link href="/">Contact</Link>
              <div className=" bg-red-600 z-20 px-4 pb-4 pt-6 absolute top-[2.5rem] flex flex-col gap-1 invisible group-hover:visible ">
                {data.contact.map((contact) => (
                  <div className="flex flex-col gap-1 z-50">
                    <Link
                      href={contact.link}
                      className=" text-white text-[14px] font-medium font-inherit hover:font-bold w-32"
                    >
                      {contact.name}
                    </Link>
                    <div className="bg-[#FFF] h-[1px]"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" h-10 flex hover:text-red-700 items-center group cursor-pointer text-cyan-950 text-base font-light font-['Inter'] leading-relaxed tracking-wide">
              <Link href="/">FAQ</Link>
            </div>
            <div className=" h-4 relative  flex-col justify-start items-start flex text-base font-light font-['Inter']" />
            <button href="/" onClick={hanldeSearch}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-cyan-950 hover:text-red-700"
              />
            </button>
          </div>
        </div>
      </div>
      {search && (
        <div className="w-full h-28 bg-[#D31316] flex justify-center items-center">
          <div className="bg-[#D72B2E]  py-1 px-4 border-white ">
            <input
              type="text"
              placeholder="Search"
              className="w-[50rem] bg-[#D72B2E] focus:outline-none border-none rounded text-white h-8"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-white" />
          </div>
        </div>
      )}
    </>
  );
}

export default TopNavbar;
