import Link from "next/link";
import React from "react";

export default function AllBrands() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <img
          className="w-64 h-36 fixed rounded-xl"
          src="logoAdidas.jpeg"
          alt="LogoAdidas "
        />
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
      {/* <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <Link href={"/productos/gucci"}>
          <div className="flex justify-center items-center bg-orange-500 w-24 h-11">
            <h1 className="text-center">GucciPage</h1>
          </div>
        </Link>
      </div>
      <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <Link href={"/productos/lacoste"}>
          <div className="flex justify-center items-center bg-orange-500 w-24 h-11">
            <h1 className="text-center">Lacoste</h1>
          </div>
        </Link>
      </div>
      <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <Link href={"/productos/nike"}>
          <div className="flex justify-center items-center bg-orange-500 w-24 h-11">
            <h1 className="text-center">Nike</h1>
          </div>
        </Link>
      </div>
      <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <Link href={"/productos/oversize"}>
          <div className="flex justify-center items-center bg-orange-500 w-24 h-11">
            <h1 className="text-center">Oversize</h1>
          </div>
        </Link>
      </div>
      <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <Link href={"/productos/polo"}>
          <div className="flex justify-center items-center bg-orange-500 w-24 h-11">
            <h1 className="text-center">Polo</h1>
          </div>
        </Link>
      </div>
      <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <Link href={"/productos/puma"}>
          <div className="flex justify-center items-center bg-orange-500 w-24 h-11">
            <h1 className="text-center">Puma</h1>
          </div>
        </Link>
      </div>
      <div className="bg-slate-400 w-64 h-36 rounded-xl flex justify-center items-center">
        <Link href={"/productos/reebok"}>
          <div className="flex justify-center items-center bg-orange-500 w-24 h-11">
            <h1 className="text-center">Reebok</h1>
          </div>
        </Link>
      </div> */}
    </div>
  );
}
