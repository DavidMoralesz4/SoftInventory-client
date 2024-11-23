"use client";

import Papa from "papaparse";
import { Product } from "@/interfaces/typesModal";
import SearchBar from "@/components/searchBar/SearchBar";
import Link from "next/link";
import { AppContext } from "@/context/modalContext";
import { TypesModal } from "@/interfaces/typesModal";
import React, { useState, useContext } from "react";
import AdidasCards from "./AdidasCards";
import ButtonIU from "@/components/buttonIU/ButtonIU";
import FormUploaderExcel from "@/components/form-uploader-excel/FormUploaderExcel";

export default function AdidasPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const { excelModalForm, onClose, setExcelModalForm } = useContext(
    AppContext
  ) as TypesModal;

  const readFileCsv = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      Papa.parse<Product>(file, {
        header: true,
        skipEmptyLines: true,
        complete: (response) => {
          setProducts(response.data);
        },
        error: (err) => {
          console.error("Error al leer el archivo:", err);
        },
      });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center p-2 mb-14">
        <Link href={"/productos"} className="font-sans text-black">
          Volver
        </Link>
        <SearchBar />
        <div>
          <ButtonIU onClick={() => setExcelModalForm(true)}>
            Subir productos
          </ButtonIU>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <AdidasCards
            key={index}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            stock={product.stock}
            price={product.price}
            size={product.size}
          />
        ))}
      </div>
      <FormUploaderExcel
        onClose={onClose}
        excelModalForm={excelModalForm}
        readFileCsv={readFileCsv}
      />
    </>
  );
}
