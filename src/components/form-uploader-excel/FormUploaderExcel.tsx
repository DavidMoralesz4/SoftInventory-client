"use client";

import { FormUploaderExcelProps } from "@/interfaces/typesModal";
import React from "react";


const FormUploaderExcel: React.FC<FormUploaderExcelProps> = ({
  onClose,
  excelModalForm,
  readFileCsv,
  handleSubmit,
  message,
}) => {
  if (!excelModalForm) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Subir archivo CSV</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".csv"
            onChange={readFileCsv}
            className="block w-full mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Subir
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default FormUploaderExcel;