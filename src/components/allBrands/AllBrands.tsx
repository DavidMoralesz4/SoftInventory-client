/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function AllBrands() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/adidas"}>
          <div className="flex justify-center items-center w-32 rounded-md h-11 relative">
            <img
              className="w-32 h-11 rounded-md"
              src="adidasLetras.jpg"
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/gucci"}>
          <div className="flex justify-center items-center w-36 rounded-md h-11 relative bg-white">
            <img
              className="w-32 h-8 rounded-md"
              src="gucciLetras.png"
              alt="gucciLetras"
            />
          </div>
        </Link>
      </div>
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/lacoste"}>
          <div className="flex justify-center items-center w-36 rounded-md h-11 relative bg-white">
            <img
              className="w-36 h-8 rounded-md"
              src="lacosteLetras02.png"
              alt="lacosteLetras"
            />
          </div>
        </Link>
      </div>
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/nike"}>
          <div className="flex justify-center items-center w-36 rounded-md h-11 relative bg-white">
            <img
              className="w-36 h-16 rounded-md"
              src="nike.png"
              alt="logoNike"
            />
          </div>
        </Link>
      </div>
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/oversize"}>
          <div className="flex justify-center items-center w-36 rounded-md h-11 relative bg-white">
            <img
              className="w-36 h-16 rounded-md"
              src="oversizeLogo.webp"
              alt="oversizeLogo"
            />
          </div>
        </Link>
      </div>
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/polo"}>
          <div className="flex justify-center items-center w-36 rounded-md h-11 relative bg-white">
            <img
              className="w-36 h-24 rounded-md"
              src="logoPolo04.png"
              alt="poloLogo"
            />
          </div>
        </Link>
      </div>
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/puma"}>
          <div className="flex justify-center items-center w-36 rounded-md h-11 relative">
            <img
              className="w-24 h-16 rounded-md"
              src="pumaLogo.jpg"
              alt="pumaLogo"
            />
          </div>
        </Link>
      </div>
      <div className="bg-white w-64 h-36 rounded-xl flex justify-center items-center hover:bg-opacity-35">
        <Link href={"/productos/reebok"}>
          <div className="flex justify-center items-center w-36 rounded-md h-8 relative">
            <img
              className="w-32 h-32 rounded-md"
              src="reebokLogo.jpg"
              alt="reebokLogo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
