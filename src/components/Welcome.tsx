// import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <div className="fixed top-0 left-0 bg-[#080B0C] h-[calc(100vh-0px)] 2xl:w-[82rem] xl:w-[52rem]  p-12 ">
      <div className="flex flex-col justify-center items-center text-white gap-8 rounded-[30px] welcome h-full shadow-xl">
        <Image src="/logoBlanco.png" alt="logoBlanco" width={80} height={90} />
        <h1 className="relative text-2xl md:text-3xl 2xl:text-4xl xl:text-5xl text-white text-shadow-lg font-bold animate-fadeIn">
          Bienvenido a SoftInventory
        </h1>
        <p className="xl:text-3xl">Comienza a vender!</p>
      </div>
    </div>
  );
}
