import Link from "next/link";
import React from "react";

function TextContainer() {
  return (
    <div>
      <div className="lg:w-[68%] md:w-[75%]  w-[95%] mx-auto">
        <div className=" text-[#003F4A] font-light text-[17px] py-20 leading-relaxed">
          <span className="text-[#003F4A] font-bold text-[17px]">
            Due to a cyber incident
          </span>
          , our ICT systems are currently only available to a very limited
          extent.
          <br />
          This is causing delays in communication with you.
          <br />
          Our experts are working hard to resolve the problem. We are doing
          everything we can to get our ICT systems up and running again as soon
          as possible. In the meantime, we are at your disposal at
          <Link
            href="/"
            className="text-red-500 hover:text-[#003F4A]  hover:underline"
          >
            info@kinematica.ch
          </Link>
          . We apologise for any inconvenience this may cause.
          <br />
          Thank you for you patience. <br />
          Wolfgang Niens
        </div>
        <div className="text-[#003F4A] font-light text-[17px] py-20 leading-relaxed">
          <h1 className="text-[#003F4A] font-bold text-[17px]">
            Discover Swiss-made dispersing solutions. Since 1962.
          </h1>
          At Kinematica, our core values of uncompromising quality, in-depth
          expertise, and continuous innovation drive our work. With meticulous
          attention to detail, transparent processes, and a genuine consultancy
          approach, we provide tailor-made solutions for every application,
          including the most challenging ones. Experience our commitment to
          excellence and customized solutions for your needs.
        </div>
      </div>
      <div className="bg-gray-400 h-[1px] mb-4 lg:mx-16  mx-8"></div>
    </div>
  );
}

export default TextContainer;
