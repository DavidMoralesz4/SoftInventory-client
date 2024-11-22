"use client"

import ButtonIU from "@/components/buttonIU/ButtonIU";
import FormUploaderExcel from "@/components/form-uploader-excel/FormUploaderExcel";

import SearchBar from "@/components/searchBar/SearchBar";
import { TypesModal } from "@/interfaces/typesModal";
import Link from "next/link";
import React from "react";
import AdidasCards from "./AdidasCards";

export default function AdidasPage({ setExcelModalForm, excelModalForm, closeModalExcel }: TypesModal) {

  return (
    <>
      <div className="flex justify-between items-center">
        <Link href={"/productos"} className="font-sans text-black">
          Volver
        </Link>
        <SearchBar />
        <ButtonIU onClick={() => setExcelModalForm(true)}>
          Subir productos
        </ButtonIU>
      </div>
      <div className="relative top-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
        doloremque nemo dolorem voluptatum numquam officiis voluptatibus in
        fugiat adipisci itaque accusamus, velit ullam, quidem sed, perspiciatis
        incidunt soluta necessitatibus explicabo.
        <AdidasCards/>
      </div>
      <FormUploaderExcel
        excelModalForm={excelModalForm}
        closeModalExcel={closeModalExcel}
      />
    </>
  );
}
