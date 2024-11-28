"use client";

import React, { useState, useContext, useEffect } from "react";
import { Product } from "@/interfaces/typesModal";
import SearchBar from "@/components/searchBar/SearchBar";
import Link from "next/link";
import { AppContext } from "@/context/modalContext";
import { TypesModal } from "@/interfaces/typesModal";
import AdidasCards from "./AdidasCards";
import ButtonIU from "@/components/buttonIU/ButtonIU";
import FormUploaderExcel from "@/components/form-uploader-excel/FormUploaderExcel";
import { asyncDataCsv, getDataProds } from "@/lib/fetchData";

export default function AdidasPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const { excelModalForm, onClose, setExcelModalForm } = useContext(
    AppContext
  ) as TypesModal;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file) {
      setMessage("Por favor selecciona un archivo CSV.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await asyncDataCsv(formData);

      console.log("Respuesta del servidor:", response);

      if (Array.isArray(response.data.brands.products)) {
        // Si la respuesta es un array entonces:
        setMessage(response.data.message || "Productos subidos correctamente."); // Y Tiro el mensaje
      } else {
        setMessage("Error: Los productos no están en formato correcto."); // Caso contrario pues: error
      }
    } catch (error) {
      setMessage("Hubo un error al subir el archivo.");
      console.error("Error al subir archivo:", error);
    }
  };

  const readFileCsv = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  /// Simepre estare consultando los products de esta marca
  useEffect(() => {
    const data = async () => {
      const result = await getDataProds();
      setProducts(result.data); // Accede correctamente a los productos
    };
    data();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-2 mb-14">
        <Link href={"/productos"} className="font-sans text-black">
          Volver
        </Link>
        <SearchBar />
        <ButtonIU onClick={() => setExcelModalForm(true)}>
          Subir productos
        </ButtonIU>
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
        handleSubmit={handleSubmit}
        message={message}
      />
    </>
  );
}
