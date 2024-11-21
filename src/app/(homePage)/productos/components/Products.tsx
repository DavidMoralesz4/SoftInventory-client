"use client";

import AllBrands from "@/components/allBrands/AllBrands";

// import AppModal from "@/components/modal/Modal";
// import Papa from "papaparse";
// import { AppContext } from "@/context/modalContext";
// import ButtonIU from "@/components/buttonIU/ButtonIU";
// import { useContext, useState } from "react";
// import { Product, TypesModal } from "@/interfaces/typesModal";

export default function Products() {

  return (
    <>
      <div className="flex-col gap-5 xl:flex justify-between pb-6">
        <h1 className="text-3xl font-sans">productos</h1>
        
        <AllBrands/>
      </div>
    </>
  );
}


