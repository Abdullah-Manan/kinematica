import React from "react";
import img1 from "../../../public/assets/home/product/img1.png";
import img2 from "../../../public/assets/home/product/img2.png";
import img3 from "../../../public/assets/home/product/img3.png";
import img4 from "../../../public/assets/home/product/img4.png";
import img5 from "../../../public/assets/home/product/img5.png";
import Image from "next/image";

function Products() {
  const productData = [
    {
      id: 1,
      img: img4,
      model: "MT 5100 S2",
    },
    {
      id: 2,
      img: img2,
      model: "RT 2",
    },
    {
      id: 3,
      img: img3,
      model: "PT 2500 E",
    },
    {
      id: 4,
      img: img1,
      model: "MB 950 S",
    },
    {
      id: 5,
      img: img5,
      model: "MT-VP Series",
    },
  ];

  return (
    <div className="main-container pt-2 pb-10">
      <div className="top-part">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-[#00404c] text-[21px] font-bold uppercase">
            Products
          </h1>
          <p className="text-[#00404c] text-[17px] font-normal">
            Our solutions for laboratories, production and pilot plants
          </p>
        </div>
      </div>
      <div className="Second-Part grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 lg:px-12 ">
        {productData.map((product) => (
          <div
            className="flex flex-col justify-center items-center"
            key={product.id}
          >
            <Image src={product.img} className="" />
            <button className="uppercase w-[90%] mt-5 px-8 py-2 text-[#00404C] text-[17px] border border-[#00404C] font-bold hover:bg-[#00404C]  hover:text-white">
              {product.model}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
