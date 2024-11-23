"use client";

import React from "react";

import { HandleCancel } from "@/interfaces/typesModal";

function FormUploaderExcel({ excelModalForm, onClose, readFileCsv }: HandleCancel) {

  if (!excelModalForm) return <></>; 

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-[#0d1111] p-10 mt-5 rounded-md relative">
        <button
          onClick={() => onClose()}
          className="absolute top-2 right-2 text-white hover:text-red-500 focus:outline-none w-8 h-8 flex items-center justify-center"
          aria-label="Cerrar"
        >
          X
        </button>
        <h2 className="text-white text-[25px] text-center font-sans mb-6">
          Agrega un producto
        </h2>
        <div className="mb-4">
          <label
            htmlFor="excel-file"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Seleccionar archivo Excel
          </label>
          <input
            type="file"
            id="excel-file"
            accept=".csv"
            onChange={readFileCsv}
            className="block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-[#F97300] file:text-white
            hover:file:bg-[#f97000dc]"
          />
        </div>
        {/* {file && (
          <p className="mb-4 text-sm text-gray-300">
            Archivo seleccionado: 
          </p>
        )}
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={`w-full h-[38px] flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F97300] hover:bg-[#f97000dc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F97300] ${
            (!file || uploading) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {uploading ? "Subiendo..." : "Subir Archivo"}
        </button>
        {uploadStatus && (
          <div
            className={`mt-4 p-3 rounded-md ${
              uploadStatus === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {uploadStatus === "success" ? "📂" : "⚡"}
            {" " + statusMessage}
          </div>
        )} */}
      </div>
    </div>
  );
}

export default FormUploaderExcel;
