import React from "react";
// import Products from "../productos/components/Products";
import AppCarousel from "@/components/AppCarousel";
import ButtonIU from "@/components/buttonIU/ButtonIU";

export default function page() {
  return (
    <div className="">
      <h1 className="text-black text-2xl font-sans ">
        Bienvenido de nuevo Jose!
      </h1>
      <p className="font-sans text-2xl font-light">Panel de administrador</p>

      <div className="mt-5 mb-5">
        <ButtonIU>Crear nueva orden</ButtonIU>
      </div>
      <div className="p-5 w-[50rem] shadow-2xl rounded-md">
        <AppCarousel />
      </div>
    </div>
  );
}
