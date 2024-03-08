import React from "react";
import Link from "next/link";
function ResponsiveNavbar() {
  const data = {
    products: [
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
    fqa: [],
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

  return (
    <div className="w-[100%] h-full bg-[#00404C] px-6 pt-2 pb-8">
      <div className=" flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold  uppercase"
        >
          Products
        </Link>
        <div className="">
          {data.products.map((product) => (
            <div key={product.name} className=" flex flex-col gap-3">
              <Link
                href={product.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {product.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold uppercase"
        >
          Service
        </Link>
        <div className="">
          {data.services.map((services) => (
            <div key={services.name} className=" flex flex-col gap-3">
              <Link
                href={services.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {services.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold  uppercase"
        >
          Industries
        </Link>
        <div className="">
          {data.industries.map((industries) => (
            <div key={industries.name} className=" flex flex-col gap-3">
              <Link
                href={industries.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {industries.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold uppercase"
        >
          Ambassador
        </Link>
        <div className="">
          {data.ambassador.map((ambassador) => (
            <div key={ambassador.name} className=" flex flex-col gap-3">
              <Link
                href={ambassador.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {ambassador.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold uppercase"
        >
          {" "}
          About Us
        </Link>
        <div className="">
          {data.aboutUs.map((aboutUs) => (
            <div key={aboutUs.name} className=" flex flex-col gap-3">
              <Link
                href={aboutUs.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {aboutUs.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold uppercase"
        >
          Contact
        </Link>
        <div className="">
          {data.contact.map((contact) => (
            <div key={contact.name} className=" flex flex-col gap-3">
              <Link
                href={contact.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {contact.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold  uppercase"
        >
          fqa
        </Link>
      </div>
      <div className=" flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold  uppercase"
        >
          Science
        </Link>
        <div className="">
          {data.science.map((science) => (
            <div key={science.name} className=" flex flex-col gap-3">
              <Link
                href={science.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {science.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <Link
          href="/"
          className="text-[#FFFFFF]  text-lg font-semibold  uppercase"
        >
          Media Center
        </Link>
        <div className="">
          {data.mediacenter.map((mediacenter) => (
            <div key={mediacenter.name} className=" flex flex-col gap-3">
              <Link
                href={mediacenter.link}
                className="text-white text-base font-light font-['Azo Sans'] leading-relaxed"
              >
                {mediacenter.name}
              </Link>
              <div className="bg-[#ffffff33]  h-[1px] mb-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResponsiveNavbar;
