import React from "react";
import Anuga from "../../../public/assets/home/news/Anuga.png";
import pittcon from "../../../public/assets/home/news/Pittcon.png";
import particle from "../../../public/assets/home/news/Particle.png";
import Image from "next/image";

function News() {
  const newaData = [
    {
      id: 1,
      title: "Anuga Food Tec, Cologne, Germany",
      img: Anuga,
      date: "19 March",
      text: "Anuga FoodTec is the hotspot of the worldwide food and beverage industry and its suppliers and The meeting point for visionaries and decision-makers.",
    },
    {
      id: 2,
      title: "PITTCON, Philadelphia, USA",
      img: pittcon,
      date: "24 February",
      text: "  PITTCON – Exhibition and Conference for Analytical Chemistry and Applied Spectroscopy.",
    },
    {
      id: 3,
      title: "Pharmaceutical: Wet-milling",
      img: particle,
      date: "20 December",
      text: "Advancements in pharmaceutical API particle size reduction and control.",
    },
  ];

  return (
    <div>
      <div className="max-w-[1200px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 py-3 px-3 mx-auto ">
        {newaData.map((data) => (
          <div
            key={data.id}
            className=" flex flex-col gap-2 items-start justify-between"
          >
            <h1 className="text-[#00404C] text-[22px] font-bold ">
              {data.title}
            </h1>
            <Image src={data.img} alt="" />
            <div>
              <p className="">
                <span className="text-[#00404C] font-bold text-[17px]  mr-2">
                  {data.date}
                </span>
                {data.text}
              </p>
            </div>
            <button className="uppercase mt-5 px-8 py-2 text-[#00404C] text-[17px] border border-[#00404C] font-bold hover:bg-[#00404C]  hover:text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
      <div className="bg-gray-400 h-[1px] mb-4 lg:mx-16  mx-8 mt-10"></div>
    </div>
  );
}

export default News;
