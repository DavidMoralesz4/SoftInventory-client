import { IProducts } from "@/interfaces/IProducts";
import React from "react";


export default function Card({
  image_url,
  name,
  description,
  talla,
  price,
  stock,
}: IProducts) {
  const maxLength: number = 15
  const truncatedDescription = description.length > maxLength 
  ? `${description.slice(0, maxLength)}...` 
  : description;


  return (
    <div className="flex flex-col  justify-center w-[150px] sm:w-[200px] h-[260px] cursor-pointer">
      <div className="flex justify-center items-center  h-40 ">
        <img src={image_url} alt={name} className="rounded-lg" />
      </div>

      <div className="flex-col  mt-7 ">
        <div className="flex justify-between items-center">
          <strong className="text-gray-950 font-sans text-[16px]">
            {name}
          </strong>
          <p className="font-semibold font-sans">${price}</p>
        </div>
        <div className=" flex justify-between items-center">
          <p className="text-gray-700 text-[13px]  font-sans line-clamp-2">{truncatedDescription}</p>
          <p className="font-semibold font-sans">T{talla}</p>
          <p className=" font-sans text-[#c55a02] text-[13px]">Und {stock}</p>
        </div>
      </div>
    </div>
  );
}
