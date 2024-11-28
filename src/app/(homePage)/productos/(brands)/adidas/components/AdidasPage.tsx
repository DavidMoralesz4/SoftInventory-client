"use client";

import React, { useState, useContext } from "react";
import { Product } from "@/interfaces/typesModal";
import SearchBar from "@/components/searchBar/SearchBar";
import Link from "next/link";
import { AppContext } from "@/context/modalContext";
import { TypesModal } from "@/interfaces/typesModal";
import AdidasCards from "./AdidasCards";
import ButtonIU from "@/components/buttonIU/ButtonIU";
import FormUploaderExcel from "@/components/form-uploader-excel/FormUploaderExcel";
import axios from "axios";

export default function AdidasPage() {
  // const [products, setProducts] = useState<Product[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  
  const { excelModalForm, onClose, setExcelModalForm } = useContext(
    AppContext
  ) as TypesModal;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if(!file) {
      setMessage("Por favor seleciona un archivo CSV.")
      return
    }
    
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = axios.post("http://localhost:4001/api/brand/6747a0d7fcae916239798b0d/products/csv", formData)
      setMessage(response.data.message)
    } catch (error){
      console.error("Ha ocurrido un error", error)
    } 
  }

  const readFileCsv = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files[0]){
      setFile(event.target.files[0])
    }

  }

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
        {/* {products.map((product, index) => (
          <AdidasCards
            key={index}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            stock={product.stock}
            price={product.price}
            size={product.size}
          />
        ))} */}
      </div>
      <FormUploaderExcel
        onClose={onClose}
        excelModalForm={excelModalForm}
        readFileCsv={readFileCsv}
      />
    </>
  );
}
